import { Metadata } from "next";
import { ContentPageLayout } from "@/components/content/ContentPageLayout";
import { OverpaymentCalculator } from "@/components/calculators/OverpaymentCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mortgage Overpayment Calculator UK | Save Thousands | Mortgage Calculator Quest",
  description: "Free mortgage overpayment calculator. See how much you could save by overpaying your mortgage. Calculate interest savings, time saved, and compare different overpayment amounts.",
  keywords: "mortgage overpayment calculator, overpay mortgage calculator, mortgage overpayment savings, pay off mortgage early calculator",
  openGraph: {
    title: "Mortgage Overpayment Calculator UK | Save Thousands on Interest",
    description: "Calculate how much you could save by overpaying your mortgage. See interest savings, time saved, and visualise your path to mortgage freedom.",
    type: "website",
  },
};

export default function MortgageOverpaymentCalculatorPage() {
  return (
    <ContentPageLayout
      title="Mortgage Overpayment Calculator - See How Much You Could Save"
      primaryKeyword="Mortgage Overpayment Calculator"
      introduction={
        <p>
          Our <strong>mortgage overpayment calculator</strong> shows you exactly how much money and time you could
          save by making extra payments on your mortgage. Even small regular overpayments can dramatically reduce
          your total interest paid and help you become mortgage-free years earlier. Use this tool alongside our
          main <Link href="/" className="text-blue-600 hover:underline">mortgage calculator</Link> to plan your
          path to financial freedom and see the true impact of overpaying your mortgage.
        </p>
      }
      calculator={<OverpaymentCalculator />}
      howItWorks={
        <div className="space-y-4">
          <p>
            The mortgage overpayment calculator works by comparing your standard mortgage payments with scenarios
            where you pay extra each month. When you overpay, the additional money goes directly toward reducing
            your principal balance, which means you pay interest on a smaller amount each subsequent month.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">The Power of Compound Savings</h3>
          <p>
            The maths behind mortgage overpayments is surprisingly powerful. When you reduce your principal early
            in the mortgage term, you save interest not just on that amount, but on all the interest that would
            have compounded over the remaining years. This is why even modest overpayments can save tens of thousands
            of pounds over a mortgage&apos;s lifetime.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Key Factors That Affect Your Savings</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Interest rate:</strong> Higher rates mean overpayments save you more money</li>
            <li><strong>Remaining term:</strong> The longer your mortgage, the more impact overpayments have</li>
            <li><strong>Outstanding balance:</strong> Larger mortgages benefit more from overpayments</li>
            <li><strong>Timing:</strong> Overpayments made earlier in your mortgage term have the greatest impact</li>
          </ul>
        </div>
      }
      resultsExplanation={
        <div className="space-y-4">
          <p>
            The mortgage overpayment calculator displays several key metrics that help you understand the true
            value of overpaying. Here&apos;s what each figure means for your financial planning.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Understanding Your Results</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Interest Saved:</strong> The total amount of interest you won&apos;t have to pay because
              your principal balance is reduced faster. This is pure savings.
            </li>
            <li>
              <strong>Time Saved:</strong> How many years earlier you&apos;ll pay off your mortgage. This represents
              years of payment-free living sooner.
            </li>
            <li>
              <strong>New Term:</strong> Your reduced mortgage term if you maintain regular overpayments throughout.
            </li>
            <li>
              <strong>Balance Over Time Chart:</strong> Visual comparison showing how different overpayment amounts
              affect your mortgage balance year by year.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Important Considerations</h3>
          <p>
            Before committing to regular overpayments, ensure you have adequate emergency savings and no
            higher-interest debts. Check your mortgage terms for early repayment charges (ERCs) and annual
            overpayment limits, typically 10% of the outstanding balance. Use our{" "}
            <Link href="/calculators/how-much-can-i-borrow-calculator" className="text-blue-600 hover:underline">
              borrowing calculator
            </Link>{" "}
            to understand your overall financial position.
          </p>
        </div>
      }
      marketOverview={
        <div className="space-y-4">
          <p>
            With UK mortgage rates remaining elevated compared to the historic lows of recent years, overpaying
            your mortgage has become an increasingly attractive financial strategy. At current average rates,
            the return you effectively earn from overpaying often exceeds what you might get from savings accounts.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="text-left p-3 border">Overpayment Amount</th>
                  <th className="text-right p-3 border">Annual Cost</th>
                  <th className="text-right p-3 border">Typical Interest Saved*</th>
                  <th className="text-right p-3 border">Years Saved*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">£100/month</td>
                  <td className="text-right p-3 border">£1,200</td>
                  <td className="text-right p-3 border">£15,000 - £25,000</td>
                  <td className="text-right p-3 border">2-4 years</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="p-3 border">£200/month</td>
                  <td className="text-right p-3 border">£2,400</td>
                  <td className="text-right p-3 border">£25,000 - £40,000</td>
                  <td className="text-right p-3 border">4-6 years</td>
                </tr>
                <tr>
                  <td className="p-3 border">£500/month</td>
                  <td className="text-right p-3 border">£6,000</td>
                  <td className="text-right p-3 border">£40,000 - £60,000</td>
                  <td className="text-right p-3 border">7-10 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            *Based on a £250,000 mortgage at 4.5% over 25 years. Actual savings depend on your specific circumstances.
          </p>
        </div>
      }
      tips={[
        {
          title: "Check Your Overpayment Allowance",
          content: "Most mortgages allow 10% overpayment per year without penalty. Calculate this amount and try to maximise it without exceeding the limit to avoid early repayment charges.",
        },
        {
          title: "Compare with Savings Rates",
          content: "If your mortgage rate is 4.5%, overpaying is equivalent to earning 4.5% tax-free on savings. Compare this to current savings account rates to decide the best use of spare cash.",
        },
        {
          title: "Start Small and Increase Gradually",
          content: "Even £50/month makes a difference. Start with an amount you're comfortable with, then increase it when you receive pay rises or when other debts are cleared.",
        },
        {
          title: "Consider Lump Sum Overpayments",
          content: "Bonuses, tax refunds, or inheritance can be used for one-off overpayments. A £5,000 lump sum early in your mortgage can save more than £10,000 in interest.",
        },
        {
          title: "Maintain Emergency Funds First",
          content: "Keep 3-6 months of expenses in accessible savings before overpaying heavily. Once money is paid into your mortgage, you typically can't get it back without remortgaging.",
        },
      ]}
      faqs={[
        {
          question: "How much should I overpay on my mortgage?",
          answer: "The ideal overpayment depends on your financial situation. Aim to stay within your 10% annual allowance to avoid charges. Even £100/month can save you tens of thousands in interest over your mortgage term. Use the calculator above to find the sweet spot for your budget.",
        },
        {
          question: "Is it better to overpay or save?",
          answer: "Generally, if your mortgage rate is higher than the interest you'd earn on savings (after tax), overpaying is better value. At 4.5% mortgage rate, overpaying is equivalent to earning 4.5% tax-free. However, maintain emergency savings before making significant overpayments.",
        },
        {
          question: "What are early repayment charges (ERCs)?",
          answer: "ERCs are fees charged if you pay off too much of your mortgage early, typically during a fixed-rate period. Most lenders allow 10% overpayment per year without charge. Check your mortgage terms or contact your lender to confirm your limit.",
        },
        {
          question: "Should I reduce my term or my monthly payments?",
          answer: "When overpaying, you can either keep the same payment and reduce your term, or reduce your monthly payment while keeping the same term. Reducing the term usually saves more interest overall, but reducing payments gives you more flexibility if your circumstances change.",
        },
        {
          question: "Can I get my overpayments back if I need them?",
          answer: "Generally no - once you've overpaid, the money is applied to your mortgage balance. Some lenders offer 'flexible' mortgages that allow you to borrow back overpayments, but these often come with higher interest rates. Consider this before overpaying.",
        },
        {
          question: "When is the best time to start overpaying?",
          answer: "The earlier you start, the more you save due to compound interest. Overpayments made in the first few years of your mortgage have the greatest impact because interest is calculated on the full balance. Even starting with small amounts early is better than waiting to make larger payments later.",
        },
      ]}
      relatedLinks={[
        {
          title: "Mortgage Repayment Calculator",
          href: "/calculators/mortgage-repayment-calculator",
          description: "Calculate your standard monthly mortgage payments.",
        },
        {
          title: "Remortgage Calculator",
          href: "/calculators/remortgage-calculator",
          description: "See if switching mortgages could save you even more.",
        },
        {
          title: "Stamp Duty Calculator",
          href: "/calculators/stamp-duty-calculator",
          description: "Calculate SDLT if you're considering moving home.",
        },
        {
          title: "Mortgage Rates UK",
          href: "/mortgage-rates",
          description: "Compare current UK mortgage rates.",
        },
        {
          title: "How Much Can I Borrow Calculator",
          href: "/calculators/how-much-can-i-borrow-calculator",
          description: "Check your borrowing potential for a new property.",
        },
      ]}
      summary={
        <p>
          The <strong>mortgage overpayment calculator</strong> demonstrates the remarkable power of paying extra
          on your mortgage. Even modest overpayments of £100-200 per month can save you tens of thousands of pounds
          in interest and help you become mortgage-free years earlier. Before overpaying, ensure you have adequate
          emergency savings and check your mortgage terms for any early repayment charges. Ready to explore more
          options? Try our <Link href="/" className="text-blue-600 hover:underline">main mortgage calculator</Link>{" "}
          to see how different loan amounts and terms affect your payments.
        </p>
      }
    />
  );
}
