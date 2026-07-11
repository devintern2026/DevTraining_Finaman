import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import {
  LuPlus,
  LuSearch,
  LuFilter,
  LuPencil,
  LuTrash2,
  LuChevronDown,
} from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const EVENT_TYPES = {
  holiday: { label: "Holiday", color: "bg-danger-50 text-danger-600 border-danger-100" },
  meeting: { label: "Meeting", color: "bg-primary-50 text-primary-600 border-primary-100" },
  training: { label: "Training", color: "bg-primary-50 text-primary-600 border-primary-100" },
  review: { label: "Review", color: "bg-warning-50 text-warning-600 border-warning-100" },
  celebration: { label: "Celebration", color: "bg-success-50 text-success-600 border-success-100" },
};

const INITIAL_EVENTS = [
  { id: 1,  title: "Independence Day",       date: "2025-08-15", type: "holiday",     time: "All Day",   location: "Company Wide",    attendees: 120, status: "Upcoming" },
  { id: 2,  title: "Q3 Board Review",        date: "2025-08-04", type: "review",      time: "10:00 AM",  location: "Conf Room A",     attendees: 12,  status: "Upcoming" },
  { id: 3,  title: "New Hire Orientation",   date: "2025-08-05", type: "training",    time: "09:00 AM",  location: "Training Hall",   attendees: 8,   status: "Upcoming" },
  { id: 4,  title: "All Hands Meeting",      date: "2025-08-11", type: "meeting",     time: "03:00 PM",  location: "Main Auditorium", attendees: 95,  status: "Upcoming" },
  { id: 5,  title: "Diwali Celebration",     date: "2025-10-20", type: "celebration", time: "05:00 PM",  location: "Office Lobby",    attendees: 120, status: "Upcoming" },
  { id: 6,  title: "React Workshop",         date: "2025-08-18", type: "training",    time: "10:00 AM",  location: "Training Lab",    attendees: 20,  status: "Upcoming" },
  { id: 7,  title: "HR Policy Sync",         date: "2025-08-22", type: "meeting",     time: "02:00 PM",  location: "Zoom",            attendees: 45,  status: "Upcoming" },
  { id: 8,  title: "Gandhi Jayanti",         date: "2025-10-02", type: "holiday",     time: "All Day",   location: "Company Wide",    attendees: 120, status: "Upcoming" },
  { id: 9,  title: "Annual Performance Day", date: "2025-09-15", type: "review",      time: "09:00 AM",  location: "Board Room",      attendees: 30,  status: "Upcoming" },
  { id: 10, title: "Leadership Summit",      date: "2025-09-25", type: "meeting",     time: "10:00 AM",  location: "Grand Hall",      attendees: 60,  status: "Upcoming" },
];

export default function EventList() {
  const navigate = useNavigate();
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [deleteId, setDeleteId] = useState(null);

  const filtered = events.filter((e) => {
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.location.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "all" || e.type === typeFilter;
    return matchSearch && matchType;
  });

  const handleDelete = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
    setDeleteId(null);
  };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  };

  return (
    <div className="space-y-5 animate-fade-up">
      <PageHeader
        title="Event List"
        description="Manage all company events — add, edit or remove events."
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

      {/* Stats bar */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Total Events", value: events.length, color: "text-primary-600", bg: "bg-primary-50/50" },
          { label: "Upcoming", value: events.filter((e) => new Date(e.date) >= new Date()).length, color: "text-accent-600", bg: "bg-accent-50/30" },
          { label: "Holidays", value: events.filter((e) => e.type === "holiday").length, color: "text-danger-600", bg: "bg-danger-50/30" },
          { label: "Trainings", value: events.filter((e) => e.type === "training").length, color: "text-primary-600", bg: "bg-primary-50/30" },
        ].map((s) => (
          <div key={s.label} className={`rounded-xl border border-line-200 ${s.bg} p-4 shadow-card transition-all duration-200 hover:shadow-md`}>
            <p className={`text-[24px] font-extrabold tabular ${s.color} leading-none`}>{s.value}</p>
            <p className="mt-1.5 text-[11.5px] font-semibold text-ink-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <LuSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search events..."
            className="w-full rounded-lg border border-line-200 bg-white py-2 pl-9 pr-3 text-[13px] text-ink-800 placeholder:text-ink-400 transition-all focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
        <div className="relative">
          <LuFilter size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="appearance-none rounded-lg border border-line-200 bg-white py-2 pl-8 pr-9 text-[13px] text-ink-700 transition-all focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          >
            <option value="all">All Types</option>
            {Object.entries(EVENT_TYPES).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
          <LuChevronDown size={12} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-400" />
        </div>
        <span className="text-[12px] font-semibold text-ink-500 tabular">{filtered.length} record{filtered.length !== 1 ? "s" : ""}</span>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-line-200 bg-white shadow-card">
        <div className="overflow-x-auto">
          <table className="min-w-full text-[13px]">
            <thead>
              <tr className="border-b border-line-200 bg-base-50">
                {["#", "Event Title", "Date", "Type", "Time", "Location", "Attendees", "Actions"].map((h) => (
                  <th key={h} className="whitespace-nowrap px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-ink-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line-150">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-16 text-center text-ink-400">No events found.</td>
                </tr>
              ) : (
                filtered.map((ev, idx) => (
                  <tr key={ev.id} className="hover:bg-base-50/70 transition-colors">
                    <td className="px-4 py-3.5 text-ink-400 tabular">{idx + 1}</td>
                    <td className="px-4 py-3.5 font-bold text-ink-900">{ev.title}</td>
                    <td className="px-4 py-3.5 text-ink-700 tabular">{formatDate(ev.date)}</td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider ${EVENT_TYPES[ev.type].color}`}>
                        {EVENT_TYPES[ev.type].label}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-ink-700">{ev.time}</td>
                    <td className="px-4 py-3.5 text-ink-700">{ev.location}</td>
                    <td className="px-4 py-3.5 text-ink-700 tabular">{ev.attendees}</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => navigate("/events/manage", { state: { event: ev } })}
                          className="rounded-lg p-1.5 text-ink-500 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          title="Edit"
                        >
                          <LuPencil size={14} />
                        </button>
                        <button
                          onClick={() => setDeleteId(ev.id)}
                          className="rounded-lg p-1.5 text-ink-500 hover:bg-danger-50 hover:text-danger-600 transition-colors"
                          title="Delete"
                        >
                          <LuTrash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete confirmation modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in">
          <div className="w-full max-w-sm animate-scale-in overflow-hidden rounded-xl border border-line-200 bg-white p-5 shadow-lg">
            <p className="text-[15px] font-bold text-ink-900">Delete Event?</p>
            <p className="mt-1 text-[13px] text-ink-500">This action is permanent and cannot be undone.</p>
            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setDeleteId(null)}
                className="rounded-full border border-line-200 px-4 py-2 text-[12.5px] font-bold text-ink-600 hover:bg-base-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="rounded-full bg-danger-600 px-4 py-2 text-[12.5px] font-bold text-white hover:bg-danger-700 transition-colors shadow-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
