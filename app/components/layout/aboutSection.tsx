"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
];

const tabs = ["Philosophy", "Experience", "Tech Stack"];

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 200, damping: 20, duration: 1.5 },
      });
      setMounted(true);
    }
  }, [controls, mounted]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-start md:items-center max-sm:pt-24 bg-white px-6 md:px-16 py-16 gap-12">
      {/* Left Column */}
      <div className="flex-1 flex flex-col space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold text-black"
        >
          About Me
        </motion.h2>

        {/* Intro Paragraph */}
        {activeTab === "Philosophy" && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            I’m <span className="font-semibold text-black">Rhonaiye</span>, a passionate Software Engineer 
            and Product Builder. I specialize in building scalable SaaS platforms, real-time systems, 
            and applications that solve real-world problems.
          </motion.p>
        )}

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`px-4 py-2 rounded-full font-medium focus:outline-none ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 space-y-4"
        >
          {activeTab === "Philosophy" && (
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-black">My Philosophy</h3>
              <p className="text-gray-700 leading-relaxed">
                I believe software should be more than just code. It should deliver value, provide seamless 
                experiences, and scale with the business. I focus on clean architecture, maintainable code, 
                and products that delight users.
              </p>
            </div>
          )}

          {activeTab === "Experience" && (
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-black">Experience</h3>
              <p className="text-gray-700 leading-relaxed">
                Over the years, I’ve navigated the tech world by experimenting with various frameworks and tools 
                to find what works best for scalable applications. My journey started with core frontend and 
                backend development, expanding into full-fledged SaaS products and real-time collaborative platforms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This hands-on experience has taught me to choose the right tech for the right problem, balancing 
                performance, maintainability, and user experience.
              </p>
            </div>
          )}

          {activeTab === "Tech Stack" && (
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 mt-4 justify-center">
              {techStack.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex items-center justify-center p-4 rounded-lg cursor-pointer transition"
                  >
                    <IconComponent
                      size={36}
                      className="text-black transition-colors duration-300"
                      style={{ transition: "color 0.3s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = tech.color)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
                    />
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>

      {/* Right Column: STATIC Image with slow hard pop-in */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={controls}
        className="flex-1 flex justify-center mt-8 md:mt-0"
      >
        <div className="w-full max-w-md h-64 sm:h-80 md:h-[480px] bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
          <span className="text-gray-500 text-lg">Your Image Here</span>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
