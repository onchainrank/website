// pages/index.tsx
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

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
              height={30}
              priority
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
          className="bg-green-500 text-black px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 hover:bg-green-400 transition"
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
              title: "Bullx.io Chart Injection",
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
              Bullx.io Chart Extension
            </h3>
            <p className="text-gray-400">
              Injects advanced charts with custom indicators directly into Bullx
              trading pages. Compare price action with unique signals for better
              setups.
            </p>
          </div>
          <div className="bg-black p-6 rounded-2xl shadow-lg ">
            <h3 className="text-2xl font-semibold mb-3 text-gray-400">
              Alert Extension
            </h3>
            <p className="text-gray-400">
              Get instant alerts when high-value tokens launch on pump.fun.
              Alerts open Bullx with enriched data so you act immediately.
            </p>
          </div>
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
              a: "We scan on-chain activity for suspicious wallets, low liquidity, or sudden dumps—and warn you before you enter.",
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
          Install our Chrome extensions and start spotting meme coins before the
          crowd.
        </p>
        <a
          href="#"
          className="bg-white text-black px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 mx-auto w-fit hover:bg-gray-200 transition"
        >
          Install Now <ArrowRightIcon className="w-5 h-5" />
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 bg-black text-gray-500 text-center text-sm">
        © {new Date().getFullYear()} Onchainrank. All rights reserved.
      </footer>
    </div>
  );
}
