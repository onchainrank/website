// app/page.tsx
import Link from "next/link";
import {
  BellAlertIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Home – OnchainRank",
};

export default function HomePage() {
  return (
    <main className="bg-background text-text min-h-screen">
      {/* Hero */}
      <section className="bg-background-surface py-20">
        <div className="container mx-auto flex flex-col items-center px-6">
          <h1 className="text-5xl font-extrabold text-center leading-tight mb-6">
            Find 100× Meme Coins Before Anyone Else
          </h1>
          <p className="text-lg text-text-muted text-center mb-8 max-w-2xl">
            Get real-time onchain insights, protect yourself from scams, and
            seize early-stage token opportunities.
          </p>
          <Link href="/install" className="btn btn-primary">
            Install OnchainRank →
          </Link>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <BellAlertIcon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Early Alerts, Maximum Upside
              </h3>
              <p className="text-text-muted">
                Be notified the moment high-value meme coins drop so you can
                move in at ground level.
              </p>
            </div>
            <div className="card">
              <ShieldCheckIcon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Onchain Scam Protection
              </h3>
              <p className="text-text-muted">
                Our rug-risk indicators flag suspicious token patterns before
                you commit capital.
              </p>
            </div>
            <div className="card">
              <ArrowsRightLeftIcon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Seamless Integration
              </h3>
              <p className="text-text-muted">
                Inject live charts and alerts directly into BullX.io—no extra
                tabs, no missed moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-background-surface py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="section-title">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4 text-text-muted">
            <li>Detect new meme coins on pump.fun.</li>
            <li>
              Analyze every transaction, liquidity flow, and wallet activity.
            </li>
            <li>
              Display actionable metrics in an iframe on BullX.io trade pages.
            </li>
            <li>Alert you instantly when a token meets your value criteria.</li>
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to up your trading game?
          </h2>
          <p className="text-text-muted mb-8">
            Get OnchainRank for Chrome — It’s Free to Try
          </p>
          <Link href="/install" className="btn btn-primary">
            Install OnchainRank →
          </Link>
        </div>
      </section>
    </main>
  );
}
