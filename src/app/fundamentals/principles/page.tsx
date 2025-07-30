"use client"; // Required for useState and motion
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const principles = [
  {
    title: "📏 Defining SLOs for Reliability",
    summary: "Set clear, measurable targets to ensure your service meets user expectations reliably.",
    content: (
      <div className="space-y-4 text-indigo-100">
        <p>
          <strong>Service Level Objectives (SLOs)</strong> are precise reliability goals, like ensuring “99.9% of requests complete in under 300ms.” They anchor SRE by aligning engineering efforts with user needs.
        </p>
        <p>
          SLOs rely on <strong>Service Level Indicators (SLIs)</strong>, such as latency or uptime, and may feed into <strong>Service Level Agreements (SLAs)</strong> for contractual commitments.
        </p>
        <h4 className="text-indigo-400 font-semibold">🧠 Key Attributes</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>User-Focused:</strong> Prioritize metrics that impact user experience.</li>
          <li><strong>Balanced:</strong> Optimize reliability without over-engineering.</li>
          <li><strong>Trackable:</strong> Continuously monitor performance against targets.</li>
          <li><strong>Adaptive:</strong> Adjust SLOs as system needs evolve.</li>
        </ul>
        <h4 className="text-indigo-400 font-semibold">🎯 Examples</h4>
        <ul className="list-disc list-inside italic space-y-2">
          <li>“99.95% API uptime over 30 days.”</li>
          <li>“95% of queries return in under 200ms.”</li>
        </ul>
        <p>
          SLOs drive decision-making, prioritize incidents, and ensure consistent reliability.
        </p>
      </div>
    ),
    hoverTip: "SLOs guide reliability with precision!",
  },
  {
    title: "📉 Balancing Risk with Error Budgets",
    summary: "Use error budgets to safely innovate while maintaining system stability.",
    content: (
      <div className="space-y-4 text-indigo-100">
        <p>
          <strong>Error Budgets</strong> allow controlled risk by defining acceptable failure levels based on SLOs. For a 99.9% uptime SLO, the error budget is 0.1%, or ~43 minutes of downtime monthly.
        </p>
        <h4 className="text-indigo-400 font-semibold">🧠 Why It Works</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Promotes Innovation:</strong> Safe to deploy within budget.</li>
          <li><strong>Enforces Discipline:</strong> Pause releases if budget is low.</li>
          <li><strong>Data-Driven:</strong> Objective release decisions.</li>
        </ul>
        <h4 className="text-indigo-400 font-semibold">📊 Use Cases</h4>
        <div className="space-y-3">
          <div>☁️ <strong>Cloud Platform:</strong> Halts rollouts after 75% budget use.</div>
          <div>🚀 <strong>Web App:</strong> Tests features during off-peak hours.</div>
        </div>
        <p className="italic">
          <strong>Formula:</strong> Error Budget = 100% – SLO Target
        </p>
        <p>
          Error budgets align reliability with rapid development.
        </p>
      </div>
    ),
    hoverTip: "Error budgets fuel safe innovation!",
  },
  {
    title: "⚙️ Eliminating Toil Through Automation",
    summary: "Automate repetitive tasks to free engineers for strategic work.",
    content: (
      <div className="space-y-4 text-indigo-100">
        <p>
          <strong>Toil</strong> refers to manual, repetitive tasks that lack lasting value. SREs aim to automate toil to enhance efficiency and reliability.
        </p>
        <h4 className="text-indigo-400 font-semibold">🔁 Characteristics of Toil</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Manual and repetitive</li>
          <li>Reactive, not proactive</li>
          <li>Short-term fixes</li>
        </ul>
        <h4 className="text-indigo-400 font-semibold">🤖 Automation Examples</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Auto-scaling cloud resources</li>
          <li>CI/CD pipelines for deployments</li>
          <li>Automated alert responses</li>
        </ul>
        <h4 className="text-indigo-400 font-semibold">📉 Benefits</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Consistent system performance</li>
          <li>More time for innovation</li>
          <li>Reduced team burnout</li>
        </ul>
        <p>
          A team automated server restarts, saving 500 hours annually, boosting productivity.
        </p>
      </div>
    ),
    hoverTip: "Automation transforms toil into progress!",
  },
  {
    title: "🤝 Unifying Devs and Ops",
    summary: "Break silos with shared goals to boost reliability and speed.",
    content: (
      <div className="space-y-4 text-indigo-100">
        <p>
          Collaboration between developers and operations eliminates delays and enhances system reliability through shared ownership.
        </p>
        <h4 className="text-indigo-400 font-semibold">🤝 Collaboration Practices</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Shared service responsibility</li>
          <li>Joint incident response</li>
          <li>Unified communication tools</li>
        </ul>
        <h4 className="text-indigo-400 font-semibold">🌟 Impact</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Faster issue resolution</li>
          <li>Improved deployment quality</li>
          <li>Enhanced system scalability</li>
        </ul>
        <p>
          A startup’s Dev/Ops sync cut deployment errors by 35% via shared tools.
        </p>
      </div>
    ),
    hoverTip: "Collaboration drives system excellence!",
  },
  {
    title: "📝 Learning from Blameless Postmortems",
    summary: "Analyze incidents without blame to improve systems continuously.",
    content: (
      <div className="space-y-4 text-indigo-100">
        <p>
          <strong>Blameless Postmortems</strong> focus on understanding incidents to prevent recurrence, fostering a culture of learning over blame.
        </p>
        <h4 className="text-indigo-400 font-semibold">🔍 Core Elements</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Timeline of events</li>
          <li>Impact analysis</li>
          <li>Root cause identification</li>
          <li>Preventive actions</li>
        </ul>
        <h4 className="text-indigo-400 font-semibold">📚 Example</h4>
        <p>
          A team fixed a database outage by adding automated failover after a postmortem revealed configuration gaps.
        </p>
        <p>
          Postmortems ensure systems grow stronger with each incident.
        </p>
      </div>
    ),
    hoverTip: "Postmortems turn failures into growth!",
  },
  {
    title: "👁️ Monitoring Distributed Systems",
    summary: "Track key signals to maintain system health and catch issues early.",
    content: (
      <div className="space-y-4 text-indigo-100">
        <p>
          Effective monitoring uses the <strong>four golden signals</strong>—latency, traffic, errors, and saturation—to ensure system reliability.
        </p>
        <h4 className="text-indigo-400 font-semibold">🧠 Golden Signals</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Latency:</strong> Request response time</li>
          <li><strong>Traffic:</strong> Request volume</li>
          <li><strong>Errors:</strong> Failure rate</li>
          <li><strong>Saturation:</strong> Resource usage</li>
        </ul>
        <h4 className="text-indigo-400 font-semibold">📊 Example</h4>
        <p>
          High latency alerts prompted a team to optimize load balancers, cutting response times by 40%.
        </p>
        <p>
          Monitoring empowers proactive system management.
        </p>
      </div>
    ),
    hoverTip: "Monitoring keeps systems in check!",
  },
  {
    title: "🚀 Streamlining Release Engineering",
    summary: "Deploy reliably with practices that minimize risks and outages.",
    content: (
      <div className="space-y-4 text-indigo-100">
        <p>
          <strong>Release Engineering</strong> ensures safe deployments through automation and careful testing.
        </p>
        <h4 className="text-indigo-400 font-semibold">🧠 Practices</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Canary releases for small-scale testing</li>
          <li>Feature flags for controlled rollouts</li>
          <li>Automated CI/CD validation</li>
        </ul>
        <h4 className="text-indigo-400 font-semibold">📊 Example</h4>
        <p>
          A 5% canary release caught a bug, preventing a full outage.
        </p>
        <p>
          Reliable releases maintain system stability.
        </p>
      </div>
    ),
    hoverTip: "Smooth releases prevent chaos!",
  },
  {
    title: "🧩 Prioritizing Simplicity",
    summary: "Keep systems simple to enhance reliability and ease maintenance.",
    content: (
      <div className="space-y-4 text-indigo-100">
        <p>
          <strong>Simplicity</strong> reduces complexity, making systems easier to manage and scale.
        </p>
        <h4 className="text-indigo-400 font-semibold">🧠 Benefits</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Faster debugging</li>
          <li>Improved scalability</li>
          <li>Lower team stress</li>
        </ul>
        <h4 className="text-indigo-400 font-semibold">📊 Example</h4>
        <p>
          Simplifying a caching layer cut outages by 20%.
        </p>
        <p>
          Simple systems are robust systems.
        </p>
      </div>
    ),
    hoverTip: "Simplicity is reliability’s best friend!",
  },
];

