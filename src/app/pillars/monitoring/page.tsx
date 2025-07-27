"use client"; // Required for useState and motion
import { FaSyncAlt } from "react-icons/fa"; // Added FaSyncAlt for flip icon
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function MonitoringDistributedSystems() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null); // Tracks flipped card
  const controls = useAnimation();

  // Animation variants for cards
  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 }, // Static state for non-flip cards
  };

  // Flip card variants
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  // Data for flip cards (Real-World Examples)
  const realWorldExamplesData = [
    { title: "Global CDN Latency", scenario: "A global CDN monitors latency spikes.", details: "Adjusting server routing to maintain 200ms response times during traffic surges." },
    { title: "Microservices Error Rate", scenario: "A microservices platform detects a 5% error rate via Prometheus.", details: "Triggering an alert that resolves a misconfigured API endpoint." },
    { title: "Database Cluster Saturation", scenario: "A database cluster uses saturation metrics to scale storage.", details: "Before hitting 90% capacity, preventing downtime." },
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
        {/* Hero Section with Centered Multi-Line Title */}
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
              Monitoring Distributed Systems
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Ensuring Visibility and Resilience in SRE
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Gain insights into complex, multi-component environments
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">Core Concept: Visibility into Complexity</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Distributed systems, with their multiple services, nodes, and dependencies, require robust monitoring to track performance and identify failures. SRE emphasizes the “four golden signals”—latency, traffic, errors, and saturation—as a foundation for effective oversight, ensuring teams can respond proactively rather than reactively.
          </p>
          {hoveredSection === "core" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Monitoring turns chaos into clarity!
            </motion.div>
          )}
        </motion.div>

        {/* Four Golden Signals Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("signals")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">🧠 The Four Golden Signals</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Latency:</strong> The time taken to service a request, including queue and processing delays.</li>
            <li><strong>Traffic:</strong> The volume of requests or data flowing through the system.</li>
            <li><strong>Errors:</strong> The rate of failed requests or operations.</li>
            <li><strong>Saturation:</strong> The degree to which system resources (e.g., CPU, memory) are utilized.</li>
          </ul>
          {hoveredSection === "signals" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Focus on these for comprehensive monitoring!
            </motion.div>
          )}
        </motion.div>

        {/* Monitoring Tools and Techniques Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("tools")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">📊 Monitoring Tools and Techniques</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Dashboards:</strong> Real-time views (e.g., Grafana, Kibana) for tracking signals.</li>
            <li><strong>Alerts:</strong> Configured to notify on significant deviations, avoiding alert fatigue.</li>
            <li><strong>Logging:</strong> Detailed logs for post-incident analysis.</li>
            <li><strong>Tracing:</strong> End-to-end request tracking across services (e.g., Jaeger, Zipkin).</li>
          </ul>
          {hoveredSection === "tools" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Combine these for full system visibility!
            </motion.div>
          )}
        </motion.div>

        {/* Real-World Examples - Flip Cards with Flip Button */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("examples")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">🌟 Real-World Examples</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {realWorldExamplesData.map((data, index) => (
              <motion.div
                key={index}
                className="relative w-full h-48 cursor-pointer perspective-1000"
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                whileHover={{ scale: 1.02 }} // Hover effect only for flip cards
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
                  <h3 className="font-bold mb-2">{data.title}: Details</h3>
                  <p className="text-center">{data.details}</p>
                </motion.div>
                <motion.button
                  className="absolute bottom-2 left-2 w-8 h-8 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 rounded-full flex items-center justify-center shadow-md transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                >
                  <FaSyncAlt className="text-lg" />
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
              Hover tip: Flip to see monitoring in action!
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">💡 Best Practices</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li>Focus on end-user experience, not just system metrics.</li>
            <li>Implement hierarchical alerts (e.g., critical, warning) to reduce noise.</li>
            <li>Regularly review and update monitoring thresholds.</li>
            <li>Integrate monitoring with incident response workflows.</li>
            <li>Ensure data retention for trend analysis and audits.</li>
          </ul>
          {hoveredSection === "practices" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Apply these for proactive monitoring!
            </motion.div>
          )}
        </motion.div>

        {/* Example Monitoring Setup Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("setup")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">📈 Example Monitoring Setup</h2>
          <p className="text-indigo-100 italic mb-4 text-sm sm:text-base">
            <strong>Alert Rule:</strong> Trigger if latency &gt; 300ms for 5% of requests over 5 minutes.<br />
            <strong>Dashboard Metric:</strong> Display traffic (requests/sec) and error rate (%) on a single pane.
          </p>
          {hoveredSection === "setup" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Customize this for your system&apos;s needs!
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
            Effective monitoring of distributed systems is the backbone of SRE, enabling proactive maintenance and resilience in the face of complexity.
          </p>
          {hoveredSection === "closing" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Start monitoring your systems today!
            </motion.div>
          )}
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-4 text-center">
          Last updated: July 27, 2025
        </p>
      </main>
    </div>
  );
}