import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import {
  LuChevronLeft,
  LuChevronRight,
  LuPlus,
  LuClock,
  LuMapPin,
  LuUsers,
} from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const EVENT_TYPES = {
  holiday: { label: "Holiday", color: "bg-danger-50 text-danger-600 border-danger-100" },
  meeting: { label: "Meeting", color: "bg-primary-50 text-primary-600 border-primary-100" },
  training: { label: "Training", color: "bg-primary-50 text-primary-600 border-primary-100" },
  review: { label: "Review", color: "bg-warning-50 text-warning-600 border-warning-100" },
  celebration: { label: "Celebration", color: "bg-success-50 text-success-600 border-success-100" },
};

const SAMPLE_EVENTS = [
  { id: 1, title: "Independence Day", date: "2025-08-15", type: "holiday", time: "All Day", location: "Company Wide", attendees: 120 },
  { id: 2, title: "Q3 Board Review", date: "2025-08-04", type: "review", time: "10:00 AM", location: "Conf Room A", attendees: 12 },
  { id: 3, title: "New Hire Orientation", date: "2025-08-05", type: "training", time: "09:00 AM", location: "Training Hall", attendees: 8 },
  { id: 4, title: "All Hands Meeting", date: "2025-08-11", type: "meeting", time: "03:00 PM", location: "Main Auditorium", attendees: 95 },
  { id: 5, title: "Diwali Celebration", date: "2025-10-20", type: "celebration", time: "05:00 PM", location: "Office Lobby", attendees: 120 },
  { id: 6, title: "React Workshop", date: "2025-08-18", type: "training", time: "10:00 AM", location: "Training Lab", attendees: 20 },
  { id: 7, title: "HR Policy Sync", date: "2025-08-22", type: "meeting", time: "02:00 PM", location: "Zoom", attendees: 45 },
  { id: 8, title: "Gandhi Jayanti", date: "2025-10-02", type: "holiday", time: "All Day", location: "Company Wide", attendees: 120 },
];

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

