import { Metadata } from "next";
import Link from "next/link";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Mortgage Types UK | Complete Guide | Mortgage Calculator Quest",
  description: "Understand different UK mortgage types. First-time buyer, buy to let, fixed rate, tracker, and more. Find the right mortgage for your situation.",
  keywords: "mortgage types UK, first time buyer mortgage, buy to let mortgage, fixed rate mortgage, tracker mortgage",
};

const mortgageTypes = [
  {
    title: "First-Time Buyer Mortgage",
    href: "/mortgage-types/first-time-buyer-mortgage",
    description: "Special rates and schemes designed for people buying their first home, including Help to Buy and stamp duty relief.",
    searchVolume: "8,100",
    icon: "🏡",
  },
  {
    title: "Buy to Let Mortgage",
    href: "/mortgage-types/buy-to-let-mortgage",
    description: "Mortgages for landlords and property investors. Different criteria based on rental income rather than personal income.",
    searchVolume: "40,500",
    icon: "🏢",
  },
  {
    title: "Remortgage Calculator",
    href: "/calculators/remortgage-calculator",
    description: "Calculate if switching your mortgage to a new deal could save you money. Compare costs and savings.",
    searchVolume: "27,100",
    icon: "🔄",
  },
  {
    title: "Fixed Rate Mortgage",
    href: "/mortgage-types/fixed-rate-mortgage",
    description: "Your interest rate stays the same for a set period, giving predictable monthly payments.",
    searchVolume: "10,000",
    icon: "📊",
  },
  {
    title: "Tracker Mortgage",
    href: "/mortgage-types/tracker-mortgage",
    description: "Your rate tracks the Bank of England base rate, rising and falling with it.",
    searchVolume: "3,600",
    icon: "📈",
  },
  {
    title: "Interest-Only Mortgage",
    href: "/mortgage-types/interest-only-mortgage",
    description: "Pay only the interest each month, with the capital repaid at the end of the term.",
    searchVolume: "2,900",
    icon: "💰",
  },
];

export default function MortgageTypesPage() {
  return (
    <>
      <SchemaMarkup
        type="webpage"
        title="Mortgage Types UK"
        description="Understand different UK mortgage types including first-time buyer, buy to let, fixed rate, and tracker mortgages."
        url="/mortgage-types"
        breadcrumbs={[
          { name: "Mortgage Types", href: "/mortgage-types" },
        ]}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <nav className="mb-6 text-sm">
          <span className="text-gray-600 dark:text-gray-400 font-medium">Quick Links: </span>
          <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Mortgage Calculator</Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/calculators" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Calculators</Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/mortgage-rates" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Mortgage Rates</Link>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-gray-800 dark:text-white font-medium">Mortgage Types</span>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/guides" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Guides</Link>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Mortgage Types UK - Find the Right Mortgage
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Understanding different <strong>mortgage types</strong> is essential for finding the right deal.
            From first-time buyer mortgages to buy-to-let options, each type has unique features, requirements,
            and benefits. Use our guides below to learn which mortgage suits your situation.
          </p>
        </header>

        {/* Mortgage Types Grid */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {mortgageTypes.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{type.icon}</span>
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {type.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {type.description}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      {type.searchVolume}+ monthly searches
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Guide */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Which Mortgage Type Is Right for You?
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800 dark:text-white">Buying your first home?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Start with a <Link href="/mortgage-types/first-time-buyer-mortgage" className="text-blue-600 hover:underline">first-time buyer mortgage</Link>.
                You may qualify for special rates, stamp duty relief, and government schemes like Help to Buy.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800 dark:text-white">Investing in rental property?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                A <Link href="/mortgage-types/buy-to-let-mortgage" className="text-blue-600 hover:underline">buy to let mortgage</Link> is
                assessed on rental income rather than your salary. Use our{" "}
                <Link href="/calculators/buy-to-let-mortgage-calculator" className="text-blue-600 hover:underline">BTL calculator</Link> to
                check viability.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-gray-800 dark:text-white">Want predictable payments?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                A <Link href="/mortgage-types/fixed-rate-mortgage" className="text-blue-600 hover:underline">fixed rate mortgage</Link> locks
                in your interest rate for 2-5 years, protecting you from rate rises.
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-semibold text-gray-800 dark:text-white">Think rates will fall?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                A <Link href="/mortgage-types/tracker-mortgage" className="text-blue-600 hover:underline">tracker mortgage</Link> follows
                the Bank of England base rate, so you&apos;ll benefit from any cuts.
              </p>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Related Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Mortgage Calculator</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Calculate your monthly payments</p>
            </Link>
            <Link
              href="/mortgage-rates"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Current Rates</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Compare UK mortgage rates</p>
            </Link>
            <Link
              href="/calculators/how-much-can-i-borrow-calculator"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Affordability Check</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">See how much you could borrow</p>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Your home may be repossessed if you do not keep up repayments on your mortgage.
            Mortgage Calculator Quest provides tools and information for educational purposes.
            Always seek professional financial advice before making mortgage decisions.
          </p>
        </footer>
      </div>
    </div>
    </>
  );
}
