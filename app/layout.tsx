import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NedilAI - The AI That Speaks For You",
  description:
    "Break language barriers with NedilAI. Your AI interpreter that understands your goals, speaks on your behalf in any language, and provides clear conversation summaries.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "NedilAI - The AI That Speaks For You",
    description:
      "Break language barriers with NedilAI. Your AI interpreter that understands your goals, speaks on your behalf in any language, and provides clear conversation summaries.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NedilAI - The AI That Speaks For You",
    description:
      "Break language barriers with NedilAI. Your AI interpreter that understands your goals, speaks on your behalf in any language, and provides clear conversation summaries.",
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
