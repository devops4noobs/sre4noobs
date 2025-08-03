"use client";

/*
 * Redesigned Kubernetes overview page for SREs.
 *
 * This page provides a high‑level introduction to Kubernetes for site
 * reliability engineers.  It follows the interactive design used on
 * other sections: a hero header, guiding principles and flip cards
 * summarising key topics.  No images are used so that content remains
 * focused and concise.  Definitions and recommendations draw on the
 * official Kubernetes documentation and SRE best practices around
 * automation, self‑healing, scalability and observability.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCubes,
  FaLayerGroup,
  FaHeartbeat,
  FaCube,
  FaProjectDiagram,
  FaNetworkWired,
  FaLock,
  FaRedoAlt
} from "react-icons/fa";

export default function KubernetesPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const cardVariants = {
    hidden: { scale: 1, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
  };
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  // Cards summarising high‑level aspects of Kubernetes for SREs.  Each card
  // includes a title, brief summary and a list of details shown on flip.
  const cards = [
    {
      icon: FaCubes,
      title: "Portability & Extensibility",
      summary: "Run workloads anywhere and extend with a vibrant ecosystem.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Deploy consistently across on‑prem, hybrid or public clouds.</li>
          <li>Augment with operators for databases, service meshes and more.</li>
          <li>Large CNCF community provides plugins for monitoring and networking.</li>
        </ul>
      ),
    },
    {
      icon: FaLayerGroup,
      title: "Architecture & Components",
      summary: "Understand control plane and worker node responsibilities.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li><strong>Control Plane:</strong> API server, scheduler, controller manager and etcd coordinate cluster state.</li>
          <li><strong>Workers:</strong> kubelet runs pods, container runtime executes containers, kube‑proxy handles networking.</li>
          <li>Master‑worker model enables self‑healing and declarative desired state.</li>
        </ul>
      ),
    },
    {
      icon: FaHeartbeat,
      title: "Benefits for SREs",
      summary: "Automate, self‑heal and scale with reliability in mind.",
      details: (
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Automatic pod restarts and rescheduling reduce toil.</li>
          <li>Horizontal autoscaling adapts to demand and protects SLOs.</li>
          <li>Integrates with Prometheus, Grafana and other observability tools.</li>
          <li>Resource optimisation lowers costs and improves availability.</li>
        </ul>
      ),
    },
  ];

  // Core building blocks of Kubernetes workloads.  Separate section so
  // beginners can see the difference between containers, pods, services
  // and deployments at a glance.
  const primitives = [
    {
      icon: FaCube,
      title: "Containers & Pods",
      points: [
        "Containers package code and dependencies for consistency.",
        "Pods group one or more containers and share network/storage.",
        "Kubernetes replaces failed pods automatically (self‑healing).",
      ],
    },
    {
      icon: FaProjectDiagram,
      title: "Deployments & StatefulSets",
      points: [
        "Deployments manage replicas, rollouts and rollbacks for stateless apps.",
        "StatefulSets provide stable identities and persistent volumes for databases.",
        "Use rolling updates or canary patterns to minimise disruption.",
      ],
    },
    {
      icon: FaNetworkWired,
      title: "Services & Ingress",
      points: [
        "Services expose pods internally or externally and load balance traffic.",
        "ClusterIP, NodePort and LoadBalancer types support different networking needs.",
        "Ingress controllers route HTTP(S) traffic and enable TLS termination.",
      ],
    },
    {
      icon: FaLock,
      title: "ConfigMaps & Secrets",
      points: [
        "ConfigMaps store non‑sensitive configuration; Secrets hold credentials.",
        "Mount them as environment variables or files into pods.",
        "Encrypt and rotate secrets regularly for security.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Animated particles for subtle motion */}
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
            Kubernetes for SREs
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-100"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Automate and scale containerised applications with confidence
          </motion.p>
        </motion.section>

        {/* Introduction */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">Introduction</h2>
          <p className="text-indigo-100 text-sm sm:text-base">
            Kubernetes (K8s) is the de facto orchestrator for containerised
            workloads.  Born out of Google’s Borg system and donated to the
            Cloud Native Computing Foundation, it provides a declarative API to
            deploy, scale and manage applications.  For SREs, Kubernetes
            automates away toil and enforces reliability best practices like
            self‑healing, desired state management and horizontal scaling.
          </p>
        </motion.div>

        {/* Guiding Principles */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">Guiding Principles</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-1 text-sm sm:text-base">
            <li><strong>Embrace declarative:</strong> define desired state via YAML and let Kubernetes reconcile.</li>
            <li><strong>Automate everywhere:</strong> use controllers and operators to eliminate manual work.</li>
            <li><strong>Design for failure:</strong> assume pods and nodes will fail and rely on self‑healing.</li>
            <li><strong>Observe & optimise:</strong> integrate with metrics, logs and traces to tune resource usage.</li>
            <li><strong>Security first:</strong> use least privilege, secrets management and network policies.</li>
          </ul>
        </motion.div>

        {/* High‑Level Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
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
              {/* Flip indicator */}
              <div className="absolute top-2 right-2">
                <FaRedoAlt className="text-yellow-300/60 text-sm animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-4 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          💡 Click the cards to flip and see Kubernetes concepts
        </motion.div>

        {/* Workload Primitives */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">Workload Primitives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {primitives.map((item, idx) => (
              <div key={idx} className="bg-indigo-800/80 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                <item.icon className="text-3xl text-yellow-300 mb-2" />
                <h3 className="font-semibold text-indigo-200 mb-2">{item.title}</h3>
                <ul className="list-disc list-inside text-indigo-100 text-sm sm:text-base space-y-1">
                  {item.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-200 mb-4">Additional Resources</h2>
          <ul className="list-disc list-inside text-indigo-100 space-y-2 text-sm sm:text-base">
            <li><strong>Kubernetes Documentation:</strong> the definitive guide to all concepts and APIs.</li>
            <li><strong>Learning Paths:</strong> explore tutorials and labs from CNCF, Google and cloud providers.</li>
            <li><strong>Kubernetes Patterns:</strong> discover patterns like operators, controller design and service meshes.</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}