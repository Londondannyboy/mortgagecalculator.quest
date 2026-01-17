import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Mortgage Calculator Quest",
  description: "Terms of Service for Mortgage Calculator Quest. Please read these terms carefully before using our mortgage calculators.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600 dark:text-gray-300">Terms of Service</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Terms of Service
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            <strong>Last updated:</strong> January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              By accessing and using Mortgage Calculator Quest (mortgagecalculator.quest), you accept
              and agree to be bound by these Terms of Service. If you do not agree to these terms,
              please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Mortgage Calculator Quest provides free online mortgage calculators and educational
              content for UK homebuyers and property investors. Our services include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Mortgage payment calculators</li>
              <li>Stamp duty calculators</li>
              <li>Affordability assessments</li>
              <li>Educational guides and articles</li>
              <li>AI-powered chat assistance</li>
            </ul>
          </section>

          <section className="mb-8 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
              3. Important Disclaimer - Not Financial Advice
            </h2>
            <p className="text-amber-700 dark:text-amber-300 mb-4">
              <strong>Mortgage Calculator Quest does NOT provide financial advice.</strong>
            </p>
            <p className="text-amber-700 dark:text-amber-300 mb-4">
              The calculators, tools, and information on this website are provided for educational
              and informational purposes only. They should not be relied upon as a substitute for
              professional financial advice.
            </p>
            <p className="text-amber-700 dark:text-amber-300 mb-4">
              Before making any financial decisions, you should:
            </p>
            <ul className="list-disc pl-6 text-amber-700 dark:text-amber-300">
              <li>Consult with a qualified, FCA-regulated mortgage adviser</li>
              <li>Verify information with official sources such as{' '}
                <a href="https://www.gov.uk/stamp-duty-land-tax" target="_blank" rel="noopener noreferrer" className="underline">HMRC</a>
              </li>
              <li>Seek independent legal and tax advice where appropriate</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              4. Beta Status
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              This website is currently in beta. Features may change, contain errors, or be
              unavailable at times. We make no guarantees about the accuracy, completeness, or
              reliability of our calculators or content during this beta period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              5. Accuracy of Calculations
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              While we strive to ensure our calculators are accurate based on current UK regulations
              and typical lending criteria:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Calculations are estimates only and may not reflect actual mortgage offers</li>
              <li>Stamp duty rates and thresholds are subject to change by government policy</li>
              <li>Lending criteria vary between lenders and individual circumstances</li>
              <li>Tax implications depend on your personal situation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              6. User Accounts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you create an account:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must provide accurate information</li>
              <li>You must not share your account with others</li>
              <li>We reserve the right to suspend or terminate accounts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              7. Acceptable Use
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Use our services for any unlawful purpose</li>
              <li>Attempt to gain unauthorised access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Scrape, copy, or reproduce our content without permission</li>
              <li>Use automated systems to access our services excessively</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              8. Intellectual Property
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              All content on this website, including text, graphics, logos, and software, is owned
              by Mortgage Calculator Quest or our licensors. You may not reproduce, distribute, or
              create derivative works without our written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>We provide our services &quot;as is&quot; without warranties of any kind</li>
              <li>We are not liable for any financial decisions made based on our calculators</li>
              <li>We are not liable for any indirect, incidental, or consequential damages</li>
              <li>Our total liability shall not exceed the amount you paid us (if any)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              10. External Links
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our website contains links to third-party websites (including government sites like
              HMRC and Money Helper). We are not responsible for the content or privacy practices
              of these external sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              11. Changes to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We may modify these terms at any time. Continued use of our services after changes
              constitutes acceptance of the modified terms. Material changes will be notified via
              our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              12. Governing Law
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              These terms are governed by English law. Any disputes will be subject to the exclusive
              jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              13. Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              For questions about these terms, please contact us through our website.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/data-policy" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
              Data Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
