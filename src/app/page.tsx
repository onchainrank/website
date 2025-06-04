// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Home – OnchainRank",
};

export default function HomePage() {
  return (
    <main className="bg-background text-text min-h-screen flex flex-col items-center">
      {/* Logo at the very top */}
      <div className="py-8">
        <Image
          src="/logo.png"
          alt="OnchainRank Logo"
          width={888} // intrinsic dimensions (can match your PNG)
          height={119}
          unoptimized // ← disables all Next.js image ops
          style={{ height: "40px", width: "auto" }}
          className="mx-auto"
        />
      </div>

      {/* Hero (minimal) */}
      <section className="text-center px-6 flex-grow flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Outsmart 99% of Scams & Discover 100× Meme Coins Early
        </h1>
        <p className="text-lg text-text-muted mb-8 max-w-xl mx-auto">
          Join our Telegram for on-chain alerts, scam warnings, and early-stage
          token insights—no fluff.
        </p>
        <a
          href="https://t.me/onchainrank"
          className="btn btn-primary inline-flex items-center space-x-2"
        >
          <span>Join Telegram →</span>
        </a>
      </section>
    </main>
  );
}