export default function EventCalendar() {
  const navigate = useNavigate();
  const today = new Date();
  const [current, setCurrent] = useState({ month: today.getMonth(), year: today.getFullYear() });
  const [selected, setSelected] = useState(null);

  const daysInMonth = new Date(current.year, current.month + 1, 0).getDate();
  const firstDayOfMonth = new Date(current.year, current.month, 1).getDay();

  const eventsForDate = (day) => {
    const dateStr = `${current.year}-${String(current.month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return SAMPLE_EVENTS.filter((e) => e.date === dateStr);
  };

  const selectedEvents = selected ? eventsForDate(selected) : [];

  const prevMonth = () =>
    setCurrent((c) => c.month === 0 ? { month: 11, year: c.year - 1 } : { ...c, month: c.month - 1 });
  const nextMonth = () =>
    setCurrent((c) => c.month === 11 ? { month: 0, year: c.year + 1 } : { ...c, month: c.month + 1 });

  const isToday = (day) =>
    day === today.getDate() && current.month === today.getMonth() && current.year === today.getFullYear();

  const upcomingEvents = SAMPLE_EVENTS
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  return (
    <div className="space-y-5 animate-fade-up">
      <PageHeader
        title="Event Calendar"
        description="View and manage all company events, holidays, and meetings."
        actions={
          <button
            onClick={() => navigate("/events/manage")}
            className="flex items-center gap-1.5 rounded-full bg-primary-600 px-4 py-2 text-[13px] font-bold text-white shadow-sm transition-all duration-200 hover:bg-primary-700 hover:shadow-md hover:-translate-y-0.5"
          >
            <LuPlus size={14} />
            Add Event
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Calendar Grid */}
        <div className="lg:col-span-2 overflow-hidden rounded-xl border border-line-200 bg-white shadow-card">
          {/* Month navigation */}
          <div className="flex items-center justify-between border-b border-line-200 bg-gradient-to-r from-white to-base-50 px-5 py-3.5">
            <button onClick={prevMonth} className="rounded-lg p-1.5 text-ink-500 hover:bg-base-100 hover:text-ink-800 transition-colors">
              <LuChevronLeft size={16} />
            </button>
            <h2 className="text-[14px] font-bold text-ink-900">
              {MONTHS[current.month]} {current.year}
            </h2>
            <button onClick={nextMonth} className="rounded-lg p-1.5 text-ink-500 hover:bg-base-100 hover:text-ink-800 transition-colors">
              <LuChevronRight size={16} />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 border-b border-line-200 bg-base-50 py-2">
            {WEEK_DAYS.map((d) => (
              <div key={d} className="text-center text-[11px] font-bold uppercase tracking-wider text-ink-400">
                {d}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 bg-line-200 gap-px">
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} className="min-h-[76px] bg-base-50" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const events = eventsForDate(day);
              const active = selected === day;
              return (
                <div
                  key={day}
                  onClick={() => setSelected(active ? null : day)}
                  className={[
                    "relative min-h-[76px] cursor-pointer bg-white p-1.5 transition-all duration-200",
                    active ? "bg-primary-50/50" : "hover:bg-base-50/70",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "inline-flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-semibold transition-all",
                      isToday(day)
                        ? "bg-primary-600 text-white shadow-sm shadow-primary-300"
                        : active
                        ? "bg-primary-100 text-primary-700"
                        : "text-ink-700 hover:bg-base-100",
                    ].join(" ")}
                  >
                    {day}
                  </span>
                  <div className="mt-1 space-y-0.5">
                    {events.slice(0, 2).map((ev) => (
                      <div
                        key={ev.id}
                        className={`truncate rounded px-1.5 py-0.5 text-[9.5px] font-semibold border ${EVENT_TYPES[ev.type].color}`}
                      >
                        {ev.title}
                      </div>
                    ))}
                    {events.length > 2 && (
                      <div className="px-1 text-[9.5px] font-bold text-primary-500">+{events.length - 2} more</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 px-5 py-3.5 border-t border-line-200 bg-base-50">
            {Object.entries(EVENT_TYPES).map(([key, val]) => (
              <div key={key} className="flex items-center gap-1.5">
                <span className={`inline-block h-2.5 w-2.5 rounded-full ${val.color.split(" ")[0]} border`} />
                <span className="text-[11px] font-semibold text-ink-600">{val.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="space-y-4">
          {/* Selected day events */}
          {selected && (
            <div className="animate-scale-in overflow-hidden rounded-xl border border-line-200 bg-white shadow-card">
              <div className="border-b border-line-200 bg-gradient-to-r from-white to-base-50 px-4 py-3">
                <p className="text-[13px] font-bold text-ink-900">
                  {MONTHS[current.month]} {selected}, {current.year}
                </p>
                <p className="text-[11px] font-semibold text-ink-450 text-primary-600">{selectedEvents.length} event{selectedEvents.length !== 1 ? "s" : ""}</p>
              </div>
              {selectedEvents.length === 0 ? (
                <div className="px-4 py-8 text-center text-[12.5px] text-ink-400">No events scheduled.</div>
              ) : (
                <div className="divide-y divide-line-200">
                  {selectedEvents.map((ev) => (
                    <div key={ev.id} className="px-4 py-3.5 hover:bg-base-50 transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[13px] font-bold text-ink-800">{ev.title}</p>
                        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider ${EVENT_TYPES[ev.type].color}`}>
                          {EVENT_TYPES[ev.type].label}
                        </span>
                      </div>
                      <div className="mt-2.5 space-y-1.5">
                        <p className="flex items-center gap-1.5 text-[11.5px] text-ink-600"><LuClock size={12} className="text-ink-400" />{ev.time}</p>
                        <p className="flex items-center gap-1.5 text-[11.5px] text-ink-600"><LuMapPin size={12} className="text-ink-400" />{ev.location}</p>
                        <p className="flex items-center gap-1.5 text-[11.5px] text-ink-600"><LuUsers size={12} className="text-ink-400" />{ev.attendees} attendees</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Upcoming events */}
          <div className="overflow-hidden rounded-xl border border-line-200 bg-white shadow-card">
            <div className="border-b border-line-200 bg-gradient-to-r from-white to-base-50 px-4 py-3">
              <p className="text-[13px] font-bold text-ink-900">Upcoming Events</p>
            </div>
            <div className="divide-y divide-line-150">
              {upcomingEvents.map((ev, idx) => {
                const d = new Date(ev.date);
                return (
                  <div key={ev.id} className="animate-fade-up flex items-start gap-3.5 px-4 py-3.5 hover:bg-base-50 transition-colors" style={{ animationDelay: `${idx * 60}ms` }}>
                    <div className="flex w-10 shrink-0 flex-col items-center rounded-lg border border-line-200 bg-base-50 py-1 shadow-xs">
                      <span className="text-[9px] font-bold uppercase text-ink-400 leading-none">
                        {MONTHS[d.getMonth()].slice(0, 3)}
                      </span>
                      <span className="mt-0.5 text-[16px] font-extrabold leading-none text-ink-800">{d.getDate()}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12.5px] font-bold text-ink-800">{ev.title}</p>
                      <p className="mt-0.5 text-[11px] text-ink-500">{ev.time} · {ev.location}</p>
                      <span className={`mt-1.5 inline-block rounded-full border px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider ${EVENT_TYPES[ev.type].color}`}>
                        {EVENT_TYPES[ev.type].label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
