// app/profile/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [apiKey, setApiKey] = useState<string>("");
  const [validUntil, setValidUntil] = useState<number>(0);
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const router = useRouter();

  // Subscribe to auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);

        setLoading(false);
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Logout handler
  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  // Generate API key
  const handleGenerateKey = async () => {
    setGenerating(true);
    setCopied(false);
    const token = await user?.getIdToken();
    try {
      const res = await fetch(
        `https://profile.onchainrank.com/gen-authkey/${token}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setApiKey(data.auth_token);
      setValidUntil(data.valid_until);
    } catch (err) {
      console.error(err);
      // you might want to show an error toast here
    } finally {
      setGenerating(false);
    }
  };

  // Copy to clipboard
  const handleCopy = async () => {
    if (!apiKey) return;
    await navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background px-4">
        <div className="text-xl text-text">Loading your profile…</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <div className="w-full max-w-md bg-background-surface p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-text">
          Your Profile
        </h2>

        <p className="mb-4 text-text-secondary">
          <span className="font-semibold text-text">Email:</span> {user?.email}
        </p>

        {/* Generate API Key */}
        <div className="mb-4">
          <button
            onClick={handleGenerateKey}
            disabled={generating}
            className="w-full py-2 mb-2 bg-primary hover:bg-primary-light text-text-inverse font-semibold rounded-lg transition disabled:opacity-50"
          >
            {generating
              ? "Generating…"
              : apiKey
              ? "Regenerate API Key"
              : "Generate API Key"}
          </button>
          {apiKey && (
            <div className="flex items-center space-x-2">
              <input
                type="text"
                readOnly
                value={apiKey}
                className="flex-1 px-3 py-2 bg-background-muted text-text rounded-lg border border-secondary-light focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-secondary hover:bg-secondary-light text-text-inverse font-medium rounded-lg transition"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          )}
        </div>

        {/* Dashboard */}
        <button
          onClick={() => router.push("/dashboard")}
          className="w-full py-2 mt-2 bg-accent hover:bg-accent-light text-text font-semibold rounded-lg transition"
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}
