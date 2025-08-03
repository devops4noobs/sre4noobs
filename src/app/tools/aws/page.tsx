"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaDatabase,
  FaCode,
  FaRedoAlt
} from "react-icons/fa";

export default function AWSObservabilityPage() {
  // Track which card is flipped (null means none)
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  // Variants for card entrance animations
  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
  };

  // Variants for flip animation
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  // Data for each card: title, summary and concise content.  Long paragraphs
  // have been replaced with a few bullets to reduce scroll.
  const cards = [
    {
      icon: FaCloud,
      title: "Export Logs to S3",
      summary:
        "Move CloudWatch logs into Amazon S3 for durable, low‑cost storage and analytics.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Capture logs from EC2, Lambda and API Gateway via CloudWatch.</li>
          <li>Deliver logs to S3 using Kinesis Firehose or Lambda for long‑term storage.</li>
          <li>Archive logs cheaply and satisfy compliance requirements.</li>
        </ul>
      ),
    },
    {
      icon: FaDatabase,
      title: "Why Athena?",
      summary: "Run familiar SQL queries on your log data without managing servers.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Serverless engine reads data directly from S3.</li>
          <li>Use ANSI SQL to join, filter and aggregate logs.</li>
          <li>Pay only for data scanned; no infrastructure to manage.</li>
        </ul>
      ),
    },
    {
      icon: FaCode,
      title: "Example Query",
      summary: "Identify the most common client and server errors in your logs.",
      details: (
        <>
          <pre className="bg-gray-900 rounded-md p-2 text-xs sm:text-sm overflow-x-auto">
{`SELECT status AS status_code,
       COUNT(*) AS count
FROM logs_table
WHERE status LIKE '4%' OR status LIKE '5%'
GROUP BY status
ORDER BY count DESC
LIMIT 10;`}
          </pre>
          <p className="mt-2 text-xs sm:text-sm text-gray-400">
            This query surfaces the most frequent 4xx and 5xx error codes so you can focus on top issues.
          </p>
        </>
      ),
    },
  ];

  // Practical tips for optimising your AWS observability pipeline.  Each
  // string highlights a best practice without overwhelming the reader.
  const tips = [
    "Partition data by date/time and service to minimise query scans.",
    "Convert raw logs to Parquet or ORC for efficient columnar storage.",
    "Use AWS Glue to catalog schemas and maintain table definitions.",
    "Apply compression (e.g., Snappy) to lower storage and query costs.",
    "Regularly clean up old partitions to control S3 storage spend."
  ];

  // A second SQL example illustrating how to compute an overall error rate.  This
  // demonstrates how Athena can calculate derived metrics beyond simple counts.
  const advancedQuery = `SELECT\n  SUM(CASE WHEN status LIKE '4%' THEN 1 ELSE 0 END) AS client_errors,\n  SUM(CASE WHEN status LIKE '5%' THEN 1 ELSE 0 END) AS server_errors,\n  COUNT(*) AS total_requests,\n  (SUM(CASE WHEN status LIKE '4%' OR status LIKE '5%' THEN 1 ELSE 0 END) / COUNT(*)) * 100 AS error_rate_percent\nFROM logs_table\nWHERE time BETWEEN date_trunc('day', CURRENT_TIMESTAMP) - INTERVAL '1' DAY AND date_trunc('day', CURRENT_TIMESTAMP)\n;`;

  // A step‑by‑step overview of the observability pipeline on AWS.  Each
  // step includes a title and short description to guide beginners.
  const pipelineSteps = [
    {
      title: "Collect",
      description: "Gather metrics and logs from AWS services using CloudWatch.",
    },
    {
      title: "Export",
      description: "Stream logs to Amazon S3 via Kinesis Firehose or Lambda for long‑term storage.",
    },
    {
      title: "Query",
      description: "Use Amazon Athena to run SQL queries on your S3 log archive.",
    },
    {
      title: "Visualise",
      description: "Build dashboards or reports with tools like QuickSight or Grafana.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Animated background particles for subtle motion */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
          style={{ top: "20%", left: "20%" }}
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
            AWS Observability
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-100"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Harness CloudWatch, S3 & Athena for insights
          </motion.p>
        </motion.section>

        {/* Introduction card */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Why Monitor with AWS?
          </h2>
          <p className="text-indigo-100 mb-4 text-sm sm:text-base">
            Amazon CloudWatch collects metrics, logs and events from your AWS
            resources. While CloudWatch provides real‑time insights, exporting
            logs to S3 and querying them with Athena unlocks deep analytics, long
            retention and flexible reporting.
          </p>
        </motion.div>

        {/* Guiding Principles card */}
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
            <li><strong>Collect broadly:</strong> capture logs from all services and environments.</li>
            <li><strong>Define a schema:</strong> structure data for Athena using Glue tables and Parquet.</li>
            <li><strong>Optimise queries:</strong> filter by time and status codes to reduce data scanned.</li>
            <li><strong>Monitor costs:</strong> track the amount of data scanned and set query budgets.</li>
            <li><strong>Automate pipelines:</strong> use Kinesis Firehose or Lambda to deliver logs continuously.</li>
          </ul>
        </motion.div>

        {/* Tips & Tricks */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Tips & Tricks
          </h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            {tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </motion.div>

        {/* Pipeline Overview */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            AWS Observability Pipeline
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-indigo-800/80 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 text-center"
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

        {/* Advanced Error Rate Query */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            Advanced Error Rate Query
          </h2>
          <p className="text-indigo-100 mb-2 text-sm sm:text-base">
            Use this Athena SQL to calculate the total number of requests along
            with the count of 4xx and 5xx errors and compute the overall error
            rate percentage for the past day:
          </p>
          <pre className="bg-gray-900/90 rounded-md p-3 text-xs sm:text-sm overflow-x-auto text-indigo-100">
{advancedQuery}
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
              {/* Front side */}
              <motion.div
                className="absolute inset-0 bg-gray-900/80 backdrop-blur-md rounded-lg p-4 flex flex-col items-center justify-center text-center"
                variants={flipVariants}
                animate={flippedCard === index ? "back" : "front"}
                style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                {/* Flip indicator */}
                <div className="absolute top-2 right-2">
                  <FaRedoAlt className="text-yellow-300/60 text-sm animate-pulse" />
                </div>
                <card.icon className="text-3xl text-yellow-300 mb-2" />
                <h3 className="font-semibold text-indigo-200 mb-1">
                  {card.title}
                </h3>
                <p className="text-indigo-100 text-sm">
                  {card.summary}
                </p>
                <p className="text-yellow-300/80 text-xs mt-2">Click to flip</p>
              </motion.div>
              {/* Back side */}
              <motion.div
                className="absolute inset-0 bg-gray-800/90 backdrop-blur-md rounded-lg p-4 overflow-y-auto"
                variants={flipVariants}
                animate={flippedCard === index ? "front" : "back"}
                style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                {/* Flip back indicator */}
                <div className="absolute top-2 right-2">
                  <FaRedoAlt className="text-yellow-300/60 text-sm animate-pulse" />
                </div>
                {card.details}
                <p className="text-yellow-300/80 text-xs mt-2 text-center">Click to flip back</p>
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
              <strong>AWS Observability Workshop:</strong> follow hands‑on tutorials on CloudWatch, S3 and Athena.
            </li>
            <li>
              <strong>Athena SQL Guide:</strong> learn advanced querying techniques and optimisation tips.
            </li>
            <li>
              <strong>CloudWatch Log Insights:</strong> use built‑in query language for real‑time investigations.
            </li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}