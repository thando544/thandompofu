import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import { SEO } from "../components/seo/SEO";
import { StructuredData } from "../components/seo/StructuredData";
import { labNotes } from "../data/content";
import { projects } from "../data/projects";
import { SITE_CONFIG } from "../data/siteConfig";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="page-band">
        <div className="mx-auto max-w-4xl px-6">
          <Link to="/projects" className="text-sm text-neutral-400 hover:text-white">
            Back to projects
          </Link>
          <h1 className="mt-6 text-4xl font-semibold text-white">Project not found.</h1>
        </div>
      </main>
    );
  }

  const relatedNotes = labNotes.filter((note) =>
    project.relatedNotes.includes(note.slug),
  );

  return (
    <>
      <SEO
        title={project.title}
        description={project.shortDescription}
        pathname={`/projects/${project.slug}`}
      />
      <StructuredData
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: project.title,
          description: project.shortDescription,
          applicationCategory: project.category,
          url: `${SITE_CONFIG.siteUrl}/projects/${project.slug}`,
          author: {
            "@type": "Person",
            name: SITE_CONFIG.author,
          },
        }}
      />
      <main>
        <section className="border-b border-neutral-900 bg-black">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Projects
            </Link>
            <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="section-kicker">{project.category} / {project.status}</p>
                <h1 className="mt-5 text-5xl font-semibold leading-none tracking-tight text-white md:text-7xl">
                  {project.title}
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-400">
                  {project.fullDescription}
                </p>
              </div>
              <div className="system-panel min-h-80 p-5">
                <div className="architecture-diagram">
                  {project.architecture.map((node, index) => (
                    <div key={node} className="diagram-node">
                      <span className="font-mono text-xs text-neutral-600">0{index + 1}</span>
                      <span>{node}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-band">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-2">
            <article className="quiet-card">
              <p className="section-kicker">Problem</p>
              <p className="mt-5 text-xl leading-8 text-white">{project.problem}</p>
            </article>
            <article className="quiet-card">
              <p className="section-kicker">Solution</p>
              <p className="mt-5 text-xl leading-8 text-white">{project.solution}</p>
            </article>
          </div>
        </section>

        <section className="page-band border-t border-neutral-900">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-kicker">Technology stack</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveLink ? (
                  <a href={project.liveLink} className="btn-primary-contrast inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                    Live demo <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
                {project.githubLink ? (
                  <a href={project.githubLink} className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 text-sm font-medium text-white">
                    Repository <GitBranch className="h-4 w-4" />
                  </a>
                ) : null}
                {project.readmeLink ? (
                  <a href={project.readmeLink} className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 text-sm font-medium text-white">
                    README / Install <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <DetailList title="Development process" items={project.process} />
              <DetailList title="Challenges" items={project.challenges} />
              <DetailList title="Lessons learned" items={project.lessons} />
              <DetailList title="Screenshots" items={project.screenshots} />
            </div>
          </div>
        </section>

        {project.images.length > 0 ? (
          <section className="page-band border-t border-neutral-900">
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="section-kicker">Screenshots</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                    Product interface snapshots.
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-neutral-500">
                  Real screens from the project, used to show the interface,
                  product structure, and implementation details behind the case
                  study.
                </p>
              </div>
              <div className="screenshot-gallery mt-10">
                {project.images.map((image, index) => (
                  <figure
                    key={image}
                    className={`screenshot-frame ${
                      project.category === "Mobile" ? "screenshot-frame-mobile" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      loading="lazy"
                    />
                    <figcaption>
                      {project.screenshots[index] || `Screen ${index + 1}`}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {project.setupGuide ? (
          <section className="page-band border-t border-neutral-900">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="section-kicker">Install workflow</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                  {project.setupGuide.title}
                </h2>
                <p className="mt-5 leading-7 text-neutral-500">
                  {project.setupGuide.summary}
                </p>
              </div>
              <div className="grid gap-5">
                <DetailList
                  title="Requirements"
                  items={project.setupGuide.requirements}
                />
                <DetailList
                  title="Quick start"
                  items={project.setupGuide.steps}
                />
                <DetailList title="Tips" items={project.setupGuide.tips} />
              </div>
            </div>
          </section>
        ) : null}

        <section className="page-band border-t border-neutral-900">
          <div className="mx-auto max-w-7xl px-6">
            <p className="section-kicker">Related Lab Notes</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {relatedNotes.map((note) => (
                <article key={note.slug} className="quiet-card">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                    {note.category} / {note.readingTime}
                  </p>
                  <h2 className="mt-4 text-2xl font-medium text-white">{note.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-neutral-500">{note.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="quiet-card">
      <h2 className="text-lg font-medium text-white">{title}</h2>
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-neutral-500">
        {items.map((item) => (
          <li key={item}>/{item}</li>
        ))}
      </ul>
    </article>
  );
}
