import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import NotificationPanel from "@/components/NotificationPanel";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-white">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-x-hidden relative">

        {/* FLOATING DASHBOARD BUTTON */}
        <Link
          href="/dashboard"
          className="fixed bottom-6 right-6 z-50 bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-4 rounded-full shadow-2xl font-bold text-lg transition hover:scale-105"
        >
          🏠 Dashboard
        </Link>

        <NotificationPanel />

        {children}

      </div>

    </div>
  );
}