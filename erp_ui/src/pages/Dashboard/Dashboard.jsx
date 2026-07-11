import {
  LuUsers,
  LuCalendarCheck,
  LuUserPlus,
  LuPlaneTakeoff,
  LuBanknote,
  LuFilePlus2,
  LuArrowRight,
} from "react-icons/lu";
import PageHeader from "../../components/PageHeader";
import WelcomeCard from "../../components/WelcomeCard";
import StatsCard from "../../components/StatsCard";
import NotificationPanel from "../../components/NotificationPanel";
import TaskPanel from "../../components/TaskPanel";

const STATS = [
  { icon: LuUsers,          label: "Total headcount",  value: "214",   delta: "+6 this month", trend: "up",   spark: [12,14,13,16,18,19,21], accent: "primary" },
  { icon: LuCalendarCheck,  label: "Attendance rate",  value: "96.2%", delta: "+1.4%",         trend: "up",   spark: [90,92,91,94,93,95,96], accent: "success" },
  { icon: LuUserPlus,       label: "Open positions",   value: "07",    delta: "2 closing soon",trend: "flat", spark: [9,8,9,7,8,7,7],        accent: "primary" },
  { icon: LuPlaneTakeoff,   label: "On leave today",   value: "05",    delta: "−2 vs last wk", trend: "down", spark: [8,7,9,6,7,5,5],        accent: "danger"  },
];

const EVENTS = [
  { day: "11", month: "JUL", title: "Quarterly town hall",                meta: "10:00 AM · Auditorium" },
  { day: "14", month: "JUL", title: "New hire orientation",               meta: "9:30 AM · Batch of 6"  },
  { day: "18", month: "JUL", title: "Performance review cycle opens",     meta: "All departments"        },
];

const QUICK_ACTIONS = [
  { icon: LuUserPlus,   label: "Add Employee"  },
  { icon: LuBanknote,   label: "Run Payroll"   },
  { icon: LuFilePlus2,  label: "Post a Job"    },
  { icon: LuPlaneTakeoff, label: "Approve Leave" },
];

const DEPARTMENTS = [
  { name: "Engineering", count: 68, color: "bg-primary-600" },
  { name: "Sales",       count: 42, color: "bg-success-500" },
  { name: "Design",      count: 21, color: "bg-warning-500" },
  { name: "Support",     count: 34, color: "bg-primary-300" },
  { name: "Operations",  count: 49, color: "bg-ink-300"     },
];
const totalHeadcount = DEPARTMENTS.reduce((s, d) => s + d.count, 0);

const ACTIVITY = [
  { initials: "TA", name: "Team Member A", action: "submitted this week's timesheet",  time: "12m ago" },
  { initials: "TB", name: "Team Member B", action: "updated their emergency contact",  time: "48m ago" },
  { initials: "TC", name: "Team Member C", action: "uploaded revised offer letter",    time: "1h ago"  },
  { initials: "TD", name: "Team Member D", action: "completed onboarding checklist",   time: "2h ago"  },
];

export default function Dashboard() {
  return (
    <>
      <PageHeader
        title="Dashboard Overview"
        description="Monitor headcount, attendance, and pending actions across your organization."
      />

      {/* Hero banner — full width */}
      <div className="grid grid-cols-1 gap-4">
        <WelcomeCard />
      </div>

      {/* KPI stats row */}
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((s) => (
          <StatsCard key={s.label} {...s} />
        ))}
      </div>

      {/* Main grid */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Left / center column */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <NotificationPanel />

          {/* Employee summary */}
          <div className="rounded-lg border border-line-200 bg-base-0 shadow-card">
            <div className="flex items-center justify-between border-b border-line-200 px-5 py-3.5">
              <h3 className="text-[14px] font-semibold text-ink-900">Employee Summary</h3>
              <span className="text-[12px] text-ink-400">{totalHeadcount} people</span>
            </div>
            <div className="px-5 py-4">
              {/* Stacked bar */}
              <div className="flex h-2 w-full overflow-hidden rounded-full bg-base-100">
                {DEPARTMENTS.map((d) => (
                  <div
                    key={d.name}
                    className={`h-full ${d.color}`}
                    style={{ width: `${(d.count / totalHeadcount) * 100}%` }}
                  />
                ))}
              </div>
              {/* Legend */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {DEPARTMENTS.map((d) => (
                  <div key={d.name}>
                    <div className="flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${d.color}`} />
                      <span className="text-[11.5px] text-ink-500">{d.name}</span>
                    </div>
                    <p className="mt-0.5 text-[15px] font-semibold tabular text-ink-900">
                      {d.count}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent activity */}
          <div className="rounded-lg border border-line-200 bg-base-0 shadow-card">
            <div className="border-b border-line-200 px-5 py-3.5">
              <h3 className="text-[14px] font-semibold text-ink-900">Recent Activity</h3>
            </div>
            <ul className="divide-y divide-line-200">
              {ACTIVITY.map((a, i) => (
                <li key={i} className="flex items-center gap-3 px-5 py-3 hover:bg-base-50">
                   <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-[11px] font-semibold text-primary-700">
                     {a.initials}
                   </div>
                   <p className="flex-1 text-[12.5px] text-ink-700">
                     <span className="font-medium text-ink-900">{a.name}</span> {a.action}
                   </p>
                   <span className="whitespace-nowrap text-[11px] text-ink-400">{a.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right rail */}
        <div className="flex flex-col gap-4">
          <TaskPanel />

          {/* Quick actions */}
          <div className="rounded-lg border border-line-200 bg-base-0 shadow-card">
            <div className="border-b border-line-200 px-5 py-3.5">
              <h3 className="text-[14px] font-semibold text-ink-900">Quick Actions</h3>
            </div>
            <div className="grid grid-cols-2 gap-px border-t border-line-200">
              {QUICK_ACTIONS.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="group flex flex-col items-start gap-2.5 p-4 text-left hover:bg-base-50"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line-200 bg-primary-50 text-primary-500 transition-colors group-hover:border-primary-300 group-hover:bg-primary-100 group-hover:text-primary-700">
                    <Icon size={15} />
                  </span>
                  <span className="text-[12px] font-medium text-ink-800">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Upcoming events */}
          <div className="rounded-lg border border-line-200 bg-base-0 shadow-card">
            <div className="border-b border-line-200 px-5 py-3.5">
              <h3 className="text-[14px] font-semibold text-ink-900">Upcoming Events</h3>
            </div>
            <ul className="divide-y divide-line-200">
              {EVENTS.map((e, i) => (
                <li key={i} className="flex items-center gap-3 px-5 py-3 hover:bg-base-50">
                  <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg border border-primary-100 bg-primary-50">
                    <span className="text-[13px] font-semibold leading-none text-primary-700">
                      {e.day}
                    </span>
                    <span className="mt-0.5 text-[9px] uppercase tracking-wide text-primary-400">
                      {e.month}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[12.5px] font-medium text-ink-900">{e.title}</p>
                    <p className="text-[11.5px] text-ink-400">{e.meta}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* HR Insight */}
          <div className="rounded-xl border border-primary-100 bg-gradient-to-br from-primary-50 to-indigo-50/50 px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary-600">
              HR Insight
            </p>
            <p className="mt-1.5 text-[14px] font-semibold leading-snug text-ink-900">
              Time-to-hire dropped to 18 days this quarter.
            </p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-ink-600">
              Down from 26 days last quarter, driven by faster interview scheduling.
            </p>
            <button className="mt-3 flex items-center gap-1.5 text-[12px] font-medium text-primary-600 hover:text-primary-700">
              View recruitment analytics <LuArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