export default function SREPrinciplesPage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const controls = useAnimation();

  // Animation variants for cards
  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
  };

  // Trigger animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const insightsSection = document.getElementById("insights");
      if (insightsSection && window.scrollY + window.innerHeight > insightsSection.offsetTop) {
        controls.start({ opacity: 1, y: 0 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ top: "15%", left: "25%" }}></div>
        <div className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse" style={{ top: "40%", left: "75%" }}></div>
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ top: "70%", left: "35%" }}></div>
      </div>

      <main className="p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-12 shadow-lg transform perspective-1000 hover:rotate-x-2 transition-all duration-500 text-center"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-xl">
              SRE Principles
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Building Reliable Systems
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the core principles that power Site Reliability Engineering
          </motion.p>
        </motion.section>

        {/* Table of Contents Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("toc")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">Explore Principles</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-indigo-100 text-sm sm:text-base">
            {principles.map((p, index) => (
              <li key={index}>
                <a href={`#principle-${index}`} className="hover:underline">
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
          {hoveredSection === "toc" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-4 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Navigate to any principle to dive in!
            </motion.div>
          )}
        </motion.div>

        {/* Principles Sections */}
        <div id="insights" className="space-y-8">
          {principles.map((p, index) => (
            <motion.div
              key={index}
              id={`principle-${index}`}
              className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredSection(`principle-${index}`)}
              onHoverEnd={() => setHoveredSection(null)}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">{p.title}</h2>
              <p className="text-indigo-200 mb-4 text-sm sm:text-base">{p.summary}</p>
              {p.content}
              <div className="mt-6 bg-gray-900 p-4 rounded-lg">
                <strong className="text-indigo-400">Apply It:</strong>
                <p className="text-indigo-200 mt-2">Identify one way to implement this principle in your work today.</p>
              </div>
              {hoveredSection === `principle-${index}` && (
                <motion.div
                  className="bg-yellow-900/50 rounded p-2 mt-4 text-white text-xs sm:text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Key takeaway: {p.hoverTip}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-8 text-center">
          Last updated: July 27, 2025, 5:44 PM EEST
        </p>
      </main>
    </div>
  );
}