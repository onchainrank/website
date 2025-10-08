// roadmap/page.tsx
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";

export default function RoadmapPage() {
  return (
    <div className="bg-black text-gray-400 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-brand-navy-light/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Onchainrank Logo"
              width={160}
              height={21}
              priority
              unoptimized
            />
          </Link>
          <Link
            href="/"
            className="text-brand-navy hover:text-black transition text-sm font-medium"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-brand-navy to-brand-green bg-clip-text text-transparent">
            Roadmap
          </h1>
          <p className="text-gray-400 text-lg">
            Our vision for the future of onchainrank
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {/* Q2 2025 */}
          <div className="bg-gray-900 p-6 rounded-2xl border-l-4 border-brand-green">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold text-brand-green">Q2 2025</h2>
              <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                Completed
              </span>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>
                  DEX Extension with custom chart indicators for meme coin
                  volatility
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>
                  Real-time price action analysis (volume, momentum, trend
                  strength)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>Whale activity tracking for large wallet movements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>
                  Visual scam detection warnings for suspicious patterns
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>
                  Profit/Loss indicators (realized & unrealized tracking)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>
                  Volume indicators (buy/sell volume, 5s/10s tracking)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>Holder distribution tracking (HT metric)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>Onchain quality score indicator</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>New Money Tracking with candlestick color coding</span>
              </li>
            </ul>
          </div>

          {/* Q3 2025 */}
          <div className="bg-gray-900 p-6 rounded-2xl border-l-4 border-brand-green">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold text-brand-green">Q3 2025</h2>
              <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                Completed
              </span>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>Notifier Extension with WebSocket real-time alerts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>
                  Auto-open Bullx.io tabs for high-scoring token launches
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>
                  Smart filters (fresh wallets, duplicate socials, scam
                  patterns)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>
                  Multi-factor alert scoring (6 weighted on-chain metrics)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>Adjustable notification volume and audio alerts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>URL history table with token tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">✓</span>
                <span>Auto-focus window and badge counter features</span>
              </li>
            </ul>
          </div>

          {/* Q4 2025 */}
          <div className="bg-gray-900 p-6 rounded-2xl border-l-4 border-brand-navy">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold text-brand-navy-light">
                Q4 2025
              </h2>
              <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                In Progress
              </span>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-brand-navy mt-1">▸</span>
                <span>Cluster-based trader analytics and tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-navy mt-1">▸</span>
                <span>Full money source tracking and flow analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-navy mt-1">▸</span>
                <span>Pump AMM and Raydium DEX support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Community Section */}
        <div className="mt-16 bg-gradient-to-r from-brand-navy to-brand-navy-light p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Have Ideas?</h2>
          <p className="text-gray-200 mb-6">
            We're always looking for feedback and suggestions from our community
          </p>
          <a
            href="https://t.me/onchain_rank"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green text-black px-6 py-3 rounded-2xl font-semibold inline-flex items-center gap-2 hover:bg-green-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
            </svg>
            Share Your Ideas
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-10 bg-black text-gray-500 text-center text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Onchainrank. All rights reserved.
      </footer>
    </div>
  );
}
