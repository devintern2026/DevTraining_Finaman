import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { LuSave, LuX, LuChevronLeft } from "react-icons/lu";
import { useNavigate, useLocation } from "react-router-dom";

const EVENT_TYPES = ["holiday", "meeting", "training", "review", "celebration"];

const EMPTY_FORM = {
  title: "",
  date: "",
  time: "",
  type: "meeting",
  location: "",
  attendees: "",
  description: "",
  organizer: "",
  department: "All Departments",
  recurring: "none",
};

const DEPARTMENTS = [
  "All Departments", "Engineering", "Human Resources", "Finance", "Marketing",
  "Operations", "Sales", "Product", "Legal", "Design",
];

export default function EventForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const existing = location.state?.event;

  const [form, setForm] = useState(existing ? {
    title: existing.title,
    date: existing.date,
    time: existing.time === "All Day" ? "" : existing.time,
    type: existing.type,
    location: existing.location,
    attendees: String(existing.attendees),
    description: "",
    organizer: "",
    department: "All Departments",
    recurring: "none",
  } : EMPTY_FORM);

  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  const set = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Event title is required.";
    if (!form.date) e.date = "Date is required.";
    if (!form.location.trim()) e.location = "Location is required.";
    if (form.attendees && isNaN(Number(form.attendees))) e.attendees = "Must be a number.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSaved(true);
    setTimeout(() => navigate("/events/list"), 1500);
  };

  const inputClass = (field) =>
    `w-full rounded-lg border ${errors[field] ? "border-danger-400 focus:ring-danger-100" : "border-line-200 focus:border-primary-400 focus:ring-primary-500/20"} bg-white px-3.5 py-2 text-[13px] text-ink-850 placeholder:text-ink-400 transition-all focus:outline-none focus:ring-2`;

  const labelClass = "mb-1.5 block text-[12px] font-bold text-ink-700";

  return (
    <div className="space-y-5 animate-fade-up">
      <PageHeader
        title={existing ? "Edit Event" : "Add New Event"}
        description={existing ? `Editing: ${existing.title}` : "Fill in the details to schedule a new company event."}
        actions={
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 rounded-full border border-line-200 bg-white px-4 py-2 text-[13px] font-bold text-ink-600 hover:bg-base-50 transition-colors shadow-xs"
          >
            <LuChevronLeft size={14} />
            Back
          </button>
        }
      />

      {saved && (
        <div className="rounded-xl border border-success-200 bg-success-50 px-4 py-3 text-[13px] font-bold text-success-700 animate-scale-in">
          ✓ Event saved successfully. Redirecting to list…
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Main form */}
        <div className="lg:col-span-2 space-y-4">
          {/* Basic Info */}
          <div className="rounded-xl border border-line-200 bg-white p-5 shadow-card">
            <h3 className="mb-4 text-[13px] font-bold text-ink-900 border-b border-line-200 pb-3">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={labelClass}>Event Title <span className="text-danger-500">*</span></label>
                <input value={form.title} onChange={(e) => set("title", e.target.value)}
                  placeholder="e.g. All Hands Meeting" className={inputClass("title")} />
                {errors.title && <p className="mt-1 text-[11.5px] font-semibold text-danger-500">{errors.title}</p>}
              </div>
              <div>
                <label className={labelClass}>Event Type</label>
                <select value={form.type} onChange={(e) => set("type", e.target.value)} className={inputClass("type")}>
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Department</label>
                <select value={form.department} onChange={(e) => set("department", e.target.value)} className={inputClass("department")}>
                  {DEPARTMENTS.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Date <span className="text-danger-500">*</span></label>
                <input type="date" value={form.date} onChange={(e) => set("date", e.target.value)}
                  className={inputClass("date")} />
                {errors.date && <p className="mt-1 text-[11.5px] font-semibold text-danger-500">{errors.date}</p>}
              </div>
              <div>
                <label className={labelClass}>Time <span className="text-ink-400 font-normal">(blank = All Day)</span></label>
                <input type="time" value={form.time} onChange={(e) => set("time", e.target.value)}
                  className={inputClass("time")} />
              </div>
              <div>
                <label className={labelClass}>Location <span className="text-danger-500">*</span></label>
                <input value={form.location} onChange={(e) => set("location", e.target.value)}
                  placeholder="e.g. Conf Room A / Zoom" className={inputClass("location")} />
                {errors.location && <p className="mt-1 text-[11.5px] font-semibold text-danger-500">{errors.location}</p>}
              </div>
              <div>
                <label className={labelClass}>Organizer</label>
                <input value={form.organizer} onChange={(e) => set("organizer", e.target.value)}
                  placeholder="e.g. Priya Sharma" className={inputClass("organizer")} />
              </div>
              <div>
                <label className={labelClass}>Expected Attendees</label>
                <input value={form.attendees} onChange={(e) => set("attendees", e.target.value)}
                  placeholder="e.g. 50" className={inputClass("attendees")} />
                {errors.attendees && <p className="mt-1 text-[11.5px] font-semibold text-danger-500">{errors.attendees}</p>}
              </div>
              <div>
                <label className={labelClass}>Recurring</label>
                <select value={form.recurring} onChange={(e) => set("recurring", e.target.value)} className={inputClass("recurring")}>
                  <option value="none">Does not repeat</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Description / Agenda</label>
                <textarea
                  rows={4}
                  value={form.description}
                  onChange={(e) => set("description", e.target.value)}
                  placeholder="Add event details, agenda items, or notes…"
                  className={`${inputClass("description")} resize-none`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar actions */}
        <div className="space-y-4">
          <div className="rounded-xl border border-line-200 bg-white p-5 shadow-card">
            <h3 className="mb-4 text-[13px] font-bold text-ink-900 border-b border-line-200 pb-3">Actions</h3>
            <div className="space-y-2">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-4 py-2.5 text-[13px] font-bold text-white hover:bg-primary-700 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <LuSave size={14} />
                {existing ? "Update Event" : "Save Event"}
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-line-200 bg-white px-4 py-2.5 text-[13px] font-bold text-ink-600 hover:bg-base-50 transition-colors shadow-xs"
              >
                <LuX size={14} />
                Discard
              </button>
            </div>
          </div>

          {/* Preview card */}
          {form.title && (
            <div className="animate-scale-in rounded-xl border border-line-200 bg-gradient-to-br from-white to-base-50 p-5 shadow-card">
              <p className="text-[11px] font-bold uppercase tracking-wider text-primary-600 mb-3 block">Live Preview</p>
              <p className="text-[14px] font-extrabold text-ink-900 leading-snug">{form.title}</p>
              {form.date && <p className="mt-2 text-[12px] font-semibold text-ink-650 flex items-center gap-2">📅 {form.date}{form.time ? ` · ${form.time}` : " · All Day"}</p>}
              {form.location && <p className="mt-1 text-[12px] font-semibold text-ink-650 flex items-center gap-2">📍 {form.location}</p>}
              {form.attendees && <p className="mt-1 text-[12px] font-semibold text-ink-650 flex items-center gap-2">👥 {form.attendees} expected attendees</p>}
              <div className="mt-3">
                <span className="rounded-full bg-primary-100 border border-primary-200 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-primary-700">
                  {form.type}
                </span>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
