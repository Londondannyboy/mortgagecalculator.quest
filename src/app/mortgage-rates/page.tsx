import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mortgage Rates UK 2026 | Compare Best Rates | Mortgage Calculator Quest",
  description: "Compare UK mortgage rates for 2026. Find the best fixed, variable, and tracker rates. Current rates, market trends, and tips for getting the best deal.",
  keywords: "mortgage rates UK, best mortgage rates, current mortgage rates, fixed rate mortgage, mortgage interest rates 2026",
  openGraph: {
    title: "Mortgage Rates UK 2026 | Compare Current Rates",
    description: "Compare indicative UK mortgage rates for 2026. Fixed rates, trackers, and variable rates. Always verify with lenders.",
    type: "website",
  },
};

const currentRates = [
  { ltv: "60%", twoYear: "4.19%", fiveYear: "4.09%", tracker: "5.24%", notes: "Best rates for larger deposits" },
  { ltv: "75%", twoYear: "4.49%", fiveYear: "4.29%", tracker: "5.49%", notes: "Most popular LTV bracket" },
  { ltv: "85%", twoYear: "4.89%", fiveYear: "4.69%", tracker: "5.89%", notes: "Good for smaller deposits" },
  { ltv: "90%", twoYear: "5.19%", fiveYear: "5.09%", tracker: "6.19%", notes: "Minimum 10% deposit" },
  { ltv: "95%", twoYear: "5.49%", fiveYear: "5.49%", tracker: "6.49%", notes: "First-time buyer rates" },
];

