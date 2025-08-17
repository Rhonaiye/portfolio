"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const rotatingTexts = [
  "systems that scale",
  "apps that perform",
  "products that delight",
  "solutions that matter",
];

const HeroSection: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4500); // every 4.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-white px-6 pt-20 md:pt-0">
      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-black leading-tight"
      >
        I don’t just <span className="text-gray-600">write code</span>, <br />
        I build{" "}
        <span className="text-gray-800">
          <AnimatePresence mode="wait">
            <motion.span
              key={rotatingTexts[currentTextIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {rotatingTexts[currentTextIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
        .
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl"
      >
        I’m Rhonaiye — a{" "}
        <span className="font-semibold text-black">
          Software Engineer, Product Builder & Creative Technologist
        </span>
        . I specialize in crafting SaaS platforms, real-time systems, and
        scalable applications that solve real problems.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-10 flex gap-4"
      >
        <Link
          href="/projects"
          className="px-6 py-3 rounded-2xl bg-black text-white font-medium hover:bg-gray-800 transition"
        >
          View My Work
        </Link>
        <Link
          href="/hire"
          className="px-6 py-3 rounded-2xl border border-black text-black font-medium hover:bg-black hover:text-white transition"
        >
          Hire Me
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
