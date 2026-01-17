import { Metadata } from "next";
import Link from "next/link";
import { SchemaMarkup, ExternalLink, authoritativeLinks } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Tracker Mortgage UK 2026 | Rates & Guide | Mortgage Calculator Quest",
  description: "Complete guide to tracker mortgages in the UK. Understand how they follow the Bank of England base rate, compare with fixed rates, and learn the pros and cons.",
  keywords: "tracker mortgage, tracker rate mortgage, base rate tracker, variable rate mortgage, tracker vs fixed",
  openGraph: {
    title: "Tracker Mortgage UK 2026 | Complete Guide",
    description: "Everything you need to know about tracker mortgages. How they follow the base rate, when they're beneficial, and the risks involved.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is a tracker mortgage?",
    answer: "A tracker mortgage has an interest rate that follows (tracks) the Bank of England base rate at a set margin above or below. For example, 'base rate + 0.5%' means your rate is always 0.5% above the current base rate. When the base rate changes, your rate changes too, usually within a month.",
  },
  {
    question: "How is a tracker different from a variable rate mortgage?",
    answer: "A tracker directly follows the Bank of England base rate by a fixed margin. A Standard Variable Rate (SVR) is set by your lender and can change at any time regardless of the base rate. Trackers are more predictable because you know exactly how rate changes will affect you.",
  },
  {
    question: "What happens if the base rate goes negative?",
    answer: "Most tracker mortgages have a 'collar' or floor that prevents your rate from falling below a certain level (often 0%). Check your mortgage terms - some trackers without a collar could theoretically have very low rates if the base rate turned negative, though this is rare.",
  },
  {
    question: "Can I switch from a tracker to a fixed rate?",
    answer: "Yes, usually by remortgaging either with your current lender (product transfer) or a new lender. Check if your tracker has Early Repayment Charges - many trackers have no ERCs or only apply them for the first 2-3 years, making switching easier.",
  },
  {
    question: "Are tracker mortgages good for first-time buyers?",
    answer: "Trackers can work for first-time buyers who are comfortable with payment uncertainty and have financial headroom for rate increases. However, most FTBs prefer fixed rates for the certainty when settling into homeownership. Consider your risk tolerance carefully.",
  },
  {
    question: "What's a lifetime tracker mortgage?",
    answer: "A lifetime tracker runs for the entire mortgage term without reverting to the SVR. These are rare but offer the benefit of never needing to remortgage. However, you're exposed to rate changes throughout, which could be decades of uncertainty.",
  },
];

