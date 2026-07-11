const statusColor = {
  up:   { dot: "bg-success-500", text: "text-success-700", bg: "bg-success-50" },
  down: { dot: "bg-danger-500",  text: "text-danger-600",  bg: "bg-danger-50"  },
  flat: { dot: "bg-ink-300",     text: "text-ink-500",     bg: "bg-base-100"   },
};

function Sparkline({ points, tone }) {
  const stroke =
    tone === "up" ? "#16A34A" : tone === "down" ? "#DC2626" : "#9CA3AF";
  const max = Math.max(...points);
  const min = Math.min(...points);
  const norm = points.map((p, i) => {
    const x = (i / (points.length - 1)) * 100;
    const y = 26 - ((p - min) / (max - min || 1)) * 22 - 2;
    return `${x},${y}`;
  });

  return (
    <svg viewBox="0 0 100 26" className="h-6 w-16" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`spark-${tone}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.15" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={norm.join(" ")}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StatsCard({ icon: Icon, label, value, delta, trend = "flat", spark, accent = "primary" }) {
  const iconColors = {
    primary: "bg-primary-100 text-primary-600",
    success: "bg-success-100 text-success-600",
    danger:  "bg-danger-100  text-danger-600",
    warning: "bg-warning-100 text-warning-600",
  };
  const iconClass = iconColors[accent] ?? iconColors.primary;
  const sc = statusColor[trend];

  return (
    <div className="card-hover group rounded-xl border border-line-200 bg-white p-5 shadow-card transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconClass} transition-transform duration-200 group-hover:scale-110`}>
          <Icon size={17} />
        </div>
        {spark && <Sparkline points={spark} tone={trend} />}
      </div>
      <p className="mt-3 text-[26px] font-bold tabular text-ink-900 leading-none">{value}</p>
      <div className="mt-1.5 flex items-center gap-2">
        <span className="text-[12.5px] text-ink-500">{label}</span>
        {delta && (
          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${sc.bg} ${sc.text}`}>
            {delta}
          </span>
        )}
      </div>
    </div>
  );
}
