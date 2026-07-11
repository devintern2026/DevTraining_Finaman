import { useEffect, useRef, useState } from "react";
import {
  LuMenu,
  LuBell,
  LuChevronDown,
  LuLogOut,
  LuUserCog,
  LuSettings,
  LuSparkles,
  LuPhone,
} from "react-icons/lu";
import SearchBar from "./SearchBar";
import Breadcrumb from "./Breadcrumb";
import usePageMeta from "../data/usePageMeta";

const today = new Date().toLocaleDateString("en-IN", {
  weekday: "short",
  day: "numeric",
  month: "short",
  year: "numeric",
});

const navLinks = [
  {
    name: "Products",
    items: [
      { title: "Core HR Suite", desc: "Automate workforce management, directory & directories." },
      { title: "Time & Attendance", desc: "Real-time daily shift & calendar tracking." },
      { title: "Recruitment Pipeline", desc: "Interactive job postings & interview management." },
      { title: "Payroll & Salary", desc: "Enterprise bonuses, tax, and automated payslips." }
    ]
  },
  {
    name: "AI",
    items: [
      { title: "AI Resume Scanner", desc: "Pre-screen candidate CVs automatically." },
      { title: "Smart Shift Planner", desc: "Forecast and assign schedule shifts using AI." },
      { title: "Predictive Turnover", desc: "Analyze employee retention stats using machine learning." }
    ]
  },
  {
    name: "About Us",
    items: [
      { title: "Company Profile", desc: "Enterprise operations, mission and platform vision." },
      { title: "Core Architecture", desc: "Underlying ERP framework built for scalability." },
      { title: "Customer Success", desc: "Case studies of clients achieving 10x HR automation." }
    ]
  },
  {
    name: "Resources",
    items: [
      { title: "Product Guides", desc: "In-depth tutorials & walk-through catalogs." },
      { title: "HCM Case Studies", desc: "How enterprise brands scaled with LogixHR." },
      { title: "Compliance Hub", desc: "Stay up-to-date with region-specific labor laws." }
    ]
  }
];

