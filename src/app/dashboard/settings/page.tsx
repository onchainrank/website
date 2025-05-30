// app/dashboard/settings/page.tsx
export default function DashboardSettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <form className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Username</span>
          <input
            type="text"
            className="mt-1 block w-full rounded border-gray-300"
            placeholder="Your username"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="mt-1 block w-full rounded border-gray-300"
            placeholder="you@example.com"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
