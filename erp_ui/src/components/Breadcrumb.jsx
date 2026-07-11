import { Link } from "react-router-dom";
import usePageMeta from "../data/usePageMeta";
import { LuChevronRight } from "react-icons/lu";

export default function Breadcrumb() {
  const { moduleLabel, pageLabel } = usePageMeta();

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-[11.5px] text-ink-400 select-none">
      <Link to="/" className="hover:text-white transition-colors">Home</Link>
      <LuChevronRight size={11} className="text-ink-550" />
      <span className="text-ink-300">{moduleLabel}</span>
      <LuChevronRight size={11} className="text-ink-550" />
      <span className="font-medium text-brass-300">{pageLabel}</span>
    </nav>
  );
}
