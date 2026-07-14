export default function ReportIssue() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-5">
        Report Issue
      </h1>

      <form className="space-y-4">

        <input
          className="border p-2 w-full"
          placeholder="Asset Name"
        />

        <textarea
          className="border p-2 w-full"
          placeholder="Describe Issue"
        ></textarea>

        <button className="bg-red-600 text-white px-5 py-2 rounded">
          Submit
        </button>

      </form>

    </div>
  );
}