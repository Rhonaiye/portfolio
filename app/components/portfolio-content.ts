export type NavSection = {
  id: "home" | "expertise" | "stack" | "work" | "process" | "contact";
  label: string;
};

export type ExpertiseItem = {
  title: string;
  summary: string;
  stack: string[];
};

export type ProjectItem = {
  name: string;
  summary: string;
  impact: string;
  image: string;
  imageAlt: string;
  tech: string[];
  link: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type TechStackItem = {
  name: string;
};

export const navSections: NavSection[] = [
  { id: "home", label: "Home" },
  { id: "expertise", label: "Expertise" },
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export const rotatingLines = [
  "shipping clean products with measurable outcomes",
  "building scalable systems for growth-stage teams",
  "turning product ideas into stable releases",
  "moving from concept to deployment with speed",
];

export const trustChips: string[] = [];

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "Full-Stack Delivery",
    summary:
      "From interface architecture to API design, I ship complete product features with production-level quality.",
    stack: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    title: "Cloud and DevOps",
    summary:
      "I design deployment pipelines and cloud infrastructure that keep release velocity high and risk low.",
    stack: ["AWS", "GitHub Actions", "Docker", "PostgreSQL"],
  },
  {
    title: "AI-Accelerated Engineering",
    summary:
      "I use modern AI tooling to speed up execution while preserving maintainability, testing discipline, and clarity.",
    stack: ["OpenAI", "Anthropic", "Python", "FastAPI"],
  },
  {
    title: "Data and Realtime Systems",
    summary:
      "I build resilient data layers and realtime workflows that support transaction-heavy products at scale.",
    stack: ["PostgreSQL", "Supabase", "Redis", "GraphQL"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Zeevo E-Commerce Builder",
    summary:
      "A modular commerce platform for fast storefront setup, catalog control, and operational efficiency.",
    impact: "Reduced launch friction and accelerated merchant onboarding.",
    image: "/project-zeevo.svg",
    imageAlt: "Abstract monochrome storefront dashboard preview",
    tech: ["Next.js", "FastAPI", "MongoDB", "Tailwind CSS"],
    link: "https://zeevo.shop",
  },
  {
    name: "Uniconn",
    summary:
      "A student-focused social platform built around verified access, matching, and real-time connection features.",
    impact:
      "Created a safer networking experience for university users with profile matching and chat-based engagement.",
    image: "/project-seek.svg",
    imageAlt: "Abstract monochrome social connection app interface preview",
    tech: ["React", "Node.js", "Socket.IO", "PostgreSQL"],
    link: "https://uniconn.app",
  },
  {
    name: "Rentailz Booking Platform",
    summary:
      "A booking engine with realtime availability tracking and dependable payment-driven reservation logic.",
    impact: "Improved reservation confidence and reduced inventory conflicts.",
    image: "/project-rentailz.svg",
    imageAlt: "Abstract monochrome booking platform interface preview",
    tech: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    link: "https://github.com/Rhonaiye",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "Align on goals, constraints, and success metrics before implementation starts.",
  },
  {
    title: "Build",
    description:
      "Ship in focused iterations with clear checkpoints and production-ready code.",
  },
  {
    title: "Ship",
    description:
      "Deploy with CI/CD safeguards, observability, and rollback-ready workflows.",
  },
  {
    title: "Optimize",
    description:
      "Refine performance and product outcomes based on real usage signals.",
  },
];

export const techStack: TechStackItem[] = [
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Python" },
  { name: "FastAPI" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "PostgreSQL" },
  { name: "Supabase" },
  { name: "AWS" },
  { name: "Docker" },
  { name: "GitHub Actions" },
];

export const contactLinks = {
  calendarUrl: "https://cal.com/rhonaiye",
  email: "naiyetech@gmail.com",
  linkedinUrl: "https://linkedin.com/in/rhonaiye-felix-461b75383",
  githubUrl: "https://github.com/Rhonaiye",
  whatsappUrl: "https://wa.me/2349131215984",
};
