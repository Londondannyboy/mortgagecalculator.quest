import { Metadata } from "next";
import Link from "next/link";
import { SchemaMarkup, ExternalLink, authoritativeLinks } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Fixed Rate Mortgage UK 2025 | Rates & Guide | Mortgage Calculator Quest",
  description: "Complete guide to fixed rate mortgages in the UK. Compare 2-year and 5-year fixes, understand the pros and cons, and find out if fixing your mortgage rate is right for you.",
  keywords: "fixed rate mortgage, fixed mortgage, 2 year fixed, 5 year fixed, fixed rate mortgage UK",
  openGraph: {
    title: "Fixed Rate Mortgage UK 2025 | Complete Guide",
    description: "Everything you need to know about fixed rate mortgages. Compare deals, understand early repayment charges, and decide if fixing is right for you.",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is a fixed rate mortgage?",
    answer: "A fixed rate mortgage locks your interest rate for a set period (typically 2, 3, 5, or 10 years). Your monthly payments stay the same regardless of Bank of England base rate changes, providing budgeting certainty. When the fixed period ends, you'll move to your lender's Standard Variable Rate unless you remortgage.",
  },
  {
    question: "Should I choose a 2-year or 5-year fixed rate?",
    answer: "It depends on your circumstances. 2-year fixes offer lower rates and more flexibility but mean remortgaging sooner. 5-year fixes provide longer stability and protection from rate rises but may cost more if rates fall. Consider your plans, risk tolerance, and the current rate environment.",
  },
  {
    question: "What happens at the end of a fixed rate mortgage?",
    answer: "When your fixed period ends, you'll automatically move to your lender's Standard Variable Rate (SVR), which is typically 2-4% higher. Most borrowers remortgage before this happens to secure a new fixed deal. Start looking 3-6 months before your fix ends.",
  },
  {
    question: "Can I pay off my fixed rate mortgage early?",
    answer: "Yes, but you'll usually face Early Repayment Charges (ERCs), typically 1-5% of the amount repaid. Some mortgages allow overpayments up to 10% per year without penalty. Check your mortgage terms before making large payments.",
  },
  {
    question: "Are fixed rates higher than variable rates?",
    answer: "Fixed rates are often slightly higher than initial tracker or discount rates because you're paying for certainty. However, they protect you from rate increases. Currently, 5-year fixes can be cheaper than 2-year fixes as lenders expect rates to fall.",
  },
  {
    question: "Can I move house with a fixed rate mortgage?",
    answer: "Most fixed rate mortgages are 'portable', meaning you can transfer them to a new property. However, you'll need to pass affordability checks and the new property must meet lending criteria. If you need to borrow more, the additional amount may be at a different rate.",
  },
];

