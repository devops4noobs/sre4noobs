import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";


export const metadata: Metadata = {
  title: "SRE Learning Platform",
  description: "Learn Site Reliability Engineering from scratch.",
  keywords: ["SRE", "Site Reliability Engineering", "DevOps", "AWS", "SignalFx", "Postmortem", "Incident Management", "RCA"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="DupekYrp-ze49IupRyU1N1UvsHRooengEFtWVCXs8Uw" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C635CHGZZ0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C635CHGZZ0');
            `,
          }}
        />

      </head>
      <body className="flex min-h-screen font-sans text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        
          <Sidebar />
          <main className="flex-1 p-6 bg-gray-900 text-white ml-64  ">
            {children}
          </main>
        
      </body>
    </html>
  );
}
