import { useState, useMemo } from "react";

const employees = ["Aarav Sharma", "Priya Nair", "Rohan Gupta", "Sneha Iyer", "Vikram Singh"];

const statusColors = {
  P: "bg-green-100 text-green-700",
  A: "bg-red-100 text-red-700",
  L: "bg-amber-100 text-amber-700",
  H: "bg-blue-100 text-blue-700",
  W: "bg-slate-100 text-slate-400",
};

const statusLabels = {
  P: "Present",
  A: "Absent",
  L: "Late",
  H: "On Leave / Holiday",
  W: "Weekend",
};

function generateAttendance(days) {
  const options = ["P", "P", "P", "P", "L", "A", "H"];
  return employees.map((name) => {
    const record = {};
    for (let d = 1; d <= days; d++) {
      const date = new Date();
      date.setDate(d);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      record[d] = isWeekend ? "W" : options[Math.floor(Math.random() * options.length)];
    }
    return { name, record };
  });
}

export default function MonthlyAttendance() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const data = useMemo(() => generateAttendance(daysInMonth), [month, year]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const changeMonth = (delta) => {
    let newMonth = month + delta;
    let newYear = year;
    if (newMonth < 0) { newMonth = 11; newYear -= 1; }
    if (newMonth > 11) { newMonth = 0; newYear += 1; }
    setMonth(newMonth);
    setYear(newYear);
  };

  const summary = data.map((emp) => {
    const counts = { P: 0, A: 0, L: 0, H: 0 };
    Object.values(emp.record).forEach((s) => {
      if (counts[s] !== undefined) counts[s]++;
    });
    return { ...emp, counts };
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Monthly Attendance</h1>
          <p className="text-sm text-slate-500">Full month view of employee attendance records.</p>
        </div>
        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm">
          <button
            onClick={() => changeMonth(-1)}
            className="text-slate-500 hover:text-slate-800 px-1"
          >
            ‹
          </button>
          <span className="font-medium text-slate-700 text-sm min-w-[130px] text-center">
            {monthNames[month]} {year}
          </span>
          <button
            onClick={() => changeMonth(1)}
            className="text-slate-500 hover:text-slate-800 px-1"
          >
            ›
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {Object.entries(statusLabels)
          .filter(([key]) => key !== "W")
          .map(([key, label]) => (
            <div key={key} className="flex items-center gap-2 text-sm text-slate-600">
              <span className={`w-4 h-4 rounded ${statusColors[key]}`}></span>
              {label}
            </div>
          ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="text-sm border-collapse min-w-full">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-4 py-3 text-left font-medium text-slate-500 sticky left-0 bg-slate-50 z-10">
                  Employee
                </th>
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
                  <th key={d} className="px-2 py-3 text-center font-medium text-slate-400 min-w-[36px]">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((emp) => (
                <tr key={emp.name} className="border-t border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-2 font-medium text-slate-700 whitespace-nowrap sticky left-0 bg-white z-10">
                    {emp.name}
                  </td>
                  {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
                    <td key={d} className="px-1 py-2 text-center">
                      <span
                        title={statusLabels[emp.record[d]]}
                        className={`inline-flex items-center justify-center w-6 h-6 rounded text-xs font-medium ${statusColors[emp.record[d]]}`}
                      >
                        {emp.record[d]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
        <h2 className="text-sm font-semibold text-slate-700 mb-3">Monthly Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {summary.map((emp) => (
            <div key={emp.name} className="border border-slate-100 rounded-lg p-3">
              <p className="font-medium text-slate-700 text-sm mb-2">{emp.name}</p>
              <div className="flex gap-3 text-xs text-slate-500">
                <span className="text-green-600 font-medium">{emp.counts.P} Present</span>
                <span className="text-red-600 font-medium">{emp.counts.A} Absent</span>
                <span className="text-amber-600 font-medium">{emp.counts.L} Late</span>
                <span className="text-blue-600 font-medium">{emp.counts.H} Leave</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}