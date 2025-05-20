"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { auth } from "../../lib/firebase"; // ← point this at your Firebase config

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // subscribe to auth changes
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <header className="bg-background-surface shadow-sm">
      <div className="container mx-auto py-4 px-6 flex justify-end">
        {user ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 bg-primary text-text-inverse rounded hover:bg-primary-dark"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
