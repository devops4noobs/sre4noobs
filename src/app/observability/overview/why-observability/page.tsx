"use client";
import React from "react";

export default function WhyObservabilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12">
      <main className="w-full max-w-4xl p-6">
        <section className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl p-6 mb-6 shadow-lg text-center">
          <h1 className="text-3xl font-extrabold text-white mb-2">Why Observability</h1>
          <p className="text-indigo-100">Observability helps teams understand unknown unknowns by making internal state visible through metrics, logs and traces. It enables faster root cause analysis, reduces mean time to recovery (MTTR), and drives better product decisions by surfacing user-impacting issues early.</p>
        </section>

        <section className="bg-gray-800/80 rounded-3xl p-6 shadow-xl text-indigo-100">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Practical benefits</h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>Faster incident investigation and reduced MTTR.</li>
            <li>Better capacity planning and performance optimization.</li>
            <li>Improved product decisions through signal-driven insights.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
