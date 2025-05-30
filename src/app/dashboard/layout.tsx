// app/dashboard/layout.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

// export const metadata = {
//   title: "Dashboard",
// };

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // not logged in → redirect
        router.replace("/login");
      } else {
        // logged in → show dashboard
        setChecking(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (checking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading…</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <nav className="mt-10">
          <ul>
            <li className="mb-2">
              <Link
                href="/dashboard"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/dashboard/settings"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
}
