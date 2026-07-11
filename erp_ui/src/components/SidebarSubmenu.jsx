import { NavLink } from "react-router-dom";

export default function SidebarSubmenu({ items, basePath, collapsed }) {
  if (collapsed) return null;

  return (
    <div className="overflow-hidden animate-expandDown">
      <ul className="mt-1 mb-2 ml-[38px] flex flex-col gap-0.5 border-l border-white/10 pl-4">
        {items.map((item) => (
          <li key={item.id}>
            <NavLink
              to={`${basePath}/${item.path}`}
              className={({ isActive }) =>
                [
                  "group relative flex items-center gap-2 rounded-md px-2.5 py-2 text-[13px] leading-tight transition-colors duration-200 ease-premium",
                  isActive
                    ? "text-brass-300 font-medium"
                    : "text-ink-200/70 hover:text-base-0",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={[
                      "h-1.5 w-1.5 rounded-full transition-all duration-200",
                      isActive ? "bg-brass-400 scale-100" : "bg-ink-200/30 scale-75 group-hover:scale-100 group-hover:bg-ink-200/60",
                    ].join(" ")}
                  />
                  {item.label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
