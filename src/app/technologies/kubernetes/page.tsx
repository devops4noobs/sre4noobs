'use client'; // Required for useState and motion
import { FaCube, FaLayerGroup, FaSitemap, FaCheckCircle, FaMinus, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import ErrorBoundary from '@/components/ErrorBoundary'; // Assuming you have this component

const cardVariants = {
  hidden: { scale: 1, opacity: 0, y: 20 },
  visible: { scale: 1, opacity: 1, y: 0 },
  hover: { scale: 1.03, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" },
};

const sections = [
  {
    title: "What is Kubernetes?",
    icon: FaCube,
    content: (
      <div className="space-y-4 text-indigo-100">
        <p>
          Kubernetes is an open-source platform designed to automate deploying, scaling, and operating application containers. Originating from Google\'s internal systems (Borg), it was open-sourced in 2014 and has since become the de facto standard for container orchestration. In SRE terms, Kubernetes helps you maintain high availability, minimize downtime, and enforce reliability principles like SLOs (Service Level Objectives) through automation and self-healing.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Portability:</strong> Run your apps consistently across on-premises, hybrid, or public clouds (AWS, GCP, Azure).</li>
          <li><strong>Extensibility:</strong> Customize with plugins for monitoring (e.g., Prometheus), logging (e.g., ELK stack), and networking.</li>
          <li><strong>Community-Driven:</strong> Backed by the Cloud Native Computing Foundation (CNCF), with contributions from thousands of developers.</li>
        </ul>
        <p>
          Why learn Kubernetes as an SRE? It reduces toil by automating repetitive tasks, allowing you to focus on strategic reliability engineering. Professionals with Kubernetes skills earn 20-30% higher salaries – start your journey today!
        </p>
      </div>
    ),
  },
  {
    title: "Fundamental Concepts",
    icon: FaLayerGroup,
    content: (
      <div className="space-y-4 text-indigo-100">
        <p>
          Kubernetes builds on containers (e.g., Docker) to manage workloads efficiently. Here\'s a breakdown:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Containers:</strong> Lightweight, isolated environments that package code, dependencies, and configs. They solve \"it works on my machine\" issues by ensuring consistency from dev to prod.</li>
          <li><strong>Pods:</strong> The smallest deployable unit in Kubernetes – a group of one or more containers sharing storage and network. Pods are ephemeral; if one fails, Kubernetes replaces it automatically.</li>
          <li><strong>Nodes:</strong> Worker machines (VMs or physical servers) that run pods. Each node has a kubelet (agent) for communication with the control plane.</li>
          <li><strong>Services:</strong> Abstractions for exposing pods to the network, enabling load balancing and service discovery.</li>
          <li><strong>Deployments:</strong> Manage pod replicas, rollouts, and scaling. Ideal for stateless apps.</li>
          <li><strong>StatefulSets:</strong> For stateful apps (e.g., databases) that need persistent storage and stable identities.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Kubernetes Architecture: Infra Schemas and Components",
    icon: FaSitemap,
    content: (
      <div className="space-y-4 text-indigo-100">
        <p>
          Understanding Kubernetes architecture is crucial for SREs to design resilient systems. At its core, Kubernetes follows a master-worker model:
        </p>
        <h4 className="text-indigo-400 font-semibold">High-Level Architecture Schema</h4>
        <ErrorBoundary fallback={<p className="text-red-400">Image failed to load. Check the path: /images/components-of-k8s.png</p>}>
          {typeof window !== 'undefined' && (
            <Image 
              src="/images/components-of-k8s.png" 
              alt="Kubernetes High-Level Architecture Diagram" 
              width={800}
              height={400}
              className="w-full max-w-3xl mx-auto mb-4"
              onError={(e) => console.error("Image load error:", e)}
            />
          )}
        </ErrorBoundary>
        <p>
          <strong>Description:</strong>
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Control Plane (Master):</strong> The brain of the cluster. It makes global decisions (e.g., scheduling pods) and maintains the desired state. Components include:</li>
          <li>— <strong>API Server:</strong> Entry point for all requests; exposes the Kubernetes API.</li>
          <li>— <strong>Scheduler:</strong> Assigns pods to nodes based on resource availability and constraints.</li>
          <li>— <strong>Controller Manager:</strong> Runs controllers for replication, endpoints, etc.</li>
          <li>— <strong>etcd:</strong> Distributed key-value store for cluster data (highly available, consistent).</li>
          <li><strong>Nodes (Workers):</strong> Run the actual workloads. Each node includes:</li>
          <li>— <strong>Kubelet:</strong> Ensures pods are running and healthy.</li>
          <li>— <strong>Container Runtime:</strong> Executes containers (e.g., containerd, CRI-O).</li>
          <li>— <strong>Kube Proxy:</strong> Manages network rules for service abstraction.</li>
          <li><strong>Pods & Infra Flow:</strong> Pods are scheduled on nodes via \"bin packing\" (efficient resource use). Self-healing restarts failed pods, and scaling adjusts replicas based on metrics (e.g., CPU usage).</li>
        </ul>

        <h4 className="text-indigo-400 font-semibold">Advanced Infra Schema: Scaling and Reliability</h4>
        <ErrorBoundary fallback={<p className="text-red-400">Image failed to load. Check the path: /images/k8s-cluster-architecture.png</p>}>
          {typeof window !== 'undefined' && (
            <Image 
              src="/images/k8s-cluster-architecture.png" 
              alt="Kubernetes Multi-Node Cluster Diagram" 
              width={800}
              height={400}
              className="w-full max-w-3xl mx-auto mb-4"
              onError={(e) => console.error("Image load error:", e)}
            />
          )}
        </ErrorBoundary>
        <p>
          Imagine a multi-node cluster spanning availability zones. This setup ensures high availability – if AZ1 fails, traffic routes to AZ2. As an SRE, use Kubernetes to define SLOs (e.g., 99.99% uptime) and error budgets.
        </p>
      </div>
    ),
  },
  {
    title: "Benefits of Kubernetes for SRE",
    icon: FaCheckCircle,
    content: (
      <div className="space-y-4 text-indigo-100">
        <p>
          Kubernetes isn\'t just tech; it\'s a game-changer for reliability:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Self-Healing:</strong> Automatically restarts failed containers and reschedules pods.</li>
          <li><strong>Scalability:</strong> Auto-scale based on demand, preventing outages during traffic spikes.</li>
          <li><strong>Observability:</strong> Integrate with tools like Prometheus and Grafana for metrics, logs, and traces.</li>
          <li><strong>Toil Reduction:</strong> Automate deployments, reducing manual interventions and errors.</li>
          <li><strong>Cost Efficiency:</strong> Optimize resource usage, lowering cloud bills by 30-50%.</li>
        </ul>
        <p>
          Real-world impact: Companies like Google, Netflix, and Spotify use Kubernetes to handle billions of requests reliably. As an SRE, mastering it means fewer incidents and more innovation time.
        </p>
        <p className="text-sm text-gray-400">
          *Last updated: July 20, 2025. Content sourced from official Kubernetes documentation and SRE best practices.*
        </p>
      </div>
    ),
  },
];

export default function KubernetesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalSections = sections.length;
      const sectionHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const progressValue = Math.min((scrollPosition / (totalSections * sectionHeight)) * 100, 100);
      setProgress(progressValue);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex flex-col items-center justify-start py-6 md:py-12 overflow-x-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ top: "15%", left: "25%" }}></div>
        <div className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-pulse" style={{ top: "40%", left: "75%" }}></div>
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ top: "70%", left: "35%" }}></div>
      </div>

      <main className="p-4 md:p-6 w-full max-w-3xl mx-auto text-center">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl p-4 md:p-6 mb-6 md:mb-12 shadow-lg transform perspective-1000 hover:rotate-x-2 transition-all duration-500"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-xl tracking-tight font-inter"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-indigo-300 to-blue-400 pr-2">
              About Kubernetes
            </span>
          </motion.h1>
          <motion.p
            className="text-base md:text-xl text-cyan-100 mb-4 md:mb-6 font-inter"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mastering Container Orchestration for SRE Excellence
          </motion.p>
        </motion.section>

        {/* Sections Accordion */}
        <div className="space-y-6 px-2">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-gray-800/80 backdrop-blur-md rounded-xl p-4 md:p-6 mb-6 shadow-lg relative"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredSection(section.title.toLowerCase())}
              onHoverEnd={() => setHoveredSection(null)}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-indigo-300 mb-4 flex items-center gap-2 glow-text">
                <section.icon className="text-cyan-300" />
                {section.title}
              </h2>
              <div className="space-y-4">
                <div
                  className={`cursor-pointer ${openIndex === index ? "ring-2 ring-yellow-300/60" : ""}`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-indigo-100 font-medium">&nbsp;</h3>
                    {openIndex === index ? (
                      <FaMinus className="w-5 h-5 text-yellow-300" />
                    ) : (
                      <FaPlus className="w-5 h-5 text-indigo-300" />
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <motion.div
                    className="mt-4 text-indigo-100 text-sm md:text-base"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    {section.content}
                  </motion.div>
                )}
              </div>
              {hoveredSection === section.title.toLowerCase() && (
                <motion.div
                  className="bg-yellow-900/50 rounded p-2 mt-2 text-white text-xs md:text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Click to dive deeper!
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress Tracker */}
        <motion.div
          className="w-16 h-16 mb-6 flex items-center justify-center"
          animate={{ scale: progress >= 100 ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg className="w-full h-full transform -rotate-90">
            <motion.circle
              cx="32"
              cy="32"
              r="30"
              stroke="#00FFFF"
              strokeWidth="4"
              fill="transparent"
              pathLength="1"
              style={{ pathLength: progress / 100 }}
            />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-cyan-300 text-sm">
              {Math.round(progress)}%
            </text>
          </svg>
          {progress >= 100 && (
            <motion.div
              className="absolute text-cyan-300 text-xs font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Mastery Unlocked!
            </motion.div>
          )}
        </motion.div>

        {/* Footer Timestamp */}
        <p className="text-gray-500 text-xs mt-4 text-center">
          Last updated: July 27, 2025, 12:22 PM EEST
        </p>
      </main>
    </div>
  );
}