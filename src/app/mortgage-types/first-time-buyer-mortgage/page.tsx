import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "First Time Buyer Mortgage UK | Guide & Tips | Mortgage Calculator Quest",
  description: "Complete guide to first-time buyer mortgages in the UK. Learn about special rates, stamp duty relief, deposit schemes, and how to get on the property ladder.",
  keywords: "first time buyer mortgage, first time buyer, ftb mortgage, first home mortgage UK, help to buy",
  openGraph: {
    title: "First Time Buyer Mortgage UK | Complete Guide",
    description: "Everything you need to know about getting your first mortgage. Special rates, schemes, and stamp duty relief for first-time buyers.",
    type: "website",
  },
};

export default function FirstTimeBuyerMortgagePage() {
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
          <Link href="/guides" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Guides</Link>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            First Time Buyer Mortgage UK - Your Complete Guide
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A <strong>first time buyer mortgage</strong> is designed specifically for people purchasing their
            first home. As a first-time buyer in the UK, you have access to special benefits including
            stamp duty relief, competitive interest rates, and government schemes. Use our{" "}
            <Link href="/" className="text-blue-600 hover:underline">mortgage calculator</Link> to see
            what you could afford.
          </p>
        </header>

        {/* Anchor Links */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 shadow-sm">
          <span className="text-gray-600 dark:text-gray-400 font-medium">Jump to: </span>
          <a href="#benefits" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Benefits</a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#stamp-duty" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Stamp Duty</a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#schemes" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Schemes</a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#tips" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Tips</a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#faqs" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">FAQs</a>
        </div>

        {/* Who Qualifies */}
        <section className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-3">
            Who Counts as a First-Time Buyer?
          </h2>
          <p className="text-blue-700 dark:text-blue-300 mb-3">
            You&apos;re a first-time buyer if you&apos;ve never owned a property anywhere in the world. This includes:
          </p>
          <ul className="text-blue-700 dark:text-blue-300 space-y-1 text-sm">
            <li>✓ Never owned a residential property (freehold or leasehold)</li>
            <li>✓ Never inherited a property</li>
            <li>✓ Never owned property abroad</li>
            <li>✗ Previously owned but sold - you&apos;re NOT a first-time buyer</li>
          </ul>
        </section>

        {/* Benefits */}
        <section id="benefits" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            First Time Buyer Mortgage Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Stamp Duty Relief</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Pay no stamp duty on properties up to £425,000, saving up to £8,750 compared to other buyers.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Lower Deposit Options</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Many lenders offer mortgages with just 5% deposit for first-time buyers, with competitive rates.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Government Schemes</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Access to schemes like Lifetime ISA, First Homes, and shared ownership to help you buy sooner.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Competitive Rates</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Many lenders offer special first-time buyer products with attractive interest rates.
              </p>
            </div>
          </div>
        </section>

        {/* Stamp Duty */}
        <section id="stamp-duty" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            First Time Buyer Stamp Duty Relief
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              First-time buyers benefit from enhanced stamp duty relief on properties up to £625,000:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="text-left p-3">Property Price</th>
                    <th className="text-right p-3">First-Time Buyer</th>
                    <th className="text-right p-3">Standard Rate</th>
                    <th className="text-right p-3">You Save</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200 dark:border-gray-600">
                    <td className="p-3">£250,000</td>
                    <td className="text-right p-3 text-emerald-600 font-medium">£0</td>
                    <td className="text-right p-3">£0</td>
                    <td className="text-right p-3 text-emerald-600">£0</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                    <td className="p-3">£350,000</td>
                    <td className="text-right p-3 text-emerald-600 font-medium">£0</td>
                    <td className="text-right p-3">£5,000</td>
                    <td className="text-right p-3 text-emerald-600">£5,000</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-600">
                    <td className="p-3">£425,000</td>
                    <td className="text-right p-3 text-emerald-600 font-medium">£0</td>
                    <td className="text-right p-3">£8,750</td>
                    <td className="text-right p-3 text-emerald-600">£8,750</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                    <td className="p-3">£500,000</td>
                    <td className="text-right p-3 text-emerald-600 font-medium">£3,750</td>
                    <td className="text-right p-3">£12,500</td>
                    <td className="text-right p-3 text-emerald-600">£8,750</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-600">
                    <td className="p-3">£625,000</td>
                    <td className="text-right p-3 text-emerald-600 font-medium">£10,000</td>
                    <td className="text-right p-3">£18,750</td>
                    <td className="text-right p-3 text-emerald-600">£8,750</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Use our <Link href="/calculators/stamp-duty-calculator" className="text-blue-600 hover:underline">stamp duty calculator</Link> for
              an instant calculation based on your property price.
            </p>
          </div>
        </section>

        {/* Government Schemes */}
        <section id="schemes" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            First Time Buyer Schemes
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Lifetime ISA (LISA)</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Save up to £4,000 per year and receive a 25% government bonus (up to £1,000) to use towards
                your first home purchase (property up to £450,000).
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Must be aged 18-39 to open, and property must cost £450,000 or less.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Shared Ownership</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Buy a share (25-75%) of a home and pay rent on the rest. Allows you to get on the ladder
                with a smaller deposit and mortgage.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Household income must be £80,000 or less (£90,000 in London).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">First Homes Scheme</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Buy new-build homes at a discount of at least 30% compared to market value. The discount
                passes on to future buyers.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Household income up to £80,000 (£90,000 in London). Discounted price must be no more than £250,000 (£420,000 in London).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">95% Mortgage Guarantee</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Government-backed scheme allowing lenders to offer 95% LTV mortgages with competitive rates,
                meaning you only need a 5% deposit.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Available from participating lenders. Property must be your main residence.
              </p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section id="tips" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Top Tips for First Time Buyers
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Start Saving Early",
                content: "Open a Lifetime ISA as soon as possible to maximise the government bonus. Even small regular contributions add up over time.",
              },
              {
                title: "Check Your Credit Score",
                content: "Review your credit report 6-12 months before applying. Fix any errors and avoid new credit applications in the run-up to your mortgage application.",
              },
              {
                title: "Get a Decision in Principle",
                content: "Before house hunting, get a mortgage decision in principle. It shows sellers you're serious and helps you know your budget.",
              },
              {
                title: "Budget for All Costs",
                content: "Factor in solicitor fees (£1,000-2,000), surveys (£300-700), moving costs, and furnishing. These add thousands to your purchase.",
              },
              {
                title: "Consider Location Flexibility",
                content: "Expanding your search area could get you more for your money. Look at transport links and up-and-coming areas.",
              },
              {
                title: "Use a Mortgage Broker",
                content: "Brokers can access deals not available directly and guide you through the process. Many are free as they're paid by lenders.",
              },
            ].map((tip, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  {index + 1}. {tip.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            First Time Buyer Mortgage FAQs
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How much deposit do I need as a first-time buyer?",
                a: "Most lenders accept 5-10% deposits from first-time buyers, with some offering special 5% mortgage products. A larger deposit (15%+) will unlock better interest rates and reduce your monthly payments.",
              },
              {
                q: "Can I use gifted deposits?",
                a: "Yes, most lenders accept gifted deposits from family members. They'll need to sign a letter confirming the gift doesn't need to be repaid. Some lenders have restrictions on gifted deposits.",
              },
              {
                q: "What documents do I need for a mortgage application?",
                a: "Typically: 3 months' payslips, 3 months' bank statements, proof of ID and address, P60, and details of any debts. Self-employed applicants need 2-3 years' accounts or tax returns.",
              },
              {
                q: "How long does the first-time buyer mortgage process take?",
                a: "From application to completion usually takes 8-12 weeks, but can be longer if there are issues with the property or chain. Having documents ready speeds things up.",
              },
              {
                q: "Should I get a fixed or variable rate mortgage?",
                a: "Most first-time buyers choose fixed rates for predictable payments while settling into homeownership. 2-year fixes are popular, but 5-year fixes offer longer certainty.",
              },
              {
                q: "Can I buy with a partner who already owns property?",
                a: "Yes, but you'll lose first-time buyer benefits. The transaction will be assessed based on the non-first-time buyer, so you'll pay standard stamp duty rates.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Tools */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Essential First Time Buyer Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/calculators/how-much-can-i-borrow-calculator"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">How Much Can I Borrow?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Check your borrowing potential based on income</p>
            </Link>
            <Link
              href="/calculators/stamp-duty-calculator"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Stamp Duty Calculator</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">See how much you'll save with FTB relief</p>
            </Link>
            <Link
              href="/"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Mortgage Calculator</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Calculate your monthly payments</p>
            </Link>
            <Link
              href="/mortgage-rates"
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">Current Mortgage Rates</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Compare today's best rates</p>
            </Link>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Summary</h2>
          <p className="text-gray-600 dark:text-gray-300">
            A <strong>first time buyer mortgage</strong> offers significant advantages including stamp duty relief,
            access to government schemes, and competitive rates. Start by checking{" "}
            <Link href="/calculators/how-much-can-i-borrow-calculator" className="text-blue-600 hover:underline">
              how much you could borrow
            </Link>, then use our <Link href="/" className="text-blue-600 hover:underline">mortgage calculator</Link> to
            see monthly payments. With careful planning and the right support, getting on the property ladder
            is achievable. Speak to a mortgage broker to explore all your options.
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            <em>Last updated: January 2025</em>
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
