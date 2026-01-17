import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mortgage Calculators UK | Free Tools | Mortgage Calculator Quest",
  description: "Free UK mortgage calculators. Calculate mortgage payments, stamp duty, overpayments, affordability, and more. Essential tools for homebuyers and property investors.",
  keywords: "mortgage calculators, UK mortgage tools, stamp duty calculator, mortgage payment calculator, affordability calculator",
  openGraph: {
    title: "Mortgage Calculators UK | All Essential Tools",
    description: "Free mortgage calculators for UK homebuyers. Calculate payments, stamp duty, affordability, overpayments and more.",
    type: "website",
  },
};

const calculators = [
  {
    title: "Mortgage Repayment Calculator",
    href: "/calculators/mortgage-repayment-calculator",
    description: "Calculate your monthly mortgage payments and see the total cost over your mortgage term.",
    searchVolume: "110,000",
    icon: "🏠",
    featured: true,
  },
  {
    title: "Stamp Duty Calculator",
    href: "/calculators/stamp-duty-calculator",
    description: "Work out exactly how much SDLT you'll pay when buying property in England or Northern Ireland.",
    searchVolume: "368,000",
    icon: "📋",
    featured: true,
  },
  {
    title: "Mortgage Overpayment Calculator",
    href: "/calculators/mortgage-overpayment-calculator",
    description: "See how much you could save by overpaying your mortgage and become mortgage-free years earlier.",
    searchVolume: "74,000",
    icon: "💰",
    featured: true,
  },
  {
    title: "How Much Can I Borrow Calculator",
    href: "/calculators/how-much-can-i-borrow-calculator",
    description: "Estimate your mortgage borrowing potential based on your income and circumstances.",
    searchVolume: "33,100",
    icon: "📊",
    featured: true,
  },
  {
    title: "Buy to Let Mortgage Calculator",
    href: "/calculators/buy-to-let-mortgage-calculator",
    description: "Calculate BTL mortgage payments, rental yield, and check if your investment meets lender requirements.",
    searchVolume: "27,100",
    icon: "🏢",
    featured: true,
  },
  {
    title: "Remortgage Calculator",
    href: "/calculators/remortgage-calculator",
    description: "Compare your current deal with new rates and see how much you could save by remortgaging.",
    searchVolume: "27,100",
    icon: "🔄",
    featured: false,
  },
];

export default function CalculatorsPage() {
  const featuredCalculators = calculators.filter(c => c.featured);
  const otherCalculators = calculators.filter(c => !c.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Quick Links Navigation */}
        <nav className="mb-6 text-sm">
          <span className="text-gray-600 dark:text-gray-400 font-medium">Quick Links: </span>
          <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Mortgage Calculator</Link>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-gray-800 dark:text-white font-medium">Calculators</span>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/mortgage-rates" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Mortgage Rates</Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/mortgage-types" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Mortgage Types</Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/guides" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Guides</Link>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Mortgage Calculators UK - Free Tools for Homebuyers
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Our comprehensive suite of <strong>mortgage calculators</strong> helps UK homebuyers, property investors,
            and existing homeowners make informed financial decisions. From calculating monthly payments to planning
            overpayments, these free tools provide instant, accurate results.
          </p>
        </header>

        {/* Featured Calculators */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Most Popular Calculators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCalculators.map((calc) => (
              <Link
                key={calc.href}
                href={calc.href}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{calc.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {calc.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {calc.description}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      {calc.searchVolume}+ monthly searches
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Other Calculators */}
        {otherCalculators.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              More Calculators
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherCalculators.map((calc) => (
                <Link
                  key={calc.href}
                  href={calc.href}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{calc.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {calc.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {calc.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Calculator Guide Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Which Mortgage Calculator Do You Need?
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                If you&apos;re just starting your property search...
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Start with the <Link href="/calculators/how-much-can-i-borrow-calculator" className="text-blue-600 hover:underline">How Much Can I Borrow Calculator</Link> to
                understand your budget. Then use the <Link href="/calculators/stamp-duty-calculator" className="text-blue-600 hover:underline">Stamp Duty Calculator</Link> to
                factor in purchase costs, and the main <Link href="/" className="text-blue-600 hover:underline">Mortgage Calculator</Link> to see monthly payments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                If you already have a mortgage...
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The <Link href="/calculators/mortgage-overpayment-calculator" className="text-blue-600 hover:underline">Overpayment Calculator</Link> shows
                how extra payments could save you thousands and cut years off your term. Consider the{" "}
                <Link href="/calculators/remortgage-calculator" className="text-blue-600 hover:underline">Remortgage Calculator</Link> if
                your fixed rate is ending soon.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                If you&apos;re a property investor...
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The <Link href="/calculators/buy-to-let-mortgage-calculator" className="text-blue-600 hover:underline">Buy to Let Calculator</Link> analyses
                rental yield, interest coverage ratios, and helps you understand if a property investment makes financial sense.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/mortgage-rates"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Mortgage Rates UK</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Compare current rates from UK lenders</p>
            </Link>
            <Link
              href="/mortgage-types/first-time-buyer-mortgage"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">First-Time Buyer Guide</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Essential information for first-time buyers</p>
            </Link>
            <Link
              href="/guides"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Mortgage Guides</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">In-depth guides to UK mortgages</p>
            </Link>
          </div>
        </section>

        {/* Footer Disclaimer */}
        <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
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
