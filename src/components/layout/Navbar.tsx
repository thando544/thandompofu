import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../data/content";
import { CommandPalette } from "../system/CommandPalette";
import { LogoMark } from "../ui/LogoMark";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const primaryLinks = navItems.filter((item) =>
    ["Home", "About", "Projects", "Architecture", "Toolkit", "Contact"].includes(
      item.label,
    ),
  );

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900 bg-black/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-white sm:px-6">
        <NavLink
          to="/"
          className="flex items-center gap-3 text-sm font-semibold"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
          <span className="tracking-wide">Thando Mpofu</span>
        </NavLink>
        <nav className="hidden items-center gap-6 lg:flex">
          {primaryLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive ? "text-white" : "text-neutral-500 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <CommandPalette />
          <NavLink
            to="/contact"
            className="btn-primary-contrast hidden rounded-full px-4 py-2 text-sm font-medium transition sm:inline-flex"
          >
            Start
          </NavLink>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="rounded-md border border-neutral-800 p-2 text-neutral-300 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-neutral-900 bg-black px-5 py-4 lg:hidden">
          <nav className="grid gap-1">
            {navItems.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm ${
                    isActive
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-500 hover:bg-neutral-950 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
