import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rhonaiye Felix | Full-Stack Engineer",
  description:
    "Full-stack software engineer building scalable web products with AI-accelerated delivery, cloud-ready architecture, and reliable CI/CD execution.",
  icons: {
    icon: "/My-logo.png",
    shortcut: "/My-logo.png",
    apple: "/My-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