export default function Header({ onOpenMobileMenu }) {
  const { pageLabel } = usePageMeta();
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const notifRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/[0.08] bg-ink-900 px-4 text-white shadow-md lg:px-6">
      {/* Left Area: Mobile Menu + Breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="rounded-lg p-1.5 text-ink-300 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
          aria-label="Open menu"
        >
          <LuMenu size={20} />
        </button>
        <div className="hidden flex-col lg:flex">
          <span className="text-[13px] font-bold leading-tight text-white">{pageLabel}</span>
          <Breadcrumb />
        </div>
      </div>

      {/* Center Area: Mega dropdown navigational links (StrategicERP design) */}
      <nav className="hidden xl:flex items-center gap-4 flex-shrink-0">
        {navLinks.map((link) => (
          <div key={link.name} className="relative group/menu py-2">
            <button 
              className="flex items-center gap-1 text-[13px] font-semibold text-ink-200 hover:text-brass-305 transition-colors cursor-pointer whitespace-nowrap"
            >
              {link.name === "AI" && (
                <LuSparkles size={12} className="text-brass-400 fill-brass-300/10 mr-0.5" />
              )}
              {link.name}
              <LuChevronDown size={12} className="text-ink-400 group-hover/menu:rotate-180 transition-transform duration-250" />
            </button>
            
            {/* Dropdown Options */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 origin-top transform scale-95 group-hover/menu:scale-100 bg-ink-800 rounded-lg border border-white/[0.08] p-3 shadow-lg pointer-events-auto">
              <div className="space-y-1.5">
                {link.items.map((item) => (
                  <div key={item.title} className="p-2 rounded hover:bg-white/5 transition-colors cursor-pointer group/item">
                    <p className="text-[12px] font-bold text-white group-hover/item:text-brass-300 transition-colors">{item.title}</p>
                    <p className="text-[10.5px] text-ink-400 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </nav>

      {/* Right Area: Search, CTAs, Notifications, Profile */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {/* Call Me Button */}
        <a 
          href="mailto:contact@logixhr.com?subject=Callback Request"
          onClick={(e) => {
            e.preventDefault();
            alert("Callback request logged successfully! We will contact you at +91 98201 80931.");
          }}
          className="hidden xl:flex items-center gap-1 px-3 py-1 rounded-full border border-brass-500/40 text-brass-300 hover:text-brass-405 hover:border-brass-400 hover:bg-white/5 text-[11.5px] font-bold transition-all duration-200 cursor-pointer shadow-xs select-none"
        >
          <LuPhone size={11} className="fill-brass-400/10 text-brass-300" />
          Call Me
        </a>

        {/* Stacked Call Us Widget */}
        <div className="hidden lg:flex flex-col text-right select-none leading-none pr-1">
          <span className="text-[9px] font-bold text-ink-400">
            <a href="tel:+919820180931" className="underline decoration-dotted">Call Us</a>
          </span>
          <a href="tel:+919820180931" className="text-[11.5px] font-bold text-ink-100 hover:text-brass-300 mt-0.5 transition-colors">
            +91 98201 80931
          </a>
        </div>

        <SearchBar />

        {/* Date — desktop only */}
        <span className="hidden rounded-full bg-white/5 border border-white/[0.08] px-3 py-1 text-[11.0px] font-medium text-ink-300 xl:inline">
          {today}
        </span>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setNotifOpen((v) => !v)}
            className="relative rounded-lg p-2 text-ink-300 transition-all duration-200 hover:bg-white/5 hover:text-white"
            aria-label="Notifications"
          >
            <LuBell size={18} />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-2 border-ink-900 bg-accent-500 animate-pulse" />
          </button>

          {notifOpen && (
            <div className="absolute right-0 top-12 w-80 animate-scale-in overflow-hidden rounded-xl border border-white/[0.08] bg-ink-800 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-ink-900 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <p className="text-[13px] font-bold text-white">Notifications</p>
                  <span className="rounded-full bg-brass-500/20 px-1.5 py-0.5 text-[10px] font-bold text-brass-300">3</span>
                </div>
                <LuSparkles size={13} className="text-brass-400" />
              </div>
              <ul className="max-h-72 overflow-y-auto py-1">
                {[
                  { text: "A leave request was submitted for Jul 14–16", time: "9m ago", type: "info" },
                  { text: "New candidate applied — Product Designer", time: "42m ago", type: "info" },
                  { text: "Payroll run for June closes tomorrow", time: "3h ago", type: "warning" },
                ].map((n, i) => (
                  <li
                    key={i}
                    className="flex gap-3 px-4 py-2.5 hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <span
                      className={[
                        "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                        n.type === "warning" ? "bg-accent-500" : "bg-brass-400",
                      ].join(" ")}
                    />
                    <div className="min-w-0">
                      <p className="text-[12.5px] leading-snug text-ink-100">{n.text}</p>
                      <p className="mt-0.5 text-[10px] text-ink-400">{n.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/[0.08] px-4 py-2 bg-ink-900/50">
                <button className="text-[12px] font-semibold text-brass-300 hover:text-brass-400 hover:underline">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setProfileOpen((v) => !v)}
            className="flex items-center gap-2 rounded-lg py-1 pl-1 pr-2 transition-all duration-200 hover:bg-white/5 text-white"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brass-400 to-brass-600 text-[12px] font-bold text-ink-900 shadow-md animate-fade-in">
              G
            </div>
            <div className="hidden text-left leading-tight sm:block animate-fade-in">
              <p className="text-[12.5px] font-semibold text-ink-100">Guest</p>
              <p className="text-[10px] text-ink-400">Administrator</p>
            </div>
            <LuChevronDown
              size={13}
              className={[
                "hidden text-ink-400 transition-transform duration-200 sm:block",
                profileOpen ? "rotate-180" : "rotate-0",
              ].join(" ")}
            />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-11 w-52 animate-scale-in overflow-hidden rounded-xl border border-white/[0.08] bg-ink-800 py-1 shadow-xl">
              {/* User info row */}
              <div className="flex items-center gap-2.5 border-b border-white/[0.08] px-3 py-2.5 bg-ink-900/50">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brass-400 to-brass-600 text-[12px] font-bold text-ink-900">
                  G
                </div>
                <div>
                  <p className="text-[12.5px] font-semibold text-white">Guest</p>
                  <p className="text-[10px] text-ink-405">guest@logixhr.com</p>
                </div>
              </div>
              {[
                { icon: LuUserCog, label: "My Profile" },
                { icon: LuSettings, label: "Account Settings" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-[13px] text-ink-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <Icon size={14} className="text-ink-400" />
                  {label}
                </button>
              ))}
              <div className="my-1 border-t border-white/[0.08]" />
              <button className="flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-[13px] text-accent-500 transition-colors hover:bg-accent-500/10">
                <LuLogOut size={14} />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
