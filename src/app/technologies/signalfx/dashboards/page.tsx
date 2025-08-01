"use client";

/*
 * Redesigned SignalFx dashboards page
 *
 * This page explains why dashboards are a cornerstone of observability and
 * demonstrates best practices for building them.  It adopts an interactive
 * layout with a hero section, guiding principles and flip cards that
 * showcase common dashboard scenarios.  Content highlights the role of
 * dashboards in turning raw metrics, logs and traces into actionable
 * visuals, emphasising clarity, real‑time insights and collaboration.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartBar,
  FaBug,
  FaBriefcase,
  FaChartLine,
  FaListUl,
  FaTachometerAlt,
  FaTable
} from "react-icons/fa";

export default function DashboardsRedesignedPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
  };
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  // Cards summarising common dashboard scenarios.  The back of each card
  // contains only a few bullets to reduce scrolling.
  const cards = [
    {
      icon: FaChartBar,
      title: "Service Health Monitoring",
      summary: "Visualise resource usage and detect bottlenecks.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Monitor CPU, memory and network metrics.</li>
          <li>Use heatmaps and time series charts to spot trends.</li>
          <li>Track SLO status and error budgets.</li>
        </ul>
      ),
    },
    {
      icon: FaBug,
      title: "Incident Investigation",
      summary: "Correlate metrics, logs and traces to find root causes.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Overlay metrics with traces and logs for context.</li>
          <li>Filter logs by request ID or error codes.</li>
          <li>Document hypotheses and anomalies directly on the dashboard.</li>
        </ul>
      ),
    },
    {
      icon: FaBriefcase,
      title: "Business Reporting",
      summary: "Share reliability metrics with non‑technical stakeholders.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Summarise uptime, request volume and error rates.</li>
          <li>Highlight business impact of incidents (e.g., orders lost).</li>
          <li>Export or embed dashboards for executive consumption.</li>
        </ul>
      ),
    },
  ];

  // Define basic chart types that make up a dashboard.  Each item includes
  // an icon and a short description to give newcomers a sense of which
  // visualisations to choose.  Keeping the descriptions short avoids
  // scrolling within the cards.
  const anatomyItems = [
    {
      icon: FaChartLine,
      title: "Line Chart",
      description: "Track a metric over time to spot spikes and dips.",
    },
    {
      icon: FaListUl,
      title: "Table",
      description: "Display raw log events or aggregated statistics.",
    },
    {
      icon: FaTachometerAlt,
      title: "Gauge",
      description: "Show current value relative to a threshold (e.g., CPU%).",
    },
    {
      icon: FaTable,
      title: "Heatmap",
      description: "Visualise distributions across multiple dimensions.",
    },
  ];

  // SignalFlow example demonstrating how to compute a p95 latency metric.  A
  // simple code snippet helps users see how dashboards tie back to data.
  const sampleQuery = `data('latency.ms').percentile(95).publish(label='p95 latency')`;

  // Core data types and examples to help beginners understand what to include
  // in a dashboard.  Each item will be displayed in its own box.
  const essentials = [
    {
      title: "Metrics",
      points: [
        "CPU utilisation, memory usage and network I/O",
        "Latency, throughput and error rates (golden signals)",
        "Custom business KPIs (e.g., orders per minute)"
      ],
    },
    {
      title: "Logs",
      points: [
        "Structured application and system logs",
        "Request IDs and error codes for correlation",
        "Audit trails for compliance and security"
      ],
    },
    {
      title: "Traces",
      points: [
        "Spans showing request flow through services",
        "Duration and timing information for each span",
        "Annotations for key events and errors"
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Background particles */}
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
        {/* Hero section */}
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
            Dashboards
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-100"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform data into actionable insights
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
            Why Dashboards?
          </h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Dashboards in Splunk Observability Cloud aggregate metrics, logs and
            traces into real‑time visualisations. They enable teams to monitor
            performance, detect trends and collaborate across technical and
            non‑technical stakeholders. Effective dashboards turn complex data
            into clear, actionable stories that drive reliability and business
            outcomes.
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
            <li><strong>Focus on key metrics:</strong> highlight critical indicators like latency, error rate and resource usage.</li>
            <li><strong>Integrate data sources:</strong> pull metrics, logs and traces into one view for comprehensive context.</li>
            <li><strong>Design for clarity:</strong> use simple visualisations and avoid clutter; emphasise SLO status.</li>
            <li><strong>Enable real‑time monitoring:</strong> refresh data continuously to catch issues as they emerge.</li>
            <li><strong>Support collaboration:</strong> build dashboards for both technical teams and business stakeholders.</li>
            <li><strong>Iterate and refine:</strong> update dashboards based on incident reviews and evolving priorities.</li>
          </ul>
        </motion.div>

        {/* Dashboard Anatomy */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Dashboard Anatomy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {anatomyItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-indigo-800/80 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition duration-300"
              >
                <item.icon className="text-3xl text-yellow-300 mb-2" />
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {item.title}
                </h3>
                <p className="text-indigo-100 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard Essentials */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Dashboard Essentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {essentials.map((item) => (
              <div
                key={item.title}
                className="bg-indigo-800/80 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {item.title}
                </h3>
                <ul className="list-disc list-inside text-indigo-100 text-sm sm:text-base space-y-1">
                  {item.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sample Panel Query */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Sample Panel Query
          </h2>
          <p className="text-indigo-100 mb-2 text-sm sm:text-base">
            This SignalFlow example computes the 95th percentile latency for
            HTTP requests.  You can use it directly in a dashboard panel to
            visualise slow requests:
          </p>
          <pre className="bg-gray-900/90 rounded-md p-3 text-xs sm:text-sm overflow-x-auto text-indigo-100">
{sampleQuery}
          </pre>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="relative cursor-pointer h-60 sm:h-64 perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
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
                style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
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
                style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                {card.details}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mt-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Additional Resources
          </h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-2 text-sm sm:text-base">
            <li>
              <strong>Dashboard Design Guide:</strong> learn how to choose the right charts and layouts for clarity.
            </li>
            <li>
              <strong>Golden Signals Reference:</strong> review latency, traffic, errors and saturation metrics.
            </li>
            <li>
              <strong>Splunk Observability Dashboards:</strong> explore pre‑built templates and examples.
            </li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}