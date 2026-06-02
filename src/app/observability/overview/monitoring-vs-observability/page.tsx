"use client";
import React from "react";

export default function MonitoringVsObservabilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12">
      <main className="w-full max-w-4xl p-6">
        <section className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl p-6 mb-6 shadow-lg text-center">
          <h1 className="text-3xl font-extrabold text-white mb-2">Monitoring vs Observability</h1>
          <p className="text-indigo-100">Monitoring answers known questions with predefined alerts and dashboards (Is the service up?), while observability provides the signals needed to ask new questions when unexpected behavior occurs (Why is latency rising for this endpoint?). Both are complementary — monitoring alerts you, observability helps you investigate.</p>
        </section>

        <section className="bg-gray-800/80 rounded-3xl p-6 shadow-xl text-indigo-100">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Key differences</h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>Monitoring is metric-driven and rule-based; observability is signal-driven and exploratory.</li>
            <li>Monitoring detects problems; observability helps you understand and debug them.</li>
            <li>Invest in both: alerts for SLAs and signals for deep debugging.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
