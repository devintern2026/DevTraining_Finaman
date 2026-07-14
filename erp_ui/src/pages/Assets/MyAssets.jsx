export default function MyAssets() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">My Assigned Assets</h1>

      <table className="w-full mt-6 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Asset</th>
            <th className="border p-2">Serial No.</th>
            <th className="border p-2">Model</th>
            <th className="border p-2">Condition</th>
            <th className="border p-2">Assigned Date</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2">Laptop</td>
            <td className="border p-2">HP12345</td>
            <td className="border p-2">HP EliteBook</td>
            <td className="border p-2">Excellent</td>
            <td className="border p-2">10 Jul 2026</td>
            <td className="border p-2 text-green-600">Assigned</td>
          </tr>

          <tr>
            <td className="border p-2">Mouse</td>
            <td className="border p-2">MS45678</td>
            <td className="border p-2">Logitech</td>
            <td className="border p-2">Good</td>
            <td className="border p-2">11 Jul 2026</td>
            <td className="border p-2 text-blue-600">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}