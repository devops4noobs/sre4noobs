"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

 const links = [
  { href: "/", label: "🏠 Home", prefetch: true },
  { href: "/principles", label: "📘 SRE Principles", prefetch: true },
  { href: "/postmortem", label: "🧾 Postmortem Analysis", prefetch: true },
  { href: "/rca", label: "🕵️ Root Cause Analysis", prefetch: true },
  { href: "/incidents", label: "🚨 Incident Response", prefetch: true },
  { href: "/pagerduty", label: "🔔 PagerDuty Integration", prefetch: true },
  { href: "/aws", label: "☁️ AWS", prefetch: true },
  { href: "/signalfx", label: "📊 SignalFx", prefetch: true },
  { href: "/automations", label: "🤖 Automations", prefetch: true },
  { href: "/kubernetes", label: "☸️ Kubernetes", prefetch: true },
];


  return (
    <aside className="w-64 p-6 border-r border-gray-700 bg-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-indigo-400">SRE Topics</h1>
      <nav className="space-y-2 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2 rounded-md ${
              pathname === link.href
                ? "bg-indigo-700 text-white font-semibold"
                : "hover:text-indigo-400 text-gray-300"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
