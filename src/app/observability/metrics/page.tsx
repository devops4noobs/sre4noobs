"use client";
import React from 'react';

export default function MetricsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12">
      <main className="w-full max-w-4xl p-6">
        <section className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl p-6 mb-6 shadow-lg text-center">
          <h1 className="text-3xl font-extrabold text-white mb-2">Metrics</h1>
          <p className="text-indigo-100">How to design and collect useful metrics for reliability and performance.</p>
        </section>

        <section className="bg-gray-800/80 rounded-3xl p-6 shadow-xl text-indigo-100">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Design patterns</h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>Use counters for totals and histograms for latency distribution.</li>
            <li>Keep label cardinality low.</li>
            <li>Define SLI → SLO mapping early.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
