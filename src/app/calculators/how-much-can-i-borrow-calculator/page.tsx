import { Metadata } from "next";
import { ContentPageLayout } from "@/components/content/ContentPageLayout";
import { AffordabilityCalculator } from "@/components/calculators/AffordabilityCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Can I Borrow Calculator UK | Mortgage Affordability | Mortgage Calculator Quest",
  description: "Free mortgage affordability calculator. Find out how much you can borrow based on your income. Calculate your property budget and monthly payments instantly.",
  keywords: "how much can i borrow calculator, mortgage affordability calculator, how much mortgage can i get, mortgage calculator income based",
  openGraph: {
    title: "How Much Can I Borrow Calculator | Check Your Mortgage Affordability",
    description: "Calculate how much mortgage you could get based on your income. See your property budget and estimated monthly payments.",
    type: "website",
  },
};

export default function HowMuchCanIBorrowPage() {
  return (
    <ContentPageLayout
      title="How Much Can I Borrow Calculator - Check Your Mortgage Affordability"
      primaryKeyword="How Much Can I Borrow Calculator"
      introduction={
        <p>
          Our <strong>how much can I borrow calculator</strong> helps you estimate your mortgage borrowing
          potential based on your income and financial circumstances. Whether you&apos;re a first-time buyer
          starting your property search or looking to move up the ladder, understanding your budget is the
          essential first step. Use this tool alongside our{" "}
          <Link href="/" className="text-blue-600 hover:underline">mortgage calculator</Link> to plan your
          home purchase and see what monthly payments you can expect.
        </p>
      }
      calculator={<AffordabilityCalculator />}
      howItWorks={
        <div className="space-y-4">
          <p>
            The how much can I borrow calculator uses income multiples to estimate your borrowing capacity.
            UK mortgage lenders typically offer between 4 and 4.5 times your annual income, though this
            varies based on your individual circumstances and the lender&apos;s criteria.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Income Multiple Calculation</h3>
          <p>
            For a single applicant earning £50,000, borrowing at 4x income would give £200,000. Add a
            second applicant earning £40,000, and your combined borrowing could be £360,000 at the same
            multiple. Higher multiples (4.5-5x) may be available with larger deposits or certain professions.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Key Factors Affecting Borrowing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Gross income:</strong> Your salary before tax is the primary factor</li>
            <li><strong>Employment type:</strong> Permanent employees may borrow more than contractors</li>
            <li><strong>Existing debts:</strong> Loans, credit cards, and car finance reduce capacity</li>
            <li><strong>Credit score:</strong> Better scores unlock better rates and higher multiples</li>
            <li><strong>Deposit size:</strong> Larger deposits can mean access to better deals</li>
          </ul>
        </div>
      }
      resultsExplanation={
        <div className="space-y-4">
          <p>
            The how much can I borrow calculator shows two key figures: a standard estimate at 4x income
            and a maximum at 4.5x income. Understanding what these mean helps you set realistic expectations
            for your property search.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Understanding Your Results</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Standard Borrowing (4x):</strong> What most lenders will comfortably offer. This
              is a realistic target for your mortgage application.
            </li>
            <li>
              <strong>Maximum Borrowing (4.5x):</strong> Possible with certain lenders, larger deposits,
              or favourable circumstances like professional qualifications.
            </li>
            <li>
              <strong>Property Budget:</strong> Your borrowing plus deposit. This is the maximum property
              price you should be searching at.
            </li>
            <li>
              <strong>Monthly Payment:</strong> Estimated repayments at current interest rates. Ensure
              this is comfortable within your monthly budget.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Important Considerations</h3>
          <p>
            These calculations are estimates only. Actual lending decisions depend on a full affordability
            assessment including your spending habits, dependents, and the property you&apos;re buying.
            Consider using our{" "}
            <Link href="/calculators/stamp-duty-calculator" className="text-blue-600 hover:underline">
              stamp duty calculator
            </Link>{" "}
            to factor in additional purchase costs.
          </p>
        </div>
      }
      marketOverview={
        <div className="space-y-4">
          <p>
            Mortgage affordability rules have tightened since 2014, with lenders required to stress-test
            applicants at higher interest rates. While the specific stress-test rules were relaxed in 2022,
            lenders continue to apply their own rigorous affordability criteria.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="text-left p-3 border">Combined Income</th>
                  <th className="text-right p-3 border">Standard (4x)</th>
                  <th className="text-right p-3 border">Maximum (4.5x)</th>
                  <th className="text-right p-3 border">With £50k Deposit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">£40,000</td>
                  <td className="text-right p-3 border">£160,000</td>
                  <td className="text-right p-3 border">£180,000</td>
                  <td className="text-right p-3 border">£210,000 - £230,000</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="p-3 border">£60,000</td>
                  <td className="text-right p-3 border">£240,000</td>
                  <td className="text-right p-3 border">£270,000</td>
                  <td className="text-right p-3 border">£290,000 - £320,000</td>
                </tr>
                <tr>
                  <td className="p-3 border">£80,000</td>
                  <td className="text-right p-3 border">£320,000</td>
                  <td className="text-right p-3 border">£360,000</td>
                  <td className="text-right p-3 border">£370,000 - £410,000</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="p-3 border">£100,000</td>
                  <td className="text-right p-3 border">£400,000</td>
                  <td className="text-right p-3 border">£450,000</td>
                  <td className="text-right p-3 border">£450,000 - £500,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      }
      tips={[
        {
          title: "Get Your Credit Score in Shape",
          content: "Check your credit report for errors and work on improving your score before applying. Pay down credit card balances, ensure you're on the electoral roll, and avoid new credit applications in the months before your mortgage application.",
        },
        {
          title: "Reduce Existing Debts First",
          content: "Every £100 monthly commitment can reduce your borrowing by £4,000-£5,000. Consider paying off car finance or credit cards before applying. Student loans have less impact as they're income-contingent.",
        },
        {
          title: "Save a Larger Deposit",
          content: "A bigger deposit means lower LTV, which unlocks better interest rates and potentially higher income multiples. Moving from 10% to 15% deposit can make a significant difference to the deals available.",
        },
        {
          title: "Consider All Income Sources",
          content: "Overtime, bonuses, and commission can often be included (usually averaged over 2 years). Rental income from buy-to-let properties, dividends, and pension income may also count towards affordability.",
        },
        {
          title: "Factor in All Costs",
          content: "Remember that buying a home involves more than just the deposit. Budget for stamp duty, solicitor fees, surveys, and moving costs. These can add £5,000-£20,000+ depending on property price.",
        },
      ]}
      faqs={[
        {
          question: "How do lenders calculate how much I can borrow?",
          answer: "Lenders use a combination of income multiples (typically 4-4.5x salary) and detailed affordability assessments. They'll examine your income, regular outgoings, existing debts, credit history, and living costs to ensure monthly payments are sustainable.",
        },
        {
          question: "Can I borrow more than 4.5 times my salary?",
          answer: "Some lenders offer up to 5-5.5x income in specific circumstances, such as certain professions (doctors, solicitors, accountants), large deposits (40%+), or through specific schemes. However, most borrowers will be limited to 4-4.5x.",
        },
        {
          question: "Does my partner's income count?",
          answer: "Yes, on a joint mortgage application, both incomes are combined. So two people earning £40,000 each could borrow the same as one person earning £80,000 (around £320,000 at 4x income).",
        },
        {
          question: "How do existing debts affect my borrowing?",
          answer: "Lenders consider your total monthly outgoings including loans, credit cards, car finance, and other commitments. As a rough guide, each £100 of monthly debt could reduce your borrowing capacity by £4,000-£5,000.",
        },
        {
          question: "What deposit do I need?",
          answer: "Minimum deposits are typically 5-10% of the property price, but larger deposits (15-25%) unlock better interest rates. First-time buyers may access schemes like Help to Buy that require just 5% deposit.",
        },
        {
          question: "Will my credit score affect how much I can borrow?",
          answer: "A poor credit score may limit which lenders will accept you, potentially restricting you to specialist lenders with lower income multiples and higher rates. A good score opens up the full market and best rates.",
        },
      ]}
      relatedLinks={[
        {
          title: "Mortgage Repayment Calculator",
          href: "/calculators/mortgage-repayment-calculator",
          description: "Calculate your monthly payments at different borrowing levels.",
        },
        {
          title: "Stamp Duty Calculator",
          href: "/calculators/stamp-duty-calculator",
          description: "Factor in SDLT costs when budgeting for your purchase.",
        },
        {
          title: "First-Time Buyer Mortgage Guide",
          href: "/mortgage-types/first-time-buyer-mortgage",
          description: "Special schemes and tips for first-time buyers.",
        },
        {
          title: "Mortgage Rates UK",
          href: "/mortgage-rates",
          description: "Compare current rates to estimate your payments.",
        },
        {
          title: "Mortgage Overpayment Calculator",
          href: "/calculators/mortgage-overpayment-calculator",
          description: "Plan how to pay off your mortgage faster once you've bought.",
        },
      ]}
      summary={
        <p>
          The <strong>how much can I borrow calculator</strong> gives you a realistic starting point for
          your property search based on your income and circumstances. Remember that these are estimates—
          actual lending decisions depend on a full assessment of your finances, credit history, and the
          property you&apos;re buying. To maximise your borrowing potential, focus on reducing existing debts,
          improving your credit score, and saving the largest deposit you can. Ready to see what your
          payments would be? Try our{" "}
          <Link href="/" className="text-blue-600 hover:underline">main mortgage calculator</Link> to
          explore different scenarios.
        </p>
      }
    />
  );
}
