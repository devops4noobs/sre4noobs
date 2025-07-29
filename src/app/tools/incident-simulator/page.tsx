"use client"; // Required for useState and motion
import { FaSyncAlt} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function IncidentManagementPage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null); // Tracks flipped card
  const controls = useAnimation();

  // Animation variants for cards
  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
  };

  // Flip card variants
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  // Data for flip cards (Example Scenarios)
  const exampleScenariosData = [
    {
      title: "Application Outage",
      scenario: "A service fails due to a memory leak.",
      details: "AWS CloudWatch detects high memory usage; team rolls back changes and plans a fix using automated alerts."
    },
    {
      title: "Performance Degradation",
      scenario: "Users report slow responses.",
      details: "OpenTelemetry traces reveal a database bottleneck; team scales resources and updates Prometheus alerts."
    },
    {
      title: "Security Incident",
      scenario: "A login anomaly is detected via Splunk.",
      details: "Team isolates the system, communicates via shared dashboards, and conducts RCA to strengthen security."
    },
  ];

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
              Incident Management in SRE
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Detect, Respond, Resolve, Learn
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Minimize downtime and build resilient systems
          </motion.p>
        </motion.section>

        {/* Core Concept Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("core")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">Core Concept: Structured Response to Disruptions</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Incident Management is the process of detecting, responding to, and resolving disruptions in systems or services. By combining real-time observability, clear communication, and structured workflows, it minimizes downtime and ensures rapid recovery, maintaining user trust and system reliability.
          </p>
          {hoveredSection === "core" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Incident management turns chaos into control!
            </motion.div>
          )}
        </motion.div>

        {/* Why It Matters Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("why")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">🎯 Why Incident Management Matters</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Incidents can disrupt operations, frustrate users, and damage reputation. Effective incident management reduces impact, restores services quickly, and leverages observability tools to identify issues in real time, enabling teams to respond proactively and learn from each event.
          </p>
          {hoveredSection === "why" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Strong management preserves user trust!
            </motion.div>
          )}
        </motion.div>

        {/* Mission Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("mission")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">🏁 Mission: Respond, Resolve, Learn</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Rapid Response:</strong> Detect and address issues before they escalate.</li>
            <li><strong>Coordination:</strong> Ensure clear communication and role clarity during incidents.</li>
            <li><strong>Continuous Improvement:</strong> Use insights to prevent future disruptions.</li>
          </ul>
          {hoveredSection === "mission" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: The mission drives resilient operations!
            </motion.div>
          )}
        </motion.div>

        {/* What Is Incident Management Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("what")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">❓ What Is Incident Management?</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Incident Management is a disciplined approach to handling system disruptions, from detection to resolution and post-incident learning. It relies on observability tools (e.g., metrics, logs, traces) to identify issues, structured processes to coordinate responses, and post-incident analysis to drive improvements, ensuring systems remain reliable and resilient.
          </p>
          {hoveredSection === "what" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: A structured path to resolution!
            </motion.div>
          )}
        </motion.div>

        {/* Guiding Principles Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("principles")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">🧭 Guiding Principles (2025 Best Practices)</h2>
          <ol className="list-decimal list-inside text-indigo-100 space-y-3 text-sm sm:text-base">
            <li>
              <strong>Prioritize Detection with AI-Enhanced Observability</strong><br />
              <em>Why?</em> Early detection minimizes impact (latest: AI for anomaly prediction).<br />
              <em>What?</em> Use tools like Datadog or Splunk with ML to alert on unusual patterns.
            </li>
            <li>
              <strong>Define Clear Roles with Incident Command System (ICS)</strong><br />
              <em>Why?</em> Clarity prevents chaos (2025: ICS for hybrid/remote teams).<br />
              <em>What?</em> Assign Incident Commander, Scribe, SME; use ChatOps like Slack for coordination.
            </li>
            <li>
              <strong>Communicate Transparently with Stakeholder Updates</strong><br />
              <em>Why?</em> Builds trust (latest: Automated status pages).<br />
              <em>What?</em> Use tools like Statuspage or PagerDuty for real-time, multi-channel updates.
            </li>
            <li>
              <strong>Leverage Full-Stack Observability for Diagnosis</strong><br />
              <em>Why?</em> Comprehensive data speeds root cause identification (2025: Unified platforms).<br />
              <em>What?</em> Integrate metrics (Prometheus), logs (ELK), traces (Jaeger) for end-to-end visibility.
            </li>
            <li>
              <strong>Resolve with Automation and Runbooks</strong><br />
              <em>Why?</em> Reduces MTTR (latest: AI-assisted remediation).<br />
              <em>What?</em> Use automated runbooks in OpsGenie or PagerDuty for common fixes.
            </li>
            <li>
              <strong>Conduct Blameless Post-Incident Reviews (PIRs)</strong><br />
              <em>Why?</em> Drives learning (2025: Automated PIR templates).<br />
              <em>What?</em> Use tools like Jira or Confluence for structured, blameless analysis and action items.
            </li>
            <li>
              <strong>Integrate AI and ML for Proactive Management</strong><br />
              <em>Why?</em> Predicts incidents (latest trend: AIOps).<br />
              <em>What?</em> Employ platforms like New Relic or Splunk for predictive analytics and auto-correlation.
            </li>
          </ol>
          {hoveredSection === "principles" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Updated with 2025 AI-driven practices!
            </motion.div>
          )}
        </motion.div>

        {/* Example Scenarios - Flip Cards */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("examples")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">📚 Example Scenarios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {exampleScenariosData.map((data, index) => (
              <motion.div
                key={index}
                className="relative w-full h-48 cursor-pointer perspective-1000"
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="absolute w-full h-full rounded-lg shadow-lg backface-hidden bg-indigo-800/80 flex flex-col items-center justify-center p-4 text-white text-sm sm:text-base"
                  animate={flippedCard === index ? "back" : "front"}
                  variants={flipVariants}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-bold mb-2">{data.title}: Scenario</h3>
                  <p className="text-center">{data.scenario}</p>
                </motion.div>
                <motion.div
                  className="absolute w-full h-full rounded-lg shadow-lg backface-hidden bg-blue-800/80 flex flex-col items-center justify-center p-4 text-white text-sm sm:text-base"
                  animate={flippedCard === index ? "front" : "back"}
                  variants={flipVariants}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-bold mb-2">{data.title}: Resolution</h3>
                  <p className="text-center">{data.details}</p>
                </motion.div>
                <motion.button
                  className="absolute top-2 right-2 w-6 h-6 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 rounded-full flex items-center justify-center shadow-md transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                >
                  <FaSyncAlt className="text-sm" />
                </motion.button>
              </motion.div>
            ))}
          </div>
          {hoveredSection === "examples" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Flip to see real-world resolutions!
            </motion.div>
          )}
        </motion.div>

        {/* Best Practices Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("practices")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">💡 Best Practices (2025 Edition)</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li>Integrate AIOps for predictive detection and auto-remediation (e.g., Datadog AI).</li>
            <li>Adopt Zero Trust security in response workflows for hybrid clouds.</li>
            <li>Use ChatOps and AI chatbots for real-time collaboration (e.g., Slack with PagerDuty).</li>
            <li>Conduct chaos engineering post-resolution to test fixes (e.g., Gremlin).</li>
            <li>Implement automated PIRs with ML summaries (e.g., Blameless or FireHydrant).</li>
          </ul>
          {hoveredSection === "practices" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Incorporate AI for modern incident handling!
            </motion.div>
          )}
        </motion.div>

        {/* Closing Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("closing")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <p className="text-indigo-100 text-sm sm:text-base">
            Incident Management is a strategic practice that combines observability, coordination, and learning to build reliable systems and maintain user confidence.
          </p>
          {hoveredSection === "closing" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Evolve your incident processes with these practices!
            </motion.div>
          )}
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-4 text-center">
          Last updated: July 29, 2025
        </p>
      </main>
    </div>
  );
}