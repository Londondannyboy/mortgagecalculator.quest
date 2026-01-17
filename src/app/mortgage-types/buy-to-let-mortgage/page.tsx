import { Metadata } from "next";
import Link from "next/link";
import { SchemaMarkup, ExternalLink, authoritativeLinks } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Buy to Let Mortgage UK 2025 | Complete Landlord Guide | Mortgage Calculator Quest",
  description: "Complete guide to buy to let mortgages in the UK. Learn about BTL rates, deposit requirements, rental income calculations, tax implications, and landlord responsibilities.",
  keywords: "buy to let mortgage, btl mortgage, landlord mortgage, rental property mortgage, investment property mortgage UK",
  openGraph: {
    title: "Buy to Let Mortgage UK 2025 | Complete Landlord Guide",
    description: "Everything landlords need to know about buy to let mortgages. Rates, deposits, rental calculations, and tax advice.",
    type: "website",
  },
};

const faqs = [
  {
    question: "How much deposit do I need for a buy to let mortgage?",
    answer: "Most BTL lenders require a minimum 25% deposit, though some accept 20% for experienced landlords. A larger deposit (40%+) will unlock the best interest rates and could improve your chances of approval if the rental income is borderline.",
  },
  {
    question: "How is buy to let rental income assessed?",
    answer: "Lenders use an Interest Coverage Ratio (ICR), typically requiring rental income to be 125-145% of the monthly mortgage payment at a stress-tested rate (usually around 5.5%). For example, if your mortgage payment is £1,000/month, rent must be £1,250-£1,450/month.",
  },
  {
    question: "Can I get a buy to let mortgage with bad credit?",
    answer: "It's more difficult but possible through specialist lenders. You'll likely need a larger deposit (30-40%), higher interest rates, and may need to provide additional evidence of rental income potential. Some lenders are more flexible with minor credit issues.",
  },
  {
    question: "Do I need to be a homeowner to get a buy to let mortgage?",
    answer: "Most mainstream lenders require you to own your own home (whether outright or with a mortgage). However, some specialist lenders offer 'first-time landlord' products for those who rent their own home but want to invest in property.",
  },
  {
    question: "What are the tax implications of buy to let?",
    answer: "Rental income is subject to income tax at your marginal rate. Mortgage interest relief is now capped at 20% as a tax credit, not a deduction. You'll also pay Capital Gains Tax when selling (28% for higher-rate taxpayers). Consider consulting a tax adviser.",
  },
  {
    question: "Can I live in my buy to let property?",
    answer: "No, BTL mortgages require the property to be let to tenants. Living in the property yourself would breach your mortgage terms. If you want flexibility, consider a 'let to buy' arrangement where you rent out your current home instead.",
  },
  {
    question: "What's the difference between interest-only and repayment BTL mortgages?",
    answer: "Interest-only means you only pay interest each month, keeping payments low but the loan balance unchanged. You'll need a repayment plan for the capital (often property sale). Repayment mortgages pay off the full loan but have higher monthly costs.",
  },
  {
    question: "Can I use a limited company for buy to let?",
    answer: "Yes, and it's increasingly popular for tax efficiency. Company ownership means you pay corporation tax (currently 25%) rather than personal income tax on profits. However, mortgage rates are slightly higher for SPV (Special Purpose Vehicle) companies.",
  },
];

