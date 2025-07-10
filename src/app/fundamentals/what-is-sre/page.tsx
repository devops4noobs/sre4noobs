export default function WhatIsSre() {
  return (
      <div>
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">
        Welcome to the SRE Learning Platform
      </h1>


        {/* What is SRE Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">What is SRE?</h2>
          <p className="mb-4">
            Site Reliability Engineering (SRE) combines software and systems engineering to build scalable, reliable, and highly available systems.
            SREs aim to automate operations, enhance reliability, and reduce manual toil.
          </p>

          <h3 className="text-xl font-semibold text-indigo-400">What does a SRE do day-to-day?</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Monitor system health and respond to incidents</li>
            <li>Automate repetitive operational tasks to reduce toil</li>
            <li>Define and measure SLIs, SLOs, and error budgets</li>
            <li>Run postmortems and conduct root cause analyses (RCA)</li>
            <li>Improve CI/CD and deployment pipelines</li>
            <li>Collaborate with development teams</li>
          </ul>

          <h3 className="text-xl font-semibold text-indigo-400">Core SRE Principles</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Balance risk and reliability with error budgets</li>
            <li>Automate to reduce operational toil</li>
            <li>Use SLIs/SLOs to measure reliability</li>
            <li>Drive decisions with error budgets</li>
            <li>Conduct blameless postmortems</li>
          </ul>

          <h3 className="text-xl font-semibold text-indigo-400">SRE Pillars</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Monitoring & Alerting:</strong> Detect problems early</li>
            <li><strong>Incident Management:</strong> Handle incidents efficiently</li>
            <li><strong>Automation & Tooling:</strong> Reduce manual work</li>
            <li><strong>Capacity Planning:</strong> Prepare for growth</li>
            <li><strong>Change Management:</strong> Deploy safely</li>
            <li><strong>Postmortem & RCA:</strong> Learn from failures</li>
          </ul>
        </section>

      </div>

  );
}
