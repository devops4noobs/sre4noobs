"use client";
import { FaSyncAlt } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function DetectorsPage() {
  // Tracks which section is currently hovered, to show contextual tips
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  // Tracks which card is currently flipped (by index); null means none flipped
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  // Animation controls for scroll‑triggered fade‑ins
  const controls = useAnimation();

  // Define motion variants for card entrance animations
  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
  };

  // Define variants used for flip card rotation
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

const detectorsData = [
    {
      name: "HTTP Error Rate",
      description:
        "Monitors client and server error rates for API services and triggers when the error percentage exceeds 5% over a five‑minute window. This helps catch spikes in 4xx/5xx responses before users notice widespread failures.",
      code: `E = data(&apos;http_status.count&apos;, filter=filter(&apos;Status&apos;, &apos;4*&apos;)).sum().publish(label=&apos;4xx&apos;)\nG = data(&apos;http_status.count&apos;, filter=filter(&apos;Status&apos;, &apos;5*&apos;)).sum().publish(label=&apos;5xx&apos;)\nT = data(&apos;http_status.count&apos;).sum().publish(label=&apos;Total&apos;)\nerror_rate = ((E + G) / T * 100).publish(label=&apos;ErrorRate&apos;)\ndetect(when(error_rate > 5, &apos;5m&apos;)).publish(&apos;HighErrorRate&apos;)\n# Routes alert to PagerDuty for escalation`,
    },
    {
      name: "CPU Sudden Spike",
      description:
        "Compares current CPU utilisation against the recent baseline using mean plus standard deviation. It fires when the last few minutes of data are several standard deviations above the last hour’s average【935637609780834†L38-L50】.",
      code: `from signalfx.detectors.against_recent import against_recent\nservice_cpu = data(&apos;cpu.utilization&apos;).mean(by=[&apos;aws_tag_service&apos;])\n# Trigger when the last 5 minutes are ≥3 standard deviations above the previous hour\nagainst_recent.detector_mean_std(service_cpu).publish(&apos;cpu_detector&apos;)`,
    },
    {
      name: "CPU Percentile Anomaly",
      description:
        "Detects when the current CPU load exceeds a high percentile of the historical distribution. This identifies outliers without requiring fixed thresholds by comparing recent data to the top 1% of the last hour【935637609780834†L72-L125】.",
      code: `from signalfx.detectors.against_recent import against_recent\nservice_cpu = data(&apos;cpu.utilization&apos;).mean(by=[&apos;aws_tag_service&apos;])\n# Fires if the last 5 minutes exceed the 99th percentile of the previous hour\nagainst_recent.detector_percentile(service_cpu).publish(&apos;cpu_detector&apos;)`,
    },
    {
      name: "Historical Growth Rate",
      description:
        "Compares the current window to equivalent windows in previous periods to detect unusual growth. Useful for weekly patterns, it fires when the current period’s mean is more than 20% above the median of past weeks【719436511160230†L43-L56】.",
      code: `from signalfx.detectors.against_periods import against_periods\nservice_cpu = data(&apos;cpu.utilization&apos;).mean(by=[&apos;aws_tag_service&apos;])\n# Detect 20 % growth compared with the same window in prior weeks\nagainst_periods.detector_growth_rate(service_cpu).publish(&apos;cpu_detector&apos;)`,
    },
  ];

  // Add scroll event listener to fade in sections when they enter the viewport
  useEffect(() => {
    const handleScroll = () => {
      const insightsSection = document.getElementById("detector-insights");
      if (
        insightsSection &&
        window.scrollY + window.innerHeight > insightsSection.offsetTop
      ) {
        controls.start({ opacity: 1, y: 0 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Subtle animated particles for visual interest */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
          style={{ top: "15%", left: "25%" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse"
          style={{ top: "40%", left: "75%" }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse"
          style={{ top: "70%", left: "35%" }}
        ></div>
      </div>

      <main className="p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto">
        {/* Hero section */}
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
              SignalFx Detectors
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-100">
              Real‑world alerting examples
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-indigo-200 mt-4 sm:mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Harness the power of SignalFlow to stay ahead of incidents.
          </motion.p>
        </motion.section>

        {/* Introduction card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("intro")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">
            What Are Detectors?
          </h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Detectors are SignalFx programs that continuously evaluate metrics and
            emit alerts when certain conditions are met. Unlike static
            thresholding, SignalFlow detectors support rich mathematical
            expressions, comparisons against historical baselines and complex
            boolean logic. Used correctly, they surface actionable issues long
            before they become outages.
          </p>
          {hoveredSection === "intro" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Detectors can combine multiple conditions and time
              windows!
            </motion.div>
          )}
        </motion.div>

        {/* Guiding principles card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("principles")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">
            Guiding Principles
          </h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li>
              <strong>Proactive detection:</strong> surface anomalies before users
              notice.
            </li>
            <li>
              <strong>Real‑time data:</strong> ingest high‑frequency metrics from
              sources like CloudWatch or Splunk Observability Cloud.
            </li>
            <li>
              <strong>Dynamic thresholds:</strong> compare recent values to
              historical baselines rather than relying on fixed numbers.
            </li>
            <li>
              <strong>Actionable alerts:</strong> include context and severity
              levels so responders know exactly what to do.
            </li>
            <li>
              <strong>Integrate workflows:</strong> route alerts to systems like
              PagerDuty or Slack for immediate escalation and collaboration.
            </li>
            <li>
              <strong>Refine continuously:</strong> tune thresholds and logic
              based on false positives and evolving workloads.
            </li>
          </ul>
          {hoveredSection === "principles" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Keep alert noise low by revisiting your rules regularly.
            </motion.div>
          )}
        </motion.div>

        {/* Real‑world detector cards */}
        <motion.div
          id="detector-insights"
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          whileHover="hover"
          onHoverStart={() => setHoveredSection("detectors")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">
            Real‑World Examples
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {detectorsData.map((det, index) => (
              <motion.div
                key={index}
                className="relative w-full h-60 sm:h-64 md:h-72 cursor-pointer perspective-1000"
                onClick={() =>
                  setFlippedCard(flippedCard === index ? null : index)
                }
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Front side: description */}
                <motion.div
                  className="absolute w-full h-full rounded-lg shadow-lg backface-hidden bg-indigo-800/80 flex flex-col items-start justify-between p-4 text-white"
                  animate={flippedCard === index ? "back" : "front"}
                  variants={flipVariants}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <h3 className="font-bold mb-2 text-lg">{det.name}</h3>
                    <p className="text-sm sm:text-base text-indigo-100">
                      {det.description}
                    </p>
                  </div>
                  <p className="text-xs text-indigo-200 mt-2">
                    Click to view the SignalFlow program
                  </p>
                </motion.div>
                {/* Back side: code snippet */}
                <motion.div
                  className="absolute w-full h-full rounded-lg shadow-lg backface-hidden bg-blue-800/80 flex flex-col items-start justify-start p-4 overflow-auto text-white"
                  animate={flippedCard === index ? "front" : "back"}
                  variants={flipVariants}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-bold mb-2 text-lg">{det.name} Code</h3>
                  <pre className="bg-gray-900/70 p-2 rounded-md w-full text-xs sm:text-sm overflow-auto">
                    <code>{det.code}</code>
                  </pre>
                </motion.div>
                {/* Flip button */}
                <motion.button
                  className="absolute bottom-2 left-2 w-8 h-8 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 rounded-full flex items-center justify-center shadow-md transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlippedCard(flippedCard === index ? null : index);
                  }}
                >
                  <FaSyncAlt className="text-lg" />
                </motion.button>
              </motion.div>
            ))}
          </div>
          {hoveredSection === "detectors" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-4 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Click a card to flip between description and code.
            </motion.div>
          )}
        </motion.div>

        {/* Conclusion card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onHoverStart={() => setHoveredSection("conclusion")}
          onHoverEnd={() => setHoveredSection(null)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 pulse-text">
            Putting It All Together
          </h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            These examples demonstrate how flexible SignalFlow is for crafting
            alerts. By leveraging statistical baselines, percentiles and
            comparative periods, you can build detectors that adapt to your
            workload and minimise false alarms. Combine multiple detectors to
            monitor different facets of your system—latency, errors, utilisation
            and growth—and connect them to PagerDuty or Slack for seamless
            incident response. For more inspiration, explore the SignalFlow
            library and tailor these patterns to your own environment【826788790116899†L0-L19】.
          </p>
          {hoveredSection === "conclusion" && (
            <motion.div
              className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Hover tip: Experiment with different windows and thresholds to tune
              sensitivity.
            </motion.div>
          )}
        </motion.div>

        {/* Footer with last updated timestamp */}
        <p className="text-gray-400 text-xs mt-4 text-center">
          Last updated: August&nbsp;1,&nbsp;2025, 10:25&nbsp;PM EEST
        </p>
      </main>
    </div>
  );
}