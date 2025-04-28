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
    <main className="bg-background text-gray-900">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="max-w-3xl mx-auto text-5xl font-extrabold leading-tight mb-6">
          Find 100× Meme Coins Before Anyone Else
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Get real-time onchain insights, protect yourself from scams, and seize
          early-stage token opportunities.
        </p>
        <Link
          href="/install"
          className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition"
        >
          Install OnchainRank →
        </Link>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <BellAlertIcon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Early Alerts, Maximum Upside
              </h3>
              <p className="text-gray-600">
                Be notified the moment high-value meme coins drop so you can
                move in at ground level.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <ShieldCheckIcon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Onchain Scam Protection
              </h3>
              <p className="text-gray-600">
                Our rug-risk indicators flag suspicious token patterns before
                you commit capital.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <ArrowsRightLeftIcon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Seamless Integration
              </h3>
              <p className="text-gray-600">
                Inject live charts and alerts directly into BullX.io—no extra
                tabs, no missed moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <ol className="space-y-6 list-decimal list-inside text-gray-700">
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
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to up your trading game?
        </h2>
        <p className="text-gray-700 mb-8">
          Get OnchainRank for Chrome — It’s Free to Try
        </p>
        <Link
          href="/install"
          className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition"
        >
          Install OnchainRank →
        </Link>
      </section>
    </main>
  );
}
