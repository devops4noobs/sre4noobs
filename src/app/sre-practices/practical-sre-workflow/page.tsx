"use client";
import React from "react";

export default function SREPracticesPracticalWorkflowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      <main className="p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto">
        <section className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl sm:rounded-2xl p-6 shadow-lg text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Practical SRE Workflow</h1>
          <p className="text-indigo-100 text-base sm:text-lg md:text-xl">
            Learn the day-to-day SRE workflow for running reliable services from planning to operations.
          </p>
        </section>

        <section className="grid gap-4 mt-6">
          <div className="bg-gray-800/80 rounded-3xl p-6 shadow-xl text-indigo-100">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Workflow stages</h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              <li>Define reliability goals, SLIs, and SLOs.</li>
              <li>Instrument systems and monitor key signals.</li>
              <li>Respond to incidents, learn from failures, and iterate on improvements.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
