import { useState } from "react";
import { LuCheck, LuListChecks } from "react-icons/lu";

const INITIAL_TASKS = [
  { id: 1, label: "Approve pending leave request",          due: "Today",    done: false },
  { id: 2, label: "Review Q3 payroll adjustments",          due: "Today",    done: false },
  { id: 3, label: "Shortlist candidates — Product Designer", due: "Tomorrow", done: false },
  { id: 4, label: "Sign off on new hire onboarding kit",    due: "Jul 11",   done: true  },
];

export default function TaskPanel() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const toggle = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const remaining = tasks.filter((t) => !t.done).length;
  const pct = Math.round(((tasks.length - remaining) / tasks.length) * 100);

  return (
    <div className="overflow-hidden rounded-xl border border-line-200 bg-white shadow-card">
      {/* Header */}
      <div className="border-b border-line-200 bg-gradient-to-r from-white to-base-50 px-5 py-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LuListChecks size={15} className="text-primary-500" />
            <h3 className="text-[14px] font-bold text-ink-900">My Tasks</h3>
          </div>
          <span className="rounded-full bg-primary-100 px-2.5 py-0.5 text-[11px] font-bold text-primary-600">
            {remaining} open
          </span>
        </div>
        {/* Progress bar */}
        <div className="mt-2.5 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-base-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-[10.5px] font-semibold text-ink-400">{pct}%</span>
        </div>
      </div>

      <ul className="flex flex-col">
        {tasks.map((task, i) => (
          <li key={task.id} className="animate-fade-up" style={{ animationDelay: `${i * 50}ms` }}>
            <button
              onClick={() => toggle(task.id)}
              className="flex w-full items-center gap-3 border-b border-line-200 px-5 py-3 text-left transition-colors duration-150 hover:bg-base-50 last:border-0"
            >
              {/* Checkbox */}
              <span
                className={[
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200",
                  task.done
                    ? "border-primary-500 bg-primary-500 shadow-sm"
                    : "border-ink-200 bg-white hover:border-primary-300",
                ].join(" ")}
              >
                {task.done && <LuCheck size={10} className="text-white" strokeWidth={3} />}
              </span>
              {/* Label */}
              <span className="flex-1">
                <p
                  className={[
                    "text-[13px] leading-snug transition-colors duration-150",
                    task.done ? "text-ink-300 line-through" : "text-ink-800",
                  ].join(" ")}
                >
                  {task.label}
                </p>
              </span>
              {/* Due badge */}
              <span
                className={[
                  "rounded-full px-2 py-0.5 text-[10.5px] font-semibold whitespace-nowrap",
                  task.due === "Today"
                    ? "bg-warning-50 text-warning-600"
                    : task.done
                    ? "bg-base-100 text-ink-300"
                    : "bg-base-100 text-ink-400",
                ].join(" ")}
              >
                {task.due}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
