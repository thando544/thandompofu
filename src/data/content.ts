import {
  Activity,
  Blocks,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Container,
  Database,
  FileCode2,
  GitBranch,
  Globe2,
  Layers3,
  Mail,
  MessagesSquare,
  MonitorSmartphone,
  Network,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  TerminalSquare,
  Workflow,
  Wrench,
  PenTool,
  Phone,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  path: string;
  description: string;
};

export const navItems: NavItem[] = [
  { label: "Home", path: "/", description: "Operating system overview" },
  { label: "About", path: "/about", description: "Professional profile" },
  { label: "Projects", path: "/projects", description: "Production systems" },
  { label: "Architecture", path: "/architecture", description: "System design" },
  { label: "Toolkit", path: "/toolkit", description: "Engineering stack" },
  { label: "Experience", path: "/experience", description: "Timeline" },
  { label: "Lab Notes", path: "/lab-notes", description: "Technical writing" },
  { label: "Open Source", path: "/open-source", description: "GitHub work" },
  { label: "Contact", path: "/contact", description: "Availability" },
];

export const principles = [
  {
    title: "Design the system before the screen",
    body: "Start with data ownership, failure modes, APIs, and operational workflows, then make the interface feel inevitable.",
    icon: Network,
  },
  {
    title: "Prefer boring foundations",
    body: "React, TypeScript, PostgreSQL, Docker, and Linux earn trust because they remain understandable under pressure.",
    icon: ShieldCheck,
  },
  {
    title: "Make AI accountable",
    body: "AI features need traces, evals, human handoff, and clear boundaries so automation improves the system instead of hiding risk.",
    icon: BrainCircuit,
  },
  {
    title: "Ship maintainable speed",
    body: "Fast delivery matters most when it leaves behind clean contracts, accessible interfaces, tests, and documentation.",
    icon: Rocket,
  },
];

export const capabilities = [
  "Scalable web applications",
  "Mobile apps with React Native and Expo",
  "SaaS product architecture",
  "AI-assisted workflows and agents",
  "Automation systems with n8n and APIs",
  "Linux VPS and Docker deployments",
  "PostgreSQL and Supabase backends",
  "Business systems that reduce manual work",
];

export const architectureLayers = [
  {
    title: "Interface Layer",
    description: "React, Next.js, React Native, Expo, accessibility, performance budgets, and product analytics.",
    icon: MonitorSmartphone,
    points: ["Semantic UI", "Route-level code splitting", "Offline-aware mobile flows"],
  },
  {
    title: "Application Layer",
    description: "Typed API boundaries, service modules, validation, background jobs, and integration adapters.",
    icon: Blocks,
    points: ["REST and realtime APIs", "Role-based access", "Event-driven workflows"],
  },
  {
    title: "Data Layer",
    description: "PostgreSQL schemas, Supabase policies, storage, indexing, migrations, and audit trails.",
    icon: Database,
    points: ["RLS-first security", "Queryable events", "Backup and recovery paths"],
  },
  {
    title: "Operations Layer",
    description: "Docker, Linux, CI/CD, observability, reverse proxies, SSL, environment isolation, and runbooks.",
    icon: Server,
    points: ["Containerized deploys", "Health checks", "Incident-ready logs"],
  },
  {
    title: "AI Layer",
    description: "Prompt workflows, retrieval, tool use, evals, agent orchestration, and human review checkpoints.",
    icon: Bot,
    points: ["Traceable decisions", "Guardrails", "Automation with approvals"],
  },
];

export type Tool = {
  name: string;
  category: string;
  emphasis?: boolean;
  description: string;
  icon: LucideIcon;
};

export const tools: Tool[] = [
  { name: "React", category: "Frontend", emphasis: true, description: "Component systems and production interfaces.", icon: Code2 },
  { name: "TypeScript", category: "Frontend", emphasis: true, description: "Typed contracts across UI and services.", icon: FileCode2 },
  { name: "Next.js", category: "Frontend", emphasis: true, description: "Full-stack React apps and SEO-friendly delivery.", icon: Globe2 },
  { name: "Tailwind CSS", category: "Frontend", description: "Precise visual systems with fast iteration.", icon: Layers3 },
  { name: "React Native", category: "Mobile", emphasis: true, description: "Cross-platform mobile app development.", icon: Smartphone },
  { name: "Expo", category: "Mobile", description: "Native builds, previews, updates, and mobile velocity.", icon: Zap },
  { name: "Node.js", category: "Backend", emphasis: true, description: "APIs, services, workers, and integrations.", icon: TerminalSquare },
  { name: "Supabase", category: "Backend", emphasis: true, description: "Postgres, auth, realtime, storage, and RLS.", icon: Database },
  { name: "PostgreSQL", category: "Backend", description: "Reliable relational data modeling.", icon: Database },
  { name: "OpenAI", category: "AI & Automation", emphasis: true, description: "AI products, agents, and automation workflows.", icon: BrainCircuit },
  { name: "n8n", category: "AI & Automation", emphasis: true, description: "Composable workflow automation.", icon: Workflow },
  { name: "Docker", category: "Infrastructure", emphasis: true, description: "Portable production deployments.", icon: Container },
  { name: "Linux", category: "Infrastructure", description: "Servers, security, networking, and operations.", icon: Server },
  { name: "Vercel", category: "Infrastructure", description: "Fast frontend delivery and previews.", icon: Cloud },
  { name: "GitHub", category: "Developer Tools", description: "Source control, reviews, issues, and CI.", icon: GitBranch },
  { name: "Git", category: "Developer Tools", description: "Versioning and release workflows.", icon: GitBranch },
  { name: "Figma", category: "Developer Tools", description: "Design collaboration and interface planning.", icon: PenTool },
  { name: "Linear", category: "Business & Productivity", description: "Focused product planning and execution.", icon: Activity },
  { name: "Notion", category: "Business & Productivity", description: "Docs, specs, notes, and operating context.", icon: BriefcaseBusiness },
  { name: "Slack", category: "Business & Productivity", description: "Team communication and alerting.", icon: MessagesSquare },
];

