import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { LuPanelLeftClose, LuPanelLeftOpen, LuX } from "react-icons/lu";
import sidebarData from "../data/sidebarData";
import SidebarItem from "./SidebarItem";
import Constellation from "./Constellation";

export default function Sidebar({ collapsed, onToggleCollapse, mobileOpen, onCloseMobile }) {
  const location = useLocation();
  const activeModule = sidebarData.find((m) => location.pathname.startsWith(m.basePath));
  const [openModuleId, setOpenModuleId] = useState(activeModule?.id ?? sidebarData[0].id);

  useEffect(() => {
    if (activeModule) setOpenModuleId(activeModule.id);
  }, [activeModule?.id]);

  const handleToggle = (id) => {
    setOpenModuleId((prev) => (prev === id ? null : id));
  };

  const panel = (
    <aside
      className={[
        "scroll-quiet flex h-full flex-col overflow-y-auto bg-ink-900 transition-[width] duration-300 ease-premium",
        collapsed ? "w-[84px]" : "w-[280px]",
      ].join(" ")}
    >
      {/* Brand */}
      <div className={["flex items-center gap-3 px-5 pb-5 pt-6", collapsed && "justify-center px-0"].join(" ")}>
        <Link to="/" className="flex items-center gap-3 select-none">
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-600 shadow-soft">
            <span className="font-serif text-[18px] font-bold text-white">L</span>
          </div>
          {!collapsed && (
            <div className="leading-tight">
              <p className="font-display text-[15px] font-extrabold text-white">Logix Info</p>
              <p className="text-[9px] uppercase tracking-wider text-slate-400">Logically Inspired</p>
            </div>
          )}
        </Link>
        <button
          onClick={onCloseMobile}
          className="ml-auto rounded-md p-1.5 text-ink-200/60 hover:bg-white/5 lg:hidden"
          aria-label="Close menu"
        >
          <LuX size={18} />
        </button>
      </div>

      <div className="mx-5 mb-4 border-t border-white/[0.07]" />

      {/* Modules */}
      <nav className="flex flex-1 flex-col gap-0.5 pb-4">
        {sidebarData.map((module) => (
          <SidebarItem
            key={module.id}
            module={module}
            isOpen={openModuleId === module.id}
            onToggle={handleToggle}
            collapsed={collapsed}
          />
        ))}
      </nav>

      {/* Footer signature + collapse toggle */}
      <div className="mt-auto border-t border-white/[0.07] p-4">
        {!collapsed && (
          <div className="relative mb-3 overflow-hidden rounded-xl bg-white/[0.03] px-3 py-3">
            <Constellation className="absolute inset-0 h-full w-full opacity-70" tone="light" />
            <p className="relative text-[11px] leading-snug text-ink-200/60">
              214 people, one network.
            </p>
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="hidden w-full items-center justify-center gap-2 rounded-lg py-2 text-ink-200/60 transition-colors hover:bg-white/5 hover:text-base-0 lg:flex"
        >
          {collapsed ? <LuPanelLeftOpen size={17} /> : <LuPanelLeftClose size={17} />}
        </button>
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">{panel}</div>

      {/* Mobile drawer */}
      <div
        className={[
          "fixed inset-0 z-40 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <div
          onClick={onCloseMobile}
          className={[
            "absolute inset-0 bg-ink-900/50 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
        <div
          className={[
            "absolute left-0 top-0 h-full transition-transform duration-300 ease-premium",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          {panel}
        </div>
      </div>
    </>
  );
}