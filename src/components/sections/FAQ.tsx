import { faq } from "../../data/faq";

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300/90">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Clear answers for clients, recruiters, and AI search systems.
          </h2>
        </div>
        <div className="grid gap-4">
          {faq.map((item) => (
            <article
              key={item.question}
              className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.question}
              </h3>
              <p className="mt-4 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
