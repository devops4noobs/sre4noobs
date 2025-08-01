"use client";

/*
 * Redesigned SignalFx (Splunk Observability Cloud) overview
 *
 * This page provides a high‑level introduction to the capabilities of
 * Splunk Observability Cloud (formerly SignalFx).  It follows the
 * interactive pattern used throughout the site: a hero section,
 * guiding principles and a set of flip cards that summarise key
 * features.  The content draws on public Splunk resources describing
 * how Observability Cloud correlates logs, metrics and traces to
 * accelerate troubleshooting and how it supports OpenTelemetry
 * instrumentation【727614261722715†L769-L785】.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaLink,
  FaCloud,
  FaFileAlt,
  FaStream
} from "react-icons/fa";

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

  // Feature cards summarising key capabilities.  The back of each card
  // lists just a few bullet points rather than long paragraphs to keep
  // scrolling to a minimum.
  const cards = [
    {
      icon: FaChartLine,
      title: "Real‑Time Metrics",
      summary: "Stream and visualise high‑frequency metrics at scale.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Second‑level granularity for CPU, memory and custom KPIs.</li>
          <li>Dashboards update live for rapid triage.</li>
          <li>Compute complex calculations via SignalFlow detectors.</li>
        </ul>
      ),
    },
    {
      icon: FaLink,
      title: "Logs & Traces Correlation",
      summary: "Automatically correlate logs with metrics and traces.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Preview logs alongside metrics and traces for context.</li>
          <li>Jump straight from an alert to related logs or spans.</li>
          <li>Correlate and analyse petabyte‑scale data at speed.</li>
        </ul>
      ),
    },
    {
      icon: FaCloud,
      title: "AWS CloudWatch Integration",
      summary: "Ingest metrics and logs from AWS services via CloudWatch.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Enable CloudWatch to capture logs and metrics from EC2, Lambda, API Gateway and more.</li>
          <li>Use Metric Streams to deliver real‑time metrics to Splunk without polling.</li>
          <li>Send log data via Kinesis Data Firehose for reliable batching and delivery to Splunk.</li>
        </ul>
      ),
    },
  ];

  // Describe the three pillars of observability.  Each entry contains a title,
  // a brief description broken into bullet points and an icon.  Presenting
  // these concepts separately makes it easier for newcomers to digest the
  // difference between metrics, logs and traces without scrolling through
  // paragraphs.
  const concepts = [
    {
      icon: FaChartLine,
      title: "Metrics",
      description: [
        "Numerical measurements like CPU, memory and latency.",
        "Collected at regular intervals to show trends over time.",
        "Used to detect spikes, drops and saturation." 
      ],
    },
    {
      icon: FaFileAlt,
      title: "Logs",
      description: [
        "Structured or unstructured messages emitted by services.",
        "Provide context for errors, warnings and informational events.",
        "Useful for root cause analysis and auditing." 
      ],
    },
    {
      icon: FaStream,
      title: "Traces",
      description: [
        "Distributed spans that follow a request through your system.",
        "Show call relationships and latency at each hop.",
        "Allow you to pinpoint where time is spent." 
      ],
    },
  ];


  // A simple step‑by‑step overview to help newcomers understand how to adopt
  // Observability Cloud.  Each step includes a short description.
  const overviewSteps = [
    {
      title: "Collect",
      description:
        "Enable Amazon CloudWatch metrics, logs and traces across your AWS services.",
    },
    {
      title: "Stream",
      description:
        "Use Metric Streams and Kinesis Firehose to send high‑frequency telemetry to Observability Cloud.",
    },
    {
      title: "Visualise",
      description:
        "Build dashboards and detectors that highlight anomalies in real‑time.",
    },
    {
      title: "Iterate",
      description:
        "Continuously refine metrics, dashboards and alert rules based on incident reviews.",
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
            <li><strong>Leverage AWS integrations:</strong> ingest metrics and logs via CloudWatch and Metric Streams.</li>
            <li><strong>Automate alerting:</strong> build detectors and dashboards to surface issues early.</li>
            <li><strong>Continuously refine:</strong> iterate on SLOs, error budgets and dashboard design as your system evolves.</li>
          </ul>
        </motion.div>

        {/* Key Concepts */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Key Concepts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {concepts.map((concept, idx) => (
              <div
                key={idx}
                className="bg-indigo-800/80 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition duration-300"
              >
                <concept.icon className="text-3xl text-yellow-300 mb-2" />
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {concept.title}
                </h3>
                <ul className="list-disc list-inside text-indigo-100 text-sm sm:text-base space-y-1">
                  {concept.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Getting Started / Overview Steps */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Getting Started
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {overviewSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-indigo-800/80 rounded-lg p-4 flex flex-col items-center text-center shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="font-semibold text-yellow-200 mb-2">
                  {step.title}
                </h3>
                <p className="text-indigo-100 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Ingest Data from AWS */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Ingest Data from AWS
          </h2>
          <p className="text-indigo-100 mb-2 text-sm sm:text-base">
            Splunk Observability Cloud integrates natively with Amazon CloudWatch to
            pull metrics, logs and traces from your AWS environment.  A common
            pattern is to stream CloudWatch Logs to Splunk via Amazon Kinesis
            Data Firehose, which batches, compresses and reliably delivers
            your log data.
          </p>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base mb-3">
            <li>
              <strong>Enable CloudWatch:</strong> create log groups for your
              applications and ensure all AWS services (EC2, Lambda, API
              Gateway) send logs and metrics to CloudWatch.
            </li>
            <li>
              <strong>Create a Firehose stream:</strong> in the AWS console, set
              up an Amazon Kinesis Data Firehose delivery stream sourcing from
              your CloudWatch Logs group.  Choose Splunk as the destination
              and provide your HEC endpoint and token.
            </li>
            <li>
              <strong>Configure metric streams:</strong> under CloudWatch
              Metrics → Streams, create a Metric Stream and select Splunk
              Observability as the partner destination.  Metric streams
              deliver near‑real‑time metrics without polling.
            </li>
            <li>
              <strong>Verify ingestion:</strong> once configured, logs and
              metrics will appear in Splunk Observability Cloud where you can
              build detectors and dashboards.
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-gray-400">
            Kinesis Firehose simplifies log delivery and handles aggregation,
            compression and secure transport automatically, eliminating the
            need to build custom pipelines.
          </p>
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
              <strong>Splunk Observability Cloud Docs:</strong> explore official guides on streaming, dashboards and alerting.
            </li>
            <li>
              <strong>AWS CloudWatch Documentation:</strong> discover how to collect logs, metrics and traces from AWS services.
            </li>
            <li>
              <strong>SignalFlow Library:</strong> browse reusable detector patterns and sample code.
            </li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}