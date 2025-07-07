"use client"; // needed for useState

import { useState } from "react";

export default function HomePage() {
  const [showSRE, setShowSRE] = useState(false);

  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">Welcome to the SRE Learning Platform</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* What is SRE Card */}
        <div
          className="cursor-pointer bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
          onClick={() => setShowSRE(!showSRE)}
          aria-expanded={showSRE}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setShowSRE(!showSRE);
          }}
        >
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">What is SRE?</h2>
          {!showSRE && (
            <p className="text-gray-400">
              Click to learn more about Site Reliability Engineering, the role of an SRE, principles, and pillars.
            </p>
          )}

          {showSRE && (
            <div className="mt-4 text-gray-300 space-y-4">
              <p>
                Site Reliability Engineering (SRE) is a discipline that combines software engineering and systems engineering to build and run
                scalable, reliable, and highly available systems. SRE teams focus on automating operations, improving system reliability, and
                reducing manual toil.
              </p>

              <h3 className="text-xl font-semibold text-indigo-400">What does a SRE do day-to-day?</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Monitor system health and respond to incidents</li>
                <li>Automate repetitive operational tasks to reduce toil</li>
                <li>Define and measure SLIs, SLOs, and error budgets</li>
                <li>Run postmortems and conduct root cause analyses (RCA)</li>
                <li>Improve deployment and CI/CD pipelines</li>
                <li>Collaborate closely with development teams</li>
              </ul>

              <h3 className="text-xl font-semibold text-indigo-400">Core SRE Principles</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Embrace risk and balance reliability with feature velocity</li>
                <li>Reduce manual toil through automation</li>
                <li>Measure reliability with SLIs (Service Level Indicators) and SLOs (Service Level Objectives)</li>
                <li>Use error budgets to drive engineering priorities</li>
                <li>Conduct blameless postmortems</li>
              </ul>

              <h3 className="text-xl font-semibold text-indigo-400">SRE Pillars</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Monitoring & Alerting:</strong> Detect problems early and reduce downtime.</li>
                <li><strong>Incident Response:</strong> Efficiently manage and resolve incidents. Create incident summary</li>
                <li><strong>Automation & Tooling:</strong> Automate repetitive tasks to save time and reduce errors.</li>
                <li><strong>Capacity Planning:</strong> Ensure systems can handle growth and traffic spikes.</li>
                <li><strong>Change Management:</strong> Safely deploy new code and infrastructure changes.</li>
                <li><strong>Postmortem & RCA:</strong> Learn from failures without blame to prevent recurrence.</li>
              </ul>
            </div>
          )}
        </div>

        {/* You can add other cards here */}

      </div>
    </div>
  );
}
