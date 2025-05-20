// app/action/ActionClient.tsx
"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import { applyActionCode } from "firebase/auth";

export default function ActionClient() {
  const [status, setStatus] = useState<"verifying" | "success" | "error">(
    "verifying"
  );
  const [error, setError] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const mode = searchParams.get("mode");
    const oobCode = searchParams.get("oobCode");
    if (mode === "verifyEmail" && oobCode) {
      applyActionCode(auth, oobCode)
        .then(() => setStatus("success"))
        .catch((e) => {
          setError(e.message || "Invalid or expired link.");
          setStatus("error");
        });
    } else {
      setError("The link is invalid.");
      setStatus("error");
    }
  }, [searchParams]);

  if (status === "verifying") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p>Verifying your email…</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      {/* …rest of your success / error UI… */}
    </div>
  );
}
