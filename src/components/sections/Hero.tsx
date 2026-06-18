import { Badge } from "../ui/Badge";
import { trackEvent } from "../../lib/analytics";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.9),rgba(15,23,42,0.95))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge label="Full Stack Engineer" variant="accent" />
              <Badge label="AI Systems Builder" />
              <Badge label="Automation Architect" />
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
                Thando Mpofu
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Building AI-powered software systems, automation workflows,
                mobile apps, and infrastructure.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Thando Mpofu is a Full Stack Engineer and AI Systems Builder
                from Zimbabwe working with React, Node.js, Supabase, PostgreSQL,
                React Native, Expo, Docker, VPS infrastructure, n8n, and agentic
                AI workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
                onClick={() =>
                  trackEvent("view_projects_click", { section: "hero" })
                }
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
                onClick={() => trackEvent("contact_click", { section: "hero" })}
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
                onClick={() =>
                  trackEvent("resume_download", { section: "hero" })
                }
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="relative rounded-[2rem] border border-slate-800 bg-slate-950/70 p-8 shadow-[0_45px_120px_-80px_rgba(0,0,0,0.8)]">
            <div className="absolute -right-10 top-10 h-24 w-24 rounded-full border border-sky-400/20 bg-sky-500/5 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900 p-8">
              <div className="mb-8 space-y-4">
                <div className="flex items-center justify-between text-slate-300">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
                      System signal
                    </p>
                    <p className="text-sm text-white">Node network status</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    Live
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {["API", "Agents", "Workflows", "Infrastructure"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-sm text-slate-200"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="grid gap-5 rounded-3xl border border-slate-800 bg-slate-950/95 p-6">
                <div className="grid gap-3">
                  <div className="h-2 rounded-full bg-slate-800" />
                  <div className="h-2 rounded-full bg-slate-800/80" />
                  <div className="h-2 rounded-full bg-slate-800/60" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Workflow nodes</span>
                    <span>92%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-800">
                    <div
                      className="h-3 rounded-full bg-sky-400"
                      style={{ width: "92%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
