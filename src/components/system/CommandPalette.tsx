import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Command, Search, X } from "lucide-react";
import { commandExtras, navItems, tools } from "../../data/content";
import { projects } from "../../data/projects";
import { labNotes } from "../../data/content";

type PaletteItem = {
  label: string;
  path: string;
  description: string;
  group: string;
};

export function CommandPalette() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const items = useMemo<PaletteItem[]>(
    () => [
      ...navItems.map((item) => ({ ...item, group: "Pages" })),
      ...projects.map((project) => ({
        label: project.title,
        path: `/projects/${project.slug}`,
        description: project.shortDescription,
        group: "Projects",
      })),
      ...tools.map((tool) => ({
        label: tool.name,
        path: "/toolkit",
        description: `${tool.category}: ${tool.description}`,
        group: "Technologies",
      })),
      ...labNotes.map((note) => ({
        label: note.title,
        path: "/lab-notes",
        description: `${note.category} • ${note.readingTime}`,
        group: "Lab Notes",
      })),
      ...commandExtras.map((item) => ({
        label: item.label,
        path: item.path,
        description: item.description,
        group: "Actions",
      })),
    ],
    [],
  );

  const results = items
    .filter((item) =>
      `${item.label} ${item.description} ${item.group}`
        .toLowerCase()
        .includes(query.toLowerCase()),
    )
    .slice(0, 9);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function run(item: PaletteItem) {
    navigate(item.path);
    setOpen(false);
    setQuery("");
  }

  return (
    <>
      <button
        type="button"
        className="hidden items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-neutral-400 transition hover:border-neutral-700 hover:text-white md:inline-flex"
        onClick={() => setOpen(true)}
      >
        <Command className="h-3.5 w-3.5" />
        Search
        <span className="rounded border border-neutral-800 px-1.5 py-0.5 text-[10px] text-neutral-500">
          K
        </span>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[90] bg-black/70 px-4 py-20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setOpen(false)}
          >
            <motion.div
              className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 shadow-2xl"
              initial={{ y: 18, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 18, scale: 0.98 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-neutral-800 px-4 py-3">
                <Search className="h-4 w-4 text-neutral-500" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search pages, projects, technologies, notes..."
                  className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-neutral-600"
                />
                <button
                  type="button"
                  aria-label="Close command palette"
                  onClick={() => setOpen(false)}
                  className="rounded p-1 text-neutral-500 transition hover:bg-neutral-900 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="max-h-[58vh] overflow-y-auto p-2">
                {results.map((item) => (
                  <button
                    type="button"
                    key={`${item.group}-${item.label}`}
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left transition hover:bg-neutral-900"
                    onClick={() => run(item)}
                  >
                    <span>
                      <span className="block text-sm font-medium text-white">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-xs text-neutral-500">
                        {item.group} / {item.description}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-neutral-600" />
                  </button>
                ))}
                {results.length === 0 ? (
                  <div className="px-3 py-10 text-center text-sm text-neutral-500">
                    No matching system entry.
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
