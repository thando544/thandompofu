type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className = "",
  variant = "primary",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const styles =
    variant === "primary"
      ? "bg-slate-100 text-slate-950 hover:bg-white"
      : variant === "secondary"
        ? "border border-slate-700 bg-transparent text-slate-100 hover:bg-slate-900"
        : "text-slate-200 hover:text-white";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
