// src/app/dashboard/page.tsx
import LiveTable from "./LiveTable";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Live Data</h1>
      <LiveTable />
    </div>
  );
}
