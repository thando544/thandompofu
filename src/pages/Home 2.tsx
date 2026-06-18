import { SEO } from "../components/seo/SEO";
import { StructuredData } from "../components/seo/StructuredData";
import { Hero } from "../components/sections/Hero";
import { AboutPreview } from "../components/sections/AboutPreview";
import { FeaturedProjects } from "../components/sections/FeaturedProjects";
import { Services } from "../components/sections/Services";
import { WritingPreview } from "../components/sections/WritingPreview";
import { ContactCTA } from "../components/sections/ContactCTA";
import { FAQ } from "../components/sections/FAQ";
import { SITE_CONFIG } from "../data/siteConfig";
import { projects } from "../data/projects";
import { posts } from "../data/posts";

const pageTitle = "Home";
const pageDescription =
  "Thando Mpofu is a Full Stack Engineer and AI Systems Builder from Zimbabwe. He builds AI systems, workflow automation, mobile apps, SaaS, and VPS deployments with React, Node.js, Supabase, PostgreSQL, React Native, Expo, Docker, and n8n.";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.author,
    email: SITE_CONFIG.email,
    jobTitle: "Full Stack Engineer & AI Systems Builder",
    address: {
      "@type": "PostalAddress",
      addressCountry: SITE_CONFIG.location,
    },
    sameAs: [
      "https://github.com/thando544",
      "https://www.tiktok.com/@thando.dev",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.author,
    url: SITE_CONFIG.siteUrl,
    description: SITE_CONFIG.defaultDescription,
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_CONFIG.author,
    serviceType:
      "AI Systems, Full Stack Development, Mobile Applications, Automation, Infrastructure",
    areaServed: SITE_CONFIG.serviceAreas,
    url: SITE_CONFIG.siteUrl,
  },
  ...(projects.slice(0, 3).map((project) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.shortDescription,
    applicationCategory: project.category,
    url: project.liveLink || SITE_CONFIG.siteUrl,
  })) as unknown as Record<string, unknown>[]),
  ...(posts.slice(0, 3).map((post) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published,
    url: `${SITE_CONFIG.siteUrl}${post.href}`,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
    },
  })) as unknown as Record<string, unknown>[]),
];

export function Home() {
  return (
    <>
      <SEO title={pageTitle} description={pageDescription} pathname="/" />
      <StructuredData jsonLd={structuredData} />
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <Hero />
        <AboutPreview />
        <FeaturedProjects />
        <Services />
        <WritingPreview />
        <FAQ />
        <ContactCTA />
      </main>
    </>
  );
}
