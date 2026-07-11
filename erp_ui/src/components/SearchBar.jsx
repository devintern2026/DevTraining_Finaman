import { LuSearch } from "react-icons/lu";

export default function SearchBar() {
  return (
    <div className="relative hidden w-full max-w-[220px] items-center md:flex">
      <LuSearch size={14} className="pointer-events-none absolute left-3 text-ink-450" />
      <input
        type="text"
        placeholder="Search employees, requests…"
        className="w-full rounded-lg border border-white/10 bg-white/5 py-1.5 pl-9 pr-10 text-[12.5px] text-white placeholder:text-ink-400 transition-all duration-200 focus:border-brass-500/40 focus:bg-white/10 focus:outline-none"
      />
      <kbd className="pointer-events-none absolute right-2.5 rounded bg-white/5 border border-white/10 px-1 py-0.2 font-mono text-[9px] text-ink-400">
        ⌘K
      </kbd>
    </div>
  );
}
