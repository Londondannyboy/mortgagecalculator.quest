import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mortgage Guides UK | Expert Advice | Mortgage Calculator Quest",
  description: "Comprehensive UK mortgage guides. Learn about buying your first home, remortgaging, improving your credit, and more. Expert advice for homebuyers.",
  keywords: "mortgage guides, buying a house guide, first time buyer guide, remortgage guide, mortgage advice",
};

const guides = [
  {
    title: "First-Time Buyer Complete Guide",
    href: "/guides/first-time-buyer-guide",
    description: "Everything you need to know about buying your first home, from saving a deposit to completing your purchase.",
    category: "Buying",
    readTime: "15 min",
  },
  {
    title: "How to Improve Your Credit Score",
    href: "/guides/improve-credit-score",
    description: "Practical steps to boost your credit rating and qualify for better mortgage rates.",
    category: "Preparation",
    readTime: "8 min",
  },
  {
    title: "Remortgaging Guide",
    href: "/guides/remortgage-guide",
    description: "When and how to switch your mortgage for a better deal, and what to watch out for.",
    category: "Existing Owners",
    readTime: "10 min",
  },
  {
    title: "Understanding Mortgage Fees",
    href: "/guides/mortgage-fees-explained",
    description: "All the costs involved in getting a mortgage, from arrangement fees to valuation charges.",
    category: "Costs",
    readTime: "7 min",
  },
  {
    title: "Getting a Mortgage with Bad Credit",
    href: "/guides/mortgage-with-bad-credit",
    description: "Options for securing a mortgage if your credit history isn't perfect.",
    category: "Specialist",
    readTime: "9 min",
  },
  {
    title: "Mortgage Deposit Guide",
    href: "/guides/mortgage-deposit-guide",
    description: "How much deposit you need, ways to save faster, and deposit schemes available.",
    category: "Preparation",
    readTime: "8 min",
  },
];

export default function GuidesPage() {
  return (
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
          <Link href="/mortgage-types" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Mortgage Types</Link>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-gray-800 dark:text-white font-medium">Guides</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Mortgage Guides - Expert Advice for UK Homebuyers
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our comprehensive <strong>mortgage guides</strong> cover everything from saving for a deposit
            to completing your purchase. Whether you&apos;re a first-time buyer or looking to remortgage,
            find the information you need to make confident decisions.
          </p>
        </header>

        {/* Guides List */}
        <section className="mb-12">
          <div className="space-y-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded">
                        {guide.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{guide.readTime} read</span>
                    </div>
                    <h2 className="font-semibold text-lg text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {guide.description}
                    </p>
                  </div>
                  <span className="text-gray-400 group-hover:text-blue-500 transition-colors">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            If you&apos;re new to mortgages, follow these steps:
          </p>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <Link href="/calculators/how-much-can-i-borrow-calculator" className="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline">
                  Check how much you could borrow
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-300">Based on your income and circumstances</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <Link href="/calculators/stamp-duty-calculator" className="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline">
                  Calculate your stamp duty
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-300">Factor in this cost alongside your deposit</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <Link href="/" className="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline">
                  Calculate your monthly payments
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-300">Make sure you can afford the repayments</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <Link href="/mortgage-rates" className="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline">
                  Compare current rates
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-300">See what deals are available</p>
              </div>
            </li>
          </ol>
        </section>

        {/* Related Tools */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Essential Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Mortgage Calculator</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Calculate monthly payments</p>
            </Link>
            <Link
              href="/calculators"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">All Calculators</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Browse all our tools</p>
            </Link>
            <Link
              href="/mortgage-types"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Mortgage Types</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Find the right mortgage</p>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-6 border-t border-gray-200 dark:border-gray-700">
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
