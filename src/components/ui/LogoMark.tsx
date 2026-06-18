export function LogoMark() {
  return (
    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-950 text-sky-300">
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
      >
        <path
          d="M11 28.5L22 16l11 12.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M11 15.5L22 28l11-12.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="22" cy="22" r="3.5" fill="currentColor" />
      </svg>
    </div>
  );
}
