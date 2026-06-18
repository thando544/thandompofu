import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Cpu, Network, Sparkles } from "lucide-react";
import { SEO } from "../components/seo/SEO";
import { StructuredData } from "../components/seo/StructuredData";
import { capabilities, principles } from "../data/content";
import { projects } from "../data/projects";
import { SITE_CONFIG } from "../data/siteConfig";

const pageDescription =
  "Thando Mpofu is a Software Engineer, Full Stack Engineer, AI Systems Engineer, and Systems Architect building scalable web, mobile, SaaS, automation, and AI-powered systems.";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.author,
    email: SITE_CONFIG.email,
    jobTitle: "Software Engineer, Full Stack Engineer, AI Systems Engineer, Systems Architect",
    address: {
      "@type": "PostalAddress",
      addressCountry: SITE_CONFIG.location,
    },
    sameAs: [
      "https://github.com/thando544",
      "https://www.tiktok.com/@thando.dev",
      "https://instagram.com/thando.dev",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.author,
    url: SITE_CONFIG.siteUrl,
    description: SITE_CONFIG.defaultDescription,
  },
];

export function Home() {
  return (
    <>
      <SEO title="Home" description={pageDescription} pathname="/" />
      <StructuredData jsonLd={structuredData} />
      <main>
        <section className="relative min-h-[calc(100vh-76px)] overflow-hidden border-b border-neutral-900 bg-black">
          <TechnicalBackground />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
                Software Engineer / AI Systems Engineer / Systems Architect
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
                I build production-grade software systems.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400 sm:text-xl">
                Scalable web, mobile, SaaS, automation, and AI-powered systems
                designed with thoughtful engineering, clean architecture, and
                real operational value.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="btn-primary-contrast inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition"
                >
                  View systems <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/architecture"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-5 py-3 text-sm font-medium text-white transition hover:border-neutral-600"
                >
                  Architecture notes
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="system-panel"
            >
              <div className="flex items-center justify-between border-b border-neutral-900 px-5 py-4">
                <span className="font-mono text-xs text-neutral-500">
                  thando.system
                </span>
                <span className="flex items-center gap-2 text-xs text-neutral-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  live
                </span>
              </div>
              <div className="grid gap-4 p-5">
                {capabilities.slice(0, 6).map((capability, index) => (
                  <motion.div
                    key={capability}
                    className="flex items-center justify-between border-b border-neutral-900 pb-4 last:border-0 last:pb-0"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + index * 0.06 }}
                  >
                    <span className="text-sm text-neutral-300">{capability}</span>
                    <span className="font-mono text-xs text-neutral-600">
                      0{index + 1}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="page-band">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 lg:grid-cols-4">
            {principles.map((principle) => (
              <article key={principle.title} className="quiet-card">
                <principle.icon className="h-5 w-5 text-white" />
                <h2 className="mt-5 text-lg font-medium text-white">
                  {principle.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-band border-t border-neutral-900">
          <div className="mx-auto max-w-7xl px-6">
            <div className="section-kicker">Selected systems</div>
            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Practical systems for AI, SaaS, mobile, automation, and infrastructure.
              </h2>
              <Link to="/projects" className="text-sm text-neutral-400 hover:text-white">
                All projects
              </Link>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {projects
                .filter((project) => project.featured)
                .map((project) => (
                  <Link
                    key={project.slug}
                    to={`/projects/${project.slug}`}
                    className="quiet-card group"
                  >
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-neutral-600">
                      <span>{project.category}</span>
                      <span>{project.status}</span>
                    </div>
                    <h3 className="mt-8 text-2xl font-medium text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-neutral-500">
                      {project.shortDescription}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-400 transition group-hover:text-white">
                      Read case study <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function TechnicalBackground() {
  return (
    <div className="absolute inset-0 opacity-70">
      <div className="technical-grid" />
      <motion.div
        className="absolute right-[8%] top-[16%] h-80 w-80 rounded-full border border-neutral-800"
        animate={{ rotate: 360 }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[22%] grid grid-cols-3 gap-10 text-neutral-700"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cpu className="h-6 w-6" />
        <Network className="h-6 w-6" />
        <Sparkles className="h-6 w-6" />
      </motion.div>
    </div>
  );
}
