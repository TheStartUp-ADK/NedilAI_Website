"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import Link from "next/link";

// Lazy initialize Supabase client
function getSupabase(): SupabaseClient | null {
  if (typeof window === "undefined") return null;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) return null;
  return createClient(supabaseUrl, supabaseAnonKey);
}

type AuthType = "signup" | "recovery" | "email_change" | "magiclink" | null;

interface AuthState {
  type: AuthType;
  loading: boolean;
  error: string | null;
  success: boolean;
}

// Check Icon Component
const CheckIcon = () => (
  <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Error Icon Component
const ErrorIcon = () => (
  <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="w-16 h-16 border-4 border-primary-accent/30 border-t-primary-accent rounded-full animate-spin" />
);

export default function AuthCallback() {
  const [authState, setAuthState] = useState<AuthState>({
    type: null,
    loading: true,
    error: null,
    success: false,
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get the hash from the URL (Supabase sends tokens in the hash)
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const queryParams = new URLSearchParams(window.location.search);
        
        // Get the type from query params or hash
        const type = (queryParams.get("type") || hashParams.get("type")) as AuthType;
        const accessToken = hashParams.get("access_token");
        const refreshToken = hashParams.get("refresh_token");
        const errorDescription = hashParams.get("error_description") || queryParams.get("error_description");

        // Check for errors first
        if (errorDescription) {
          setAuthState({
            type: null,
            loading: false,
            error: decodeURIComponent(errorDescription),
            success: false,
          });
          return;
        }

        // If we have tokens, set the session
        if (accessToken && refreshToken) {
          const supabase = getSupabase();
          if (!supabase) {
            setAuthState({
              type,
              loading: false,
              error: "Authentication service is not configured.",
              success: false,
            });
            return;
          }
          
          // Set the session with the confirmation tokens
          // When tokens are from a confirmation link, setSession should automatically confirm the email
          const { data: sessionData, error: sessionError } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (sessionError) {
            setAuthState({
              type,
              loading: false,
              error: sessionError.message,
              success: false,
            });
            return;
          }

          // For signup type, CRITICAL: verify the email confirmation was successful
          // This is essential - the backend requires email confirmation for sign-in
          if (type === "signup") {
            // Wait a brief moment for Supabase to process the confirmation
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Get the current user to verify email is confirmed
            const { data: { user }, error: userError } = await supabase.auth.getUser();
            
            if (userError) {
              setAuthState({
                type,
                loading: false,
                error: userError.message,
                success: false,
              });
              return;
            }

            // CRITICAL CHECK: Verify email_confirmed_at is set
            // Without this, the user cannot sign in from the mobile app
            if (user) {
              if (!user.email_confirmed_at) {
                // Email is not confirmed - try refreshing the session
                const { error: refreshError } = await supabase.auth.refreshSession();
                
                // Wait again after refresh
                await new Promise(resolve => setTimeout(resolve, 500));
                
                // Check again
                const { data: { user: refreshedUser } } = await supabase.auth.getUser();
                
                if (!refreshedUser || !refreshedUser.email_confirmed_at) {
                  // Email still not confirmed - show error
                  setAuthState({
                    type,
                    loading: false,
                    error: "Email confirmation failed. The confirmation link may have expired or been used already. Please try signing up again or contact support.",
                    success: false,
                  });
                  return;
                }
              }
              
              // Email is confirmed - success!
              setAuthState({
                type,
                loading: false,
                error: null,
                success: true,
              });
              return;
            } else {
              setAuthState({
                type,
                loading: false,
                error: "Unable to verify user. Please try again.",
                success: false,
              });
              return;
            }
          }
        }

        // Handle different auth types
        if (type === "recovery") {
          // Password reset - show the form
          setAuthState({
            type: "recovery",
            loading: false,
            error: null,
            success: false,
          });
        } else if (type === "email_change") {
          // Email change confirmation - show success
          setAuthState({
            type,
            loading: false,
            error: null,
            success: true,
          });
        } else if (type === "magiclink") {
          // Magic link login - show success
          setAuthState({
            type,
            loading: false,
            error: null,
            success: true,
          });
        } else {
          // Unknown type but might still be valid
          setAuthState({
            type: null,
            loading: false,
            error: null,
            success: accessToken ? true : false,
          });
        }
      } catch (err) {
        setAuthState({
          type: null,
          loading: false,
          error: "An unexpected error occurred. Please try again.",
          success: false,
        });
      }
    };

    handleAuthCallback();
  }, []);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError(null);

    // Validate passwords
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const supabase = getSupabase();
      if (!supabase) {
        setPasswordError("Authentication service is not configured.");
        setIsSubmitting(false);
        return;
      }
      
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        setPasswordError(error.message);
        setIsSubmitting(false);
        return;
      }

      // Success - update state
      setAuthState({
        type: "recovery",
        loading: false,
        error: null,
        success: true,
      });
    } catch (err) {
      setPasswordError("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  // Get the appropriate title and message based on auth type
  const getContent = () => {
    if (authState.loading) {
      return {
        title: "Processing...",
        message: "Please wait while we verify your request.",
      };
    }

    if (authState.error) {
      return {
        title: "Something went wrong",
        message: authState.error,
      };
    }

    if (authState.type === "recovery" && !authState.success) {
      return {
        title: "Reset Your Password",
        message: "Enter your new password below.",
      };
    }

    if (authState.success) {
      switch (authState.type) {
        case "signup":
          return {
            title: "Email Confirmed!",
            message: "Your email has been verified. You can now sign in to the NedilAI app.",
          };
        case "email_change":
          return {
            title: "Email Updated!",
            message: "Your email address has been successfully changed.",
          };
        case "recovery":
          return {
            title: "Password Reset Complete!",
            message: "Your password has been successfully updated. You can now sign in with your new password.",
          };
        case "magiclink":
          return {
            title: "Signed In!",
            message: "You have been successfully signed in.",
          };
        default:
          return {
            title: "Success!",
            message: "Your request has been processed successfully.",
          };
      }
    }

    return {
      title: "Authentication",
      message: "Processing your request...",
    };
  };

  const content = getContent();

  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background gradient shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-indigo opacity-20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-navy opacity-20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-white">
            NedilAI
          </Link>
        </div>

        {/* Card */}
        <div className="glass glass-glow p-8 rounded-2xl text-center">
          {/* Status Icon */}
          <div className="flex justify-center mb-6">
            {authState.loading ? (
              <LoadingSpinner />
            ) : authState.error ? (
              <div className="text-red-400">
                <ErrorIcon />
              </div>
            ) : authState.success ? (
              <div className="text-green-400">
                <CheckIcon />
              </div>
            ) : authState.type === "recovery" ? (
              <div className="w-16 h-16 bg-gradient-indigo rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
            ) : null}
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-white mb-3">{content.title}</h1>

          {/* Message or Form */}
          {authState.type === "recovery" && !authState.success && !authState.error ? (
            <form onSubmit={handlePasswordReset} className="space-y-4 mt-6">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="New password"
                  className="w-full px-4 py-3 rounded-xl glass text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 transition-all duration-200"
                  required
                  minLength={6}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full px-4 py-3 rounded-xl glass text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 transition-all duration-200"
                  required
                  minLength={6}
                  disabled={isSubmitting}
                />
              </div>
              
              {passwordError && (
                <motion.p
                  className="text-sm text-red-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {passwordError}
                </motion.p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-accent hover:bg-primary-accent/90 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Updating..." : "Update Password"}
              </button>
            </form>
          ) : (
            <p className="text-gray-300 leading-relaxed">{content.message}</p>
          )}

          {/* Actions */}
          {!authState.loading && (authState.success || authState.error) && (
            <div className="mt-8 space-y-3">
              <p className="text-sm text-gray-400 mb-4">
                {authState.success
                  ? "You can now return to the NedilAI app to continue."
                  : "Please try again or contact support if the issue persists."}
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 glass rounded-xl hover:bg-primary-accent/20 transition-all duration-200 text-sm"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} NedilAI. All rights reserved.
        </p>
      </motion.div>
    </main>
  );
}
