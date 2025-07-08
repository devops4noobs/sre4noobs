"use client";
import { useState } from "react";

const principles = [
  {
    title: "📏 What Are SLOs?",
    content: (
      <div className="space-y-4 text-gray-300">
        <p>
          <strong>SLO</strong> (Service Level Objective) is a measurable reliability target that defines how well a service must perform for users.
          It`&apos;`s the reliability promise you make — like “99.9% of requests respond under 300ms. SLOs are crucials for balancing risk, managing user expectations and guiding our engineering efforts.”
        </p>

        <p>
          SLOs are backed by SLIs (indicators like latency or error rate) and sometimes formalized into SLAs (legal agreements).
        </p>

        <h4 className="text-indigo-400 font-semibold">🧠 Core Principles of SLOs</h4>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>User-Centric:</strong> Reflect what matters to the user.</li>
          <li><strong>Balance risk & reliability:</strong> Avoid over-engineering or underperforming.</li>
          <li><strong>Measure and Monitor:</strong> To track our performance against the SLOs.</li>
          <li><strong>Reviewed Regularly:</strong> Stay relevant over time because the conditions and user needs change.</li>
          <li><strong>Focused:</strong> Track a few important ones, not dozens.</li>
          <li><strong>Continuos improvement:</strong> Drive continuous improvement to ensure we are always getting better.</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">🎯 Example</h4>
        
        <ul className="list-disc list-inside italic space-y-1">
          <span>“99.95% of API responses must complete under 300ms over a 30-day period.”</span><br></br>
          <span>“90% of critical incidents must be resolved within 60 minutes over the last 30 days.”</span>
            
        </ul>
        

        <h4 className="text-indigo-400 font-semibold">📊 Typical SLO Types</h4>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Availability:</strong> % of successful requests</li>
          <li><strong>Latency:</strong> Response time under threshold</li>
          <li><strong>Error Rate:</strong> Fewer 5xx errors</li>
          <li><strong>Freshness:</strong> Real-time or near real-time data</li>
        </ul>

        <p>
          SLOs are the foundation of SRE — they guide decisions, incident response, and engineering priorities.
        </p>
      </div>
    )
  },

  // You can add more cards like this
  {
  title: "📉 Embrace Risk with Error Budgets",
  content: (
    <div className="space-y-4 text-gray-300">
      <p>
        <strong>Error budgets</strong> are a core concept in SRE that let teams
        balance reliability with innovation. Instead of aiming for perfect
        uptime (which is unrealistic), we define an acceptable amount of
        failure based on the service`&apos;`s <strong>SLO</strong>.
      </p>

      <p>
        The error budget is the difference between 100% and your SLO target. For
        example, if your SLO is 99.9% uptime, then your error budget is 0.1% —
        or about 43.2 minutes of downtime per month.
      </p>

      <h4 className="text-indigo-400 font-semibold">🧠 Why It Matters</h4>
      <div className="space-y-2">
        <div>
          ✅ <strong>Encourages calculated risk-taking:</strong> If you`&apos;`re within budget, ship faster.
        </div>
        <div>
          ✅ <strong>Triggers caution when SLOs are at risk:</strong> Pause releases if the budget is burned.
        </div>
        <div>
          ✅ <strong>Backs up reliability decisions with data:</strong> Removes emotion from go/no-go calls.
        </div>
      </div>

      <h4 className="text-indigo-400 font-semibold">📊 Real-World Examples</h4>
      <div className="space-y-3">
        <div>
          ☁️ <strong>Cloud Service:</strong> A storage team has a 99.95% availability SLO. After a major incident, they’ve used up 80% of their error budget. They pause feature deployments until the next window.
        </div>
        <div>
          🚀 <strong>Frontend Web App:</strong> The team runs chaos tests during low-traffic hours to validate resilience — using up part of their budget strategically.
        </div>
        <div>
          🧪 <strong>Experiment Rollout:</strong> An AI team wants to launch a new ML model. Since they’re only at 10% of their error budget, they proceed with the rollout.
        </div>
      </div>

      <h4 className="text-indigo-400 font-semibold">📐 Formula</h4>
      <p className="italic">
        <strong>Error Budget = 100% – SLO target</strong>
        <br />
        Example: 100% – 99.9% = 0.1% allowable errors
      </p>

      <p className="text-gray-400">
        Embracing risk doesn’t mean being reckless — it means using reliability
        data (via error budgets) to make smart trade-offs between stability and
        speed.
      </p>
    </div>
  )
},

  {
  title: "⚙️ Automate Everything to Eliminate Toil",
  content: (
    <div className="space-y-4 text-gray-300">
      <p>
        <strong>Toil</strong> is the repetitive, manual, and automatable work that keeps systems running — but doesn`&apos;`t improve them. A core principle of SRE is to **identify and eliminate toil through automation** so engineers can focus on scalable, high-impact work.
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

      <p>
        If you do something more than once, it`&apos;`s probably toil — and it`&apos;`s likely a candidate for automation.
      </p>

      <h4 className="text-indigo-400 font-semibold">🛠️ Examples of Toil</h4>
      <div className="space-y-3">
        <div>🔁 Manually restarting failed services every few hours</div>
        <div>📦 Deploying code by copying files over SSH</div>
        <div>📈 Creating dashboards from scratch for each new service</div>
        <div>📨 Getting paged at night for known, low-priority alerts</div>
      </div>

      <h4 className="text-indigo-400 font-semibold">🤖 Automation in Action</h4>
      <ul className="space-y-1">
        <li>✅ Scheduled jobs that auto-recover crashed services</li>
        <li>✅ CI/CD pipelines for fast, safe deployments</li>
        <li>✅ Terraform or CDK for provisioning infrastructure</li>
        <li>✅ Auto-remediation scripts triggered by alerts</li>
      </ul>

      <h4 className="text-indigo-400 font-semibold">📉 Why Eliminate Toil?</h4>
      <ul className="space-y-2">
        <li>✅ <strong>Improves reliability:</strong> Automation is faster and more consistent than humans.</li>
        <li>✅ <strong>Frees engineers:</strong> Focus on innovation instead of maintenance.</li>
        <li>✅ <strong>Prevents burnout:</strong> No one wants to do the same task 500 times a week.</li>
      </ul>

      <h4 className="text-indigo-400 font-semibold">📚 Real-World Story</h4>
      <p>
        A company was spending 15 engineer-hours per week manually updating DNS entries. An SRE wrote a Python Lambda that took input from a form and automatically updated Route 53. That script saved **~780 hours/year** — time reinvested into improving their CI/CD pipeline.
      </p>

      <p className="text-gray-400 italic">
        `&quot;`If it`&apos;`s boring, repetitive, and required — automate it.`&quot;`
      </p>
    </div>
  )
},

  {
  title: "🤝 Foster Collaboration Between Devs and Ops",
  content: (
    <div className="space-y-4 text-gray-300">
      <p>
        In traditional IT, development (dev) and operations (ops) teams often worked in silos,
        leading to miscommunication, slower releases, and reliability issues. A core SRE principle
        is to <strong>bridge this gap by fostering strong collaboration and shared responsibility</strong>.
      </p>

      <h4 className="text-indigo-400 font-semibold">🤝 What Collaboration Means in SRE</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>Shared ownership of services and infrastructure</li>
        <li>Joint accountability for reliability, performance, and incidents</li>
        <li>Open, transparent communication channels between teams</li>
        <li>Collaborative planning for capacity, features, and incident responses</li>
      </ul>

      <h4 className="text-indigo-400 font-semibold">🔧 Why Collaboration Matters</h4>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Faster incident resolution:</strong> Devs understand the code deeply, ops understand the infrastructure — together they fix issues quickly.</li>
        <li><strong>Higher quality releases:</strong> Shared responsibility leads to better testing, monitoring, and deployment practices.</li>
        <li><strong>Improved innovation:</strong> Cross-team feedback helps build features that are reliable and scalable from day one.</li>
        <li><strong>Reduced toil:</strong> Ops can automate operational tasks with dev support, reducing repetitive manual work.</li>
      </ul>

      <h4 className="text-indigo-400 font-semibold">🌟 Real-World Examples</h4>
      <div className="space-y-3">
        <div>
          🛠️ At Google, SREs are often embedded in dev teams or work closely with them — this tight integration enables continuous improvement and shared on-call rotations.
        </div>
        <div>
          🚀 A startup introduced regular “ops/dev sync” meetings where engineers pair-program on deployment automation — reducing deployment failures by 40%.
        </div>
        <div>
          🔄 Using tools like Slack, Jira, and PagerDuty, teams set up joint alert channels to avoid silos during incidents.
        </div>
      </div>

      <h4 className="text-indigo-400 font-semibold">💡 How to Foster Collaboration</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>Encourage shared on-call rotations including devs and ops</li>
        <li>Use blameless postmortems involving all stakeholders</li>
        <li>Promote cross-training and knowledge sharing sessions</li>
        <li>Invest in collaboration tools and dashboards visible to all</li>
      </ul>

      <p className="text-gray-400 italic">
        Collaboration is the glue that binds development velocity with operational stability.
      </p>
    </div>
  )
}
,

  {
  title: "📝 Conduct Blameless Postmortems",
  content: (
    <div className="space-y-4 text-gray-300">
      <p>
        Blameless postmortems are a cornerstone of SRE culture, enabling teams to learn from incidents without finger-pointing or punishment. The goal is to understand <strong>what happened</strong> and <strong>how to prevent it</strong>, not who caused it.
      </p>

      <h4 className="text-indigo-400 font-semibold">🔍 Why Blameless Postmortems Matter</h4>
      <ul className="list-disc list-inside space-y-2">
        <li>Encourages open and honest discussion about failures.</li>
        <li>Fosters a culture of continuous improvement.</li>
        <li>Reduces fear and stigma around incident reporting.</li>
        <li>Helps identify systemic issues rather than individual mistakes.</li>
      </ul>

      <h4 className="text-indigo-400 font-semibold">🛠️ Key Components of a Blameless Postmortem</h4>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Incident timeline:</strong> What happened, when, and how it was detected.</li>
        <li><strong>Impact assessment:</strong> Who and what was affected.</li>
        <li><strong>Root cause analysis:</strong> Understanding the underlying factors.</li>
        <li><strong>Mitigation steps:</strong> How the team responded during the incident.</li>
        <li><strong>Action items:</strong> Concrete tasks to prevent recurrence.</li>
      </ul>

      <h4 className="text-indigo-400 font-semibold">📚 Real-World Example</h4>
      <p>
        After a major outage caused by a misconfigured deployment, the team held a blameless postmortem identifying gaps in the deployment checklist and monitoring coverage. They implemented automated checks and improved alerting, preventing similar incidents.
      </p>

      <h4 className="text-indigo-400 font-semibold">💡 Best Practices</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>Focus on <em>systems and processes</em>, not individuals.</li>
        <li>Use a standard template to ensure consistency.</li>
        <li>Share postmortems broadly to promote learning.</li>
        <li>Schedule timely reviews—don’t delay the analysis.</li>
      </ul>

      <p className="text-gray-400 italic">
        Remember: The goal is growth and resilience, not blame.
      </p>
    </div>
  )
}

];

export default function SREPrinciplesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">SRE Principles</h1>

      <div className="space-y-4">
        {principles.map((p, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-5 shadow-lg cursor-pointer hover:bg-gray-700 transition"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h2 className="text-xl font-semibold text-indigo-300">{p.title}</h2>
            {openIndex === index && (
              <div className="mt-4">{p.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
