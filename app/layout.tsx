import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ProgLingo",
    template: "%s · ProgLingo",
  },
  description:
    "Interactive programming practice for Python, JavaScript, React, Express, and Tailwind with a built-in code runner, hints, and solutions.",
  keywords: [
    "programming",
    "coding",
    "learn to code",
    "python",
    "javascript",
    "react",
    "express",
    "tailwind",
    "challenges",
  ],
  openGraph: {
    title: "ProgLingo",
    description:
      "Interactive programming practice across Python, JavaScript, React, Express, and Tailwind.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ProgLingo",
    description:
      "Interactive programming practice across Python, JavaScript, React, Express, and Tailwind.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
