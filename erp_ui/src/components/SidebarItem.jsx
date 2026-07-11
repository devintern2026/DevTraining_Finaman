import { useLocation, useNavigate } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";
import SidebarSubmenu from "./SidebarSubmenu";

export default function SidebarItem({ module, isOpen, onToggle, collapsed }) {
  const location = useLocation();
  const navigate = useNavigate();
  const Icon = module.icon;
  const isModuleActive = module.basePath === "/" 
    ? location.pathname === "/" 
    : location.pathname.startsWith(module.basePath);

  const handleClick = () => {
    if (!module.items || module.items.length === 0) {
      navigate(module.basePath);
      return;
    }
    if (collapsed) {
      navigate(`${module.basePath}/${module.items[0].path}`);
      return;
    }
    onToggle(module.id);
  };

  return (
    <div className="px-3">
      <button
        onClick={handleClick}
        className={[
          "group relative flex w-full items-center gap-3 rounded-lg px-2.5 py-2.5 text-[13.5px] transition-all duration-200 ease-premium",
          isModuleActive
            ? "bg-white/[0.06] text-base-0"
            : "text-ink-200/80 hover:bg-white/[0.04] hover:text-base-0",
        ].join(" ")}
      >
        {isModuleActive && (
          <span className="absolute left-0 top-1/2 h-5 w-[2.5px] -translate-y-1/2 rounded-r-full bg-brass-400" />
        )}
        <Icon
          size={17}
          className={isModuleActive ? "text-brass-300" : "text-ink-200/60 group-hover:text-ink-200"}
        />
        {!collapsed && (
          <>
            <span className="flex-1 text-left font-medium tracking-[-0.01em]">{module.label}</span>
            {module.items && module.items.length > 0 && (
              <LuChevronRight
                size={14}
                className={[
                  "text-ink-200/40 transition-transform duration-300 ease-premium",
                  isOpen ? "rotate-90" : "rotate-0",
                ].join(" ")}
              />
            )}
          </>
        )}
      </button>

      {isOpen && !collapsed && (
        <SidebarSubmenu items={module.items} basePath={module.basePath} collapsed={collapsed} />
      )}
    </div>
  );
}
