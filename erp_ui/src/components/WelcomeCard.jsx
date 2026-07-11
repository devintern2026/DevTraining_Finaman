import {
  LuUsers,
  LuCalendarCheck,
  LuBadgeCheck,
  LuWallet,
  LuUserSearch,
  LuBuilding2,
  LuPlaneTakeoff,
  LuListChecks,
  LuTrendingUp,
  LuLifeBuoy,
  LuCalendarDays,
  LuLayoutDashboard,
} from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const now = new Date();
const hour = now.getHours();
const greeting =
  hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
const heroDate = now.toLocaleDateString("en-IN", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

const MODULES = [
  { icon: LuLayoutDashboard, label: "Dashboard",    path: "/dashboard/overview" },
  { icon: LuUsers,           label: "Employees",    path: "/employees/master" },
  { icon: LuBuilding2,       label: "Departments",  path: "/departments/master" },
  { icon: LuCalendarCheck,   label: "Attendance",   path: "/attendance/daily" },
  { icon: LuPlaneTakeoff,    label: "Leave",        path: "/leave/requests" },
  { icon: LuWallet,          label: "Payroll",      path: "/payroll/salary" },
  { icon: LuUserSearch,      label: "Recruitment",  path: "/recruitment/openings" },
  { icon: LuListChecks,      label: "Tasks",        path: "/tasks/my-tasks" },
  { icon: LuTrendingUp,      label: "Performance",  path: "/performance/review" },
  { icon: LuCalendarDays,    label: "Events",       path: "/events/calendar" },
  { icon: LuBadgeCheck,      label: "Designations", path: "/designations/master" },
  { icon: LuLifeBuoy,        label: "Help Desk",    path: "/help-desk/tickets" },
];

const SUMMARY = [
  { value: "214",  label: "Active Employees" },
  { value: "96%",  label: "Attendance Today" },
  { value: "03",   label: "Pending Approvals" },
  { value: "07",   label: "Open Positions" },
];

export default function WelcomeCard() {
  const navigate = useNavigate();
  return (
    <div className="col-span-1 lg:col-span-4 overflow-hidden rounded-xl shadow-md">
      {/* Purple gradient hero — matches StrategicERP */}
      <div
        className="relative px-6 pt-6 pb-0"
        style={{
          background:
            "linear-gradient(135deg, #60A5FA 0%, #3B82F6 25%, #1654C5 55%, #1D4ED8 80%, #1E40AF 100%)",
        }}
      >
        {/* Decorative circles like StrategicERP */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-20"
            style={{ background: "rgba(255,255,255,0.3)" }}
          />
          <div
            className="absolute right-32 top-8 h-40 w-40 rounded-full opacity-10"
            style={{ background: "rgba(255,255,255,0.4)" }}
          />
          <div
            className="absolute -left-8 bottom-0 h-48 w-48 rounded-full opacity-10"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
        </div>

        <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
          {/* Greeting */}
          <div className="max-w-lg">
            <p className="text-[12px] font-medium uppercase tracking-widest text-primary-100">
              {heroDate}
            </p>
            <h2 className="mt-1 text-[22px] font-bold leading-tight text-white">
              {greeting}, Guest 👋
            </h2>
            <p className="mt-1 text-[13px] leading-relaxed text-primary-100">
              214 employees active across 12 departments.
              <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-semibold text-white">
                3 approvals waiting
              </span>
            </p>

            {/* Summary metrics */}
            <div className="mt-4 flex flex-wrap gap-5 pb-5">
              {SUMMARY.map((s) => (
                <div key={s.label}>
                  <p className="text-[22px] font-bold tabular text-white">{s.value}</p>
                  <p className="text-[11px] text-primary-200">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Module icon grid — StrategicERP style */}
          <div className="hidden grid-cols-4 gap-2 pb-4 sm:grid">
            {MODULES.slice(0, 12).map(({ icon: Icon, label, path }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className="group flex flex-col items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-2 py-3 backdrop-blur-sm transition-all hover:bg-white/25 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Icon size={20} className="text-white drop-shadow" />
                <span className="text-[9.5px] font-semibold uppercase tracking-wider text-white/90 leading-none">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* White bottom strip */}
      <div className="border border-t-0 border-line-200 bg-white rounded-b-xl" />
    </div>
  );
}