export const experience = [
  {
    period: "Current",
    title: "Software Engineer",
    context: "Building production software systems across web, mobile, automation, and AI-enabled workflows.",
    details: ["Full-stack product delivery", "System architecture", "AI workflow implementation", "Deployment operations"],
  },
  {
    period: "Previous",
    title: "Software Engineering Intern",
    context: "Supported application development, debugging, feature delivery, and engineering documentation during an internship.",
    details: ["Frontend implementation", "Backend support", "QA and issue triage", "Team delivery rituals"],
  },
  {
    period: "Ongoing",
    title: "Independent Systems Builder",
    context: "Designing reusable systems for SaaS, field operations, content workflows, infrastructure, and business automation.",
    details: ["Build logs", "Open source practice", "Technical writing", "Reusable architecture patterns"],
  },
];

export const labNotes = [
  {
    title: "Designing AI Workflows That Can Be Trusted",
    slug: "designing-trusted-ai-workflows",
    category: "AI",
    date: "2026-06-10",
    readingTime: "7 min",
    tags: ["AI", "Automation", "Architecture"],
    excerpt: "A practical model for prompts, tools, evals, logs, and human review in production AI systems.",
    cover: "AI workflow traces over a dark operations console",
  },
  {
    title: "Supabase RLS Patterns for SaaS Teams",
    slug: "supabase-rls-patterns-saas",
    category: "Supabase",
    date: "2026-05-25",
    readingTime: "6 min",
    tags: ["Supabase", "PostgreSQL", "Security"],
    excerpt: "How to model tenants, roles, policies, and admin visibility without making the database brittle.",
    cover: "Database policy graph with tenant boundaries",
  },
  {
    title: "React Native Build Logs: From Prototype to Field App",
    slug: "react-native-field-app-build-log",
    category: "Build Logs",
    date: "2026-05-02",
    readingTime: "8 min",
    tags: ["React Native", "Expo", "Mobile"],
    excerpt: "Milestones, screenshots, tradeoffs, and lessons from turning a field workflow into a mobile product.",
    cover: "Mobile app states and deployment checklist",
  },
  {
    title: "Docker VPS Deployment Checklist",
    slug: "docker-vps-deployment-checklist",
    category: "Infrastructure",
    date: "2026-04-18",
    readingTime: "5 min",
    tags: ["Docker", "Linux", "Deployment"],
    excerpt: "A repeatable deployment path for small production systems: SSL, Nginx, containers, backups, and logs.",
    cover: "Linux server topology with container services",
  },
];

export const openSourceStats = [
  { label: "Primary Focus", value: "React + AI systems" },
  { label: "Contribution Style", value: "Docs, fixes, reusable modules" },
  { label: "Impact", value: "Operational tooling and product foundations" },
];

export const contactOptions = [
  { label: "Email", value: "thand@thandom.tech", href: "mailto:thand@thandom.tech", icon: Mail },
  { label: "WhatsApp", value: "+263 780 328 658", href: "https://wa.me/263780328658", icon: Phone },
  { label: "GitHub", value: "github.com/thando544", href: "https://github.com/thando544", icon: GitBranch },
  { label: "TikTok", value: "tiktok.com/@thando.dev", href: "https://www.tiktok.com/@thando.dev", icon: Activity },
  { label: "Instagram", value: "instagram.com/thando.dev", href: "https://instagram.com/thando.dev", icon: Activity },
];

export const commandExtras = [
  { label: "Search Lab Notes", path: "/lab-notes", description: "Find writing by tag or topic", icon: Search },
  { label: "Start a Project", path: "/contact", description: "Availability and response expectations", icon: Wrench },
];
