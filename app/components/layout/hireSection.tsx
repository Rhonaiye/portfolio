"use client";

import { motion } from "framer-motion";

const hirePoints = [
  {
    title: "Scalable & Maintainable Solutions",
    description: "I build systems that grow with your business, keeping performance and maintainability in mind.",
  },
  {
    title: "Full-Stack Expertise",
    description: "From concept to deployment, I handle frontend, backend, and everything in between.",
  },
  {
    title: "Real-Time Systems Experience",
    description: "I craft applications with live updates, notifications, and seamless interactions.",
  },
  {
    title: "SaaS & E-Commerce Specialization",
    description: "I create platforms that empower users and businesses, like Zeevo and Seek LMS.",
  },
];

const HireMePage: React.FC = () => {
  return (
    <section className="min-h-screen bg-white pt-32 px-6 md:px-16 py-16 flex flex-col gap-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center space-y-6 max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-black">
          Let’s Build Something Amazing Together
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          I’m Rhonaiye — a full-stack software engineer who turns ideas into scalable, real-world systems.
          If you have a project in mind, I can bring it to life with efficiency and creativity.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <a
            href="mailto:naiyetech@gmail.com"
            className="inline-block px-8 py-3 bg-black text-white rounded-2xl font-medium hover:bg-gray-800 transition"
          >
            Email Me
          </a>
          <a
            href="https://wa.me/234XXXXXXXXXX" // Replace Xs with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-black text-black rounded-2xl font-medium hover:bg-black hover:text-white transition"
          >
            WhatsApp Me
          </a>
        </div>
      </motion.div>

      {/* Value Proposition Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
      >
        {hirePoints.map((point) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-black mb-2">{point.title}</h3>
            <p className="text-gray-700">{point.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HireMePage;
