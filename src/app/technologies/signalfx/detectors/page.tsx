"use client";

/*
 * This page redesigns the SignalFx detectors section of the site to mirror
 * the rich, interactive feel of the SRE vs. DevOps comparison page.  It
 * removes any image dependencies (previously there was a static dashboard
 * illustration) and instead focuses on real‑world detector examples drawn
 * from Splunk Observability Cloud's SignalFlow library and documentation.
 * Each example is presented as an interactive card: the front of the card
 * summarises what the detector does and why it matters; clicking the card
 * flips it over to reveal the underlying SignalFlow program.  These
 * programs are based on production patterns such as HTTP error rate
 * monitoring, sudden CPU spikes, percentile‑based anomalies and
 * historical growth rate detection.  Inline citations in the accompanying
 * markdown file reference the sources for these patterns【826788790116899†L0-L19】【935637609780834†L38-L50】.
 */

import { FaRedoAlt, FaSyncAlt } from "react-icons/fa";
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

  // A collection of real‑world detector examples.  Each object contains
  // a descriptive title, a summary of what it detects, and the
  // corresponding SignalFlow program.  These examples are taken from
  // official documentation and open source libraries【935637609780834†L38-L50】【719436511160230†L45-L56】.
  const detectorsData = [
    {
      name: "HTTP Error Rate",
      description:
        "Monitors client and server error rates for API services and triggers when the error percentage exceeds 5% over a five‑minute window. This helps catch spikes in 4xx/5xx responses before users notice widespread failures.",
      code: `E = data('http_status.count', filter=filter('Status', '4*')).sum().publish(label='4xx')\nG = data('http_status.count', filter=filter('Status', '5*')).sum().publish(label='5xx')\nT = data('http_status.count').sum().publish(label='Total')\nerror_rate = ((E + G) / T * 100).publish(label='ErrorRate')\ndetect(when(error_rate > 5, '5m')).publish('HighErrorRate')\n# Routes alert to PagerDuty for escalation`,
    },
    {
      name: "CPU Sudden Spike",
      description:
        "Compares current CPU utilisation against the recent baseline using mean plus standard deviation. It fires when the last few minutes of data are several standard deviations above the last hour’s average.",
      code: `from signalfx.detectors.against_recent import against_recent\nservice_cpu = data('cpu.utilization').mean(by=['aws_tag_service'])\n# Trigger when the last 5 minutes are ≥3 standard deviations above the previous hour\nagainst_recent.detector_mean_std(service_cpu).publish('cpu_detector')`,
    },
    {
      name: "CPU Percentile Anomaly",
      description:
        "Detects when the current CPU load exceeds a high percentile of the historical distribution. This identifies outliers without requiring fixed thresholds by comparing recent data to the top 1% of the last hour.",
      code: `from signalfx.detectors.against_recent import against_recent\nservice_cpu = data('cpu.utilization').mean(by=['aws_tag_service'])\n# Fires if the last 5 minutes exceed the 99th percentile of the previous hour\nagainst_recent.detector_percentile(service_cpu).publish('cpu_detector')`,
    },
    {
      name: "Historical Growth Rate",
      description:
        "Compares the current window to equivalent windows in previous periods to detect unusual growth. Useful for weekly patterns, it fires when the current period’s mean is more than 20% above the median of past weeks.",
      code: `from signalfx.detectors.against_periods import against_periods\nservice_cpu = data('cpu.utilization').mean(by=['aws_tag_service'])\n# Detect 20 % growth compared with the same window in prior weeks\nagainst_periods.detector_growth_rate(service_cpu).publish('cpu_detector')`,
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

        {/* Real‑world detector cards - Redesigned */}
        <motion.div
          id="detector-insights"
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate={controls}
          variants={cardVariants}
        >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
          Real‑World Examples
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {detectorsData.map((card, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer h-60 sm:h-64 md:h-72 perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
        {/* Front */}
        <motion.div
          className="absolute inset-0 bg-indigo-800/80 backdrop-blur-md rounded-lg p-4 flex flex-col items-start justify-center"
          animate={flippedCard === index ? 'back' : 'front'}
          variants={flipVariants}
          style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="absolute top-2 right-2">
            <FaRedoAlt className="text-yellow-300/70 text-sm animate-pulse" />
          </div>
          <h3 className="text-lg font-semibold text-yellow-200 mb-1">{card.name}</h3>
          <p className="text-sm text-indigo-100 mb-2">{card.description}</p>
          <p className="text-xs text-yellow-300/70 mt-auto">Click to flip</p>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute inset-0 bg-blue-800/90 backdrop-blur-md rounded-lg p-4 overflow-y-auto text-left"
          animate={flippedCard === index ? 'front' : 'back'}
          variants={flipVariants}
          style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="absolute top-2 right-2">
            <FaRedoAlt className="text-yellow-300/70 text-sm animate-pulse" />
          </div>
          <h3 className="text-sm font-semibold text-yellow-200 mb-2">{card.name} Code</h3>
          <pre className="bg-gray-900/80 p-2 rounded text-xs text-indigo-100 whitespace-pre-wrap break-words overflow-auto">
            <code>{card.code}</code>
          </pre>
          <p className="text-xs text-yellow-300/70 text-center mt-2">Click to flip back</p>
        </motion.div>
      </motion.div>
    ))}
  </div>

  <motion.div
    className="text-center mt-4 text-sm text-gray-400"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    💡 Click the cards to flip and see SignalFlow examples.
  </motion.div>
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
            library and tailor these patterns to your own environment.
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