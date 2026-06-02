"use client";
import React from 'react';

export default function InstrumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12">
      <main className="w-full max-w-4xl p-6">
        <section className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl p-6 mb-6 shadow-lg text-center">
          <h1 className="text-3xl font-extrabold text-white mb-2">Instrumentation</h1>
          <p className="text-indigo-100">Best practices for adding metrics and instrumentation to your services.</p>
        </section>

        <section className="bg-gray-800/80 rounded-3xl p-6 shadow-xl text-indigo-100">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Getting started</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
            <li>Pick key user journeys to instrument.</li>
            <li>Define SLIs and how you'll collect metrics.</li>
            <li>Instrument critical code paths with counters and histograms.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
