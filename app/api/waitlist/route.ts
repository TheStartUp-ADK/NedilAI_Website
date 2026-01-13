import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create Supabase client lazily so misconfiguration never surfaces as a raw error to users
const getSupabaseClient = () => {
  if (!supabaseUrl || !supabaseKey) {
    console.error(
      "Supabase configuration missing. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
    return null;
  }

  return createClient(supabaseUrl, supabaseKey);
};

// Simple, strict-ish email pattern to weed out obvious bad inputs
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const supabase = getSupabaseClient();

    if (!supabase) {
      return NextResponse.json(
        {
          error:
            "We’re still setting things up behind the scenes. Please try again in a moment.",
        },
        { status: 503 }
      );
    }

    const { email } = await request.json();

    const normalizedEmail = (email ?? "").toLowerCase().trim();

    // Validate email presence + format
    if (!normalizedEmail || !emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Pre-check: does the email already exist?
    const { data: existing, error: existingError } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", normalizedEmail)
      .limit(1)
      .maybeSingle();

    if (existingError) {
      throw existingError;
    }

    if (existing) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    // Insert email into waitlist table
    const { data, error } = await supabase
      .from("waitlist")
      .insert([{ email: normalizedEmail }])
      .select();

    if (error) {
      // Fallback duplicate guard from DB constraint
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waitlist" },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json(
      { message: "Successfully joined the waitlist!", data },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error adding to waitlist:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist. Please try again." },
      { status: 500 }
    );
  }
}
