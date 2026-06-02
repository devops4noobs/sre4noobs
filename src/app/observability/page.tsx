"use client";
import React from "react";

export default function ObservabilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      <main className="p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto">
        <section className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl sm:rounded-2xl p-6 mb-6 shadow-lg text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Observability</h1>
          <p className="text-indigo-100 text-base sm:text-lg md:text-xl">
            Learn how to instrument services with metrics, logs and traces to gain actionable visibility into system behavior.
          </p>
        </section>

        <section className="grid gap-4 mb-6">
          <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-6 shadow-xl text-indigo-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4">What you'll practice</h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              <li>Design meaningful SLIs and metrics for a service.</li>
              <li>Add tracing to a critical request path and identify latency hotspots.</li>
              <li>Create logs and dashboards that help triage incidents faster.</li>
              <li>Correlate traces, logs and metrics to build an actionable observability playbook.</li>
            </ul>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-6 shadow-xl text-indigo-100">
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">Quick exercise</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
              <li>Pick a user-facing endpoint in your service.</li>
              <li>Define a primary SLI (e.g. p95 latency or success rate).</li>
              <li>Add two metrics and one trace span to instrument the endpoint.</li>
              <li>Build a dashboard with a latency chart and error-rate alert.</li>
            </ol>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-6 shadow-xl text-indigo-100">
            <h3 className="text-xl font-semibold text-yellow-300 mb-3">Resources</h3>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              <li><a href="https://opentelemetry.io/" target="_blank" rel="noreferrer" className="text-yellow-300 underline">OpenTelemetry</a> — a vendor-neutral observability standard.</li>
              <li><a href="https://prometheus.io/" target="_blank" rel="noreferrer" className="text-yellow-300 underline">Prometheus</a> — metrics and alerting.</li>
              <li><a href="https://zipkin.io/" target="_blank" rel="noreferrer" className="text-yellow-300 underline">Zipkin</a> — distributed tracing basics.</li>
            </ul>
          </div>
        </section>

        <section className="grid gap-4 mb-6">
          <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-6 shadow-xl text-indigo-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4">Why Observability</h2>
            <p className="text-sm sm:text-base">Observability helps teams understand unknown unknowns by making internal state visible through metrics, logs and traces. It enables faster root cause analysis, reduces mean time to recovery (MTTR), and drives better product decisions by surfacing user-impacting issues early.</p>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-6 shadow-xl text-indigo-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4">Monitoring vs Observability</h2>
            <p className="text-sm sm:text-base">Monitoring answers known questions with predefined alerts and dashboards (Is the service up?), while observability provides the signals needed to ask new questions when unexpected behavior occurs (Why is latency rising for this endpoint?). Both are complementary — monitoring alerts you, observability helps you investigate.</p>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-6 shadow-xl text-indigo-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4">The Three Pillars</h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              <li><strong>Metrics:</strong> Aggregated numerical data over time (e.g., latency histograms, error rates).</li>
              <li><strong>Logs:</strong> Immutable event records for troubleshooting and forensics.</li>
              <li><strong>Traces:</strong> Distributed request traces that show the path and timing across services.</li>
            </ul>
          </div>
        </section>

        <p className="text-gray-400 text-xs mt-6 text-center">Last updated: May 31, 2026</p>
      </main>
    </div>
  );
}
