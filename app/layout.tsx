import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NedilAI",
  description:
    "Break language barriers with NedilAI. Brief your AI, confirm intent, and let it lead live conversations in any language with real-time translation.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
