type Props = {
  title: string;
  description?: string;
};

export function SectionHeader({ title, description }: Props) {
  return (
    <div className="space-y-3">
      <p className="text-sm uppercase tracking-[0.32em] text-sky-300/80">
        {title}
      </p>
      {description ? (
        <p className="max-w-2xl text-lg text-slate-200">{description}</p>
      ) : null}
    </div>
  );
}
