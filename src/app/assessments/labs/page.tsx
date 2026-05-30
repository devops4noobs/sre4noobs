"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const labs = [
  {
    id: 'slo-design',
    title: 'Design an SLO for a web service',
    summary: 'Choose meaningful reliability targets and define the measurement criteria for a production service.',
    steps: [
      'Select the customer-facing service and identify the most important user journey.',
      'Choose a primary SLI such as availability, latency, or error rate.',
      'Set an SLO target based on business impact and operational capacity.',
      'Document the measurement window and the error budget allowance.',
      'Write a short justification for the chosen target.',
    ],
    template: `Service: Online checkout
SLI: Successful checkout completion within 2 seconds
SLO: 99.95% success rate over a 30-day window
Error Budget: 0.05% allowed failure or latency issues
Rationale: High business impact from checkout failure; customers expect fast, reliable purchases.`,
  },
  {
    id: 'incident-checklist',
    title: 'Build an incident response checklist',
    summary: 'Create a reliable onboarding checklist to reduce confusion during an outage.',
    steps: [
      'Identify who is on call and the escalation path.',
      'List the observability tools and dashboards to check first.',
      'Define immediate containment steps and communication channels.',
      'Add criteria for declaring incident severity and notifying stakeholders.',
      'Add the post-incident review and follow-up actions.',
    ],
    template: `Incident Response Checklist
1. Alert received from PagerDuty/monitoring.
2. Confirm affected service and impact scope.
3. Notify Incident Commander and communication channels (Slack, Statuspage).
4. Collect current metrics, logs, and traces.
5. Execute containment steps (rollback, scale, failover).
6. Update stakeholders with status and ETA.
7. Track timeline and decisions in the incident log.
8. Conduct blameless postmortem after recovery.`,
  },
  {
    id: 'postmortem',
    title: 'Write a blameless postmortem',
    summary: 'Capture the facts, impacts, root causes, and concrete action items after an outage.',
    steps: [
      'Describe what happened and when it began.',
      'Summarize the impact to customers and business.',
      'List the detection, response, and mitigation timeline.',
      'Identify the root cause without assigning blame.',
      'Propose action items that improve systems or process.',
    ],
    template: `Blameless Postmortem
Title: High latency in checkout service due to cache storm
Summary: Customers experienced slow checkout for 22 minutes during peak traffic.
Impact: 8% increase in cart abandonment; 1.2% revenue loss.
Timeline: Alert at 10:03, mitigation at 10:12, recovery at 10:25.
Root Cause: Redis cache stampede after cache expiration spike.
Action Items:
- Implement cache warming and rate limiting.
- Add an alert for cache eviction storms.
- Review deployment process for cache configuration changes.`,
  },
];

export default function SreLabsPage() {
  const [activeLab, setActiveLab] = useState(labs[0].id);
  const selectedLab = labs.find((lab) => lab.id === activeLab) || labs[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      <main className="p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto">
        <section className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl sm:rounded-2xl p-6 mb-6 shadow-lg text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">SRE Labs</h1>
          <p className="text-indigo-100 text-base sm:text-lg md:text-xl">
            Hands-on exercises designed for junior SREs to practice SLO design, incident response, and blameless postmortems.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-3 mb-6">
          {labs.map((lab) => (
            <button
              key={lab.id}
              onClick={() => setActiveLab(lab.id)}
              className={`rounded-2xl p-4 text-left transition ${activeLab === lab.id ? 'bg-yellow-400 text-indigo-900 shadow-xl' : 'bg-gray-800/80 text-indigo-100 hover:bg-indigo-900/80'}`}
            >
              <h2 className="text-lg font-semibold">{lab.title}</h2>
              <p className="text-sm mt-2 text-indigo-200">{lab.summary}</p>
            </button>
          ))}
        </section>

        <section className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-6 shadow-xl">
          <div className="mb-6">
            <span className="inline-block bg-yellow-400 text-indigo-900 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide">Selected Lab</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4">{selectedLab.title}</h2>
            <p className="text-indigo-200 mt-2">{selectedLab.summary}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-gray-900/80 rounded-3xl p-5">
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">Step-by-step exercise</h3>
              <ol className="list-decimal list-inside text-indigo-100 space-y-2">
                {selectedLab.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="bg-gray-900/80 rounded-3xl p-5">
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">Template / example</h3>
              <pre className="whitespace-pre-wrap break-words text-sm text-indigo-100 bg-black/20 rounded-xl p-4 border border-gray-700">{selectedLab.template}</pre>
            </div>
          </div>
        </section>

        <section className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-6 mt-6 shadow-xl text-indigo-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4">How to use these labs</h2>
          <ul className="list-disc list-inside space-y-3 text-sm sm:text-base">
            <li>Work through each lab in order to build confidence with SRE process and documentation.</li>
            <li>Copy the template text into your own notes, then rewrite it for a real service in your environment.</li>
            <li>Discuss your answers with a mentor or peer and review where the tradeoffs are.</li>
            <li>After each lab, write a short summary of what you learned and what you would change next time.</li>
          </ul>
        </section>

        <p className="text-gray-400 text-xs mt-6 text-center">Last updated: May 30, 2026</p>
      </main>
    </div>
  );
}
