const FEED = [
  {
    title: "Payroll for June closes tomorrow",
    detail: "Finance needs final attendance corrections by 6 PM.",
    time: "2h ago",
    type: "warning",
  },
  {
    title: "A leave request needs review",
    detail: "Jul 14–16 · Annual leave · Awaiting your approval",
    time: "3h ago",
    type: "info",
  },
  {
    title: "New candidate applied",
    detail: "Product Designer role · Round 1",
    time: "5h ago",
    type: "info",
  },
  {
    title: "Policy update published",
    detail: "Revised WFH guidelines are now live on the wiki.",
    time: "Yesterday",
    type: "neutral",
  },
];

const dotStyle = {
  warning: { bg: "bg-warning-500", pill: "bg-warning-50 text-warning-600 border-warning-200" },
  info:    { bg: "bg-primary-500", pill: "bg-primary-50 text-primary-600 border-primary-200" },
  neutral: { bg: "bg-ink-300",     pill: "bg-base-100 text-ink-500 border-line-200"          },
};

export default function NotificationPanel() {
  return (
    <div className="overflow-hidden rounded-xl border border-line-200 bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-line-200 bg-gradient-to-r from-white to-base-50 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <h3 className="text-[14px] font-bold text-ink-900">Company Feed</h3>
          <span className="rounded-full bg-primary-100 px-2 py-0.5 text-[10.5px] font-bold text-primary-600">
            {FEED.length}
          </span>
        </div>
        <button className="text-[12px] font-semibold text-primary-600 transition-colors hover:text-primary-700 hover:underline">
          View all
        </button>
      </div>

      <ul className="flex flex-col stagger">
        {FEED.map((item, i) => (
          <li
            key={i}
            className="animate-fade-up flex items-start gap-3 border-b border-line-200 px-5 py-3.5 last:border-0 transition-colors duration-150 hover:bg-base-50 cursor-pointer"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {/* Icon area */}
            <div className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${dotStyle[item.type].pill} border text-[10px] font-bold`}>
              <span className={`h-2 w-2 rounded-full ${dotStyle[item.type].bg}`} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-semibold leading-snug text-ink-900">{item.title}</p>
              <p className="mt-0.5 text-[12px] text-ink-500">{item.detail}</p>
            </div>
            <span className="whitespace-nowrap rounded-full bg-base-100 px-1.5 py-0.5 text-[10.5px] text-ink-400">
              {item.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
