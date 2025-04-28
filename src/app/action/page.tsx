"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import { applyActionCode } from "firebase/auth";

export default function ActionPage() {
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
        .catch((e: any) => {
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
      <div className="max-w-md text-center space-y-4">
        {status === "success" ? (
          <>
            <h2 className="text-2xl font-bold">Email Verified!</h2>
            <p>
              You can now{" "}
              <a href="/login" className="text-blue-400 hover:underline">
                log in
              </a>
              .
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-red-400">
              Verification Failed
            </h2>
            <p>{error}</p>
            <button
              onClick={() => router.push("/register")}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Back to Register
            </button>
          </>
        )}
      </div>
    </div>
  );
}
