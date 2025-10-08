// docs/page.tsx
import Image from "next/image";
import Link from "next/link";

export const dynamic = 'force-static';

export default function DocsPage() {
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
            Documentation
          </h1>
          <p className="text-gray-400 text-lg">
            Complete guide to using Onchainrank tools for meme coin trading
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-900 p-6 rounded-2xl mb-12">
          <h2 className="text-2xl font-bold mb-4 text-brand-navy-light">Table of Contents</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#overview" className="hover:text-brand-green transition">Overview</a></li>
            <li><a href="#installation" className="hover:text-brand-green transition">Installation</a></li>
            <li><a href="#dex-extension" className="hover:text-brand-green transition">DEX Extension</a></li>
            <li><a href="#notifier-extension" className="hover:text-brand-green transition">Notifier Extension</a></li>
            <li><a href="#alerts" className="hover:text-brand-green transition">Understanding Alerts</a></li>
            <li><a href="#indicators" className="hover:text-brand-green transition">Chart Indicators & Icons</a></li>
            <li><a href="#troubleshooting" className="hover:text-brand-green transition">Troubleshooting</a></li>
          </ul>
        </div>

        {/* Overview */}
        <section id="overview" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-brand-navy-light">Overview</h2>
          <p className="text-gray-300 mb-4">
            Onchainrank provides two powerful Chrome extensions designed to give you an edge in meme coin trading:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-brand-green">DEX Extension</h3>
              <p className="text-gray-400">
                Enhances Bullx.io trading pages with advanced charts and custom indicators for better technical analysis.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-brand-green">Notifier Extension</h3>
              <p className="text-gray-400">
                Real-time Chrome notifications when high-potential tokens launch on pump.fun, with instant access to Bullx.
              </p>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-brand-navy-light">Installation</h2>
          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">Step 1: Download from GitHub</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-400 ml-4">
              <li>Visit our <a href="https://github.com/onchainrank" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">GitHub repository</a></li>
              <li>Download the extension you want to install (usually as a ZIP file)</li>
              <li>Extract the ZIP file to a permanent location on your computer
                <ul className="list-disc list-inside ml-6 mt-1 text-sm text-gray-400">
                  <li>Important: Keep this folder in a permanent location - the extension needs it to run</li>
                  <li>Do not delete or move the folder after installation</li>
                </ul>
              </li>
              <li>Verify the extracted folder contains a <code className="bg-black px-2 py-1 rounded text-brand-green">manifest.json</code> file</li>
            </ol>

            <h3 className="text-xl font-semibold mb-4 mt-6 text-gray-300">Step 2: Enable Developer Mode in Chrome</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-400 ml-4">
              <li>Open Google Chrome browser</li>
              <li>Type <code className="bg-black px-2 py-1 rounded text-brand-green">chrome://extensions/</code> in the address bar and press Enter</li>
              <li>Look for the "Developer mode" toggle switch in the top-right corner of the page</li>
              <li>Click the toggle to enable Developer Mode (it should turn blue/green)</li>
            </ol>

            <h3 className="text-xl font-semibold mb-4 mt-6 text-gray-300">Step 3: Load the Extension</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-400 ml-4">
              <li>After enabling Developer Mode, you'll see new buttons appear near the top-left</li>
              <li>Click the <strong className="text-gray-300">"Load unpacked"</strong> button</li>
              <li>A file browser window will open</li>
              <li>Navigate to and select the extracted extension folder (the one containing <code className="bg-black px-1 rounded text-brand-green text-sm">manifest.json</code>)
                <ul className="list-disc list-inside ml-6 mt-1 text-sm text-gray-400">
                  <li>Make sure you select the folder itself, not individual files inside it</li>
                </ul>
              </li>
              <li>Click "Select Folder" or "Open"</li>
            </ol>

            <h3 className="text-xl font-semibold mb-4 mt-6 text-gray-300">Step 4: Verify Installation</h3>
            <div className="text-gray-400 space-y-2 ml-4">
              <p>If successful, you should see:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-400">
                <li>The extension card appear on the chrome://extensions page</li>
                <li>The extension icon in your Chrome toolbar (top-right corner)</li>
                <li>No error messages displayed</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-6 text-gray-300">Step 5: Configure Settings</h3>
            <p className="text-gray-400 ml-4">
              Click the extension icon in your toolbar and configure your preferences for alerts and notifications.
            </p>

            <div className="mt-6 bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-xl">
              <h4 className="text-yellow-400 font-semibold mb-2">⚠️ Important Notes</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm ml-2">
                <li>The extension folder must remain in place - don't delete or move it</li>
                <li>The extension will show "Errors" if the folder is moved or deleted</li>
                <li>Developer mode must stay enabled for the extension to work</li>
                <li>Chrome may warn you about developer mode extensions on startup - this is normal</li>
              </ul>
            </div>
          </div>
        </section>

        {/* DEX Extension */}
        <section id="dex-extension" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-brand-navy-light">DEX Extension</h2>
          <p className="text-gray-300 mb-4">
            The DEX Extension injects advanced trading tools directly into Bullx.io pages, providing:
          </p>
          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-brand-green">Features</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">▸</span>
                <div>
                  <strong className="text-gray-300">Custom Chart Indicators:</strong> Advanced technical indicators designed specifically for meme coin volatility
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">▸</span>
                <div>
                  <strong className="text-gray-300">Price Action Analysis:</strong> Real-time analysis of volume, momentum, and trend strength
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">▸</span>
                <div>
                  <strong className="text-gray-300">Whale Activity Tracking:</strong> Identify large wallet movements and potential market movers
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">▸</span>
                <div>
                  <strong className="text-gray-300">Scam Detection:</strong> Visual warnings for suspicious token patterns
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Notifier Extension */}
        <section id="notifier-extension" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-brand-navy-light">Notifier Extension</h2>
          <p className="text-gray-300 mb-4">
            Real-time WebSocket connection to onchainrank server that automatically opens Bullx.io tabs when promising tokens launch:
          </p>

          <div className="bg-gray-900 p-6 rounded-2xl mb-6">
            <h3 className="text-xl font-semibold mb-4 text-brand-green">How It Works</h3>
            <ol className="space-y-3 text-gray-400 list-decimal list-inside ml-4">
              <li>Extension connects to onchainrank WebSocket server (requires API key)</li>
              <li>Backend continuously monitors pump.fun for new token launches</li>
              <li>High-scoring tokens trigger real-time notifications</li>
              <li>Extension automatically opens Bullx.io URL in a new active tab</li>
              <li>Plays notification sound (adjustable volume)</li>
              <li>Optionally opens token website and X.com links in background tabs</li>
            </ol>

            <div className="mt-6 bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-xl">
              <h4 className="text-yellow-400 font-semibold mb-2">⚠️ Important</h4>
              <p className="text-gray-400 text-sm">
                The extension only operates while the options page tab remains open. Close the tab and the connection stops.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl mb-6">
            <h3 className="text-xl font-semibold mb-4 text-brand-green">Setup & Configuration</h3>

            <h4 className="font-semibold text-gray-300 mb-3 mt-4">API Key Setup</h4>
            <ol className="text-gray-400 text-sm space-y-2 ml-4 list-decimal list-inside">
              <li>Click the extension icon to open the options page</li>
              <li>Enter your API key in the "API Key" field</li>
              <li>Click "Save" - first 4 characters will display for confirmation</li>
              <li>Click "Connect" button to establish WebSocket connection</li>
              <li>Status will turn green when connected</li>
            </ol>

            <h4 className="font-semibold text-gray-300 mb-3 mt-6">Filter Options</h4>
            <div className="space-y-3">
              <div className="bg-black p-3 rounded-xl">
                <strong className="text-gray-300">Open if website URL available</strong>
                <p className="text-gray-400 text-sm">Opens token's website in a background tab if available</p>
              </div>
              <div className="bg-black p-3 rounded-xl">
                <strong className="text-gray-300">Open if X.com link available</strong>
                <p className="text-gray-400 text-sm">Opens token's X.com (Twitter) page in a background tab if available</p>
              </div>
              <div className="bg-black p-3 rounded-xl">
                <strong className="text-gray-300">Open only unique</strong>
                <p className="text-gray-400 text-sm">Only open tokens with unique social accounts (filters out duplicate/recycled socials)</p>
              </div>
              <div className="bg-black p-3 rounded-xl">
                <strong className="text-gray-300">Open only valid launches</strong>
                <p className="text-gray-400 text-sm">Only open tokens that pass launch validation checks (no bot patterns or known scam signatures)</p>
              </div>
              <div className="bg-black p-3 rounded-xl">
                <strong className="text-gray-300">Ignore fresh wallet launches</strong>
                <p className="text-gray-400 text-sm">Skip tokens created by brand new wallets with no history</p>
              </div>
              <div className="bg-black p-3 rounded-xl">
                <strong className="text-gray-300">Avoid obvious scams</strong>
                <p className="text-gray-400 text-sm">Filters tokens with suspicious fee/volume ratios (ratio ≤ 0.017 indicates likely scam)</p>
              </div>
            </div>

            <h4 className="font-semibold text-gray-300 mb-3 mt-6">Notification Volume</h4>
            <p className="text-gray-400 text-sm ml-4">
              Adjustable slider (0-100%) controls the volume of the notification sound that plays when new tokens are detected
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-brand-green">Features</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-brand-green mt-1">▸</span>
                <div>
                  <strong className="text-gray-300">Connection Status:</strong>
                  <p className="text-gray-400 text-sm">Real-time connection status display (green when connected, red when disconnected)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand-green mt-1">▸</span>
                <div>
                  <strong className="text-gray-300">Event Counter:</strong>
                  <p className="text-gray-400 text-sm">Tracks total number of notify events received during session</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand-green mt-1">▸</span>
                <div>
                  <strong className="text-gray-300">URL History Table:</strong>
                  <p className="text-gray-400 text-sm">Displays all Bullx URLs opened with token name, symbol, and timestamp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand-green mt-1">▸</span>
                <div>
                  <strong className="text-gray-300">Auto-focus Window:</strong>
                  <p className="text-gray-400 text-sm">Brings Chrome window to front when new tabs are opened</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brand-green mt-1">▸</span>
                <div>
                  <strong className="text-gray-300">Badge Counter:</strong>
                  <p className="text-gray-400 text-sm">Shows number of new tabs opened when Chrome is not focused</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Alerts */}
        <section id="alerts" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-brand-navy-light">Understanding Alerts</h2>
          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-brand-green">Alert Scoring Factors</h3>
            <p className="text-gray-300 mb-4">
              Our algorithm evaluates multiple on-chain metrics to generate alert scores:
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-300 mb-2">Initial Liquidity (25%)</h4>
                <p className="text-gray-400 text-sm">
                  Higher initial liquidity indicates serious project intent and reduces rug pull risk
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-300 mb-2">Holder Distribution (20%)</h4>
                <p className="text-gray-400 text-sm">
                  Healthy distribution across multiple wallets is preferred over concentrated holdings
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-300 mb-2">Contract Safety (20%)</h4>
                <p className="text-gray-400 text-sm">
                  Verified contracts, renounced ownership, and locked liquidity earn higher scores
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-300 mb-2">Early Trading Volume (15%)</h4>
                <p className="text-gray-400 text-sm">
                  Strong early volume shows genuine market interest
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-300 mb-2">Social Signals (10%)</h4>
                <p className="text-gray-400 text-sm">
                  Community engagement, Twitter presence, and organic discussion
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-300 mb-2">Wallet Patterns (10%)</h4>
                <p className="text-gray-400 text-sm">
                  Analysis of buyer wallet history to detect bot activity or coordinated pumps
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chart Indicators & Icons */}
        <section id="indicators" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-brand-navy-light">Chart Indicators & Icons</h2>

          <p className="text-gray-300 mb-6">
            All indicators can be toggled on/off individually, and your preferences are saved automatically.
          </p>

          {/* Profit/Loss Indicators */}
          <div className="bg-gray-900 p-6 rounded-2xl mb-6">
            <h3 className="text-xl font-semibold mb-4 text-brand-green">Profit/Loss Indicators</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded mt-1" style={{backgroundColor: '#0f4a6e'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">Unrealized Profit</strong>
                    <span className="text-xs text-gray-500">#0f4a6e</span>
                  </div>
                  <p className="text-gray-400 text-sm">Solid dark blue line showing potential profit from open positions</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded mt-1" style={{backgroundColor: '#6e3d0f'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">Unrealized Loss</strong>
                    <span className="text-xs text-gray-500">#6e3d0f</span>
                  </div>
                  <p className="text-gray-400 text-sm">Solid brown line showing potential loss from open positions</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded mt-1" style={{backgroundColor: '#156a9d'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">Realized Profit</strong>
                    <span className="text-xs text-gray-500">#156a9d</span>
                  </div>
                  <p className="text-gray-400 text-sm">Dashed blue line showing actual profit from closed positions</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded mt-1" style={{backgroundColor: '#9d4e15'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">Realized Loss</strong>
                    <span className="text-xs text-gray-500">#9d4e15</span>
                  </div>
                  <p className="text-gray-400 text-sm">Dashed orange line showing actual loss from closed positions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Volume Indicators */}
          <div className="bg-gray-900 p-6 rounded-2xl mb-6">
            <h3 className="text-xl font-semibold mb-4 text-brand-green">Volume Indicators</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded mt-1 bg-gradient-to-r from-green-500 to-red-500"></div>
                <div className="flex-1">
                  <strong className="text-gray-300">Volume</strong>
                  <p className="text-gray-400 text-sm">Histogram showing trading volume in SOL (green for up candles, red for down candles)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded mt-1" style={{backgroundColor: '#2E86AB'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">Total Volume</strong>
                    <span className="text-xs text-gray-500">#2E86AB</span>
                  </div>
                  <p className="text-gray-400 text-sm">Blue line showing cumulative trading volume (cSolVal)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded mt-1" style={{backgroundColor: '#00b300'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">Buy Volume</strong>
                    <span className="text-xs text-gray-500">#00b300</span>
                  </div>
                  <p className="text-gray-400 text-sm">Green line showing volume from buy transactions</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded mt-1" style={{backgroundColor: '#e60000'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">Sell Volume</strong>
                    <span className="text-xs text-gray-500">#e60000</span>
                  </div>
                  <p className="text-gray-400 text-sm">Red line showing volume from sell transactions</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded mt-1" style={{backgroundColor: '#ff6b35'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">Last 10 Sec Volume</strong>
                    <span className="text-xs text-gray-500">#ff6b35</span>
                  </div>
                  <p className="text-gray-400 text-sm">Orange line showing trading volume in the last 10 seconds</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded mt-1" style={{backgroundColor: '#f7931e'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">Last 5 Sec Volume</strong>
                    <span className="text-xs text-gray-500">#f7931e</span>
                  </div>
                  <p className="text-gray-400 text-sm">Dotted orange line showing trading volume in the last 5 seconds</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Metrics */}
          <div className="bg-gray-900 p-6 rounded-2xl mb-6">
            <h3 className="text-xl font-semibold mb-4 text-brand-green">Quality Metrics</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded mt-1" style={{backgroundColor: '#dd0808'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">Onchain Score</strong>
                    <span className="text-xs text-gray-500">#dd0808</span>
                  </div>
                  <p className="text-gray-400 text-sm">Red line showing actor rank quality metric - higher values indicate better trader quality</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded mt-1" style={{backgroundColor: '#8E44AD'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">HT (Holder Tracking)</strong>
                    <span className="text-xs text-gray-500">#8E44AD</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Purple line showing token distribution and accumulation signal:</p>
                  <ul className="text-gray-400 text-sm space-y-1 ml-4 list-disc">
                    <li><strong className="text-red-400">Below 0.28:</strong> Strong accumulation - warning sign as distribution should be happening</li>
                    <li><strong className="text-green-400">0.28 - 0.37:</strong> Healthy accumulation/distribution phase</li>
                    <li><strong className="text-yellow-400">0.37 - 0.5:</strong> Warning - highly distributed, new buyers not stepping in</li>
                    <li><strong className="text-red-400">Above 0.5:</strong> Token basically dead most of the time - extreme distribution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Features */}
          <div className="bg-gray-900 p-6 rounded-2xl mb-6">
            <h3 className="text-xl font-semibold mb-4 text-brand-green">Visual Features</h3>

            <h4 className="font-semibold text-gray-300 mb-3 mt-4">Candlestick Color Coding</h4>
            <p className="text-gray-400 text-sm mb-3">
              Candles are color-coded based on the new money ratio to help identify quality of money entering:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded" style={{backgroundColor: '#c0e7ff'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">Light Blue</strong>
                    <span className="text-xs text-gray-500">#c0e7ff</span>
                  </div>
                  <p className="text-gray-400 text-sm">New money ratio &lt; 0.1 or undefined</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded" style={{backgroundColor: '#535696'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">Light Purple</strong>
                    <span className="text-xs text-gray-500">#535696</span>
                  </div>
                  <p className="text-gray-400 text-sm">New money ratio 0.1 - 0.49</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded" style={{backgroundColor: '#393c8a'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">Medium Purple</strong>
                    <span className="text-xs text-gray-500">#393c8a</span>
                  </div>
                  <p className="text-gray-400 text-sm">New money ratio 0.49 - 0.75</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black p-3 rounded-xl">
                <div className="w-6 h-6 rounded" style={{backgroundColor: '#020438'}}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-gray-300">Dark Purple</strong>
                    <span className="text-xs text-gray-500">#020438</span>
                  </div>
                  <p className="text-gray-400 text-sm">New money ratio ≥ 0.75 (highest quality new money)</p>
                </div>
              </div>
            </div>

          </div>

          {/* Validation & Warning Icons */}
          <div className="bg-gray-900 p-6 rounded-2xl mb-6">
            <h3 className="text-xl font-semibold mb-4 text-brand-green">Validation & Warning Icons</h3>
            <p className="text-gray-400 text-sm mb-4">
              These icons appear when specific risks or validation issues are detected:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 16 16" className="mt-0.5 flex-shrink-0">
                  <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8" />
                  <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.5 3.5 0 0 0-.463-.315A2 2 0 0 0 8.25.064.55.55 0 0 0 8 0a.55.55 0 0 0-.266.073 2 2 0 0 0-.142.08 4 4 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635s1.7-.207 2.4-.635q.1.044.196.083c.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562zM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935zM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199M8.009 1.073q.096.06.226.163c.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13s-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32q.136-.113.236-.18Z" />
                  <path d="M9.479 14.361c-.48.093-.98.139-1.479.139s-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0z" />
                </svg>
                <div className="flex-1">
                  <strong className="text-red-400">Suspicious Launch (Rocket Icon)</strong>
                  <p className="text-gray-400 text-sm">Automated bot usage or patterns similar to known scam coins detected - blinking red/orange animation</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 16 16" className="mt-0.5 flex-shrink-0">
                  <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5" transform="translate(0,16) scale(1,-1)" />
                </svg>
                <div className="flex-1">
                  <strong className="text-blue-400">Pump & Dump Risk (Arrow Icon)</strong>
                  <p className="text-gray-400 text-sm">High risk of pump and dump scheme - blinking blue/orange animation</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 16 16" className="mt-0.5 flex-shrink-0">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
                <div className="flex-1">
                  <strong className="text-red-400">Duplicate Social (Twitter/X Icon)</strong>
                  <p className="text-gray-400 text-sm">Social account already used - duplicate pages detected - blinking red/orange animation</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 16 16" className="mt-0.5 flex-shrink-0">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
                <div className="flex-1">
                  <strong className="text-red-400">Invalid Socials (Facebook Icon)</strong>
                  <p className="text-gray-400 text-sm">Social accounts incorrectly added or misleading - invalid links detected - blinking red/orange animation</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <div className="flex gap-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 16 16" className="flex-shrink-0">
                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"/>
                    <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" viewBox="0 0 16 16" className="flex-shrink-0">
                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"/>
                    <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <strong className="text-gray-300">Creator Wallet Status (Wallet Icon)</strong>
                  <p className="text-gray-400 text-sm">
                    <span className="text-red-400">Red:</span> Fresh/new creator wallet (higher risk)
                    <br />
                    <span className="text-green-400">Green:</span> Established creator with history
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <div className="flex gap-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 16 16" className="flex-shrink-0">
                    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" viewBox="0 0 16 16" className="flex-shrink-0">
                    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <strong className="text-gray-300">High Price Warning (Cash Icon)</strong>
                  <p className="text-gray-400 text-sm">
                    <span className="text-red-400">Red:</span> Price above 150 SOL (extreme caution)
                    <br />
                    <span className="text-orange-400">Orange:</span> Price above 100 SOL (high risk)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-black p-3 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mt-0.5 flex-shrink-0 text-gray-400">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                </svg>
                <div className="flex-1">
                  <strong className="text-gray-300">Info Icon</strong>
                  <p className="text-gray-400 text-sm">Displays additional information in popover when clicked</p>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-brand-navy-light">Troubleshooting</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-300">Extension Not Loading</h3>
              <p className="text-gray-400 mb-2">Try these steps:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                <li>Refresh the Bullx.io page</li>
                <li>Disable and re-enable the extension in chrome://extensions/</li>
                <li>Check that the extension has permission to run on Bullx.io</li>
                <li>Clear browser cache and reload</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-300">Not Receiving Notifications</h3>
              <p className="text-gray-400 mb-2">Ensure:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                <li>Chrome notifications are enabled in system settings</li>
                <li>Extension has notification permissions</li>
                <li>You are not in Do Not Disturb mode</li>
                <li>Extension is actively running (check toolbar icon)</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-300">Charts Not Displaying</h3>
              <p className="text-gray-400 mb-2">Check if:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                <li>You are on a supported Bullx.io token page</li>
                <li>Browser zoom is set to 100%</li>
                <li>No other extensions are conflicting</li>
                <li>JavaScript is enabled in browser settings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-brand-navy to-brand-navy-light p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Need Help?</h2>
          <p className="text-gray-200 mb-6">
            Contact us on Telegram for support or questions
          </p>
          <a
            href="https://t.me/jacstn"
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
            Contact Support
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="px-6 py-10 bg-black text-gray-500 text-center text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Onchainrank. All rights reserved.
      </footer>
    </div>
  );
}
