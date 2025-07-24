'use client'; // Required for useState and motion
import { FaChartLine, FaCloud, FaDatabase, FaChartBar, FaFileAlt, FaNetworkWired } from "react-icons/fa";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function ObservabilityVsMonitoring() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [expandedNode, setExpandedNode] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const progress = useTransform(scaleX, [0, 1], [0, 100]);

  // Animation variants for cards
  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
    hover: { scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" },
  };

  // Node data for Observability Explorer
  const techStack = [
    { id: "signalFx", name: "SignalFx", icon: FaChartLine, description: "Real-time monitoring and analytics with high-speed data ingestion." },
    { id: "awsCloudWatch", name: "AWS CloudWatch", icon: FaCloud, description: "Collects metrics, logs, and events from AWS resources with real-time insights." },
    { id: "prometheus", name: "Prometheus", icon: FaChartBar, description: "Scalable tool for real-time metrics in cloud-native environments." },
    { id: "grafana", name: "Grafana", icon: FaDatabase, description: "Visualization platform with intuitive dashboards for system health." },
    { id: "kibana", name: "Kibana", icon: FaFileAlt, description: "Log analysis and visualization with the Elastic Stack." },
    { id: "openTelemetry", name: "OpenTelemetry", icon: FaNetworkWired, description: "End-to-end tracing for distributed microservices." },
  ];

  useEffect(() => {
    const unsubscribe = scaleX.onChange((value) => {
      if (value >= 0.95 && !showConfetti) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000); // Confetti for 3 seconds
      }
    });
    return () => unsubscribe();
  }, [scaleX, showConfetti]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ top: "15%", left: "20%" }}></div>
        <div className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse" style={{ top: "30%", left: "70%" }}></div>
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ top: "60%", left: "40%" }}></div>
      </div>

      <main className="p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto text-left">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-12 shadow-lg transform perspective-1000 hover:rotate-x-2 transition-all duration-500 text-center"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-xl"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Observability vs. Monitoring
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-100 mb-4 sm:mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unlock the secrets of system reliability
          </motion.p>
        </motion.section>

        {/* Introduction Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg hover:bg-indigo-900/80 transition-colors duration-300"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("intro")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">Core Concept</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            In today&apos;s fast-paced digital landscape, ensuring system reliability is critical across industries. Organizations strive to deliver seamless user experiences while maintaining operational transparency. To meet these demands, robust monitoring and observability strategies are essential. Though often confused, monitoring and observability serve distinct yet complementary roles. Monitoring focuses on tracking predefined metrics to detect known issues, such as CPU usage spikes or error rates crossing a threshold. Observability, however, goes deeper, enabling teams to explore a system&apos;s internal state to diagnose complex, unpredictable problems by correlating metrics, logs, and traces.
          </p>
          {hoveredSection === "intro" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Monitoring tells "what", observability explains "why"!
            </motion.div>
          )}
        </motion.div>

        {/* Monitoring vs. Observability: A Clear Distinction Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg hover:bg-indigo-900/80 transition-colors duration-300"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("distinction")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">Monitoring vs. Observability: A Clear Distinction</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span className="text-indigo-400">📊</span>
              <div>
                <h3 className="font-semibold text-indigo-200">Monitoring</h3>
                <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
                  <li><strong>Purpose:</strong> Tracks known issues using predefined metrics and alerts.</li>
                  <li><strong>Scope:</strong> Focuses on specific, expected failure modes (e.g., server downtime, high latency).</li>
                  <li><strong>Approach:</strong> Reactive; answers &quot;what&quot; is happening (e.g., &quot;the API is slow&quot;).</li>
                  <li><strong>Example:</strong> Alerting when a website&apos;s response time exceeds 500ms or when error rates increase by 10%.</li>
                  <li><strong>Limitations:</strong> Struggles with unknown issues or complex systems where root causes aren&apos;t predefined.</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-400">🔍</span>
              <div>
                <h3 className="font-semibold text-indigo-200">Observability</h3>
                <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
                  <li><strong>Purpose:</strong> Provides deep insights into a system’s behavior to understand both known and unknown issues.</li>
                  <li><strong>Scope:</strong> Captures comprehensive data (metrics, logs, traces) to explore dynamic, unpredictable failures.</li>
                  <li><strong>Approach:</strong> Proactive; answers &quot;why&quot; something is happening (e.g., &quot;the API is slow due to a database bottleneck&quot;).</li>
                  <li><strong>Example:</strong> Tracing a user request across microservices to identify a third-party API causing delays or analyzing logs to uncover an intermittent authentication failure.</li>
                  <li><strong>Strengths:</strong> Enables root-cause analysis in complex, distributed systems.</li>
                </ul>
              </div>
            </div>
          </div>
          {hoveredSection === "distinction" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Monitoring is reactive, observability is proactive!
            </motion.div>
          )}
        </motion.div>

        {/* Modern Tech Stack for Observability Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg hover:bg-indigo-900/80 transition-colors duration-300"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("tech-stack")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">Modern Tech Stack for Observability</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            To achieve robust observability, organizations rely on a modern tech stack tailored to collect, analyze, and visualize system data. Here’s how leading tools contribute:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tool, index) => (
              <motion.div
                key={tool.id}
                className="bg-gray-900/80 p-4 rounded-lg flex flex-col items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setExpandedNode(expandedNode === tool.id ? null : tool.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <tool.icon className="text-yellow-300 text-3xl" />
                <h3 className="font-semibold text-indigo-200">{tool.name}</h3>
                {expandedNode === tool.id && (
                  <motion.p
                    className="text-indigo-100 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {tool.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
          {hoveredSection === "tech-stack" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Tools like these power 80% of observability setups!
            </motion.div>
          )}
        </motion.div>

        {/* Why Observability Matters Card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg hover:bg-indigo-900/80 transition-colors duration-300"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("why")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-300 mb-4 glow-text">Why Observability Matters</h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            While monitoring ensures systems stay operational by catching known issues, observability empowers teams to understand and resolve unpredictable problems in dynamic environments. Together, they build resilient systems that not only stay online but also adapt to evolving challenges. By leveraging tools like SignalFX, Prometheus, Grafana, Kibana, and OpenTelemetry, organizations can create transparent, intelligent systems that maintain user trust and operational efficiency.
          </p>
          {hoveredSection === "why" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover to see the power of insight!
            </motion.div>
          )}
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-400 text-xs mt-4 text-center">
          Last updated: July 24, 2025, 10:52 PM EEST
        </p>
      </main>
    </div>
  );
}