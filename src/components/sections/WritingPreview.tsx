import { posts } from "../../data/posts";
import { trackEvent } from "../../lib/analytics";

export function WritingPreview() {
  return (
    <section id="writing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300/90">
              Writing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Research, technical insights, and African technology strategy.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-400">
            Clear writing about AI agents, automation, Supabase, React Native,
            and software systems.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 transition hover:border-sky-500/30 hover:bg-slate-900"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                {post.category}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {post.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
                <span>{post.published}</span>
                <span>{post.readingTime}</span>
              </div>
              <a
                href={post.href}
                className="mt-6 inline-flex rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
                onClick={() => trackEvent("writing_click", { post: post.slug })}
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
