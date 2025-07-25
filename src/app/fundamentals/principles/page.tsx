"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, SparklesIcon, LightBulbIcon, Cog6ToothIcon, UserGroupIcon, DocumentTextIcon, EyeIcon, RocketLaunchIcon, PuzzlePieceIcon } from "@heroicons/react/24/outline";

const principleIcons = [
  <SparklesIcon className="w-8 h-8 text-yellow-300" />, // SLOs
  <DocumentTextIcon className="w-8 h-8 text-pink-300" />, // Error Budgets
  <Cog6ToothIcon className="w-8 h-8 text-indigo-300" />, // Automate Toil
  <UserGroupIcon className="w-8 h-8 text-blue-300" />, // Collaboration
  <DocumentTextIcon className="w-8 h-8 text-green-300" />, // Postmortems
  <EyeIcon className="w-8 h-8 text-indigo-400" />, // Monitoring
  <RocketLaunchIcon className="w-8 h-8 text-pink-400" />, // Release Engineering
  <PuzzlePieceIcon className="w-8 h-8 text-yellow-200" />, // Simplicity
];

const principles = [
  {
    title: "What Are SLOs?",
    content: (
      <div className="space-y-4 text-gray-300">
        <p>
          <strong>SLO</strong> (Service Level Objective) is a measurable reliability target that defines how well a service must perform for users. It&apos;s the reliability promise you make—like “99.9% of requests respond under 300ms.” SLOs are crucial for balancing risk, managing user expectations, and guiding engineering efforts.
        </p>

        <p>
          SLOs are backed by <strong>SLIs</strong> (indicators like latency or error rate) and sometimes formalized into <strong>SLAs</strong> (legal agreements).
        </p>

        <h4 className="text-indigo-400 font-semibold">🧠 Core Principles of SLOs</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>User-Centric:</strong> Reflect what matters to users.</li>
          <li><strong>Balance Risk & Reliability:</strong> Avoid over-engineering or underperforming.</li>
          <li><strong>Measure & Monitor:</strong> Track performance against SLOs.</li>
          <li><strong>Reviewed Regularly:</strong> Adapt to changing conditions and needs.</li>
          <li><strong>Focused:</strong> Track a few key metrics, not dozens.</li>
          <li><strong>Continuous Improvement:</strong> Drive ongoing enhancements.</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">🎯 Example</h4>
        <ul className="list-disc list-inside italic space-y-2">
          <li>“99.95% of API responses must complete under 300ms over a 30-day period.”</li>
          <li>“90% of critical incidents must be resolved within 60 minutes over the last 30 days.”</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">📊 Typical SLO Types</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Availability:</strong> % of successful requests</li>
          <li><strong>Latency:</strong> Response time under a threshold</li>
          <li><strong>Error Rate:</strong> Fewer 5xx errors</li>
          <li><strong>Freshness:</strong> Real-time or near real-time data</li>
        </ul>

        <p>
          SLOs are the foundation of SRE—they guide decisions, incident response, and engineering priorities.
        </p>
      </div>
    ),
  },
  {
    title: "Embrace Risk with Error Budgets",
    content: (
      <div className="space-y-4 text-gray-300">
        <p>
          <strong>Error Budgets</strong> are a core SRE concept that balances reliability with innovation. Instead of aiming for perfect uptime, we define an acceptable amount of failure based on the service&apos;s <strong>SLO</strong>.
        </p>

        <p>
          The error budget is the difference between 100% and your SLO target. For example, if your SLO is 99.9% uptime, your error budget is 0.1%—about 43.2 minutes of downtime per month.
        </p>

        <h4 className="text-indigo-400 font-semibold">🧠 Why It Matters</h4>
        <div className="space-y-2">
          <div>✅ <strong>Encourages Calculated Risk:</strong> Ship faster if within budget.</div>
          <div>✅ <strong>Triggers Caution:</strong> Pause releases if the budget is exhausted.</div>
          <div>✅ <strong>Data-Driven Decisions:</strong> Removes emotion from go/no-go calls.</div>
        </div>

        <h4 className="text-indigo-400 font-semibold">📊 Real-World Examples</h4>
        <div className="space-y-3">
          <div>☁️ <strong>Cloud Service:</strong> A storage team pauses feature deployments after using 80% of their 99.95% availability budget.</div>
          <div>🚀 <strong>Frontend App:</strong> Runs chaos tests during low traffic, using budget strategically.</div>
          <div>🧪 <strong>AI Team:</strong> Launches a new ML model with only 10% budget used.</div>
        </div>

        <h4 className="text-indigo-400 font-semibold">📐 Formula</h4>
        <p className="italic">
          <strong>Error Budget = 100% – SLO Target</strong><br />
          Example: 100% – 99.9% = 0.1% allowable errors
        </p>

        <p className="text-gray-400">
          Embracing risk means using data to make smart trade-offs between stability and speed.
        </p>
      </div>
    ),
  },
  {
    title: "Automate Everything to Eliminate Toil",
    content: (
      <div className="space-y-4 text-gray-300">
        <p>
          <strong>Toil</strong> is repetitive, manual, automatable work that doesn&apos;t improve systems. A core SRE principle is to <strong>identify and eliminate toil through automation</strong>, freeing engineers for impactful work.
        </p>

        <h4 className="text-indigo-400 font-semibold">🔁 What Is Toil?</h4>
        <p>
          Google SRE defines toil as work that is:
        </p>
        <ul className="space-y-1 pl-2">
          <li>— Manual</li>
          <li>— Repetitive</li>
          <li>— Reactive</li>
          <li>— Interrupt-driven</li>
          <li>— Lacks long-term value</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">🛠️ Examples of Toil</h4>
        <div className="space-y-3">
          <div>🔁 Manually restarting failed services</div>
          <div>📦 Deploying code via SSH</div>
          <div>📈 Creating dashboards for each service</div>
          <div>📨 Handling low-priority night pages</div>
        </div>

        <h4 className="text-indigo-400 font-semibold">🤖 Automation in Action</h4>
        <ul className="space-y-2">
          <li>✅ Auto-recovery for crashed services</li>
          <li>✅ CI/CD pipelines for deployments</li>
          <li>✅ Terraform for infrastructure</li>
          <li>✅ Auto-remediation via alerts</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">📉 Why Eliminate Toil?</h4>
        <ul className="space-y-2">
          <li>✅ <strong>Improves Reliability:</strong> Automation is consistent.</li>
          <li>✅ <strong>Frees Engineers:</strong> Focus on innovation.</li>
          <li>✅ <strong>Prevents Burnout:</strong> Reduces repetitive tasks.</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">📚 Real-World Story</h4>
        <p>
          A company saved 780 hours/year by automating DNS updates with a Python Lambda, reinvesting time into CI/CD improvements.
        </p>

        <p className="text-gray-400 italic">
          “If it&apos;s boring, repetitive, and required—automate it.”
        </p>
      </div>
    ),
  },
  {
    title: "Foster Collaboration Between Devs and Ops",
    content: (
      <div className="space-y-4 text-gray-300">
        <p>
          Traditional IT silos between development (dev) and operations (ops) cause delays and reliability issues. A core SRE principle is to <strong>bridge this gap with collaboration and shared responsibility</strong>.
        </p>

        <h4 className="text-indigo-400 font-semibold">🤝 What Collaboration Means</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Shared ownership of services</li>
          <li>Joint accountability for reliability</li>
          <li>Open communication channels</li>
          <li>Collabora#tive planning for capacity and incidents</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">🔧 Why Collaboration Matters</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Faster Resolution:</strong> Combines dev&apos;s code knowledge with ops&apos; infrastructure expertise.</li>
          <li><strong>Higher Quality:</strong> Better testing and deployment practices.</li>
          <li><strong>Innovation:</strong> Cross-team feedback improves scalability.</li>
          <li><strong>Reduced Toil:</strong> Ops automates with dev support.</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">🌟 Real-World Examples</h4>
        <div className="space-y-3">
          <div>🛠️ Google embeds SREs in dev teams for continuous improvement.</div>
          <div>🚀 A startup&apos;s ops/dev sync reduced deployment failures by 40%.</div>
          <div>🔄 Joint alert channels via Slack/Jira improve incident response.</div>
        </div>

        <h4 className="text-indigo-400 font-semibold">💡 How to Foster Collaboration</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Shared on-call rotations</li>
          <li>Blameless postmortems with all stakeholders</li>
          <li>Cross-training sessions</li>
          <li>Collaboration tools and dashboards</li>
        </ul>

        <p className="text-gray-400 italic">
          Collaboration binds development velocity with operational stability.
        </p>
      </div>
    ),
  },
  {
    title: "Conduct Blameless Postmortems",
    content: (
      <div className="space-y-4 text-gray-300">
        <p>
          Blameless postmortems are a cornerstone of SRE, enabling learning from incidents without blame. The focus is on <strong>what happened</strong> and <strong>how to prevent it</strong>, not who caused it.
        </p>

        <h4 className="text-indigo-400 font-semibold">🔍 Why Blameless Postmortems Matter</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Encourages honest discussion about failures.</li>
          <li>Fosters continuous improvement.</li>
          <li>Reduces fear around reporting.</li>
          <li>Identifies systemic issues.</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">🛠️ Key Components</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Incident Timeline:</strong> What happened and when.</li>
          <li><strong>Impact Assessment:</strong> Who and what was affected.</li>
          <li><strong>Root Cause Analysis:</strong> Underlying factors.</li>
          <li><strong>Mitigation Steps:</strong> Response during the incident.</li>
          <li><strong>Action Items:</strong> Tasks to prevent recurrence.</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">📚 Real-World Example</h4>
        <p>
          After a misconfigured deployment outage, a team identified monitoring gaps and added automated checks, preventing future incidents.
        </p>

        <h4 className="text-indigo-400 font-semibold">💡 Best Practices</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Focus on systems, not individuals.</li>
          <li>Use a standard template.</li>
          <li>Share postmortems widely.</li>
          <li>Conduct timely reviews.</li>
        </ul>

        <p className="text-gray-400 italic">
          The goal is growth and resilience, not blame.
        </p>
      </div>
    ),
  },
  {
    title: "Monitor Distributed Systems",
    content: (
      <div className="space-y-4 text-gray-300">
        <p>
          Monitoring distributed systems is essential to ensure reliability and detect issues early. SREs use the “four golden signals”—latency, traffic, errors, and saturation—to gain actionable insights.
        </p>

        <h4 className="text-indigo-400 font-semibold">🧠 The Four Golden Signals</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Latency:</strong> Time to service a request.</li>
          <li><strong>Traffic:</strong> Volume of requests or data.</li>
          <li><strong>Errors:</strong> Rate of failed requests.</li>
          <li><strong>Saturation:</strong> Resource utilization (e.g., CPU, memory).</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">🔧 Best Practices</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Use dashboards with real-time data (e.g., Grafana).</li>
          <li>Set meaningful alerts, avoiding noise.</li>
          <li>Monitor end-user experience, not just infrastructure.</li>
          <li>Log and analyze trends over time.</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">📊 Example</h4>
        <p>
          A team notices high latency (500ms) and 5% errors during peak traffic. They adjust load balancers and scale resources, restoring performance.
        </p>

        <p className="text-gray-400 italic">
          Effective monitoring prevents outages and guides optimization.
        </p>
      </div>
    ),
  },
  {
    title: "Release Engineering",
    content: (
      <div className="space-y-4 text-gray-300">
        <p>
          Release engineering ensures safe, reliable software deployments. SREs integrate reliability into the release process, minimizing outages caused by changes.
        </p>

        <h4 className="text-indigo-400 font-semibold">🧠 Key Practices</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Use canary releases to test on a subset of users.</li>
          <li>Implement progressive rollouts with feature flags.</li>
          <li>Automate testing and validation in CI/CD pipelines.</li>
          <li>Monitor post-release health with SLOs.</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">📊 Example</h4>
        <p>
          A team rolls out a new feature to 5% of users, detects a 2% error rate, and rolls back before wider impact.
        </p>

        <p className="text-gray-400 italic">
          Reliable releases balance speed and stability.
        </p>
      </div>
    ),
  },
  {
    title: "Simplicity",
    content: (
      <div className="space-y-4 text-gray-300">
        <p>
          Simplicity is a guiding principle in SRE—complex systems are harder to maintain and more prone to failure. Keeping designs and processes simple enhances reliability.
        </p>

        <h4 className="text-indigo-400 font-semibold">🧠 Why Simplicity Matters</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Reduces debugging time and human error.</li>
          <li>Improves scalability and maintainability.</li>
          <li>Lowers the cognitive load on teams.</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">📊 Example</h4>
        <p>
          A team replaces a multi-layer caching system with a single, well-tuned cache, reducing latency and outages.
        </p>

        <p className="text-gray-400 italic">
          Simplicity is the ultimate sophistication.
        </p>
      </div>
    ),
  },
];

