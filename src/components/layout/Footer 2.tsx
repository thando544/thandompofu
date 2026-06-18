import { socials } from "../../data/socials";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} Thando Mpofu
          </p>
          <p className="text-sm">
            Full Stack Engineer • AI Systems Builder • Automation Architect
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span>Based in Zimbabwe</span>
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-400 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
