import { architectureLayers, capabilities, contactOptions, principles, tools } from "./content";
import { projects } from "./projects";
import { SITE_CONFIG } from "./siteConfig";

export const ASSISTANT_WEBHOOK_URL =
  "https://n8n.srv883957.hstgr.cloud/webhook/18b35d55-9147-4500-9930-028f058d2443/chat";

export function buildAssistantKnowledge() {
  return {
    owner: {
      name: SITE_CONFIG.author,
      email: SITE_CONFIG.email,
      location: SITE_CONFIG.location,
      timezone: "Africa/Harare",
      roles: [
        "Software Engineer",
        "Full Stack Engineer",
        "AI Systems Engineer",
        "Systems Architect",
      ],
      positioning:
        "Thando builds production-grade web, mobile, SaaS, automation, infrastructure, and AI-powered systems with thoughtful engineering and clean architecture.",
      availability:
        "Available for thoughtful software systems work, remote collaboration, and production-focused engineering projects.",
    },
    contact: contactOptions.map((item) => ({
      label: item.label,
      value: item.value,
      href: item.href,
    })),
    capabilities,
    principles: principles.map((principle) => ({
      title: principle.title,
      body: principle.body,
    })),
    architecture: architectureLayers.map((layer) => ({
      title: layer.title,
      description: layer.description,
      points: layer.points,
    })),
    stack: tools.map((tool) => ({
      name: tool.name,
      category: tool.category,
      core: Boolean(tool.emphasis),
      description: tool.description,
    })),
    projects: projects.map((project) => ({
      title: project.title,
      slug: project.slug,
      category: project.category,
      status: project.status,
      featured: project.featured,
      summary: project.shortDescription,
      overview: project.fullDescription,
      problem: project.problem,
      solution: project.solution,
      technologies: project.technologies,
      liveLink: project.liveLink || "",
      githubLink: project.githubLink || "",
      readmeLink: project.readmeLink || "",
    })),
    assistantBehavior: {
      tone: "Clear, concise, confident, helpful, and technical without being stiff.",
      answerRules: [
        "Answer as Thando's portfolio assistant.",
        "Use the provided knowledge first.",
        "If something is unknown, say so and suggest contacting Thando.",
        "Keep answers short unless the visitor asks for detail.",
        "Recommend relevant project pages, contact links, or technologies when useful.",
      ],
    },
  };
}
