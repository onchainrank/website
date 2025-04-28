// app/pricing/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Pricing – MyApp",
};

export default function PricingPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center mb-12">
          Pricing &amp; Access
        </h1>

        <div className="space-y-12 max-w-2xl mx-auto">
          {/* Step 1 */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                1
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Go to Pump Fun</h3>
              <p className="mt-1 text-gray-600">
                The OCR token has not been issued yet—stay tuned for launch
                details. Once it’s live, you’ll be able to mint directly on Pump
                Fun.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                2
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">
                Purchase 1 SOL Worth of OCR
              </h3>
              <p className="mt-1 text-gray-600">
                Swap exactly 1 SOL for OCR tokens on the platform. You’ll
                receive all your OCR tokens in one transaction.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                3
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Burn Your OCR Tokens</h3>
              <p className="mt-1 text-gray-600">
                Send all the OCR tokens you just bought to the designated burn
                address. This irreversibly burns them and activates your 30-day
                access.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                4
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">
                Submit Proof &amp; Get Access
              </h3>
              <p className="mt-1 text-gray-600">
                Head over to your{" "}
                <Link href="/profile" className="text-blue-600 hover:underline">
                  Profile Page
                </Link>{" "}
                and submit your purchase + burn transaction signatures. Once
                verified, your extension access will be enabled for the next
                month.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/profile"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Go to Profile &amp; Submit Proof
          </Link>
        </div>
      </div>
    </main>
  );
}
