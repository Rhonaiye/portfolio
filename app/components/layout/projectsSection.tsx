"use client";

import { motion } from "framer-motion";
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
  SiSocketdotio,
  SiAgora,
} from "react-icons/si";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Zeevo - E-Commerce Builder",
    description:
      "I built Zeevo, a powerful platform for users to create and manage their own e-commerce stores. Focused on flexibility, scalability, and a smooth user experience for both beginners and advanced users.",
    tech: ["React", "Next.js", "FastAPI", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Seek LMS",
    description:
      "A SaaS Learning Management System for live classes, subscriptions, and real-time code collaboration. I crafted a seamless user experience with complex backend orchestration.",
    tech: ["React", "Next.js", "Express.js", "Agora", "Socket.IO"],
  },
  {
    title: "Rentailz",
    description:
      "A platform to rent apartments and event centers. I handled both frontend & backend, implementing real-time booking and payment workflows.",
    tech: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS"],
  },
];

const techIcons: { [key: string]: { icon: any; color: string } } = {
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  Python: { icon: SiPython, color: "#3776AB" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  "Socket.IO": { icon: SiSocketdotio, color: "#010101" },
  Agora: { icon: SiAgora, color: "#F63D2B" },
  Mapbox: { icon: SiJavascript, color: "#F7DF1E" },
  "Express.js": { icon: SiNodedotjs, color: "#339933" },
};

const ProjectsSection: React.FC = () => {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsMdUp(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMdUp(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <section className="min-h-screen bg-white pt-32 px-6 md:px-16 py-16 flex flex-col gap-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isMdUp ? { opacity: 1, y: 0 } : undefined}
        whileInView={isMdUp ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-4xl md:text-5xl font-extrabold text-black text-center mb-12"
      >
        My Projects
      </motion.h2>

      <div className="flex flex-col gap-28 md:gap-40">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            animate={isMdUp ? { opacity: 1, x: 0 } : undefined}
            whileInView={isMdUp ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-gray-500">Project Screenshot</span>
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-black">{project.title}</h3>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-4">
                {project.tech.map((tech, techIdx) => {
                  const techInfo = techIcons[tech];
                  if (!techInfo) return null;
                  const IconComponent = techInfo.icon;

                  return (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isMdUp ? { opacity: 1, y: 0 } : undefined}
                      whileInView={isMdUp ? undefined : { opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * techIdx, duration: 0.5 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center"
                    >
                      <IconComponent
                        size={28}
                        className="text-black transition-colors duration-300"
                        onMouseEnter={(e: any) =>
                          (e.currentTarget.style.color = techInfo.color)
                        }
                        onMouseLeave={(e: any) =>
                          (e.currentTarget.style.color = "#000000")
                        }
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
