import { useState } from "react";

const initialShifts = [
  { id: 1, name: "Morning Shift", start: "09:00 AM", end: "06:00 PM", color: "bg-blue-100 text-blue-700 border-blue-200", employees: ["Aarav Sharma", "Priya Nair", "Divya Reddy"] },
  { id: 2, name: "Evening Shift", start: "02:00 PM", end: "11:00 PM", color: "bg-purple-100 text-purple-700 border-purple-200", employees: ["Rohan Gupta"] },
  { id: 3, name: "Night Shift", start: "10:00 PM", end: "07:00 AM", color: "bg-slate-200 text-slate-700 border-slate-300", employees: ["Vikram Singh", "Karan Verma"] },
];

const allEmployees = [
  "Aarav Sharma", "Priya Nair", "Rohan Gupta", "Sneha Iyer",
  "Vikram Singh", "Anjali Mehta", "Karan Verma", "Divya Reddy",
];

function ShiftModal({ shift, onClose, onSave }) {
  const [name, setName] = useState(shift?.name || "");
  const [start, setStart] = useState(shift?.start || "");
  const [end, setEnd] = useState(shift?.end || "");
  const [employees, setEmployees] = useState(shift?.employees || []);

  const toggleEmployee = (emp) => {
    setEmployees((prev) =>
      prev.includes(emp) ? prev.filter((e) => e !== emp) : [...prev, emp]
    );
  };

  const handleSave = () => {
    if (!name.trim() || !start.trim() || !end.trim()) return;
    onSave({
      id: shift?.id || Date.now(),
      name,
      start,
      end,
      color: shift?.color || "bg-teal-100 text-teal-700 border-teal-200",
      employees,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 max-h-[85vh] overflow-y-auto">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          {shift ? "Edit Shift" : "Create New Shift"}
        </h2>

        <div className="space-y-3">
          <div>
            <label className="text-sm text-slate-500 mb-1 block">Shift Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Morning Shift"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-sm text-slate-500 mb-1 block">Start Time</label>
              <input
                value={start}
                onChange={(e) => setStart(e.target.value)}
                placeholder="09:00 AM"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-slate-500 mb-1 block">End Time</label>
              <input
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                placeholder="06:00 PM"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-slate-500 mb-2 block">Assign Employees</label>
            <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto border border-slate-200 rounded-lg p-2">
              {allEmployees.map((emp) => (
                <label key={emp} className="flex items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    checked={employees.includes(emp)}
                    onChange={() => toggleEmployee(emp)}
                    className="rounded border-slate-300"
                  />
                  {emp}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Save Shift
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ShiftManagement() {
  const [shifts, setShifts] = useState(initialShifts);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingShift, setEditingShift] = useState(null);

  const openCreate = () => {
    setEditingShift(null);
    setModalOpen(true);
  };

  const openEdit = (shift) => {
    setEditingShift(shift);
    setModalOpen(true);
  };

  const handleSave = (shift) => {
    setShifts((prev) => {
      const exists = prev.find((s) => s.id === shift.id);
      if (exists) return prev.map((s) => (s.id === shift.id ? shift : s));
      return [...prev, shift];
    });
  };

  const handleDelete = (id) => {
    setShifts((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Shift Management</h1>
          <p className="text-sm text-slate-500">Configure shifts and assign employees to them.</p>
        </div>
        <button
          onClick={openCreate}
          className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm"
        >
          + New Shift
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shifts.map((shift) => (
          <div
            key={shift.id}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium border ${shift.color}`}>
                  {shift.name}
                </span>
                <p className="text-sm text-slate-500 mt-2">
                  {shift.start} — {shift.end}
                </p>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-xs text-slate-400 mb-2">
                {shift.employees.length} employee{shift.employees.length !== 1 ? "s" : ""} assigned
              </p>
              <div className="flex flex-wrap gap-1">
                {shift.employees.length === 0 ? (
                  <span className="text-xs text-slate-400">No one assigned yet</span>
                ) : (
                  shift.employees.map((emp) => (
                    <span
                      key={emp}
                      className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full"
                    >
                      {emp}
                    </span>
                  ))
                )}
              </div>
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
              <button
                onClick={() => openEdit(shift)}
                className="flex-1 text-sm px-3 py-1.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(shift.id)}
                className="flex-1 text-sm px-3 py-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <ShiftModal
          shift={editingShift}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}