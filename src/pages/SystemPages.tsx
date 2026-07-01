import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock, ExternalLink, GitBranch } from "lucide-react";
import { SEO } from "../components/seo/SEO";
import {
  architectureLayers,
  capabilities,
  contactOptions,
  experience,
  labNotes,
  openSourceStats,
  principles,
  tools,
} from "../data/content";
import { projects } from "../data/projects";
import { GitHubContributions } from "../components/sections/GitHubContributions";

function PageIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="border-b border-neutral-900 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="section-kicker">{eyebrow}</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-none tracking-tight text-white md:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-400">
          {body}
        </p>
      </div>
    </section>
  );
}

export function About() {
  return (
    <>
      <SEO title="About" description="About Thando Mpofu, a software engineer and systems architect building production-grade AI, web, mobile, SaaS, and automation systems." pathname="/about" />
      <main>
        <PageIntro
          eyebrow="About"
          title="A software engineer focused on systems that keep working."
          body="I design and build software that turns business workflows into reliable products: interfaces, APIs, databases, automation, AI, and deployment paths that fit together cleanly."
        />
        <section className="page-band">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-kicker">Positioning</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Software Engineer, Full Stack Engineer, AI Systems Engineer, and Systems Architect.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item} className="border-b border-neutral-900 pb-5 text-neutral-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function Projects() {
  return (
    <>
      <SEO title="Projects" description="Case studies for Thando Mpofu's AI, SaaS, mobile, automation, and infrastructure systems." pathname="/projects" />
      <main>
        <PageIntro
          eyebrow="Projects"
          title="Systems with architecture, tradeoffs, and outcomes."
          body="Each project is documented as a case study: problem, solution, architecture, stack, process, challenges, lessons, demos, repositories, and related lab notes."
        />
        <section className="page-band">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.slug} to={`/projects/${project.slug}`} className="quiet-card group">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-neutral-600">
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                </div>
                <h2 className="mt-8 text-2xl font-medium text-white">{project.title}</h2>
                <p className="mt-4 text-sm leading-6 text-neutral-500">{project.shortDescription}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-400 transition group-hover:text-white">
                  Open case study <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export function Architecture() {
  return (
    <>
      <SEO title="Architecture" description="How Thando Mpofu designs production systems, APIs, infrastructure, AI workflows, and deployment strategies." pathname="/architecture" />
      <main>
        <PageIntro
          eyebrow="Architecture"
          title="Architecture starts with flow, ownership, and failure."
          body="My system design process connects product workflows to data models, API boundaries, infrastructure decisions, and AI orchestration that can be tested and operated."
        />
        <section className="page-band">
          <div className="mx-auto max-w-7xl px-6">
            <div className="architecture-map">
              {architectureLayers.map((layer, index) => (
                <motion.article
                  key={layer.title}
                  className="quiet-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.06 }}
                >
                  <layer.icon className="h-5 w-5 text-white" />
                  <h2 className="mt-5 text-xl font-medium text-white">{layer.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-neutral-500">{layer.description}</p>
                  <ul className="mt-6 grid gap-2 text-sm text-neutral-400">
                    {layer.points.map((point) => (
                      <li key={point}>/{point}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function Toolkit() {
  const categories = [...new Set(tools.map((tool) => tool.category))];
  return (
    <>
      <SEO title="Toolkit" description="The technologies Thando Mpofu uses for frontend, mobile, backend, AI automation, infrastructure, developer tools, and productivity." pathname="/toolkit" />
      <main>
        <PageIntro
          eyebrow="Toolkit"
          title="A focused stack for building and operating modern systems."
          body="Core technologies are emphasized because they carry the architecture. Supporting tools make delivery calmer, faster, and easier to maintain."
        />
        <section className="page-band">
          <div className="mx-auto grid max-w-7xl gap-10 px-6">
            {categories.map((category) => (
              <div key={category}>
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">{category}</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {tools.filter((tool) => tool.category === category).map((tool) => (
                    <div key={tool.name} className={`tool-tile ${tool.emphasis ? "tool-tile-core" : ""}`}>
                      <tool.icon className="h-6 w-6 text-white" />
                      <span className="mt-5 block text-lg font-medium text-white">{tool.name}</span>
                      <span className="tool-tip">{tool.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export function Experience() {
  return (
    <>
      <SEO title="Experience" description="Thando Mpofu's professional engineering journey, current Software Engineer role, and previous internship experience." pathname="/experience" />
      <main>
        <PageIntro
          eyebrow="Experience"
          title="A journey through product engineering, architecture, and automation."
          body="The timeline focuses on engineering responsibility: shipping features, designing systems, improving delivery, and building production-ready workflows."
        />
        <section className="page-band">
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative border-l border-neutral-850 pl-8">
              {experience.map((item) => (
                <article key={item.title} className="timeline-item">
                  <span className="timeline-dot" />
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">{item.period}</p>
                  <h2 className="mt-3 text-2xl font-medium text-white">{item.title}</h2>
                  <p className="mt-3 text-neutral-500">{item.context}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.details.map((detail) => (
                      <span key={detail} className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-400">{detail}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export function LabNotes() {
  return (
    <>
      <SEO title="Lab Notes" description="Technical lab notes by Thando Mpofu covering AI, React, React Native, Expo, Supabase, Docker, Linux, automation, architecture, performance, tutorials, and build logs." pathname="/lab-notes" />
      <main>
        <PageIntro
          eyebrow="Lab Notes"
          title="A technical publication system for build logs and engineering notes."
          body="Structured notes with categories, tags, reading time, cover concepts, SEO metadata, syntax-ready formatting, search through the command palette, and related project links."
        />
        <section className="page-band">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 lg:grid-cols-2">
            {labNotes.map((note) => (
              <article key={note.slug} className="quiet-card">
                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {note.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {note.readingTime}</span>
                  <span>{note.category}</span>
                </div>
                <h2 className="mt-6 text-2xl font-medium text-white">{note.title}</h2>
                <p className="mt-4 text-sm leading-6 text-neutral-500">{note.excerpt}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-neutral-400">#{tag}</span>
                  ))}
                </div>
                <div className="mt-7 border-t border-neutral-900 pt-5 font-mono text-xs text-neutral-600">{note.cover}</div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export function Principles() {
  return (
    <>
      <SEO title="Engineering Principles" description="Thando Mpofu's engineering philosophy for maintainable, scalable, accessible, and performance-focused software." pathname="/principles" />
      <main>
        <PageIntro
          eyebrow="Engineering Principles"
          title="Maintainable systems are designed to be understood."
          body="My philosophy favors clean boundaries, accessible interfaces, measurable performance, secure defaults, useful documentation, and responsible AI."
        />
        <section className="page-band">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-2">
            {principles.map((principle) => (
              <article key={principle.title} className="quiet-card">
                <principle.icon className="h-5 w-5 text-white" />
                <h2 className="mt-5 text-2xl font-medium text-white">{principle.title}</h2>
                <p className="mt-4 leading-7 text-neutral-500">{principle.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export function OpenSource() {
  return (
    <>
      <SEO title="Open Source" description="Open source activity, selected repositories, contributions, and engineering impact by Thando Mpofu." pathname="/open-source" />
      <main>
        <PageIntro
          eyebrow="Open Source"
          title="Reusable engineering work, documented in the open."
          body="Open source is where I practice clarity: readable modules, useful docs, focused fixes, selected repositories, and contribution habits that compound."
        />
        <section className="page-band">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 lg:grid-cols-3">
            {openSourceStats.map((stat) => (
              <article key={stat.label} className="quiet-card">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">{stat.label}</p>
                <p className="mt-5 text-2xl font-medium text-white">{stat.value}</p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-5 grid max-w-7xl gap-5 px-6 md:grid-cols-2">
            <a href="https://github.com/thando544" className="quiet-card inline-flex items-center gap-3">
              <GitBranch className="h-5 w-5 text-white" />
              <span className="text-white">Personal GitHub</span>
              <ExternalLink className="h-4 w-4 text-neutral-500" />
            </a>
            <a href="https://github.com/ItsnomatataDev" className="quiet-card inline-flex items-center gap-3">
              <GitBranch className="h-5 w-5 text-white" />
              <span className="text-white">IT&apos;s No Matata GitHub</span>
              <ExternalLink className="h-4 w-4 text-neutral-500" />
            </a>
          </div>
        </section>
        <section className="page-band border-t border-neutral-900 pt-0">
          <GitHubContributions />
        </section>
      </main>
    </>
  );
}

export function Contact() {
  return (
    <>
      <SEO title="Contact" description="Contact Thando Mpofu for software engineering, AI systems, automation, SaaS, mobile, and architecture work." pathname="/contact" />
      <main>
        <PageIntro
          eyebrow="Contact"
          title="Available for thoughtful software systems work."
          body="Based in Zimbabwe, working remotely across time zones. Timezone: Africa/Harare. Typical response expectation: within one to two business days."
        />
        <section className="page-band">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-2">
            {contactOptions.map((option) => (
              <a key={option.label} href={option.href} className="quiet-card group">
                <option.icon className="h-5 w-5 text-white" />
                <p className="mt-5 text-sm uppercase tracking-[0.2em] text-neutral-600">{option.label}</p>
                <p className="mt-3 text-xl font-medium text-white">{option.value}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-500 transition group-hover:text-white">
                  Open <ExternalLink className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
