// app/action/page.tsx
"use client";
import { Suspense } from "react";
import ActionClient from "./ActionClient";

export default function ActionPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
          <p>Loading…</p>
        </div>
      }
    >
      <ActionClient />
    </Suspense>
  );
}
