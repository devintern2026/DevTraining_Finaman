import { LuLayoutGrid, LuArrowRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function PlaceholderPage({ title, description, owner = "another team member" }) {
  const navigate = useNavigate();
  return (
    <>
      {/* Premium styled page header */}
      <div className="mb-6">
        <h1 className="text-[22px] font-bold text-ink-900">{title}</h1>
        {description && (
          <p className="mt-1 text-[13.5px] text-ink-500">{description}</p>
        )}
      </div>

      <div className="animate-fade-up overflow-hidden rounded-2xl border border-dashed border-primary-200 bg-gradient-to-br from-white to-primary-soft">
        <div className="flex min-h-[420px] flex-col items-center justify-center gap-5 px-8 py-16 text-center">
          {/* Icon blob */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-primary-200 blur-xl opacity-40" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md border border-primary-100">
              <LuLayoutGrid size={26} className="text-primary-500" />
            </div>
          </div>

          <div className="max-w-sm">
            <p className="text-[17px] font-bold text-ink-900">Ready for build-out</p>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-500">
              This module will be implemented by{" "}
              <span className="font-semibold text-primary-600">{owner}</span>. The route,
              breadcrumb, and page frame are already wired up.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-[12px] font-semibold text-primary-600">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
              Pending implementation
            </span>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-4 py-1.5 text-[12px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5"
            >
              Go back <LuArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
