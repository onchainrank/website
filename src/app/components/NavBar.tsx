"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { auth } from "../../lib/firebase"; // ← adjust to your Firebase init path

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
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
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        {/* Left: Dashboard link */}
        <Link
          href={user ? "/dashboard" : "/login"}
          className="text-text hover:text-primary transition"
        >
          Dashboard
        </Link>

        {/* Right: Login or Logout */}
        {user ? (
          <button
            onClick={handleLogout}
            className="text-text hover:text-primary transition"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="text-text hover:text-primary transition"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
