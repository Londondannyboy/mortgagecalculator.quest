import { Metadata } from "next";
import { ContentPageLayout } from "@/components/content/ContentPageLayout";
import { BuyToLetCalculator } from "@/components/calculators/BuyToLetCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy to Let Mortgage Calculator UK | BTL Calculator | Mortgage Calculator Quest",
  description: "Free buy to let mortgage calculator for UK landlords. Calculate BTL payments, rental yield, interest coverage ratio, and stamp duty. Check if your investment stacks up.",
  keywords: "buy to let mortgage calculator, BTL calculator, rental yield calculator, buy to let calculator UK, landlord mortgage calculator",
  openGraph: {
    title: "Buy to Let Mortgage Calculator UK | Check Your BTL Investment",
    description: "Calculate your buy to let mortgage payments, rental yield, and see if your property meets lender requirements with our free BTL calculator.",
    type: "website",
  },
};

export default function BuyToLetCalculatorPage() {
  return (
    <ContentPageLayout
      title="Buy to Let Mortgage Calculator - Check Your BTL Investment"
      primaryKeyword="Buy to Let Mortgage Calculator"
      introduction={
        <p>
          Our <strong>buy to let mortgage calculator</strong> helps landlords and property investors assess whether
          a rental property investment makes financial sense. Calculate your monthly BTL mortgage payments, rental
          yield, interest coverage ratio (ICR), and total upfront costs including the additional{" "}
          <Link href="/calculators/stamp-duty-calculator" className="text-blue-600 hover:underline">stamp duty</Link>{" "}
          surcharge. Use this calculator alongside our{" "}
          <Link href="/" className="text-blue-600 hover:underline">main mortgage calculator</Link> to compare
          buy to let versus residential mortgage options.
        </p>
      }
      calculator={<BuyToLetCalculator />}
      howItWorks={
        <div className="space-y-4">
          <p>
            The buy to let mortgage calculator analyses your potential rental investment by calculating key
            metrics that lenders and investors use to assess BTL viability. Unlike residential mortgages,
            BTL lending decisions are primarily based on the rental income the property can generate.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Key BTL Metrics Explained</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Interest Coverage Ratio (ICR):</strong> The ratio of rental income to mortgage payments.
              Most lenders require 125-145% ICR at a &quot;stressed&quot; interest rate of 5.5%.
            </li>
            <li>
              <strong>Rental Yield:</strong> Annual rent as a percentage of property value. Generally, yields
              above 5% are considered attractive for BTL investments.
            </li>
            <li>
              <strong>Monthly Cashflow:</strong> The difference between rental income and mortgage payment.
              Positive cashflow means the property is self-sustaining.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Interest Only vs Repayment</h3>
          <p>
            Most buy to let mortgages are interest-only, meaning your monthly payments only cover the interest
            charged. This keeps monthly costs lower but means you&apos;ll still owe the full loan amount at the end
            of the term. You&apos;ll need a repayment strategy, typically selling the property or using other savings.
          </p>
        </div>
      }
      resultsExplanation={
        <div className="space-y-4">
          <p>
            The buy to let mortgage calculator provides comprehensive results that help you understand both
            the monthly costs and the investment potential of a rental property.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Understanding Your Results</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Monthly Mortgage Payment:</strong> Your required payment to the lender. For interest-only
              mortgages, this is simply the loan amount multiplied by the monthly interest rate.
            </li>
            <li>
              <strong>Monthly Cashflow:</strong> Rent minus mortgage payment. This doesn&apos;t account for other
              costs like maintenance, void periods, or letting fees—budget an additional 20-30% for these.
            </li>
            <li>
              <strong>Interest Coverage Ratio:</strong> If this is below 125%, you may struggle to get approved.
              Many lenders now require 145% at a stressed rate of 5.5%.
            </li>
            <li>
              <strong>Gross Rental Yield:</strong> A quick way to compare investment potential. Higher yields
              often come with higher risks or less desirable locations.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">What Lenders Look For</h3>
          <p>
            BTL mortgage lenders assess affordability differently to residential mortgages. They focus on
            the rental income potential rather than your personal income (though most require minimum income
            of £25,000). Use our{" "}
            <Link href="/calculators/how-much-can-i-borrow-calculator" className="text-blue-600 hover:underline">
              borrowing calculator
            </Link>{" "}
            to check residential affordability requirements.
          </p>
        </div>
      }
      marketOverview={
        <div className="space-y-4">
          <p>
            The UK buy to let market has evolved significantly in recent years, with tax changes and tighter
            lending criteria affecting returns for landlords. Despite challenges, BTL remains a popular
            investment choice, particularly in high-yield areas outside London.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="text-left p-3 border">Factor</th>
                  <th className="text-right p-3 border">Typical Range</th>
                  <th className="text-left p-3 border">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">BTL Interest Rates</td>
                  <td className="text-right p-3 border">5.0% - 6.5%</td>
                  <td className="p-3 border">Higher than residential rates</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="p-3 border">Minimum Deposit</td>
                  <td className="text-right p-3 border">20% - 25%</td>
                  <td className="p-3 border">Most lenders require 25%</td>
                </tr>
                <tr>
                  <td className="p-3 border">Average Rental Yield</td>
                  <td className="text-right p-3 border">4% - 8%</td>
                  <td className="p-3 border">Varies significantly by location</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="p-3 border">ICR Requirement</td>
                  <td className="text-right p-3 border">125% - 145%</td>
                  <td className="p-3 border">At stressed rate (usually 5.5%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      }
      tips={[
        {
          title: "Calculate the True Yield",
          content: "Gross yield doesn't tell the full story. Deduct mortgage interest, maintenance (budget 10-15%), void periods (1 month/year), insurance, and letting fees to understand your actual return.",
        },
        {
          title: "Consider Location Carefully",
          content: "High-yield areas often have higher tenant turnover and more maintenance issues. Lower-yield areas like London may offer better capital growth potential. Match your strategy to your goals.",
        },
        {
          title: "Build in Contingency for Rate Rises",
          content: "Stress-test your investment at 7-8% interest rates. If the numbers still work, you're better protected against rate increases when your fixed period ends.",
        },
        {
          title: "Understand the Tax Implications",
          content: "Since April 2020, landlords can only claim basic rate (20%) tax relief on mortgage interest. This significantly impacts higher-rate taxpayers—factor this into your calculations.",
        },
        {
          title: "Factor in the 3% Stamp Duty Surcharge",
          content: "Buy to let properties attract an additional 3% stamp duty on the entire purchase price. On a £250,000 property, this adds £7,500 to your upfront costs.",
        },
      ]}
      faqs={[
        {
          question: "How much deposit do I need for a buy to let mortgage?",
          answer: "Most BTL lenders require a minimum 25% deposit, though some accept 20% with higher interest rates. A larger deposit (40%+) will secure better rates and improve your chances of approval, especially if rental income is borderline for lender requirements.",
        },
        {
          question: "What rental yield should I aim for?",
          answer: "A gross rental yield of 5% or above is generally considered good for BTL investments. However, the 'right' yield depends on your investment goals. Higher yields often come with more risk, while lower yields in prime areas may offer better capital appreciation.",
        },
        {
          question: "What is the interest coverage ratio (ICR)?",
          answer: "ICR is the ratio of monthly rental income to monthly mortgage interest payments. Lenders typically require 125-145% ICR at a 'stressed' rate (usually 5.5%). For example, if your interest payment is £1,000/month, you'd need rent of at least £1,250-£1,450.",
        },
        {
          question: "Can I get a buy to let mortgage with no personal income?",
          answer: "Most lenders require minimum personal income of £25,000 per year, though some specialist lenders accept lower. The rental income is the primary factor, but lenders want assurance you can cover costs during void periods.",
        },
        {
          question: "Should I choose interest-only or repayment?",
          answer: "Interest-only mortgages are most common for BTL as they maximise monthly cashflow. However, you'll need a plan to repay the capital—typically selling the property. Repayment mortgages build equity but reduce monthly returns.",
        },
        {
          question: "How does the stamp duty surcharge work?",
          answer: "An additional 3% stamp duty applies to buy to let and second properties. This is charged on the entire purchase price, not just the excess over thresholds. Use our stamp duty calculator to see the full breakdown for your purchase.",
        },
      ]}
      relatedLinks={[
        {
          title: "Stamp Duty Calculator",
          href: "/calculators/stamp-duty-calculator",
          description: "Calculate SDLT including the 3% BTL surcharge.",
        },
        {
          title: "Mortgage Repayment Calculator",
          href: "/calculators/mortgage-repayment-calculator",
          description: "Compare BTL with standard residential mortgage costs.",
        },
        {
          title: "Buy to Let Mortgage Guide",
          href: "/mortgage-types/buy-to-let-mortgage",
          description: "Complete guide to buy to let mortgages in the UK.",
        },
        {
          title: "Mortgage Rates UK",
          href: "/mortgage-rates",
          description: "Compare current BTL and residential mortgage rates.",
        },
        {
          title: "How Much Can I Borrow",
          href: "/calculators/how-much-can-i-borrow-calculator",
          description: "Check your borrowing potential for residential purchases.",
        },
      ]}
      summary={
        <p>
          The <strong>buy to let mortgage calculator</strong> is an essential tool for anyone considering
          property investment in the UK. By analysing rental yield, interest coverage ratio, and total
          investment required, you can make informed decisions about potential BTL purchases. Remember to
          factor in the 3% stamp duty surcharge, ongoing costs, and tax implications when assessing viability.
          For comprehensive mortgage planning, use this alongside our{" "}
          <Link href="/" className="text-blue-600 hover:underline">main mortgage calculator</Link> and{" "}
          <Link href="/calculators/stamp-duty-calculator" className="text-blue-600 hover:underline">
            stamp duty calculator
          </Link>.
        </p>
      }
    />
  );
}
