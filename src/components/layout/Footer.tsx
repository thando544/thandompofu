import { NavLink } from "react-router-dom";
import { navItems } from "../../data/content";
import { SITE_CONFIG } from "../../data/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-black py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 text-neutral-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">{SITE_CONFIG.author}</p>
          <p className="mt-2 max-w-xl text-sm leading-6">
            Production-grade software systems, clean architecture, and modern AI
            for real-world workflows.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {navItems.slice(1).map((item) => (
            <NavLink key={item.label} to={item.path} className="hover:text-white">
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
