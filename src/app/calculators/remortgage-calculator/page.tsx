import { Metadata } from "next";
import Link from "next/link";
import { RemortgageCalculator } from "@/components/calculators/RemortgageCalculator";
import { SchemaMarkup, ExternalLink, authoritativeLinks } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Remortgage Calculator UK 2025 | Compare & Save | Mortgage Calculator Quest",
  description: "Free remortgage calculator for UK homeowners. Compare your current deal with new rates, calculate savings after fees, and find the break-even point. See if switching is worth it.",
  keywords: "remortgage calculator, remortgage savings calculator, should I remortgage, remortgage comparison, switch mortgage calculator",
  openGraph: {
    title: "Remortgage Calculator UK 2025 | See How Much You Could Save",
    description: "Calculate your potential savings from remortgaging. Compare rates, factor in fees, and find out if switching makes financial sense.",
    type: "website",
  },
};

const faqs = [
  {
    question: "When is the best time to remortgage?",
    answer: "The best time to remortgage is typically 3-6 months before your current fixed rate ends. This gives you time to find the best deal and complete the process before you move to your lender's Standard Variable Rate (SVR), which is usually much higher.",
  },
  {
    question: "What fees are involved in remortgaging?",
    answer: "Common remortgage fees include: arrangement fee (£0-2,000), valuation fee (£0-500), legal fees (£0-1,000), and potentially an early repayment charge if you're still in a fixed term. Many lenders offer free valuations and legal work to attract customers.",
  },
  {
    question: "Can I remortgage with the same lender?",
    answer: "Yes, this is called a 'product transfer' and is often simpler and faster than switching lenders. However, you may get better rates by shopping around. Product transfers typically don't require a new valuation or full affordability assessment.",
  },
  {
    question: "How much equity do I need to remortgage?",
    answer: "Most lenders require at least 5-10% equity in your property. However, the best rates are typically available at 60% LTV (40% equity) or lower. If your property value has increased since you bought, you may have more equity than you think.",
  },
  {
    question: "Will remortgaging affect my credit score?",
    answer: "Applying for a remortgage will involve a credit check, which may temporarily lower your score by a few points. However, if you're accepted and make payments on time, the long-term impact is minimal. Avoid multiple applications to different lenders.",
  },
  {
    question: "Can I release equity when remortgaging?",
    answer: "Yes, remortgaging is a common way to release equity from your home. You can borrow more than your current balance (subject to affordability) and use the extra funds for home improvements, debt consolidation, or other purposes.",
  },
];

