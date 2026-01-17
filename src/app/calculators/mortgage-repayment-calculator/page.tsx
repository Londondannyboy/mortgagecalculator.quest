import { Metadata } from "next";
import { ContentPageLayout } from "@/components/content/ContentPageLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mortgage Repayment Calculator UK | Monthly Payments | Mortgage Calculator Quest",
  description: "Free UK mortgage repayment calculator. Calculate your monthly mortgage payments, total interest, and see the full cost of your home loan instantly.",
  keywords: "mortgage repayment calculator, mortgage payment calculator UK, monthly mortgage calculator, mortgage calculator",
  openGraph: {
    title: "Mortgage Repayment Calculator UK | Calculate Monthly Payments",
    description: "Calculate your monthly mortgage payments instantly. See total interest costs and plan your home purchase.",
    type: "website",
  },
};

// Create a wrapper component for the calculator since ContentPageLayout expects specific props
function RepaymentCalculatorWrapper() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
        Enter your mortgage details below to calculate your monthly repayments.
      </p>
      <div className="text-center">
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg"
        >
          Open Full Calculator with AI Assistant →
        </Link>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
        Our main calculator includes an AI mortgage assistant to help with stamp duty calculations,
        mortgage comparisons, and personalised advice.
      </p>
    </div>
  );
}

