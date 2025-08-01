"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaLink, FaSatelliteDish } from "react-icons/fa";

export default function SignalFxOverviewPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
  };
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  const cards = [
    {
      icon: FaChartLine,
      title: "Real‑Time Metrics",
      summary: "Stream and visualise high‑frequency metrics at scale.",
      details: (
        <>
          <p className="mb-2 text-sm sm:text-base">
            Splunk Observability Cloud ingests and stores metrics with second‑level
            granularity. This enables real‑time dashboards and detectors that
            capture spikes in latency, error rates and resource utilisation. It
            integrates golden‑signal monitoring to keep SREs aware of latency,
            traffic, errors and saturation.
          </p>
          <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
            <li>High‑frequency streaming metrics for CPU, memory, custom KPIs.</li>
            <li>Dashboards update in real time for rapid triage.</li>
            <li>Supports complex calculations through SignalFlow detectors.</li>
          </ul>
        </>
      ),
    },
    {
      icon: FaLink,
      title: "Logs & Traces Correlation",
      summary: "Automatically correlate logs with metrics and traces.",
      details: (
        <>
          <p className="mb-2 text-sm sm:text-base">
            Observability Cloud accelerates troubleshooting by previewing metrics
            and traces alongside your log data in Splunk search.It
            automatically correlates and analyses logs at petabyte scale
            alongside real‑time metrics and traces to identify root causes
            faster.
          </p>
          <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
            <li>See logs in context when exploring a metric or trace.</li>
            <li>Jump directly from an alert to related logs for faster RCA.</li>
            <li>Analyse petabyte‑scale log data without compromising speed.</li>
          </ul>
        </>
      ),
    },
    {
      icon: FaSatelliteDish,
      title: "OpenTelemetry Integration",
      summary: "Collect telemetry data in any format without vendor lock‑in.",
      details: (
        <>
          <p className="mb-2 text-sm sm:text-base">
            Splunk Observability Cloud supports OpenTelemetry, enabling you to
            collect, access and analyse unstructured data from any source.
            This flexibility avoids vendor lock‑in and makes it easy to instrument
            services across heterogeneous environments.
          </p>
          <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
            <li>Use open standards to send metrics, logs and traces.</li>
            <li>Integrate with third‑party storage or analytics platforms.</li>
            <li>Scale collection pipelines as your system grows.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
          style={{ top: "20%", left: "25%" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse"
          style={{ top: "35%", left: "70%" }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse"
          style={{ top: "65%", left: "40%" }}
        ></div>
      </div>

      <main className="p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-12 shadow-lg text-center"
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
            Splunk Observability Cloud
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-100"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unified metrics, logs & traces for modern SRE
          </motion.p>
        </motion.section>

        {/* Introduction */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Why Observability Cloud?
          </h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Splunk Observability Cloud, born from SignalFx, provides full‑stack
            visibility into your services and infrastructure. It streams metrics
            with second‑level granularity, correlates them with logs and traces
            and leverages open standards for data collection. This unified view
            accelerates troubleshooting and helps maintain your reliability goals.
          </p>
        </motion.div>

        {/* Guiding Principles */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Guiding Principles
          </h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Stream everything:</strong> capture metrics, logs and traces from all services.</li>
            <li><strong>Correlate data:</strong> link metrics with traces and logs for rapid root cause analysis.</li>
            <li><strong>Use open standards:</strong> instrument via OpenTelemetry to avoid vendor lock‑in.</li>
            <li><strong>Automate alerting:</strong> build detectors and dashboards to surface issues early.</li>
            <li><strong>Continuously refine:</strong> iterate on SLOs, error budgets and dashboard design as your system evolves.</li>
          </ul>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="relative cursor-pointer h-60 sm:h-64 perspective-1000"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              onClick={() =>
                setFlippedCard(flippedCard === index ? null : index)
              }
            >
              {/* Front */}
              <motion.div
                className="absolute inset-0 bg-gray-900/80 backdrop-blur-md rounded-lg p-4 flex flex-col items-center justify-center text-center"
                variants={flipVariants}
                animate={flippedCard === index ? "back" : "front"}
                style={{ transformStyle: "preserve-3d" }}
              >
                <card.icon className="text-3xl text-yellow-300 mb-2" />
                <h3 className="font-semibold text-indigo-200 mb-1">
                  {card.title}
                </h3>
                <p className="text-indigo-100 text-sm">
                  {card.summary}
                </p>
              </motion.div>
              {/* Back */}
              <motion.div
                className="absolute inset-0 bg-gray-800/90 backdrop-blur-md rounded-lg p-4 overflow-y-auto text-left"
                variants={flipVariants}
                animate={flippedCard === index ? "front" : "back"}
                style={{ transformStyle: "preserve-3d", rotateY: "180deg" }}
              >
                {card.details}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}