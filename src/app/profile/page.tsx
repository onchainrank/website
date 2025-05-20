// app/profile/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Subscribe to auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        firebaseUser.getIdToken().then((data) => console.log(data));
        setUser(firebaseUser);
        setLoading(false);
      } else {
        // Not signed in → redirect to login
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

  // Show spinner/text while we check auth
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading your profile…</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Profile</h2>
        <p className="mb-2">
          <strong>Email:</strong> {user?.email}
        </p>
        <p className="mb-6 ml-1">
          <strong>UID:</strong> {user?.uid}
        </p>
        <button
          onClick={handleLogout}
          className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
