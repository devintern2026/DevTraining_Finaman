import { useState } from "react";

const employees = [
  { id: 1, name: "Aarav Sharma", dept: "Engineering", checkIn: "09:02 AM", checkOut: "06:15 PM", status: "Present" },
  { id: 2, name: "Priya Nair", dept: "HR", checkIn: "09:15 AM", checkOut: "06:00 PM", status: "Present" },
  { id: 3, name: "Rohan Gupta", dept: "Sales", checkIn: "10:05 AM", checkOut: "—", status: "Late" },
  { id: 4, name: "Sneha Iyer", dept: "Finance", checkIn: "—", checkOut: "—", status: "Absent" },
  { id: 5, name: "Vikram Singh", dept: "Engineering", checkIn: "08:58 AM", checkOut: "06:10 PM", status: "Present" },
  { id: 6, name: "Anjali Mehta", dept: "Marketing", checkIn: "—", checkOut: "—", status: "On Leave" },
  { id: 7, name: "Karan Verma", dept: "Sales", checkIn: "09:40 AM", checkOut: "—", status: "Late" },
  { id: 8, name: "Divya Reddy", dept: "Engineering", checkIn: "09:00 AM", checkOut: "06:05 PM", status: "Present" },
];

const statusStyles = {
  Present: "bg-green-100 text-green-700 border-green-200",
  Absent: "bg-red-100 text-red-700 border-red-200",
  Late: "bg-amber-100 text-amber-700 border-amber-200",
  "On Leave": "bg-blue-100 text-blue-700 border-blue-200",
};

function StatBox({ label, value, color }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 flex-1 min-w-[140px] shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className={`text-2xl font-semibold mt-1 ${color}`}>{value}</p>
    </div>
  );
}

export default function DailyAttendance() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);

  const counts = employees.reduce(
    (acc, e) => {
      acc[e.status] = (acc[e.status] || 0) + 1;
      return acc;
    },
    { Present: 0, Absent: 0, Late: 0, "On Leave": 0 }
  );

  const filtered = employees.filter((e) => {
    const matchesSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.dept.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || e.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Daily Attendance</h1>
          <p className="text-sm text-slate-500">Today's check-ins, check-outs, and exceptions.</p>
        </div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <StatBox label="Present" value={counts.Present} color="text-green-600" />
        <StatBox label="Absent" value={counts.Absent} color="text-red-600" />
        <StatBox label="Late" value={counts.Late} color="text-amber-600" />
        <StatBox label="On Leave" value={counts["On Leave"]} color="text-blue-600" />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row gap-3 p-4 border-b border-slate-200">
          <input
            type="text"
            placeholder="Search by name or department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All</option>
            <option>Present</option>
            <option>Absent</option>
            <option>Late</option>
            <option>On Leave</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-left">
                <th className="px-4 py-3 font-medium">Employee</th>
                <th className="px-4 py-3 font-medium">Department</th>
                <th className="px-4 py-3 font-medium">Check-in</th>
                <th className="px-4 py-3 font-medium">Check-out</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-slate-400">
                    No employees found.
                  </td>
                </tr>
              ) : (
                filtered.map((e) => (
                  <tr key={e.id} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-700">{e.name}</td>
                    <td className="px-4 py-3 text-slate-500">{e.dept}</td>
                    <td className="px-4 py-3 text-slate-600">{e.checkIn}</td>
                    <td className="px-4 py-3 text-slate-600">{e.checkOut}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium border ${statusStyles[e.status]}`}
                      >
                        {e.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}