export default function RemortgageCalculatorPage() {
  return (
    <>
      <SchemaMarkup
        type="calculator"
        title="Remortgage Calculator UK"
        description="Calculate your potential savings from remortgaging. Compare current and new rates, factor in fees, and find your break-even point."
        url="/calculators/remortgage-calculator"
        breadcrumbs={[
          { name: "Calculators", href: "/calculators" },
          { name: "Remortgage Calculator", href: "/calculators/remortgage-calculator" },
        ]}
        faq={faqs}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/calculators" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                  Calculators
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600 dark:text-gray-300">Remortgage Calculator</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Remortgage Calculator UK - Should You Switch Your Mortgage?
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our <strong>remortgage calculator</strong> helps you determine whether switching to a new mortgage
              deal makes financial sense. By comparing your current rate with available rates and factoring in
              all the associated fees, you can see your potential savings and calculate exactly when you&apos;ll
              break even on the costs. According to{" "}
              <ExternalLink href={authoritativeLinks.moneyHelper.mortgages.url}>
                Money Helper
              </ExternalLink>, thousands of UK homeowners could save money by remortgaging when their fixed
              rate ends. Use this calculator alongside our{" "}
              <Link href="/mortgage-rates" className="text-blue-600 hover:underline">current mortgage rates</Link>{" "}
              comparison to find the best deal for your circumstances.
            </p>
          </header>

          {/* Anchor Links */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 shadow-sm">
            <span className="text-gray-600 dark:text-gray-400 font-medium">Jump to: </span>
            <a href="#calculator" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Calculator</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#how-it-works" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">How It Works</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#when-to-remortgage" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">When to Remortgage</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#costs" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Costs</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#faqs" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">FAQs</a>
          </div>

          {/* Calculator Section */}
          <section id="calculator" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Remortgage Savings Calculator
            </h2>
            <RemortgageCalculator />
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              How the Remortgage Calculator Works
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The remortgage calculator compares the total cost of staying on your current mortgage deal
                versus switching to a new one. It takes into account not just the interest rate difference,
                but all the fees involved in remortgaging, giving you a true picture of your potential savings.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                What the Calculator Considers
              </h3>
              <p>
                When you enter your mortgage details, the calculator performs several key calculations to
                determine whether remortgaging is worthwhile:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Monthly payment comparison:</strong> Calculates your current monthly payment and what
                  it would be on the new rate, showing you the immediate monthly saving.
                </li>
                <li>
                  <strong>Total cost over deal period:</strong> Multiplies monthly payments by the deal length
                  to show the full cost of each option.
                </li>
                <li>
                  <strong>Net savings after fees:</strong> Deducts all remortgage costs from the interest
                  savings to show your true benefit.
                </li>
                <li>
                  <strong>Break-even analysis:</strong> Calculates how many months it takes for the monthly
                  savings to cover the upfront fees.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                Understanding the Break-Even Point
              </h3>
              <p>
                The break-even point is crucial for deciding whether to remortgage. If you plan to move house
                or remortgage again before reaching break-even, switching might not be worthwhile. The{" "}
                <ExternalLink href={authoritativeLinks.fca.mortgages.url}>
                  Financial Conduct Authority
                </ExternalLink>{" "}
                recommends considering how long you&apos;ll stay on the new deal before committing.
              </p>
              <p>
                For example, if your total fees are £1,500 and you save £150 per month, your break-even point
                is 10 months. Any savings after that point are pure benefit. If your new deal is for 5 years
                (60 months), you&apos;d have 50 months of savings after breaking even.
              </p>
            </div>
          </section>

          {/* When to Remortgage Section */}
          <section id="when-to-remortgage" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              When Should You Remortgage?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Remortgaging at the right time can save you thousands of pounds over your mortgage term.
                Here are the key situations when you should consider using this remortgage calculator to
                evaluate your options:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-5 border border-emerald-200 dark:border-emerald-800">
                  <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
                    Your Fixed Rate is Ending
                  </h4>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300">
                    Start looking 3-6 months before your deal ends. Most lenders let you lock in a new rate
                    up to 6 months in advance, protecting you from rate increases.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    You&apos;re on the SVR
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Standard Variable Rates are typically 2-3% higher than fixed rates. Check our{" "}
                    <Link href="/mortgage-rates" className="underline">current rates</Link> to see potential savings.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                    Your Property Value Has Increased
                  </h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    According to the{" "}
                    <ExternalLink href={authoritativeLinks.landRegistry.housePrices.url}>
                      UK House Price Index
                    </ExternalLink>, property values have risen significantly in many areas. A lower LTV
                    unlocks better rates.
                  </p>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                    You Want to Release Equity
                  </h4>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Remortgaging lets you access the equity in your home for renovations, debt consolidation,
                    or other purposes while potentially getting a better rate.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                When Remortgaging Might Not Be Worth It
              </h3>
              <p>
                While remortgaging can save money, it&apos;s not always the best option. Consider staying with
                your current deal if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>You have significant early repayment charges that outweigh potential savings</li>
                <li>Your circumstances have changed and you might not pass affordability checks</li>
                <li>You plan to move house within the next 1-2 years</li>
                <li>The rate difference is minimal and fees would take years to recoup</li>
                <li>Your credit score has declined since your original mortgage</li>
              </ul>
            </div>
          </section>

          {/* Costs Section */}
          <section id="costs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Remortgage Costs Explained
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Understanding all the costs involved in remortgaging is essential for calculating your true
                savings. The remortgage calculator factors in these common fees:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="text-left p-4 border-b border-gray-200 dark:border-gray-600">Fee Type</th>
                      <th className="text-right p-4 border-b border-gray-200 dark:border-gray-600">Typical Cost</th>
                      <th className="text-left p-4 border-b border-gray-200 dark:border-gray-600">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 font-medium">Arrangement Fee</td>
                      <td className="text-right p-4 border-b border-gray-200 dark:border-gray-600">£0 - £2,000</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400">
                        Can be added to loan but you&apos;ll pay interest on it
                      </td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 font-medium">Valuation Fee</td>
                      <td className="text-right p-4 border-b border-gray-200 dark:border-gray-600">£0 - £500</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400">
                        Often free with remortgage deals
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 font-medium">Legal Fees</td>
                      <td className="text-right p-4 border-b border-gray-200 dark:border-gray-600">£0 - £1,000</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400">
                        Many lenders offer free conveyancing
                      </td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 font-medium">Early Repayment Charge</td>
                      <td className="text-right p-4 border-b border-gray-200 dark:border-gray-600">1-5% of balance</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400">
                        Only if still in a fixed/tracker period
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Exit Fee</td>
                      <td className="text-right p-4">£50 - £300</td>
                      <td className="p-4 text-gray-600 dark:text-gray-400">
                        Charged by your current lender to close the account
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                The{" "}
                <ExternalLink href={authoritativeLinks.moneyHelper.mortgages.url}>
                  Money and Pensions Service
                </ExternalLink>{" "}
                recommends comparing the total cost of deals including all fees, not just the interest rate.
                A lower rate with high fees might cost more overall than a slightly higher rate with no fees.
              </p>
            </div>
          </section>

          {/* Tips Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Top Tips for Remortgaging
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Start Early",
                  content: "Begin your remortgage search 3-6 months before your deal ends. You can lock in rates in advance and take your time comparing options.",
                },
                {
                  title: "Check Your Credit Score",
                  content: "Review your credit report before applying. Fix any errors and avoid new credit applications in the months before remortgaging.",
                },
                {
                  title: "Calculate the Total Cost",
                  content: "Don't just look at the rate. Use this calculator to factor in all fees and see your true savings over the deal period.",
                },
                {
                  title: "Consider a Broker",
                  content: "Mortgage brokers can access exclusive deals and handle the paperwork. Many are fee-free as they're paid by lenders.",
                },
                {
                  title: "Don't Forget Product Transfers",
                  content: "Ask your current lender about switching products. It's often faster and may not require a new affordability assessment.",
                },
                {
                  title: "Think About Overpayments",
                  content: "If you can afford it, consider if making overpayments would save you more than a lower rate. Use our overpayment calculator to compare.",
                },
              ].map((tip, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {index + 1}. {tip.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{tip.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs Section */}
          <section id="faqs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Frequently Asked Questions About Remortgaging
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Related Mortgage Tools & Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/mortgage-rates"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Mortgage Rates UK</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Compare current rates to find your new deal</p>
              </Link>
              <Link
                href="/calculators/mortgage-overpayment-calculator"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Overpayment Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">See if overpaying saves more than remortgaging</p>
              </Link>
              <Link
                href="/calculators/how-much-can-i-borrow-calculator"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Affordability Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Check if you can borrow more when remortgaging</p>
              </Link>
              <Link
                href="/"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Mortgage Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Calculate payments on different loan amounts</p>
              </Link>
            </div>
          </section>

          {/* Summary */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Summary</h2>
            <p className="text-gray-600 dark:text-gray-300">
              The <strong>remortgage calculator</strong> is an essential tool for UK homeowners considering
              switching their mortgage deal. By factoring in all costs including arrangement fees, legal fees,
              and early repayment charges, you can see your true potential savings and calculate exactly when
              you&apos;ll break even. Remember to start looking 3-6 months before your current deal ends, and
              compare both the interest rate and total fees when evaluating options. For personalised guidance,
              consider consulting with a{" "}
              <ExternalLink href={authoritativeLinks.fca.register.url}>
                FCA-registered mortgage broker
              </ExternalLink>{" "}
              who can access exclusive deals and handle the remortgage process for you.
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
    </>
  );
}