export default function MortgageRatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Quick Links Navigation */}
        <nav className="mb-6 text-sm">
          <span className="text-gray-600 dark:text-gray-400 font-medium">Quick Links: </span>
          <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Mortgage Calculator</Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/calculators" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Calculators</Link>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-gray-800 dark:text-white font-medium">Mortgage Rates</span>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/mortgage-types" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Mortgage Types</Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/guides" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Guides</Link>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Mortgage Rates UK 2026 - Compare Current Rates
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <strong>Mortgage rates UK</strong> have stabilised in early 2026 following the Bank of England&apos;s
            recent base rate decisions. Whether you&apos;re buying your first home, remortgaging, or investing in
            property, understanding current rates helps you find the best deal. Use our{" "}
            <Link href="/" className="text-blue-600 hover:underline">mortgage calculator</Link> to see how
            these rates affect your monthly payments.
          </p>
        </header>

        {/* Anchor Links */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 shadow-sm">
          <span className="text-gray-600 dark:text-gray-400 font-medium">Jump to: </span>
          <a href="#current-rates" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Current Rates</a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#rate-types" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Rate Types</a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#tips" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Tips</a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#faqs" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">FAQs</a>
        </div>

        {/* Current Rates Table */}
        <section id="current-rates" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Current UK Mortgage Rates by LTV
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Below are indicative mortgage rates UK homebuyers can expect based on their loan-to-value (LTV)
            ratio. Rates vary by lender and are subject to change.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                  <th className="text-left p-4 rounded-tl-xl">LTV</th>
                  <th className="text-center p-4">2-Year Fixed</th>
                  <th className="text-center p-4">5-Year Fixed</th>
                  <th className="text-center p-4">Tracker</th>
                  <th className="text-left p-4 rounded-tr-xl">Notes</th>
                </tr>
              </thead>
              <tbody>
                {currentRates.map((rate, idx) => (
                  <tr
                    key={rate.ltv}
                    className={`border-b border-gray-200 dark:border-gray-700 ${
                      idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-700"
                    }`}
                  >
                    <td className="p-4 font-semibold text-gray-800 dark:text-white">{rate.ltv}</td>
                    <td className="text-center p-4 text-emerald-600 font-medium">{rate.twoYear}</td>
                    <td className="text-center p-4 text-blue-600 font-medium">{rate.fiveYear}</td>
                    <td className="text-center p-4 text-purple-600 font-medium">{rate.tracker}</td>
                    <td className="p-4 text-gray-600 dark:text-gray-300 text-xs">{rate.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            Rates shown are representative and based on market data as of January 2026.
            Actual rates depend on individual circumstances and lender criteria.
          </p>
        </section>

        {/* Base Rate Info */}
        <section className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-10">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
            Bank of England Base Rate
          </h3>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-blue-600">4.50%</div>
            <div className="text-sm text-blue-700 dark:text-blue-300">
              <p>Current base rate as of January 2026</p>
              <p>This influences all UK mortgage rates</p>
            </div>
          </div>
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-3">
            Source:{" "}
            <a
              href="https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              Bank of England Official Base Rate
            </a>
          </p>
        </section>

        {/* Rate Types Explained */}
        <section id="rate-types" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Types of Mortgage Rates in the UK
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Fixed Rate Mortgages</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Your interest rate stays the same for a set period (typically 2, 3, or 5 years), giving you
                certainty over monthly payments. Most popular choice for UK homebuyers.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>✓ Predictable monthly payments</li>
                <li>✓ Protection from rate rises</li>
                <li>✗ Won&apos;t benefit if rates fall</li>
                <li>✗ Early repayment charges typically apply</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Tracker Mortgages</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Your rate tracks the Bank of England base rate plus a set margin. When the base rate changes,
                so does your rate and monthly payment.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>✓ Benefit from rate cuts</li>
                <li>✓ Often lower initial rates</li>
                <li>✗ Payments increase if rates rise</li>
                <li>✗ Budgeting uncertainty</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Variable Rate Mortgages (SVR)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                The lender&apos;s Standard Variable Rate, which can change at any time. You&apos;ll typically move to
                this after a fixed or tracker period ends.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>✓ No early repayment charges</li>
                <li>✓ Flexibility to switch anytime</li>
                <li>✗ Usually higher than fixed rates</li>
                <li>✗ Can change without warning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section id="tips" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Top Tips for Getting the Best Mortgage Rate
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Increase Your Deposit",
                content: "Moving from 90% LTV to 85% or 75% unlocks significantly better rates. Even an extra 5% deposit can save thousands over your mortgage term.",
              },
              {
                title: "Improve Your Credit Score",
                content: "Check your credit report for errors, pay down existing debts, and ensure you're on the electoral roll. Better scores mean access to better rates.",
              },
              {
                title: "Consider the Total Cost",
                content: "A slightly higher rate with no fees may be cheaper than a low rate with £999+ arrangement fees. Calculate the total cost over the deal period.",
              },
              {
                title: "Time Your Application",
                content: "Mortgage offers typically last 3-6 months. Apply when you're ready to buy, but use a broker to track rate movements.",
              },
              {
                title: "Use a Mortgage Broker",
                content: "Brokers access deals not available directly and can negotiate on your behalf. Many are fee-free as they're paid by lenders.",
              },
              {
                title: "Act Before Your Deal Ends",
                content: "Start looking 3-6 months before your fixed rate ends. Most lenders let you lock in a new rate in advance to avoid the SVR.",
              },
            ].map((tip, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Frequently Asked Questions About UK Mortgage Rates
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Will mortgage rates go down in 2026?",
                a: "Rate predictions are uncertain and depend on economic conditions. Check the Bank of England website for the latest base rate decisions and Money Helper for guidance. We cannot predict future rates - always do your own research.",
              },
              {
                q: "Should I fix for 2 or 5 years?",
                a: "This depends on your circumstances and rate outlook. 5-year fixes offer longer certainty but less flexibility. If you might move or remortgage within 5 years, a 2-year fix with no ERCs may suit better. Consider the rate difference between the two options.",
              },
              {
                q: "What's the best mortgage rate available?",
                a: "Rates vary by lender, deposit size, and credit history. The rates shown on this page are illustrative examples only. Always compare rates directly from multiple lenders or use a mortgage broker. We have no commercial relationships with any lenders.",
              },
              {
                q: "How do I compare mortgage rates fairly?",
                a: "Look at the APRC (Annual Percentage Rate of Charge) which includes fees. Calculate total cost over the deal period: (monthly payment × months) + fees. A broker can help compare deals on a like-for-like basis.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Related Mortgage Tools & Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Mortgage Calculator</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Calculate payments at different interest rates</p>
            </Link>
            <Link
              href="/calculators/mortgage-overpayment-calculator"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Overpayment Calculator</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">See how overpaying saves you money</p>
            </Link>
            <Link
              href="/calculators/how-much-can-i-borrow-calculator"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Affordability Calculator</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Check how much you could borrow</p>
            </Link>
            <Link
              href="/mortgage-types/first-time-buyer-mortgage"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">First-Time Buyer Guide</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Special rates and schemes for first-timers</p>
            </Link>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Summary</h2>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Mortgage rates UK</strong> vary significantly based on your deposit size, credit score, and
            the type of deal you choose. With rates stabilising in 2026, now is a good time to shop around
            and compare offers. Use our{" "}
            <Link href="/" className="text-blue-600 hover:underline">mortgage calculator</Link> to see how
            different rates affect your monthly payments, and consider speaking to a broker to access the
            best deals available for your circumstances.
          </p>
        </section>

        {/* Footer Disclaimer */}
        <footer className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            <em>Last updated: January 2026</em>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Your home may be repossessed if you do not keep up repayments on your mortgage.
            Mortgage Calculator Quest provides tools and information for educational purposes.
            Always seek professional financial advice before making mortgage decisions.
          </p>
        </footer>
      </div>
    </div>
  );
}
