import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tokyo — A Guide for the Unhurried",
  description: "Eight neighborhoods. Countless hours. No itinerary required.",
  openGraph: {
    title: "Tokyo — A Guide for the Unhurried",
    description: "Eight neighborhoods. Countless hours. No itinerary required.",
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
