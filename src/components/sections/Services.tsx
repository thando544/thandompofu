import { SectionHeader } from "../ui/SectionHeader";
import { services } from "../../data/services";
import { trackEvent } from "../../lib/analytics";

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Services"
          description="Clear engineering services for product teams, AI systems, automation, database platforms, and infrastructure."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 transition hover:border-sky-500/30 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.32em] text-sky-300/90">
                  {service.icon}
                </p>
                <button
                  type="button"
                  className="text-sm font-semibold text-slate-400 underline decoration-slate-700 decoration-1 underline-offset-4 transition hover:text-white"
                  onClick={() =>
                    trackEvent("service_click", { service: service.title })
                  }
                >
                  View
                </button>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-slate-300">{service.description}</p>
              <p className="mt-6 text-sm text-slate-400">
                Outcome: {service.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
