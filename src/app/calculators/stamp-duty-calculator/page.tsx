import { Metadata } from "next";
import { ContentPageLayout } from "@/components/content/ContentPageLayout";
import { StampDutyCalculator } from "@/components/calculators/StampDutyCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stamp Duty Calculator UK 2025 | Calculate SDLT | Mortgage Calculator Quest",
  description: "Free UK stamp duty calculator for 2025. Calculate SDLT on your property purchase instantly. First-time buyer relief, additional property rates, and full breakdown included.",
  keywords: "stamp duty calculator, SDLT calculator, stamp duty UK, stamp duty land tax, first time buyer stamp duty",
  openGraph: {
    title: "Stamp Duty Calculator UK 2025 | Calculate SDLT",
    description: "Calculate your UK stamp duty instantly. First-time buyer relief, additional property surcharges, and complete band breakdown.",
    type: "website",
  },
};

export default function StampDutyCalculatorPage() {
  return (
    <ContentPageLayout
      title="Stamp Duty Calculator UK - Calculate Your SDLT Instantly"
      primaryKeyword="Stamp Duty Calculator"
      introduction={
        <p>
          Our <strong>stamp duty calculator</strong> helps you work out exactly how much Stamp Duty Land Tax (SDLT)
          you&apos;ll pay when buying a property in England or Northern Ireland. Based on the latest{" "}
          <a href="https://www.gov.uk/stamp-duty-land-tax" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            HMRC Stamp Duty Land Tax rates
          </a>, whether you&apos;re a first-time buyer taking advantage of stamp duty relief, purchasing an additional
          property, or simply want to understand the{" "}
          <Link href="/" className="text-blue-600 hover:underline">costs involved in your mortgage</Link>,
          this calculator provides an instant, accurate breakdown of your stamp duty obligations.
        </p>
      }
      calculator={<StampDutyCalculator />}
      howItWorks={
        <div className="space-y-4">
          <p>
            Stamp Duty Land Tax is a tax you pay when buying property or land over a certain price in England
            and Northern Ireland. The stamp duty calculator works by applying different tax rates to different
            portions of the property price, known as &quot;bands&quot;.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Current Stamp Duty Rates (2024/25)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="text-left p-3 border">Property Band</th>
                  <th className="text-right p-3 border">Standard Rate</th>
                  <th className="text-right p-3 border">First-Time Buyer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Up to £250,000</td>
                  <td className="text-right p-3 border">0%</td>
                  <td className="text-right p-3 border">0% (up to £425,000)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="p-3 border">£250,001 - £925,000</td>
                  <td className="text-right p-3 border">5%</td>
                  <td className="text-right p-3 border">5% (£425,001 - £625,000)</td>
                </tr>
                <tr>
                  <td className="p-3 border">£925,001 - £1,500,000</td>
                  <td className="text-right p-3 border">10%</td>
                  <td className="text-right p-3 border">Standard rates apply</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="p-3 border">Over £1,500,000</td>
                  <td className="text-right p-3 border">12%</td>
                  <td className="text-right p-3 border">Standard rates apply</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Additional Property Surcharge:</strong> If you&apos;re buying a second home or buy-to-let property,
            you&apos;ll pay an additional 3% on top of the standard rates across all bands.
          </p>
        </div>
      }
      resultsExplanation={
        <div className="space-y-4">
          <p>
            The stamp duty calculator shows you the total SDLT you&apos;ll owe, along with a detailed breakdown
            of how the tax is calculated across each band. Understanding these results helps you budget
            accurately for your property purchase.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">What Your Results Mean</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Total Stamp Duty:</strong> The complete amount you&apos;ll need to pay to HMRC,
              typically due within 14 days of completion
            </li>
            <li>
              <strong>Effective Rate:</strong> The stamp duty as a percentage of the total property price,
              useful for comparing against other purchase costs
            </li>
            <li>
              <strong>Band Breakdown:</strong> Shows exactly how much tax applies at each rate,
              so you can see how the progressive system works
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Important Considerations</h3>
          <p>
            Remember that stamp duty must be paid within 14 days of completion. Your solicitor or conveyancer
            usually handles this payment on your behalf, but you&apos;ll need to ensure you have funds available.
            Consider using our <Link href="/calculators/mortgage-repayment-calculator" className="text-blue-600 hover:underline">mortgage
            repayment calculator</Link> to see how stamp duty affects your overall budget.
          </p>
        </div>
      }
      marketOverview={
        <div className="space-y-4">
          <p>
            The UK property market has seen significant changes to stamp duty thresholds in recent years.
            According to{" "}
            <a href="https://www.gov.uk/stamp-duty-land-tax/residential-property-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              official HMRC guidance
            </a>, the current rates came into effect from April 2025, with the nil-rate band set at £250,000
            for standard buyers and £425,000 for first-time buyers purchasing properties up to £625,000.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="text-left p-3 border">Property Price Example</th>
                  <th className="text-right p-3 border">Standard Buyer</th>
                  <th className="text-right p-3 border">First-Time Buyer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">£250,000</td>
                  <td className="text-right p-3 border">£0</td>
                  <td className="text-right p-3 border">£0</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="p-3 border">£350,000</td>
                  <td className="text-right p-3 border">£5,000</td>
                  <td className="text-right p-3 border">£0</td>
                </tr>
                <tr>
                  <td className="p-3 border">£500,000</td>
                  <td className="text-right p-3 border">£12,500</td>
                  <td className="text-right p-3 border">£3,750</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="p-3 border">£750,000</td>
                  <td className="text-right p-3 border">£25,000</td>
                  <td className="text-right p-3 border">Standard rates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      }
      tips={[
        {
          title: "Plan for First-Time Buyer Relief",
          content: "If you're a first-time buyer, you can save significantly on properties up to £625,000. On a £500,000 property, you'd save £8,750 compared to a standard buyer.",
        },
        {
          title: "Factor Stamp Duty into Your Budget Early",
          content: "Include stamp duty in your initial calculations alongside your deposit. Use our mortgage calculator to see the full picture of your purchase costs.",
        },
        {
          title: "Understand the Additional Property Surcharge",
          content: "If you already own property (including overseas), you'll likely pay the 3% surcharge. However, you may be able to reclaim this if you sell your previous main residence within 3 years.",
        },
        {
          title: "Consider the £250,000 Threshold",
          content: "Properties priced at exactly £250,000 or below pay no stamp duty for standard buyers. If a property is priced just above this, negotiating the price down could save you thousands.",
        },
        {
          title: "Check If Scotland or Wales Rules Apply",
          content: "This calculator covers England and Northern Ireland. Scotland has Land and Buildings Transaction Tax (LBTT), and Wales has Land Transaction Tax (LTT) with different rates.",
        },
      ]}
      faqs={[
        {
          question: "How is stamp duty calculated in the UK?",
          answer: "Stamp duty is calculated using a progressive system where different tax rates apply to different portions of the property price. For example, on a £300,000 property, you'd pay 0% on the first £250,000 and 5% on the remaining £50,000, giving a total stamp duty of £2,500.",
        },
        {
          question: "Do first-time buyers pay stamp duty?",
          answer: "First-time buyers pay no stamp duty on properties up to £425,000. For properties between £425,001 and £625,000, they pay 5% only on the amount above £425,000. Properties over £625,000 are charged at standard rates.",
        },
        {
          question: "When do I need to pay stamp duty?",
          answer: "Stamp duty must be paid within 14 days of completion. Your solicitor or conveyancer typically handles this, submitting a return to HMRC and paying the tax on your behalf from the funds you provide at completion.",
        },
        {
          question: "What is the additional property surcharge?",
          answer: "If you're buying a second home or buy-to-let property and will own more than one property at the end of the transaction, you'll pay an additional 3% surcharge on top of standard rates. This applies to the entire property value.",
        },
        {
          question: "Can I reclaim stamp duty surcharge?",
          answer: "Yes, if you paid the additional property surcharge because you hadn't sold your previous main residence, you can apply for a refund if you sell that property within 3 years of buying the new one.",
        },
        {
          question: "Is stamp duty different in Scotland and Wales?",
          answer: "Yes. Scotland uses Land and Buildings Transaction Tax (LBTT) and Wales uses Land Transaction Tax (LTT). Both have different rates and thresholds to the SDLT system used in England and Northern Ireland.",
        },
      ]}
      relatedLinks={[
        {
          title: "Mortgage Repayment Calculator",
          href: "/calculators/mortgage-repayment-calculator",
          description: "Calculate your monthly mortgage payments and total interest costs.",
        },
        {
          title: "How Much Can I Borrow Calculator",
          href: "/calculators/how-much-can-i-borrow-calculator",
          description: "Find out your borrowing potential based on your income and circumstances.",
        },
        {
          title: "First-Time Buyer Mortgage Guide",
          href: "/mortgage-types/first-time-buyer-mortgage",
          description: "Everything you need to know about getting your first mortgage.",
        },
        {
          title: "Mortgage Rates UK",
          href: "/mortgage-rates",
          description: "Compare current mortgage rates from UK lenders.",
        },
        {
          title: "Mortgage Overpayment Calculator",
          href: "/calculators/mortgage-overpayment-calculator",
          description: "See how overpaying your mortgage could save you thousands.",
        },
      ]}
      summary={
        <p>
          The <strong>stamp duty calculator</strong> is an essential tool for anyone buying property in England
          or Northern Ireland. By understanding exactly how much SDLT you&apos;ll pay, you can budget effectively
          and avoid any surprises at completion. Remember to factor in first-time buyer relief if you qualify,
          and don&apos;t forget to include stamp duty alongside your deposit when planning your property purchase.
          Use our <Link href="/" className="text-blue-600 hover:underline">mortgage calculator</Link> to see
          the complete picture of your homebuying costs.
        </p>
      }
    />
  );
}