export default function FixedRateMortgagePage() {
  return (
    <>
      <SchemaMarkup
        type="guide"
        title="Fixed Rate Mortgage UK"
        description="Complete guide to fixed rate mortgages in the UK. Compare deals, understand how they work, and decide if fixing is right for you."
        url="/mortgage-types/fixed-rate-mortgage"
        breadcrumbs={[
          { name: "Mortgage Types", href: "/mortgage-types" },
          { name: "Fixed Rate Mortgage", href: "/mortgage-types/fixed-rate-mortgage" },
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
              <li className="text-gray-600 dark:text-gray-300">Fixed Rate Mortgage</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Fixed Rate Mortgage UK - Your Complete Guide
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A <strong>fixed rate mortgage</strong> is the most popular mortgage type in the UK, offering
              the certainty of knowing exactly what your payments will be each month. According to{" "}
              <ExternalLink href={authoritativeLinks.bankOfEngland.mortgages.url}>
                Bank of England data
              </ExternalLink>, around 80% of new mortgages are fixed rate products. Whether you&apos;re a{" "}
              <Link href="/mortgage-types/first-time-buyer-mortgage" className="text-blue-600 hover:underline">
                first-time buyer
              </Link>{" "}
              or looking to{" "}
              <Link href="/calculators/remortgage-calculator" className="text-blue-600 hover:underline">
                remortgage
              </Link>, understanding how fixed rates work is essential for making the right choice.
            </p>
          </header>

          {/* Anchor Links */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 shadow-sm">
            <span className="text-gray-600 dark:text-gray-400 font-medium">Jump to: </span>
            <a href="#how-it-works" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">How It Works</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#current-rates" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Current Rates</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#2-vs-5-year" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">2 vs 5 Year</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#pros-cons" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Pros &amp; Cons</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#faqs" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">FAQs</a>
          </div>

          {/* Key Info Box */}
          <section className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">
              Fixed Rate Mortgages at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">80%</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">of new mortgages</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">2-10</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Years fixed terms</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4.0-5.5%</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Current rate range</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">1-5%</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Early exit charges</p>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              How Does a Fixed Rate Mortgage Work?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                A fixed rate mortgage locks in your interest rate for a set period, regardless of what
                happens to the{" "}
                <ExternalLink href={authoritativeLinks.bankOfEngland.baseRate.url}>
                  Bank of England base rate
                </ExternalLink>. This means your monthly payments stay exactly the same throughout the
                fixed period, making budgeting straightforward.
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg my-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
                  Example: How Your Payments Stay Fixed
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Your Fixed Rate</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">4.5%</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Monthly Payment (£250K loan)</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">£1,389</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                  If the base rate rises from 4.5% to 5.5%, your payment stays at £1,389. If it falls to
                  3.5%, you still pay £1,389. That&apos;s the trade-off for certainty.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Use our{" "}
                  <Link href="/" className="text-blue-600 hover:underline">mortgage calculator</Link>{" "}
                  to see what your payments would be.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                The Fixed Rate Timeline
              </h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Application:</strong> You apply for a fixed rate mortgage and lock in a rate
                  (often valid for 3-6 months until completion).
                </li>
                <li>
                  <strong>Fixed Period:</strong> Your rate and payments stay the same for 2, 3, 5, or 10
                  years regardless of market changes.
                </li>
                <li>
                  <strong>End of Fix:</strong> 3-6 months before your fix ends, start looking for a new
                  deal to avoid the SVR.
                </li>
                <li>
                  <strong>Remortgage or SVR:</strong> Either switch to a new fixed deal or move to your
                  lender&apos;s Standard Variable Rate.
                </li>
              </ol>
            </div>
          </section>

          {/* Current Rates Section */}
          <section id="current-rates" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Current Fixed Rate Mortgage Rates
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Fixed mortgage rates are influenced by SWAP rates (interbank lending rates) rather than
                directly by the Bank of England base rate. This is why fixed rates sometimes move
                independently of base rate decisions.
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg my-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
                  Indicative Fixed Rates (January 2025)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="text-left p-3">LTV</th>
                        <th className="text-right p-3">2-Year Fix</th>
                        <th className="text-right p-3">5-Year Fix</th>
                        <th className="text-right p-3">10-Year Fix</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-200 dark:border-gray-600">
                        <td className="p-3 font-medium">60% LTV</td>
                        <td className="text-right p-3">4.2%</td>
                        <td className="text-right p-3">4.0%</td>
                        <td className="text-right p-3">4.4%</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                        <td className="p-3 font-medium">75% LTV</td>
                        <td className="text-right p-3">4.5%</td>
                        <td className="text-right p-3">4.3%</td>
                        <td className="text-right p-3">4.6%</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-600">
                        <td className="p-3 font-medium">90% LTV</td>
                        <td className="text-right p-3">5.0%</td>
                        <td className="text-right p-3">4.8%</td>
                        <td className="text-right p-3">5.1%</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                        <td className="p-3 font-medium">95% LTV</td>
                        <td className="text-right p-3">5.5%</td>
                        <td className="text-right p-3">5.3%</td>
                        <td className="text-right p-3">N/A</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  Rates are indicative and change frequently. Visit our{" "}
                  <Link href="/mortgage-rates" className="text-blue-600 hover:underline">
                    mortgage rates page
                  </Link>{" "}
                  for the latest information.
                </p>
              </div>
            </div>
          </section>

          {/* 2 vs 5 Year Section */}
          <section id="2-vs-5-year" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              2-Year vs 5-Year Fixed Rate Mortgage
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Choosing between a 2-year and 5-year fix is one of the most common mortgage decisions.
                Each has advantages depending on your circumstances and view on future interest rates.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
                  <h3 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
                    2-Year Fixed Rate
                  </h3>
                  <ul className="space-y-2 text-emerald-700 dark:text-emerald-300 text-sm">
                    <li>✓ Can access new deals sooner if rates fall</li>
                    <li>✓ Lower early repayment charges (typically 1-2%)</li>
                    <li>✓ Good if you might move house soon</li>
                    <li>✓ More flexibility overall</li>
                    <li>✗ Remortgage costs every 2 years</li>
                    <li>✗ Risk of rate rises at renewal</li>
                    <li>✗ Often slightly higher rate than 5-year</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">
                    5-Year Fixed Rate
                  </h3>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-300 text-sm">
                    <li>✓ Long-term payment certainty</li>
                    <li>✓ Protection from rate rises for 5 years</li>
                    <li>✓ Often cheaper than 2-year currently</li>
                    <li>✓ Less frequent remortgage hassle</li>
                    <li>✗ Stuck if rates fall significantly</li>
                    <li>✗ Higher ERCs (typically 3-5%)</li>
                    <li>✗ Less flexibility if circumstances change</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800 my-6">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">
                  Current Market Observation
                </h3>
                <p className="text-amber-700 dark:text-amber-300">
                  In early 2025, 5-year fixed rates are often cheaper than 2-year rates. This &quot;inverted&quot;
                  pricing reflects market expectations that interest rates will fall over the next few
                  years. When markets expect falling rates, longer fixes are priced more competitively.
                </p>
              </div>
            </div>
          </section>

          {/* Pros and Cons */}
          <section id="pros-cons" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Fixed Rate Mortgage Pros and Cons
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6">
                <h3 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-4 text-lg">
                  Advantages
                </h3>
                <ul className="space-y-3 text-emerald-700 dark:text-emerald-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <div>
                      <strong>Budget Certainty</strong>
                      <p className="text-sm">Know exactly what you&apos;ll pay each month, making household budgeting easier</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <div>
                      <strong>Protection from Rate Rises</strong>
                      <p className="text-sm">Payments stay the same even if the base rate increases significantly</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <div>
                      <strong>Peace of Mind</strong>
                      <p className="text-sm">No need to worry about economic news or interest rate decisions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <div>
                      <strong>Wide Availability</strong>
                      <p className="text-sm">Most lenders offer fixed rates, giving you plenty of choice</p>
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
                    <span className="text-rose-500 mt-1">✗</span>
                    <div>
                      <strong>Miss Out if Rates Fall</strong>
                      <p className="text-sm">Your rate stays the same even if market rates drop significantly</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">✗</span>
                    <div>
                      <strong>Early Repayment Charges</strong>
                      <p className="text-sm">Leaving early can cost 1-5% of your loan - potentially thousands of pounds</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">✗</span>
                    <div>
                      <strong>Less Flexibility</strong>
                      <p className="text-sm">Limited ability to make large overpayments or switch products</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">✗</span>
                    <div>
                      <strong>Can Be Higher Initial Rate</strong>
                      <p className="text-sm">Often higher starting rate than tracker or discount mortgages</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* When to Choose Fixed */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              When Should You Choose a Fixed Rate?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                A fixed rate mortgage is typically the right choice if:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                {[
                  {
                    title: "You Value Certainty",
                    content: "If knowing exactly what you'll pay each month is important for your peace of mind and budgeting.",
                  },
                  {
                    title: "Your Budget is Tight",
                    content: "If a rate rise would stretch your finances, fixing protects you from payment increases.",
                  },
                  {
                    title: "You Expect Rates to Rise",
                    content: "If you believe interest rates will increase, locking in now protects you from future rises.",
                  },
                  {
                    title: "You're a First-Time Buyer",
                    content: "Starting with certainty helps you adjust to mortgage payments without surprises.",
                  },
                  {
                    title: "You're Planning Ahead",
                    content: "If you're having a baby, changing jobs, or facing other changes, stable payments help planning.",
                  },
                  {
                    title: "You Can't Afford Increases",
                    content: "If even a 1-2% rate rise would cause financial difficulty, fixing eliminates that risk.",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.content}</p>
                  </div>
                ))}
              </div>

              <p>
                Consider a{" "}
                <Link href="/mortgage-types/tracker-mortgage" className="text-blue-600 hover:underline">
                  tracker mortgage
                </Link>{" "}
                instead if you have financial flexibility and expect rates to fall.
              </p>
            </div>
          </section>

          {/* FAQs Section */}
          <section id="faqs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Fixed Rate Mortgage FAQs
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
                <p className="text-sm text-gray-600 dark:text-gray-300">Calculate payments at different fixed rates</p>
              </Link>
              <Link
                href="/calculators/remortgage-calculator"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Remortgage Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Compare your current fix with new deals</p>
              </Link>
              <Link
                href="/mortgage-rates"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Current Mortgage Rates</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Compare today&apos;s best fixed rates</p>
              </Link>
              <Link
                href="/mortgage-types/tracker-mortgage"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Tracker Mortgages</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Compare fixed vs tracker options</p>
              </Link>
            </div>
          </section>

          {/* Summary */}
          <section className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Summary</h2>
            <p className="text-gray-600 dark:text-gray-300">
              A <strong>fixed rate mortgage</strong> offers the certainty of knowing exactly what your
              payments will be throughout the fixed period. With around 80% of UK borrowers choosing
              fixed rates, it&apos;s the most popular mortgage type for good reason. Whether you opt for
              a 2-year or 5-year fix depends on your circumstances, plans, and view on future interest
              rates. Use our{" "}
              <Link href="/" className="text-blue-600 hover:underline">mortgage calculator</Link>{" "}
              to see what your payments would be, and start comparing deals on our{" "}
              <Link href="/mortgage-rates" className="text-blue-600 hover:underline">mortgage rates page</Link>.
              Consider consulting an{" "}
              <ExternalLink href={authoritativeLinks.fca.register.url}>
                FCA-registered mortgage broker
              </ExternalLink>{" "}
              for personalised advice on the best fixed rate for your situation.
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
