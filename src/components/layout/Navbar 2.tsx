import { LogoMark } from "../ui/LogoMark";
import { socials } from "../../data/socials";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-slate-100">
        <a
          href="#home"
          className="flex items-center gap-3 text-sm font-semibold text-slate-100"
        >
          <LogoMark />
          <span>Thando Mpofu</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-slate-300">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              title={item.title}
              className="text-sm hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
