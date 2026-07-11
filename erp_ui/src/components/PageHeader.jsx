export default function PageHeader({ title, description, actions }) {
  return (
    <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
      <div>
        <h1 className="text-[21px] font-bold leading-tight text-ink-900">{title}</h1>
        {description && (
          <p className="mt-0.5 text-[13.5px] text-ink-500">{description}</p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
