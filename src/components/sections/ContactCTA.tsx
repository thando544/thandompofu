import { socials } from "../../data/socials";
import { trackEvent } from "../../lib/analytics";

export function ContactCTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300/90">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Consulting, collaborations, and software projects.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              I work with product teams, founders, and operations leaders to
              build AI applications, automation systems, mobile products, and
              infrastructure that can be deployed with confidence.
            </p>
            <div className="grid gap-4 rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
                Location
              </p>
              <p className="text-lg text-slate-100">Zimbabwe / Remote</p>
              <p className="text-sm text-slate-400">
                Email, GitHub, TikTok, and Instagram are the best ways to start a
                conversation.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
                    onClick={() =>
                      trackEvent("contact_social_click", {
                        channel: item.label,
                      })
                    }
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-10">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300/90">
              Send a message
            </p>
            <form className="mt-8 grid gap-6">
              <label className="grid gap-2 text-sm text-slate-200">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-200">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-200">
                <span>Project brief</span>
                <textarea
                  rows={6}
                  placeholder="Describe the project or collaboration"
                  className="rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
                />
              </label>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
                onClick={() =>
                  trackEvent("contact_form_submit", { section: "contact" })
                }
              >
                Request consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
