"use client";
import React from "react";

export default function SREPracticesSafeReleasesChangeManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      <main className="p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto">
        <section className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl sm:rounded-2xl p-6 shadow-lg text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Safe Releases & Change Management</h1>
          <p className="text-indigo-100 text-base sm:text-lg md:text-xl">
            Learn SRE release practices that reduce risk and keep services stable during change.
          </p>
        </section>

        <section className="grid gap-4 mt-6">
          <div className="bg-gray-800/80 rounded-3xl p-6 shadow-xl text-indigo-100">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Change controls</h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              <li>Use progressive rollouts, feature flags, and automated rollback.</li>
              <li>Ensure change reviews, approvals, and communication are in place.</li>
              <li>Measure release impact with observability and error budgets.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
