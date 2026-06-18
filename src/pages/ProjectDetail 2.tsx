import type { Project } from "../data/projects";
import { Badge } from "../components/ui/Badge";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <section id={`project-${project.slug}`} className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-10">
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300/90">
                {project.category}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                {project.title}
              </h2>
            </div>
            <Badge
              label={project.status.toUpperCase()}
              variant={project.featured ? "accent" : "secondary"}
            />
          </div>
          <p className="mt-6 text-slate-300">{project.fullDescription}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">
                Problem
              </h3>
              <p className="mt-3 text-slate-300">{project.problem}</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">
                Solution
              </h3>
              <p className="mt-3 text-slate-300">{project.solution}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
