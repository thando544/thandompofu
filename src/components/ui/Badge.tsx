type Props = {
  label: string;
  variant?: "accent" | "secondary";
};

export function Badge({ label, variant = "secondary" }: Props) {
  const base =
    "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]";
  const styles =
    variant === "accent"
      ? "bg-sky-500/15 text-sky-300"
      : "bg-slate-800 text-slate-300";

  return <span className={`${base} ${styles}`}>{label}</span>;
}
