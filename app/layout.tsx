import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NedilAI",
  description:
    "Break language barriers with NedilAI, The AI-Powered Real-Time Translator",
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