export default function SREPrinciplesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-indigo-700 to-blue-900 flex flex-col items-center justify-start py-0 relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full max-w-4xl mx-auto text-center py-16 px-4 mb-10 relative sm:py-10 sm:px-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-xl tracking-tight animate-fade-in sm:text-2xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-indigo-400 tracking-wide pr-2" style={{overflow: 'visible', display: 'inline-block'}}>SRE Principles</span>
        </h1>
        <p className="text-lg md:text-2xl text-indigo-100 mb-6 animate-fade-in delay-100 sm:text-base">
          The core philosophies that power reliable, scalable, and innovative systems.
        </p>
      </section>

      {/* Principles Accordion */}
      <div className="w-full max-w-3xl mx-auto space-y-6 px-2 pb-16">
        {principles.map((p, index) => (
          <div
            key={index}
            className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-indigo-500/40 cursor-pointer transition-all duration-300 hover:bg-indigo-800/40 ${openIndex === index ? 'ring-2 ring-yellow-300/60' : ''}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span>{principleIcons[index]}</span>
                <h2 className="text-xl font-semibold text-indigo-100">{p.title}</h2>
              </div>
              {openIndex === index ? (
                <ChevronUpIcon className="w-6 h-6 text-yellow-300" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-indigo-300" />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[1000px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
              style={{ willChange: 'max-height, opacity' }}
            >
              {openIndex === index && (
                <div className="animate-fade-in">
                  {p.content}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}