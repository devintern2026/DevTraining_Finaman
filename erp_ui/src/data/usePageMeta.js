import { useLocation } from "react-router-dom";
import sidebarData from "./sidebarData";

/**
 * Resolves the current URL to { moduleLabel, pageLabel, moduleIcon }
 * so Header/Breadcrumb/PageHeader never need hardcoded titles.
 */
export default function usePageMeta() {
  const { pathname } = useLocation();

  for (const module of sidebarData) {
    const isMatch = module.basePath === "/"
      ? pathname === "/"
      : pathname.startsWith(module.basePath);

    if (isMatch) {
      const item = module.items ? module.items.find((i) => pathname === `${module.basePath}/${i.path}`) : null;
      return {
        moduleLabel: module.label,
        pageLabel: item ? item.label : (module.items && module.items.length > 0 ? module.items[0].label : module.label),
        moduleIcon: module.icon,
      };
    }
  }

  return { moduleLabel: "Dashboard", pageLabel: "Overview", moduleIcon: sidebarData[0].icon };
}
