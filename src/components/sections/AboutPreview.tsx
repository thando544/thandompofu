const skills = [
  { label: "React", category: "Frontend" },
  { label: "TailwindCSS", category: "Frontend" },
  { label: "Node.js", category: "Backend" },
  { label: "Express", category: "Backend" },
  { label: "Supabase", category: "Database" },
  { label: "PostgreSQL", category: "Database" },
  { label: "SQL", category: "Database" },
  { label: "React Native", category: "Mobile" },
  { label: "Expo", category: "Mobile" },
  { label: "n8n", category: "AI/Automation" },
  { label: "AI agents", category: "AI/Automation" },
  { label: "OpenAI", category: "AI/Automation" },
  { label: "Docker", category: "Infrastructure" },
  { label: "VPS", category: "Infrastructure" },
  { label: "Linux", category: "Infrastructure" },
  { label: "Nginx", category: "Infrastructure" },
];

const groupedSkills = skills.reduce<Record<string, string[]>>((acc, skill) => {
  acc[skill.category] = [...(acc[skill.category] || []), skill.label];
  return acc;
}, {});

export function AboutPreview() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_0.8fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300/90">
                About
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Strategic engineering for AI, automation, mobile products, and
                reliable infrastructure.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                I build systems that connect software, data, and automation so
                teams can move faster with less risk. My work focuses on
                scalable applications, AI-powered workflows, mobile experiences,
                and infrastructure that supports long-term product growth.
              </p>
            </div>
            <div className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              {[
                "Full Stack Engineering",
                "AI Systems",
                "Automation",
                "Infrastructure",
                "Mobile Apps",
                "SaaS Products",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-slate-900/90 p-5 text-slate-200"
                >
                  <p className="text-base font-semibold text-white">{item}</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Delivered with technical discipline, strong product clarity,
                    and systems that can scale.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/70 p-8">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
                Skills
              </p>
              <div className="mt-6 grid gap-4">
                {Object.entries(groupedSkills).map(([category, items]) => (
                  <div
                    key={category}
                    className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/95 p-5"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/70 p-8">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
                Location & positioning
              </p>
              <p className="mt-5 text-slate-300">
                Based in Zimbabwe, I work with teams across Africa and remote
                markets, building systems that solve operational, AI, and
                product challenges for software businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