export default function MortgageRepaymentCalculatorPage() {
  return (
    <ContentPageLayout
      title="Mortgage Repayment Calculator - Calculate Your Monthly Payments"
      primaryKeyword="Mortgage Repayment Calculator"
      introduction={
        <p>
          Our <strong>mortgage repayment calculator</strong> helps you work out exactly how much your monthly
          mortgage payments will be. Whether you&apos;re buying your first home or remortgaging, understanding
          your repayments is essential for budgeting. Enter your loan amount, interest rate, and term to see
          your monthly payment, total interest, and overall cost. For a more comprehensive experience,
          try our <Link href="/" className="text-blue-600 hover:underline">main mortgage calculator</Link> with
          AI-powered assistance.
        </p>
      }
      calculator={<RepaymentCalculatorWrapper />}
      howItWorks={
        <div className="space-y-4">
          <p>
            The mortgage repayment calculator uses a standard amortisation formula to calculate your monthly
            payments. This formula takes into account the principal (loan amount), interest rate, and term
            to give you an accurate figure for your budget planning.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">The Calculation Formula</h3>
          <p>
            Monthly payments are calculated using: M = P × [r(1+r)^n] / [(1+r)^n – 1], where:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>M</strong> = Monthly payment</li>
            <li><strong>P</strong> = Principal (loan amount)</li>
            <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12)</li>
            <li><strong>n</strong> = Total number of payments (term in years × 12)</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Key Factors</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Loan amount:</strong> The larger the mortgage, the higher your monthly payments</li>
            <li><strong>Interest rate:</strong> Even small rate differences significantly impact total cost</li>
            <li><strong>Mortgage term:</strong> Longer terms mean lower monthly payments but more interest paid overall</li>
          </ul>
        </div>
      }
      resultsExplanation={
        <div className="space-y-4">
          <p>
            The mortgage repayment calculator shows you three key figures to help you understand the true
            cost of your mortgage.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Understanding Your Results</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Monthly Payment:</strong> What you&apos;ll pay each month. Ensure this is comfortable
              within your budget, typically no more than 35% of your take-home pay.
            </li>
            <li>
              <strong>Total Interest:</strong> The total interest you&apos;ll pay over the full mortgage term.
              This is often a surprisingly large number—use our{" "}
              <Link href="/calculators/mortgage-overpayment-calculator" className="text-blue-600 hover:underline">
                overpayment calculator
              </Link>{" "}
              to see how you can reduce it.
            </li>
            <li>
              <strong>Total Repayment:</strong> The complete amount you&apos;ll repay (principal + interest).
              This is the true cost of your mortgage.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Important Considerations</h3>
          <p>
            Remember that mortgage rates can change (unless you&apos;re on a fixed rate), and your actual payments
            may include buildings insurance and life insurance if required by your lender. Use our{" "}
            <Link href="/mortgage-rates" className="text-blue-600 hover:underline">mortgage rates page</Link> to
            compare current deals.
          </p>
        </div>
      }
      marketOverview={
        <div className="space-y-4">
          <p>
            UK mortgage repayments vary significantly based on the interest rate environment. With rates
            stabilising in 2025, borrowers are seeing more predictable payment calculations.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="text-left p-3 border">Loan Amount</th>
                  <th className="text-right p-3 border">25 Years @ 4.5%</th>
                  <th className="text-right p-3 border">25 Years @ 5.0%</th>
                  <th className="text-right p-3 border">30 Years @ 4.5%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">£150,000</td>
                  <td className="text-right p-3 border">£834/mo</td>
                  <td className="text-right p-3 border">£877/mo</td>
                  <td className="text-right p-3 border">£760/mo</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="p-3 border">£200,000</td>
                  <td className="text-right p-3 border">£1,112/mo</td>
                  <td className="text-right p-3 border">£1,169/mo</td>
                  <td className="text-right p-3 border">£1,013/mo</td>
                </tr>
                <tr>
                  <td className="p-3 border">£250,000</td>
                  <td className="text-right p-3 border">£1,390/mo</td>
                  <td className="text-right p-3 border">£1,462/mo</td>
                  <td className="text-right p-3 border">£1,267/mo</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="p-3 border">£300,000</td>
                  <td className="text-right p-3 border">£1,668/mo</td>
                  <td className="text-right p-3 border">£1,754/mo</td>
                  <td className="text-right p-3 border">£1,520/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      }
      tips={[
        {
          title: "Compare Different Terms",
          content: "A longer term reduces monthly payments but increases total interest. Use the calculator to find the right balance between affordability and total cost.",
        },
        {
          title: "Consider Overpayments",
          content: "Even small regular overpayments can save thousands in interest. Our overpayment calculator shows exactly how much you could save.",
        },
        {
          title: "Factor in Rate Changes",
          content: "If you're on a variable or tracker rate, calculate payments at higher rates to ensure you could still afford them if rates rise.",
        },
        {
          title: "Include All Housing Costs",
          content: "Your mortgage payment isn't your only housing cost. Budget for council tax, utilities, insurance, and maintenance too.",
        },
        {
          title: "Get Pre-Approved First",
          content: "Before house hunting, get a mortgage in principle to know exactly what you can afford. This strengthens your position with sellers.",
        },
      ]}
      faqs={[
        {
          question: "How are mortgage repayments calculated?",
          answer: "Mortgage repayments are calculated using an amortisation formula that considers your loan amount, interest rate, and term. Each payment covers both interest (calculated on the remaining balance) and principal repayment. Early payments are mostly interest, shifting to mostly principal over time.",
        },
        {
          question: "What's the difference between repayment and interest-only mortgages?",
          answer: "With a repayment mortgage, each monthly payment reduces your debt so you own the property outright at the end. Interest-only payments only cover the interest, leaving the full loan amount still owed. Interest-only mortgages have lower payments but require a separate plan to repay the capital.",
        },
        {
          question: "Should I choose a shorter or longer mortgage term?",
          answer: "Shorter terms mean higher monthly payments but less total interest paid. Longer terms are more affordable monthly but cost more overall. Many borrowers choose 25 years as a balance, but terms from 10 to 40 years are available. Consider your age at mortgage end and retirement plans.",
        },
        {
          question: "How much of my income should go on mortgage payments?",
          answer: "Lenders typically allow mortgage payments up to 35-40% of your gross income, but aim for no more than 28-30% of your take-home pay for comfortable living. The lower, the better—it leaves room for savings, emergencies, and lifestyle.",
        },
        {
          question: "Do mortgage repayments include insurance?",
          answer: "Basic calculations show only the mortgage payment itself. Your actual monthly payment to the lender may include buildings insurance (often required) and payment protection. Council tax and utilities are separate. Always budget for total housing costs.",
        },
        {
          question: "How can I reduce my monthly mortgage payments?",
          answer: "Options include: extending your mortgage term, remortgaging to a lower rate, making a lump sum payment to reduce the balance, or switching from repayment to interest-only (though this means you still owe the full amount). A larger deposit when buying also means lower payments.",
        },
      ]}
      relatedLinks={[
        {
          title: "Mortgage Overpayment Calculator",
          href: "/calculators/mortgage-overpayment-calculator",
          description: "See how extra payments could reduce your total interest.",
        },
        {
          title: "How Much Can I Borrow",
          href: "/calculators/how-much-can-i-borrow-calculator",
          description: "Check your borrowing potential based on income.",
        },
        {
          title: "Stamp Duty Calculator",
          href: "/calculators/stamp-duty-calculator",
          description: "Calculate SDLT costs for your property purchase.",
        },
        {
          title: "Mortgage Rates UK",
          href: "/mortgage-rates",
          description: "Compare current rates from UK lenders.",
        },
        {
          title: "First-Time Buyer Guide",
          href: "/mortgage-types/first-time-buyer-mortgage",
          description: "Special schemes and tips for first-time buyers.",
        },
      ]}
      summary={
        <p>
          The <strong>mortgage repayment calculator</strong> is an essential tool for anyone planning a
          property purchase or reviewing their current mortgage. By understanding your monthly payments,
          total interest, and overall cost, you can make informed decisions about loan amounts, terms,
          and whether overpayments make sense for you. For the best experience with AI-powered mortgage
          assistance, use our <Link href="/" className="text-blue-600 hover:underline">main mortgage calculator</Link>.
        </p>
      }
    />
  );
}
