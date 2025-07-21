import type { Metadata } from "next";
import * as React from 'react'; // Import React for types
import { GeistSans } from "geist/font/sans"; // Correct import
import "./globals.css";
import InteractiveLayout from "./InteractiveLayout"; // New client component

const geist = GeistSans; // Simplified, no subsets needed for Geist

export const metadata: Metadata = {
  title: "SRE4Noobs",
  description: "Site Reliability Engineering for Beginners",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased bg-gray-900 text-white">
        <InteractiveLayout>{children}</InteractiveLayout>
      </body>
    </html>
  );
}