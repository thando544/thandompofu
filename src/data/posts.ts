export type Post = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  published: string;
  readingTime: string;
  tags: string[];
  href: string;
};

export const posts: Post[] = [
  {
    title: "AI Agents for Automation and Operations",
    slug: "ai-agents-automation-operations",
    excerpt:
      "How agentic AI workflows reduce manual work and create resilient automation systems for products and operations.",
    category: "AI Agents",
    published: "2026-06-01",
    readingTime: "5 min",
    tags: ["AI", "Agents", "Automation"],
    href: "/writing/ai-agents-automation-operations",
  },
  {
    title: "Building Supabase Systems for Modern SaaS",
    slug: "building-supabase-systems",
    excerpt:
      "Why Supabase and PostgreSQL are strong foundations for SaaS products, realtime interfaces, and secure data workflows.",
    category: "Supabase",
    published: "2026-05-20",
    readingTime: "4 min",
    tags: ["Supabase", "PostgreSQL", "SaaS"],
    href: "/writing/building-supabase-systems",
  },
  {
    title: "React Native Mobile Apps for African Teams",
    slug: "react-native-africa",
    excerpt:
      "Practical mobile architecture for product teams in Africa using React Native, Expo, and modern API-driven design.",
    category: "React Native",
    published: "2026-05-08",
    readingTime: "4 min",
    tags: ["React Native", "Expo", "Mobile"],
    href: "/writing/react-native-africa",
  },
];
