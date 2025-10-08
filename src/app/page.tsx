// pages/index.tsx
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-brand-navy-light/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Onchainrank Logo"
              width={160}
              height={21}
              priority
              unoptimized
            />
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {["Home", "About", "Services", "Product", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-brand-navy hover:text-black transition"
              >
                {item}
              </a>
            ))}
            <a
              href="/docs"
              className="text-brand-navy hover:text-black transition"
            >
              Docs
            </a>
            <a
              href="/roadmap"
              className="text-brand-navy hover:text-black transition"
            >
              Roadmap
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center px-6 py-32"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-400">
          Spot{" "}
          <span className="bg-gradient-to-r from-brand-navy to-brand-green bg-clip-text text-transparent">
            100x Meme Coins
          </span>{" "}
          Before Anyone Else
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-400 ">
          Turn chaos into clarity. Analyze real-time on-chain data from{" "}
          <span className="font-semibold text-brand-green">pump.fun</span> and
          trade smarter with alerts, charts, and scam protection built for meme
          traders.
        </p>
        <a
          href="#get-started"
          className="bg-brand-green text-black px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 hover:bg-green-400 transition"
        >
          Get Started <ArrowRightIcon className="w-5 h-5" />
        </a>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-6 text-brand-navy-light">About</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          We help meme coin traders gain an edge by spotting hidden gems before
          the crowd. By analyzing pump.fun at lightning speed, our tools filter
          out scams, highlight real opportunities, and deliver insights directly
          inside Bullx.io.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 bg-black text-center ">
        <h2 className="text-4xl font-bold mb-12 text-gray-400">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Real-Time On-Chain Analysis",
              desc: "We scan pump.fun nonstop to deliver token insights the moment they launch.",
            },
            {
              title: "Advanced DEX Chart Plugin",
              desc: "See advanced indicators right inside Bullx.io meme trading pages.",
            },
            {
              title: "Early Alerts System",
              desc: "Get instant Chrome notifications when high-value meme coins appear.",
            },
            {
              title: "Rug Pull & Scam Protection",
              desc: "We flag suspicious tokens so you can avoid costly traps.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-brand-navy-light">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product */}
      <section
        id="product"
        className="px-6 py-20 bg-dark-navy-gray text-center"
      >
        <h2 className="text-4xl font-bold mb-12 text-gray-400">Product</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
          <div className="bg-black p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-3 text-gray-400">
              DEX Extension
            </h3>
            <p className="text-gray-400">
              Injects advanced charts with custom indicators directly into Bullx
              trading pages. Compare price action with unique signals for better
              setups.
            </p>
          </div>
          <div className="bg-black p-6 rounded-2xl shadow-lg ">
            <h3 className="text-2xl font-semibold mb-3 text-gray-400">
              Notifier Extension
            </h3>
            <p className="text-gray-400">
              Get instant alerts when high-value tokens launch on pump.fun.
              Alerts open Bullx with enriched data so you act immediately.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/onchainrank"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green text-black px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 hover:bg-green-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Download
          </a>
          <a
            href="/docs"
            className="bg-gray-900 text-brand-green px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 hover:bg-gray-800 transition border border-brand-green"
          >
            View Docs
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-20 bg-black text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-400">FAQ</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {[
            {
              q: "What is pump.fun?",
              a: "Pump.fun is a meme coin launch platform where thousands of tokens appear daily. We analyze it to help you find the ones worth your attention.",
            },
            {
              q: "How does your product protect me from scams?",
              a: "We analyze multiple on-chain signals including bot patterns, duplicate/recycled socials, fresh creator wallets, pump & dump indicators, suspicious fee/volume ratios, and holder distribution. Visual warnings appear directly in charts when risk is detected, and our filter system automatically blocks known scam patterns before you see them.",
            },
            {
              q: "Do I need to leave Bullx.io to use your charts?",
              a: "No. Our Chrome extension injects extra charts and indicators directly into Bullx.io, so you trade in one familiar place.",
            },
            {
              q: "Will I really find 100x coins?",
              a: "No tool can guarantee profits. But with early alerts, enhanced data, and scam protection, you’ll dramatically improve your odds.",
            },
            {
              q: "How do I get started?",
              a: "Simply install our Chrome extensions and connect your wallet. You’ll be ready to spot meme coins like never before.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2 text-gray-400">
                {item.q}
              </h3>
              <p className="text-gray-400">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="get-started"
        className="px-6 py-20 bg-gradient-to-r from-brand-navy to-brand-navy text-center"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-white">
          Ready to Trade Smarter?
        </h2>
        <p className="text-lg mb-8 text-gray-200">
          Contact me on Telegram to get started and learn how to access our
          tools.
        </p>
        <a
          href="https://t.me/onchain_rank"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 mx-auto w-fit hover:bg-gray-200 transition"
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
          Contact
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 bg-black text-gray-500 text-center text-sm">
        © {new Date().getFullYear()} Onchainrank. All rights reserved.
      </footer>
    </div>
  );
}
