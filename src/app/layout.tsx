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
      <head>
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-C635CHGZZ0"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C635CHGZZ0');
</script>
      </head>
      <body className="flex min-h-screen font-sans text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Sidebar />
        <main className="flex-1 p-10 bg-gray-900 bg-opacity-70">{children}</main>
      </body>
    </html>
  );
}
