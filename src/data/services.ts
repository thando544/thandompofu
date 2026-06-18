export type Service = {
  title: string;
  description: string;
  outcome: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "AI Systems Development",
    description:
      "Build reliable AI workflows, agentic assistants, and embedded intelligence for enterprise web and automation systems.",
    outcome:
      "Strategic systems that automate decisions, improve business operations, and deliver clear AI value.",
    icon: "AI",
  },
  {
    title: "Full Stack Web Development",
    description:
      "Design and build secure SaaS interfaces, APIs, and operational platforms with modern React and Node.js.",
    outcome:
      "Fast web applications that support growth, product-market fit, and technical scalability.",
    icon: "Web",
  },
  {
    title: "Mobile App Development",
    description:
      "Create React Native and Expo mobile experiences that launch feature-rich apps for iOS and Android.",
    outcome:
      "Mobile products that connect users to real-time workflows and enterprise data on phone and tablet.",
    icon: "Mobile",
  },
  {
    title: "Supabase / PostgreSQL Systems",
    description:
      "Build database-driven applications, authentication, and realtime services using Supabase and PostgreSQL.",
    outcome:
      "Reliable backend systems with structured data, faster deployment, and integrated analytics.",
    icon: "Database",
  },
  {
    title: "n8n Workflow Automation",
    description:
      "Design automation pipelines, AI-triggered workflows, and low-code integrations with n8n.",
    outcome:
      "Reduced manual operations, faster execution, and automation that connects tools and teams.",
    icon: "Automation",
  },
  {
    title: "Docker / VPS Deployment",
    description:
      "Deploy applications on Linux VPS, Docker, and Nginx infrastructure with secure automation and observability.",
    outcome:
      "Stable production environments that support remote teams, rapid updates, and cloud-native workflows.",
    icon: "Infra",
  },
  {
    title: "SaaS Product Development",
    description:
      "Shape product-led SaaS platforms with clear business outcomes, modular systems, and growth-ready engineering.",
    outcome:
      "Products that are easier to maintain, iterate, and deliver repeatable value to customers.",
    icon: "Product",
  },
];
