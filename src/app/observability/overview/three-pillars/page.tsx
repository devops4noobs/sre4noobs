"use client";
import React from "react";

export default function ThreePillarsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12">
      <main className="w-full max-w-4xl p-6">
        <section className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl p-6 mb-6 shadow-lg text-center">
          <h1 className="text-3xl font-extrabold text-white mb-2">The Three Pillars</h1>
          <p className="text-indigo-100">Observability is commonly described by three pillars: Metrics, Logs, and Traces. Each provides different views into system behavior and together enable comprehensive debugging and analysis.</p>
        </section>

        <section className="bg-gray-800/80 rounded-3xl p-6 shadow-xl text-indigo-100">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Pillars explained</h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li><strong>Metrics:</strong> Aggregated numerical data over time (e.g., latency histograms, error rates).</li>
            <li><strong>Logs:</strong> Immutable event records for troubleshooting and forensics.</li>
            <li><strong>Traces:</strong> Distributed request traces that show the path and timing across services.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