export default function BuyToLetMortgagePage() {
  return (
    <>
      <SchemaMarkup
        type="guide"
        title="Buy to Let Mortgage UK"
        description="Complete guide to buy to let mortgages in the UK. Learn about BTL rates, deposits, rental calculations, and landlord responsibilities."
        url="/mortgage-types/buy-to-let-mortgage"
        breadcrumbs={[
          { name: "Mortgage Types", href: "/mortgage-types" },
          { name: "Buy to Let Mortgage", href: "/mortgage-types/buy-to-let-mortgage" },
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
              <li className="text-gray-600 dark:text-gray-300">Buy to Let Mortgage</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Buy to Let Mortgage UK - The Complete Landlord Guide
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A <strong>buy to let mortgage</strong> (BTL) is designed for purchasing property to rent out to
              tenants. As a landlord in the UK, you&apos;ll face different criteria, rates, and tax implications
              compared to residential mortgages. According to the{" "}
              <ExternalLink href={authoritativeLinks.bankOfEngland.mortgages.url}>
                Bank of England
              </ExternalLink>, buy to let lending represents a significant portion of the UK mortgage market.
              Use our{" "}
              <Link href="/calculators/buy-to-let-mortgage-calculator" className="text-blue-600 hover:underline">
                BTL mortgage calculator
              </Link>{" "}
              to assess your potential investment.
            </p>
          </header>

          {/* Anchor Links */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 shadow-sm">
            <span className="text-gray-600 dark:text-gray-400 font-medium">Jump to: </span>
            <a href="#requirements" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Requirements</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#rates" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Rates</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#rental-calculation" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Rental Calculation</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#tax" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Tax</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#limited-company" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Limited Company</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#faqs" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">FAQs</a>
          </div>

          {/* Key Stats Box */}
          <section className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">
              Buy to Let Mortgage at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">25%</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Minimum deposit</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">125-145%</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Rental coverage required</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">5-6%</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Typical BTL rates</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">3%</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Additional stamp duty</p>
              </div>
            </div>
          </section>

          {/* BTL vs Residential */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Buy to Let vs Residential Mortgages
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Understanding the key differences between buy to let and residential mortgages is essential
                before investing in rental property. BTL mortgages have distinct criteria that reflect the
                additional risks lenders face with investment properties.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="text-left p-4 border-b border-gray-200 dark:border-gray-600">Feature</th>
                      <th className="text-left p-4 border-b border-gray-200 dark:border-gray-600">Buy to Let</th>
                      <th className="text-left p-4 border-b border-gray-200 dark:border-gray-600">Residential</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 font-medium">Minimum Deposit</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600">25% (some 20%)</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600">5-10%</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 font-medium">Income Assessment</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600">Based on rental income</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600">Based on personal income</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 font-medium">Interest Rates</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600">Typically 0.5-1% higher</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600">Lower rates available</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600 font-medium">Stamp Duty</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600">+3% surcharge</td>
                      <td className="p-4 border-b border-gray-200 dark:border-gray-600">Standard rates</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Repayment Type</td>
                      <td className="p-4">Interest-only common</td>
                      <td className="p-4">Repayment standard</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Requirements Section */}
          <section id="requirements" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Buy to Let Mortgage Requirements
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Qualifying for a buy to let mortgage involves meeting several criteria. Lenders assess both
                you as a borrower and the property&apos;s rental potential. The{" "}
                <ExternalLink href={authoritativeLinks.fca.mortgages.url}>
                  Financial Conduct Authority
                </ExternalLink>{" "}
                regulates some BTL mortgages, particularly those for accidental landlords.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                Personal Requirements
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Age:</strong> Most lenders require you to be at least 21-25 years old, with maximum
                  ages of 70-85 at the end of the mortgage term.
                </li>
                <li>
                  <strong>Income:</strong> A minimum personal income of £25,000-£30,000 per year is often
                  required, regardless of rental income potential.
                </li>
                <li>
                  <strong>Property ownership:</strong> Most mainstream lenders require you to already own
                  your own home (either outright or mortgaged).
                </li>
                <li>
                  <strong>Credit history:</strong> A good credit score is essential. Previous defaults,
                  CCJs, or bankruptcies will limit your options.
                </li>
                <li>
                  <strong>Experience:</strong> Some products are only available to experienced landlords
                  with existing portfolios.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                Property Requirements
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Minimum value:</strong> Typically £50,000-£75,000, as lower values make lending
                  less viable.
                </li>
                <li>
                  <strong>Property type:</strong> Standard construction (brick/stone) preferred. Non-standard
                  construction may need specialist lenders.
                </li>
                <li>
                  <strong>HMO considerations:</strong> Houses in Multiple Occupation require specific BTL
                  products and often larger deposits.
                </li>
                <li>
                  <strong>Condition:</strong> Must be immediately habitable. Properties needing major works
                  may require bridging finance first.
                </li>
              </ul>
            </div>
          </section>

          {/* Rates Section */}
          <section id="rates" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Current Buy to Let Mortgage Rates
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Buy to let mortgage rates are typically 0.5-1% higher than equivalent residential rates,
                reflecting the additional risk to lenders. According to{" "}
                <ExternalLink href={authoritativeLinks.bankOfEngland.baseRate.url}>
                  Bank of England data
                </ExternalLink>, BTL rates have followed the base rate upward in recent years.
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg my-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
                  Indicative BTL Rates (January 2025)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">2-Year Fixed (75% LTV)</p>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">5.0-5.5%</p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">5-Year Fixed (75% LTV)</p>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">4.8-5.3%</p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">2-Year Fixed (60% LTV)</p>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">4.5-5.0%</p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">5-Year Fixed (60% LTV)</p>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">4.3-4.8%</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  Rates are indicative and subject to change. Check our{" "}
                  <Link href="/mortgage-rates" className="text-blue-600 hover:underline">
                    current mortgage rates
                  </Link>{" "}
                  page for the latest information.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                Factors Affecting Your BTL Rate
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Loan-to-value:</strong> Lower LTV (higher deposit) means better rates. The jump
                  from 75% to 60% LTV can save 0.3-0.5%.
                </li>
                <li>
                  <strong>Product type:</strong> Fixed rates offer certainty; tracker rates may be lower
                  initially but carry risk.
                </li>
                <li>
                  <strong>Portfolio size:</strong> Landlords with 4+ mortgaged properties face stricter
                  criteria and may pay slightly higher rates.
                </li>
                <li>
                  <strong>Personal vs Limited Company:</strong> SPV (limited company) rates are typically
                  0.25-0.5% higher.
                </li>
              </ul>
            </div>
          </section>

          {/* Rental Calculation Section */}
          <section id="rental-calculation" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Rental Income Requirements (ICR)
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Lenders use the Interest Coverage Ratio (ICR) to ensure the rental income sufficiently
                covers the mortgage payments. This is the most critical factor in BTL affordability.
              </p>

              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800 my-6">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">
                  How ICR Works
                </h3>
                <p className="text-amber-700 dark:text-amber-300 mb-4">
                  Most lenders require rental income to be 125-145% of the monthly mortgage payment,
                  calculated at a stress-tested rate (typically 5.5% even if your actual rate is lower).
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <p className="text-sm font-mono text-gray-600 dark:text-gray-300">
                    <strong>Example:</strong><br />
                    Mortgage: £200,000 at 5.5% stress rate<br />
                    Monthly interest: £917<br />
                    Required rent at 145% ICR: £1,330/month<br />
                    Required rent at 125% ICR: £1,146/month
                  </p>
                </div>
              </div>

              <p>
                Use our{" "}
                <Link href="/calculators/buy-to-let-mortgage-calculator" className="text-blue-600 hover:underline">
                  buy to let calculator
                </Link>{" "}
                to see exactly what rental income you&apos;ll need for your target property price.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                What If Rental Income Falls Short?
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Larger deposit:</strong> Reducing the loan amount lowers the required rental
                  coverage.
                </li>
                <li>
                  <strong>Top-slicing:</strong> Some lenders will use your personal income to bridge small
                  rental shortfalls.
                </li>
                <li>
                  <strong>Specialist lenders:</strong> May accept lower ICR ratios (down to 100% in some
                  cases) for experienced landlords.
                </li>
                <li>
                  <strong>Different property:</strong> Consider areas with better rental yields to meet the
                  coverage requirements.
                </li>
              </ul>
            </div>
          </section>

          {/* Tax Section */}
          <section id="tax" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Buy to Let Tax Implications
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Understanding the tax position of BTL investment is crucial for calculating true returns.
                Tax changes since 2017 have significantly impacted landlord profitability, particularly for
                higher-rate taxpayers holding property personally. Always consult{" "}
                <ExternalLink href={authoritativeLinks.hmrc.stampDuty.url}>
                  HMRC guidance
                </ExternalLink>{" "}
                and consider professional tax advice.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                    Stamp Duty Surcharge
                  </h4>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Additional 3% stamp duty on all purchase bands for buy to let properties. On a £300,000
                    property, that&apos;s an extra £9,000. Use our{" "}
                    <Link href="/calculators/stamp-duty-calculator" className="underline">
                      stamp duty calculator
                    </Link>{" "}
                    to see the full cost.
                  </p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-5 border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                    Income Tax on Rental Profits
                  </h4>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Rental profits are taxed at your marginal rate: 20% basic rate, 40% higher rate, or
                    45% additional rate. This applies to rent minus allowable expenses.
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-5 border border-yellow-200 dark:border-yellow-800">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Mortgage Interest Relief
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Since April 2020, mortgage interest is only relieved at 20% as a tax credit, not a
                    full deduction. This particularly impacts higher-rate taxpayers.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Capital Gains Tax
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    When selling, CGT applies to profits above the annual exemption (£3,000 for 2024/25).
                    Residential property rates are 18% (basic rate) or 28% (higher rate).
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                Allowable Expenses
              </h3>
              <p>
                You can deduct legitimate costs from rental income before calculating tax:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Letting agent fees and management costs</li>
                <li>Maintenance and repairs (not improvements)</li>
                <li>Insurance (landlord, buildings, contents)</li>
                <li>Ground rent and service charges</li>
                <li>Accountancy fees</li>
                <li>Utilities and council tax (if you pay them)</li>
                <li>Advertising for tenants</li>
              </ul>
            </div>
          </section>

          {/* Limited Company Section */}
          <section id="limited-company" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Buy to Let Through a Limited Company
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Since the mortgage interest tax relief changes, many landlords are purchasing through
                Special Purpose Vehicles (SPVs) - limited companies set up specifically for property
                investment. This approach offers tax advantages but comes with added complexity.
              </p>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800 my-6">
                <h3 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
                  Limited Company Advantages
                </h3>
                <ul className="space-y-2 text-emerald-700 dark:text-emerald-300">
                  <li>✓ Full mortgage interest deductible as a business expense</li>
                  <li>✓ Corporation tax (25%) may be lower than personal income tax</li>
                  <li>✓ Profits can be retained in the company for reinvestment</li>
                  <li>✓ More flexibility in profit extraction timing</li>
                  <li>✓ Potential inheritance tax benefits</li>
                </ul>
              </div>

              <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-6 border border-rose-200 dark:border-rose-800 my-6">
                <h3 className="font-semibold text-rose-800 dark:text-rose-200 mb-4">
                  Limited Company Disadvantages
                </h3>
                <ul className="space-y-2 text-rose-700 dark:text-rose-300">
                  <li>✗ Mortgage rates typically 0.25-0.5% higher</li>
                  <li>✗ Fewer lenders offer SPV products</li>
                  <li>✗ Additional accountancy and filing costs</li>
                  <li>✗ Tax on extracting profits (dividends/salary)</li>
                  <li>✗ Transferring existing properties incurs stamp duty</li>
                </ul>
              </div>

              <p>
                The limited company route typically makes sense for higher-rate taxpayers building a
                portfolio, but requires careful financial modelling. Consult a property tax specialist
                before making this decision.
              </p>
            </div>
          </section>

          {/* Tips Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Top Tips for Buy to Let Investors
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Research Rental Yields",
                  content: "Look for areas with yields of 5%+ to ensure positive cash flow. Northern cities often outperform London for yield.",
                },
                {
                  title: "Factor In All Costs",
                  content: "Include maintenance (10-15% of rent), void periods, letting fees, insurance, and tax when calculating returns.",
                },
                {
                  title: "Get the Right Insurance",
                  content: "Landlord insurance differs from home insurance. Ensure you have buildings, landlord liability, and rent guarantee cover.",
                },
                {
                  title: "Understand EPC Requirements",
                  content: "Properties must have minimum EPC rating of E (C from 2028). Factor improvement costs into your purchase decision.",
                },
                {
                  title: "Consider Location Carefully",
                  content: "Think about tenant demand, local employment, transport links, and schools. Student lets vs family homes have different dynamics.",
                },
                {
                  title: "Build a Cash Buffer",
                  content: "Keep 3-6 months' mortgage payments in reserve for void periods, repairs, and unexpected costs.",
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

          {/* Landlord Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Landlord Legal Responsibilities
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Being a landlord comes with significant legal obligations. Failure to comply can result
                in fines, prosecution, and difficulty evicting tenants. Key responsibilities include:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Gas Safety</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Annual gas safety certificate by registered Gas Safe engineer. Provide copy to tenants
                    within 28 days.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Electrical Safety</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    EICR (Electrical Installation Condition Report) required every 5 years. Must provide
                    copy to tenants.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">EPC Certificate</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Valid EPC required before marketing. Minimum rating of E (C from 2028). Provide to
                    tenants.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Deposit Protection</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Protect deposits in government-approved scheme within 30 days. Provide prescribed
                    information.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Smoke & CO Alarms</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Working smoke alarm on each floor. Carbon monoxide alarm in rooms with solid fuel
                    appliances.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Right to Rent</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Check and document tenants&apos; immigration status before tenancy starts. Retain records.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section id="faqs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Buy to Let Mortgage FAQs
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
              Essential BTL Tools & Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/calculators/buy-to-let-mortgage-calculator"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">BTL Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Calculate rental coverage and ROI</p>
              </Link>
              <Link
                href="/calculators/stamp-duty-calculator"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Stamp Duty Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">See the 3% surcharge on your purchase</p>
              </Link>
              <Link
                href="/mortgage-rates"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Current BTL Rates</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Compare today&apos;s buy to let rates</p>
              </Link>
              <Link
                href="/"
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">Mortgage Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Calculate monthly repayments</p>
              </Link>
            </div>
          </section>

          {/* Summary */}
          <section className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Summary</h2>
            <p className="text-gray-600 dark:text-gray-300">
              A <strong>buy to let mortgage</strong> requires careful planning and understanding of the
              unique criteria, costs, and tax implications. With minimum deposits of 25%, rental income
              coverage requirements of 125-145%, and the 3% stamp duty surcharge, BTL investment demands
              significant capital and research. Consider whether personal or limited company ownership
              suits your circumstances, and factor in all costs including tax when calculating returns.
              Use our{" "}
              <Link href="/calculators/buy-to-let-mortgage-calculator" className="text-blue-600 hover:underline">
                buy to let calculator
              </Link>{" "}
              to model your investment, and consider consulting a{" "}
              <ExternalLink href={authoritativeLinks.fca.register.url}>
                FCA-registered mortgage broker
              </ExternalLink>{" "}
              who specialises in BTL mortgages.
            </p>
          </section>

          {/* Footer */}
          <footer className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              <em>Last updated: January 2025</em>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Your property may be repossessed if you do not keep up repayments on your mortgage.
              Mortgage Calculator Quest provides tools and information for educational purposes.
              Tax rules are subject to change and depend on individual circumstances.
              Always seek professional financial and tax advice before making investment decisions.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
