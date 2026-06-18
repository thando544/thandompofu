import { projects } from "../../data/projects";
import { Badge } from "../ui/Badge";
import { trackEvent } from "../../lib/analytics";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300/90">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Systems, products, and automation built for real outcomes.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-400">
            Explore projects that include AI applications, SaaS platforms,
            mobile systems, automation, and production infrastructure.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 transition hover:border-sky-500/30 hover:bg-slate-900"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {project.shortDescription}
                  </p>
                </div>
                <Badge
                  label={project.status.toUpperCase()}
                  variant={project.featured ? "accent" : "secondary"}
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
                    onClick={() =>
                      trackEvent("project_live_click", {
                        project: project.slug,
                      })
                    }
                  >
                    View Live
                  </a>
                ) : null}
                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
                    onClick={() =>
                      trackEvent("project_github_click", {
                        project: project.slug,
                      })
                    }
                  >
                    GitHub
                  </a>
                ) : null}
                <a
                  href={`/#project-${project.slug}`}
                  className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
                  onClick={() =>
                    trackEvent("project_detail_click", {
                      project: project.slug,
                    })
                  }
                >
                  Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
