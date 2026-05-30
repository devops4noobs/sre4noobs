import type { Metadata } from "next";
import * as React from 'react'; // Import React for types
// Removed problematic Geist font import (module not found). Use a simple placeholder
// for geist variable to avoid type/import errors.
import "./globals.css";
import InteractiveLayout from "./InteractiveLayout"; // New client component

const geist = { variable: "" };

export const metadata: Metadata = {
  title: "Devops4Noobs",
  description: "Site Reliability Engineering for Beginners",
  icons: {
    icon: '/logo.ico', // Path to your favicon in the public directory
  },
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