"use client";

/*
 * Key Observability Metrics page for SignalFx.
 *
 * This page introduces common metrics that SREs monitor to ensure
 * service reliability.  It follows the same interactive design as
 * other pages on the site: a hero section, an illustration, an
 * introductory explanation, guiding principles and a set of flip
 * cards for each metric.  SignalFlow code examples demonstrate
 * how to calculate error rates, latency percentiles and resource
 * utilisation.  Definitions draw on articles describing the four
 * golden signals—latency, errors, traffic and saturation—and
 * emphasise why tail latency and resource headroom matter for
 * reliability【833426024734514†L117-L127】【833426024734514†L134-L140】【833426024734514†L146-L154】【545086499298335†L86-L106】.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaTimesCircle,
  FaClock,
  FaTachometerAlt,
  FaMicrochip,
  FaMemory,
  FaChartLine,
  FaNetworkWired,
} from "react-icons/fa";

export default function SignalFxMetricsPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
  };
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  // Define cards for each metric.  Each card contains an icon,
  // title, summary and detailed bullet list.  Bullet points are
  // concise to minimise scrolling.
  const cards = [
    {
      icon: FaExclamationTriangle,
      title: "HTTP 4xx Errors",
      summary: "Client errors like 404/403 indicate invalid requests.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Track percentage of requests returning 400–499 status codes.</li>
          <li>Helps identify broken links, authentication issues and user mistakes.</li>
          <li>Spike in 4xx often points to misconfigured endpoints or API misuse.</li>
        </ul>
      ),
    },
    {
      icon: FaTimesCircle,
      title: "HTTP 5xx Errors",
      summary: "Server errors like 500/502 indicate backend failures.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Measure how many requests return 500–599 status codes.</li>
          <li>High 5xx rates suggest bugs, resource exhaustion or dependency failures.</li>
          <li>Alerts on 5xx rates can trigger incident response before customers notice.</li>
        </ul>
      ),
    },
    {
      icon: FaClock,
      title: "Latency",
      summary: "Time taken to process a request or operation.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Measure latency separately for successful and error responses.</li>
          <li>Use percentiles (p50, p95, p99) to understand typical and tail latencies.</li>
          <li>Set SLOs around acceptable latency thresholds for your service.</li>
        </ul>
      ),
    },
    {
      icon: FaTachometerAlt,
      title: "Traffic & Throughput",
      summary: "Volume of requests or transactions per unit time.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Examples: HTTP requests/second, messages/second.</li>
          <li>Helps capacity planning and scaling decisions.</li>
          <li>Compare traffic against error and latency metrics to spot correlation.</li>
        </ul>
      ),
    },
    {
      icon: FaMicrochip,
      title: "CPU Utilisation",
      summary: "Percentage of CPU resources consumed.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Track host and container CPU usage over time.</li>
          <li>High CPU can increase response time and cause throttling.</li>
          <li>Monitor spike patterns to tune autoscaling policies.</li>
        </ul>
      ),
    },
    {
      icon: FaMemory,
      title: "Memory Utilisation",
      summary: "Amount of memory used by your services.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Monitor resident set size (RSS) or container memory usage.</li>
          <li>Memory leaks or unbounded caches lead to exhaustion and crashes.</li>
          <li>Set alerts before hitting memory limits to avoid OOM kills.</li>
        </ul>
      ),
    },
    {
      icon: FaChartLine,
      title: "Saturation",
      summary: "How close your resources are to 100% capacity.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Includes CPU, memory, disk, network and thread pool utilisation.</li>
          <li>Performance degrades before full utilisation—add headroom.</li>
          <li>Track saturation to prevent cascading failures and slowdowns.</li>
        </ul>
      ),
    },
    {
      icon: FaNetworkWired,
      title: "Network I/O",
      summary: "Bandwidth and packet metrics for network interfaces.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Measure bytes in/out, packets per second and error rates.</li>
          <li>Helps diagnose congestion, packet loss and throttling.</li>
          <li>Correlate with latency and throughput issues.</li>
        </ul>
      ),
    },
  ];

  // Example SignalFlow queries to compute these metrics.  Presented in preformatted
  // blocks for easy copy/paste.
  const examples = [
    {
      title: "Compute Error Rate (4xx + 5xx)",
      code: `E = data('http_status.count', filter=filter('Status', '4*')).sum()\nG = data('http_status.count', filter=filter('Status', '5*')).sum()\nT = data('http_status.count').sum()\nerror_rate = ((E + G) / T * 100).publish(label='ErrorRate')\ndetect(when(error_rate > 5, '5m')).publish('HighErrorRate')`,
    },
    {
      title: "Latency Percentiles",
      code: `latencies = data('request.latency').histogram()\np95 = latencies.percentile(95).publish(label='p95Latency')\np99 = latencies.percentile(99).publish(label='p99Latency')\ndetect(when(p99 > 500, '5m')).publish('HighLatency')`,
    },
    {
      title: "CPU Utilisation Alert",
      code: `cpu = data('cpu.utilization').mean().publish(label='CPU')\ndetect(when(cpu > 80, '10m')).publish('HighCPU')`,
    },
    {
      title: "Memory Utilisation Alert",
      code: `mem = data('memory.used_percent').mean().publish(label='Memory')\ndetect(when(mem > 90, '10m')).publish('HighMemory')`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ top: '20%', left: '25%' }} />
        <div className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse" style={{ top: '35%', left: '70%' }} />
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ top: '65%', left: '40%' }} />
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
            Key Observability Metrics
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-100"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Monitor what matters: errors, latency, traffic, resources and more
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
            Why Metrics Matter
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base">
            Observability starts with measuring the right things. The four golden signals—latency,
            errors, traffic and saturation capture how your service behaves from the user’s
            perspective.
            Complement these with host‑level metrics like CPU and memory utilisation to catch
            resource bottlenecks before they become incidents. This page summarises common metrics
            and provides example SignalFlow queries to compute them.
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
            <li><strong>Define SLOs:</strong> set targets for key metrics based on user experience.</li>
            <li><strong>Watch tail latency:</strong> p95 and p99 latencies tell you how bad things get.</li>
            <li><strong>Correlate metrics:</strong> relate traffic, error and resource metrics to diagnose issues.</li>
            <li><strong>Alert judiciously:</strong> set thresholds based on historical baselines and error budgets.</li>
            <li><strong>Iterate & refine:</strong> regularly review metrics and dashboards during postmortems.</li>
          </ul>
        </motion.div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="relative cursor-pointer h-56 sm:h-60 perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              {/* Front */}
              <motion.div
                className="absolute inset-0 bg-gray-900/80 backdrop-blur-md rounded-lg p-4 flex flex-col items-center justify-center text-center"
                variants={flipVariants}
                animate={flippedCard === index ? 'back' : 'front'}
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <card.icon className="text-3xl text-yellow-300 mb-2" />
                <h3 className="font-semibold text-indigo-200 mb-1">{card.title}</h3>
                <p className="text-indigo-100 text-sm">{card.summary}</p>
              </motion.div>
              {/* Back */}
              <motion.div
                className="absolute inset-0 bg-gray-800/90 backdrop-blur-md rounded-lg p-4 overflow-y-auto text-left"
                variants={flipVariants}
                animate={flippedCard === index ? 'front' : 'back'}
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                {card.details}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* SignalFlow Examples */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mt-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">
            SignalFlow Examples
          </h2>
          <p className="text-indigo-100 mb-3 text-sm sm:text-base">
            These snippets show how to compute common metrics using SignalFlow.  Feel free to adapt
            them to your own metric names and thresholds.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {examples.map((ex, idx) => (
              <div key={idx} className="bg-indigo-800/80 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                <h3 className="font-semibold text-yellow-200 mb-2">{ex.title}</h3>
                <pre className="text-sm text-indigo-100 whitespace-pre-wrap break-words">{ex.code}</pre>
              </div>
            ))}
          </div>
        </motion.div>

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
            <li><strong>Golden Signals:</strong> read more about latency, traffic, errors and saturation.</li>
            <li><strong>SignalFlow Library:</strong> explore reusable detectors and patterns.</li>
            <li><strong>Splunk Observability Guides:</strong> deep dive into dashboards, alerts and analytics.</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}