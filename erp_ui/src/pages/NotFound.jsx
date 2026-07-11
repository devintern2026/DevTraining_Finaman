import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-xl border border-line-200 bg-base-50">
        <span className="text-[32px] font-bold text-line-300">404</span>
      </div>
      <p className="text-[11.5px] font-semibold uppercase tracking-wide text-ink-400">
        Page Not Found
      </p>
      <h1 className="mt-2 text-[22px] font-semibold text-ink-900">This page isn't available.</h1>
      <p className="mt-2 max-w-sm text-[13px] text-ink-500">
        The route you followed doesn't match anything in the system. Please check the URL or return to the dashboard.
      </p>
      <Link
        to="/dashboard/overview"
        className="mt-6 flex items-center gap-2 rounded border border-primary-600 bg-primary-600 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-primary-700"
      >
        <LuArrowLeft size={15} />
        Back to Dashboard
      </Link>
    </div>
  );
}
