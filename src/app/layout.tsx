import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "SRE Learning Platform",
  description: "Learn Site Reliability Engineering from scratch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen font-sans text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Sidebar />
        <main className="flex-1 p-10 bg-gray-900 bg-opacity-70">{children}</main>
      </body>
    </html>
  );
}
