"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  contactLinks,
  expertiseItems,
  navSections,
  processSteps,
  projects,
  rotatingLines,
  techStack,
  trustChips,
} from "./portfolio-content";

const sectionIds = navSections.map((section) => section.id);

const iconSlugByTech: Record<string, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  Python: "python",
  FastAPI: "fastapi",
  React: "react",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  PostgreSQL: "postgresql",
  Supabase: "supabase",
  AWS: "amazonwebservices",
  Docker: "docker",
  "GitHub Actions": "githubactions",
  MongoDB: "mongodb",
  "Tailwind CSS": "tailwindcss",
  "Express.js": "express",
  "Socket.IO": "socketdotio",
  WebRTC: "webrtc",
  OpenAI: "openai",
  Anthropic: "anthropic",
  Redis: "redis",
  GraphQL: "graphql",
};

const getTechLogoUrl = (tech: string) => {
  const slug = iconSlugByTech[tech];
  return slug ? `https://cdn.simpleicons.org/${slug}` : null;
};

const contactItems = [
  { label: "LinkedIn", href: contactLinks.linkedinUrl },
  { label: "GitHub", href: contactLinks.githubUrl },
  { label: "WhatsApp", href: contactLinks.whatsappUrl },
];

export default function PortfolioPage() {
  const shouldReduceMotion = useReducedMotion();
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<(typeof sectionIds)[number]>(
    "home",
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentLineIndex((prev) => (prev + 1) % rotatingLines.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  useEffect(() => {
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sectionElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id as (typeof sectionIds)[number]);
        }
      },
      {
        threshold: [0.25, 0.4, 0.6, 0.75],
        rootMargin: "-15% 0px -35% 0px",
      },
    );

    for (const element of sectionElements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const motionSettings = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0 },
      };
    }

    return {
      initial: { opacity: 0, y: 22 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.55 },
    };
  }, [shouldReduceMotion]);

  return (
    <>
      <motion.div
        aria-hidden
        className="scroll-progress"
        style={{ scaleX: progressScaleX, transformOrigin: "0% 50%" }}
      />

      <header className="site-header">
        <div className="shell nav-shell">
          <Link href="#home" className="wordmark" onClick={() => setMobileMenuOpen(false)}>
            Rhonaiye Felix
          </Link>

          <nav className="desktop-nav" aria-label="Primary">
            {navSections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="nav-active-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="nav-label">{section.label}</span>
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span className={`menu-icon ${mobileMenuOpen ? "menu-icon-open" : ""}`} aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              id="mobile-nav"
              className="mobile-panel"
              aria-label="Mobile"
              initial={shouldReduceMotion ? false : { opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
            >
              {navSections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-nav-link ${
                    activeSection === section.id ? "mobile-nav-link-active" : ""
                  }`}
                >
                  {section.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="shell">
            <motion.p
              className="eyebrow hero-eyebrow"
              {...motionSettings}
              viewport={{ once: true, amount: 0.3 }}
            >
              Software Engineer | Product Builder | Cloud Delivery
            </motion.p>

            <motion.h1
              className="hero-title"
              {...motionSettings}
              transition={{ ...motionSettings.transition, delay: shouldReduceMotion ? 0 : 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              I design and ship dependable digital products
              <span className="hero-break">for teams that need speed and clarity.</span>
            </motion.h1>

            <motion.div
              className="rotator"
              {...motionSettings}
              transition={{ ...motionSettings.transition, delay: shouldReduceMotion ? 0 : 0.16 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="rotator-label">Focused on:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingLines[currentLineIndex]}
                  className="rotator-line"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                >
                  {rotatingLines[currentLineIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              className="hero-copy"
              {...motionSettings}
              transition={{ ...motionSettings.transition, delay: shouldReduceMotion ? 0 : 0.22 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              I help teams launch faster with clean engineering, reliable execution,
              and systems built for long-term scale.
            </motion.p>

            <motion.div
              className="cta-row"
              {...motionSettings}
              transition={{ ...motionSettings.transition, delay: shouldReduceMotion ? 0 : 0.28 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <a
                href={contactLinks.calendarUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                Book Intro Call
              </a>
              <a href={`mailto:${contactLinks.email}`} className="button button-secondary">
                Email Me
              </a>
            </motion.div>

            <motion.ul
              className="chip-list"
              {...motionSettings}
              transition={{ ...motionSettings.transition, delay: shouldReduceMotion ? 0 : 0.34 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {trustChips.map((chip) => (
                <li key={chip} className="trust-chip">
                  {chip}
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section id="expertise" className="section">
          <div className="shell">
            <motion.h2 className="section-title" {...motionSettings} viewport={{ once: true }}>
              Expertise Built for Delivery
            </motion.h2>
            <motion.p
              className="section-copy"
              {...motionSettings}
              transition={{ ...motionSettings.transition, delay: shouldReduceMotion ? 0 : 0.1 }}
              viewport={{ once: true }}
            >
              From architecture to deployment, I focus on clean systems, execution speed,
              and measurable business value.
            </motion.p>

            <div className="card-grid">
              {expertiseItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="surface-card"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.32,
                    delay: shouldReduceMotion ? 0 : index * 0.05,
                  }}
                  viewport={{ once: true, amount: 0.28 }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <ul className="icon-row" aria-label={`${item.title} technologies`}>
                    {item.stack.map((tech) => {
                      const logoUrl = getTechLogoUrl(tech);

                      return (
                        <li key={tech} className="icon-pill" title={tech} aria-label={tech}>
                          {logoUrl ? (
                            <img src={logoUrl} alt="" className="icon-mark" loading="lazy" />
                          ) : (
                            <span className="icon-fallback">{tech.slice(0, 2).toUpperCase()}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section">
          <div className="shell">
            <motion.h2 className="section-title" {...motionSettings} viewport={{ once: true }}>
              Tech Stack
            </motion.h2>
            <motion.p
              className="section-copy"
              {...motionSettings}
              transition={{ ...motionSettings.transition, delay: shouldReduceMotion ? 0 : 0.1 }}
              viewport={{ once: true }}
            >
              Core tools I use for shipping production software from backend APIs to polished
              frontends.
            </motion.p>

            <div className="tech-grid">
              {techStack.map((item, index) => {
                const logoUrl = getTechLogoUrl(item.name);

                return (
                  <motion.article
                    key={item.name}
                    className="tech-card"
                    title={item.name}
                    aria-label={item.name}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.02 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.33,
                      delay: shouldReduceMotion ? 0 : index * 0.04,
                    }}
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    {logoUrl ? (
                      <img src={logoUrl} alt="" className="tech-logo" loading="lazy" />
                    ) : (
                      <span className="icon-fallback">{item.name.slice(0, 2).toUpperCase()}</span>
                    )}
                    <span className="sr-only">{item.name}</span>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="shell">
            <motion.h2 className="section-title" {...motionSettings} viewport={{ once: true }}>
              Selected Work
            </motion.h2>
            <motion.p
              className="section-copy"
              {...motionSettings}
              transition={{ ...motionSettings.transition, delay: shouldReduceMotion ? 0 : 0.1 }}
              viewport={{ once: true }}
            >
              Product systems built for speed, clarity, and durable outcomes.
            </motion.p>

            <div className="project-list">
              {projects.map((project, index) => (
                <motion.article
                  key={project.name}
                  className="project-card"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.4,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                  }}
                  viewport={{ once: true, amount: 0.22 }}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-content">
                    <h3>{project.name}</h3>
                    <p>{project.summary}</p>
                    <p className="project-impact">{project.impact}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      View Project
                    </a>
                    <ul className="icon-row" aria-label={`${project.name} technologies`}>
                      {project.tech.map((tech) => {
                        const logoUrl = getTechLogoUrl(tech);

                        return (
                          <li key={tech} className="icon-pill" title={tech} aria-label={tech}>
                            {logoUrl ? (
                              <img src={logoUrl} alt="" className="icon-mark" loading="lazy" />
                            ) : (
                              <span className="icon-fallback">{tech.slice(0, 2).toUpperCase()}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="shell">
            <motion.h2 className="section-title" {...motionSettings} viewport={{ once: true }}>
              Delivery Process
            </motion.h2>
            <motion.p
              className="section-copy"
              {...motionSettings}
              transition={{ ...motionSettings.transition, delay: shouldReduceMotion ? 0 : 0.1 }}
              viewport={{ once: true }}
            >
              A practical approach designed to reduce risk while maintaining momentum.
            </motion.p>

            <div className="process-grid">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.title}
                  className="process-card"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.35,
                    delay: shouldReduceMotion ? 0 : index * 0.07,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <span className="process-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section final-section">
          <div className="shell contact-layout">
            <div>
              <motion.h2 className="section-title" {...motionSettings} viewport={{ once: true }}>
                Ready to Build?
              </motion.h2>
              <motion.p
                className="section-copy"
                {...motionSettings}
                transition={{ ...motionSettings.transition, delay: shouldReduceMotion ? 0 : 0.08 }}
                viewport={{ once: true }}
              >
                I partner with product teams that value speed, ownership, and clean execution.
              </motion.p>
            </div>

            <motion.div
              className="close-panel"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="contact-actions">
                <a
                  href={contactLinks.calendarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                >
                  Book Intro Call
                </a>
                <a href={`mailto:${contactLinks.email}`} className="button button-secondary">
                  {contactLinks.email}
                </a>
              </div>

              <div className="contact-grid">
                {contactItems.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                    <span>{item.label}</span>
                    <span>Open</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