export default function TrackerMortgagePage() {
  return (
    <>
      <SchemaMarkup
        type="guide"
        title="Tracker Mortgage UK"
        description="Complete guide to tracker mortgages in the UK. Understand how they follow the Bank of England base rate and whether they're right for you."
        url="/mortgage-types/tracker-mortgage"
        breadcrumbs={[
          { name: "Mortgage Types", href: "/mortgage-types" },
          { name: "Tracker Mortgage", href: "/mortgage-types/tracker-mortgage" },
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
                <Link href="/mortgage-types" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                  Mortgage Types
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600 dark:text-gray-300">Tracker Mortgage</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Tracker Mortgage UK - Your Complete Guide
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A <strong>tracker mortgage</strong> is a type of variable rate mortgage where your interest
              rate directly follows the{" "}
              <ExternalLink href={authoritativeLinks.bankOfEngland.baseRate.url}>
                Bank of England base rate
              </ExternalLink>. When the base rate changes, your mortgage rate changes too - usually by
              the same amount. This means your payments can go up or down over time, unlike a{" "}
              <Link href="/mortgage-types/fixed-rate-mortgage" className="text-blue-600 hover:underline">
                fixed rate mortgage
              </Link>{" "}
              where payments stay the same.
            </p>
          </header>

          {/* Anchor Links */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 shadow-sm">
            <span className="text-gray-600 dark:text-gray-400 font-medium">Jump to: </span>
            <a href="#how-it-works" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">How It Works</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#current-rates" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Current Rates</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#tracker-vs-fixed" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Tracker vs Fixed</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#pros-cons" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Pros &amp; Cons</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#faqs" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">FAQs</a>
          </div>

          {/* Key Info Box */}
          <section className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-4">
              Tracker Mortgages at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">4.5%</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Current base rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">+0.5-1.5%</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Typical margin</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">2-5</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Years typical term</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">Low/None</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Early exit fees</p>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              How Does a Tracker Mortgage Work?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                A tracker mortgage is linked directly to the Bank of England base rate by a fixed margin.
                Your rate is typically expressed as &quot;base rate + X%&quot;. When the Monetary Policy Committee
                meets (usually 8 times per year) and changes the base rate, your mortgage rate changes
                accordingly.
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg my-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
                  Example: Base Rate + 0.75%
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="text-left p-3">Base Rate</th>
                        <th className="text-left p-3">Your Rate</th>
                        <th className="text-right p-3">Monthly Payment (£250K)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-200 dark:border-gray-600">
                        <td className="p-3">4.00%</td>
                        <td className="p-3">4.75%</td>
                        <td className="text-right p-3">£1,423</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-600 bg-amber-50 dark:bg-amber-900/20">
                        <td className="p-3 font-medium">4.50%</td>
                        <td className="p-3 font-medium">5.25%</td>
                        <td className="text-right p-3 font-medium">£1,496</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-600">
                        <td className="p-3">5.00%</td>
                        <td className="p-3">5.75%</td>
                        <td className="text-right p-3">£1,571</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-600">
                        <td className="p-3">3.50%</td>
                        <td className="p-3">4.25%</td>
                        <td className="text-right p-3">£1,352</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                  Based on a £250,000 mortgage over 25 years. Use our{" "}
                  <Link href="/" className="text-blue-600 hover:underline">mortgage calculator</Link>{" "}
                  to see payments at different rates.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                When Rate Changes Take Effect
              </h3>
              <p>
                Most trackers update your rate within 1 month of a base rate change, though the exact
                timing varies by lender. Your monthly payment will then be recalculated based on the new
                rate. Some lenders apply changes from the following month&apos;s payment, others may take
                longer.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 my-6">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Understanding Collars and Caps
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  <strong>Collar:</strong> A minimum rate your mortgage can&apos;t fall below, even if the
                  base rate drops further. Example: a 2% collar means you&apos;ll never pay less than 2%
                  even if the base rate hits zero.
                </p>
                <p className="text-blue-700 dark:text-blue-300 text-sm mt-2">
                  <strong>Cap:</strong> A maximum rate your mortgage can&apos;t exceed, even if the base
                  rate rises dramatically. Caps are rare but offer protection against extreme rate rises.
                </p>
              </div>
            </div>
          </section>

          {/* Current Rates Section */}
          <section id="current-rates" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Current Tracker Mortgage Rates
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                With the Bank of England base rate currently at 4.50%, tracker mortgages are priced at
                a margin above this. The exact margin depends on your deposit size, credit history, and
                the tracker term.
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg my-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
                  Indicative Tracker Rates (January 2026)
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Current base rate: <strong>4.50%</strong>
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="text-left p-3">LTV</th>
                        <th className="text-left p-3">Margin</th>
                        <th className="text-right p-3">Your Rate</th>
                        <th className="text-right p-3">2-Yr Fixed (comparison)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-200 dark:border-gray-600">
                        <td className="p-3 font-medium">60% LTV</td>
                        <td className="p-3">Base + 0.49%</td>
                        <td className="text-right p-3 text-amber-600 font-medium">4.99%</td>
                        <td className="text-right p-3 text-gray-500">4.20%</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                        <td className="p-3 font-medium">75% LTV</td>
                        <td className="p-3">Base + 0.74%</td>
                        <td className="text-right p-3 text-amber-600 font-medium">5.24%</td>
                        <td className="text-right p-3 text-gray-500">4.50%</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-600">
                        <td className="p-3 font-medium">90% LTV</td>
                        <td className="p-3">Base + 1.24%</td>
                        <td className="text-right p-3 text-amber-600 font-medium">5.74%</td>
                        <td className="text-right p-3 text-gray-500">5.00%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  Note: Trackers are currently higher than fixed rates. Visit our{" "}
                  <Link href="/mortgage-rates" className="text-blue-600 hover:underline">
                    mortgage rates page
                  </Link>{" "}
                  for the latest comparison.
                </p>
              </div>
            </div>
          </section>

          {/* Tracker vs Fixed Section */}
          <section id="tracker-vs-fixed" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Tracker vs Fixed Rate Mortgage
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The choice between a tracker and a{" "}
                <Link href="/mortgage-types/fixed-rate-mortgage" className="text-blue-600 hover:underline">
                  fixed rate mortgage
                </Link>{" "}
                depends on your financial situation, risk tolerance, and view on future interest rates.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="text-left p-4 border-b border-gray-200 dark:border-gray-600">Feature</th>
                      <th className="text-left p-4 border-b border-gray-200 dark:border-gray-600">Tracker</th>
                      <th className="text-left p-4 border-b border-gray-200 dark:border-gray-600">Fixed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 font-medium">Payment Certainty</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 text-amber-600">Varies with base rate</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 text-emerald-600">Same every month</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 font-medium">If Rates Fall</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 text-emerald-600">Your rate drops</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 text-amber-600">Stuck at fixed rate</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 font-medium">If Rates Rise</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 text-amber-600">Your rate increases</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 text-emerald-600">Protected</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 font-medium">Early Exit Fees</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 text-emerald-600">Often none/low</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 text-amber-600">1-5% typically</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Transparency</td>
                      <td className="p-4 text-emerald-600">Know exactly what affects rate</td>
                      <td className="p-4 text-gray-600">Fixed regardless of market</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800 my-6">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
                  Current Market Context
                </h3>
                <p className="text-purple-700 dark:text-purple-300">
                  In early 2026, tracker rates are typically higher than fixed rates because markets
                  expect the base rate to fall. Trackers may become more attractive if and when rates
                  decrease, as you&apos;d benefit from the reductions. However, you&apos;re taking on uncertainty
                  that fixed rate holders avoid.
                </p>
              </div>
            </div>
          </section>

          {/* Pros and Cons */}
          <section id="pros-cons" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Tracker Mortgage Pros and Cons
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6">
                <h3 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-4 text-lg">
                  Advantages
                </h3>
                <ul className="space-y-3 text-emerald-700 dark:text-emerald-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">&#10003;</span>
                    <div>
                      <strong>Benefit from Rate Cuts</strong>
                      <p className="text-sm">When the base rate falls, your payments automatically reduce</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">&#10003;</span>
                    <div>
                      <strong>Transparency</strong>
                      <p className="text-sm">You know exactly what determines your rate - it&apos;s linked to the published base rate</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">&#10003;</span>
                    <div>
                      <strong>Flexibility</strong>
                      <p className="text-sm">Often have no or low early repayment charges, making it easier to remortgage</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">&#10003;</span>
                    <div>
                      <strong>Fair Pricing</strong>
                      <p className="text-sm">Your rate moves with the market rather than being artificially set by the lender</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-6">
                <h3 className="font-semibold text-rose-800 dark:text-rose-200 mb-4 text-lg">
                  Disadvantages
                </h3>
                <ul className="space-y-3 text-rose-700 dark:text-rose-300">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">&#10007;</span>
                    <div>
                      <strong>Payment Uncertainty</strong>
                      <p className="text-sm">Monthly payments can increase significantly if the base rate rises</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">&#10007;</span>
                    <div>
                      <strong>Budgeting Difficulty</strong>
                      <p className="text-sm">Hard to plan long-term finances when payments may change</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">&#10007;</span>
                    <div>
                      <strong>Collar Limitations</strong>
                      <p className="text-sm">Many trackers have floors that prevent you benefiting fully from rate cuts</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">&#10007;</span>
                    <div>
                      <strong>Currently Higher Rates</strong>
                      <p className="text-sm">Often more expensive than fixed rates in the current market</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* When to Choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              When Should You Choose a Tracker Mortgage?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                A tracker mortgage might be right for you if:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                {[
                  {
                    title: "You Expect Rates to Fall",
                    content: "If you believe the base rate will decrease, a tracker lets you benefit from lower payments automatically.",
                  },
                  {
                    title: "You Have Financial Headroom",
                    content: "You can comfortably afford payments even if the rate rises by 2-3%, giving you a buffer against increases.",
                  },
                  {
                    title: "You Want Flexibility",
                    content: "Planning to move or remortgage soon? Trackers often have no ERCs, making exit easier and cheaper.",
                  },
                  {
                    title: "You Value Transparency",
                    content: "You prefer knowing exactly what determines your rate rather than being subject to lender discretion.",
                  },
                  {
                    title: "Short-Term Planning",
                    content: "You only need a mortgage for a few years and want flexibility without penalty fees.",
                  },
                  {
                    title: "You&apos;re Risk-Tolerant",
                    content: "You're comfortable with payment fluctuations and prefer potential savings over certainty.",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.content}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800 my-6">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3">
                  When to Avoid Trackers
                </h3>
                <ul className="space-y-2 text-red-700 dark:text-red-300 text-sm">
                  <li>&#10007; Your budget is tight and you couldn&apos;t handle payment increases</li>
                  <li>&#10007; You value peace of mind and predictable monthly costs</li>
                  <li>&#10007; You think interest rates will rise significantly</li>
                  <li>&#10007; You&apos;re a first-time buyer settling into homeownership</li>
                  <li>&#10007; Fixed rates are significantly cheaper (as they often are now)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section id="faqs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Tracker Mortgage FAQs
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
              Related Mortgage Tools & Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Mortgage Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Calculate payments at different tracker rates</p>
              </Link>
              <Link
                href="/mortgage-types/fixed-rate-mortgage"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Fixed Rate Mortgages</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Compare with fixed rate options</p>
              </Link>
              <Link
                href="/mortgage-rates"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Current Mortgage Rates</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">See today&apos;s tracker and fixed rates</p>
              </Link>
              <Link
                href="/calculators/remortgage-calculator"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Remortgage Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Switch from tracker to fixed or vice versa</p>
              </Link>
            </div>
          </section>

          {/* Summary */}
          <section className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Summary</h2>
            <p className="text-gray-600 dark:text-gray-300">
              A <strong>tracker mortgage</strong> directly follows the{" "}
              <ExternalLink href={authoritativeLinks.bankOfEngland.baseRate.url}>
                Bank of England base rate
              </ExternalLink>, meaning your payments rise and fall with interest rate decisions. While this
              offers transparency and flexibility (often with no early repayment charges), it also brings
              uncertainty about future payments. Currently, fixed rates are often cheaper than trackers, so
              trackers mainly appeal to those who expect rates to fall or want easy exit options. Use our{" "}
              <Link href="/" className="text-blue-600 hover:underline">mortgage calculator</Link>{" "}
              to model different rate scenarios, and compare options on our{" "}
              <Link href="/mortgage-rates" className="text-blue-600 hover:underline">mortgage rates page</Link>.
              Consider speaking to an{" "}
              <ExternalLink href={authoritativeLinks.fca.register.url}>
                FCA-registered mortgage broker
              </ExternalLink>{" "}
              to help decide whether a tracker is right for your circumstances.
            </p>
          </section>

          {/* Footer */}
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
    </>
  );
}
