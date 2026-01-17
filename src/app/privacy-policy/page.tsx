import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Mortgage Calculator Quest",
  description: "Privacy Policy for Mortgage Calculator Quest. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600 dark:text-gray-300">Privacy Policy</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Privacy Policy
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            <strong>Last updated:</strong> January 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Mortgage Calculator Quest (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed
              to protecting your personal data. This privacy policy explains how we collect, use, and
              safeguard your information when you use our website at mortgagecalculator.quest.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
              2.1 Information You Provide
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Account information (name, email) when you sign up</li>
              <li>Calculator inputs (loan amounts, rates, property values)</li>
              <li>Communications you send to us</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
              2.2 Information Collected Automatically
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Device information (browser type, operating system)</li>
              <li>Usage data (pages visited, time spent)</li>
              <li>Cookies and similar technologies</li>
              <li>IP address and approximate location</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Provide and improve our calculator services</li>
              <li>Remember your calculator settings and preferences</li>
              <li>Analyse usage patterns to enhance user experience</li>
              <li>Respond to your enquiries and support requests</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              4. Cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li><strong>Essential cookies:</strong> Required for site functionality</li>
              <li><strong>Preference cookies:</strong> Remember your settings</li>
              <li><strong>Analytics cookies:</strong> Understand how visitors use our site</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              You can control cookies through your browser settings. Disabling cookies may affect
              site functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              5. Data Sharing
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We do not sell your personal data. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Service providers who help operate our website</li>
              <li>Analytics partners (in aggregated, anonymised form)</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              6. Data Security
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We implement appropriate technical and organisational measures to protect your data,
              including encryption in transit and at rest. However, no method of transmission over
              the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              7. Your Rights (UK GDPR)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Under UK data protection law, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              8. Data Retention
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We retain personal data only as long as necessary for the purposes described in this
              policy, or as required by law. Calculator inputs are not stored unless you create an
              account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              9. Third-Party Links
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our site contains links to external websites (e.g., HMRC, Bank of England). We are
              not responsible for the privacy practices of these third-party sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              10. Changes to This Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We may update this policy from time to time. We will notify you of significant changes
              by posting a notice on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              For privacy-related enquiries, please contact us through our website.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/terms-of-service" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
              Terms of Service
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
