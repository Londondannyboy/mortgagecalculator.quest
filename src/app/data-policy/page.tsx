import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Policy | Mortgage Calculator Quest",
  description: "Data Policy for Mortgage Calculator Quest. Learn how we handle and process your data.",
};

export default function DataPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600 dark:text-gray-300">Data Policy</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Data Policy
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            <strong>Last updated:</strong> January 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              1. Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              This Data Policy explains what data we collect, how it&apos;s processed, and how long we
              retain it. This policy supplements our{' '}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              2. Data We Collect
            </h2>

            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">
              2.1 Calculator Data
            </h3>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-left py-2 text-gray-700 dark:text-gray-200">Data Type</th>
                    <th className="text-left py-2 text-gray-700 dark:text-gray-200">Stored?</th>
                    <th className="text-left py-2 text-gray-700 dark:text-gray-200">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">Loan amounts</td>
                    <td className="py-2">Session only*</td>
                    <td className="py-2">Calculator function</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">Interest rates</td>
                    <td className="py-2">Session only*</td>
                    <td className="py-2">Calculator function</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">Property values</td>
                    <td className="py-2">Session only*</td>
                    <td className="py-2">Calculator function</td>
                  </tr>
                  <tr>
                    <td className="py-2">Chat conversations</td>
                    <td className="py-2">If logged in**</td>
                    <td className="py-2">AI assistance</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                * Cleared when you close your browser<br/>
                ** Stored to provide personalised assistance; can be deleted on request
              </p>
            </div>

            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">
              2.2 Account Data
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you create an account, we store:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Email address (for authentication)</li>
              <li>Display name (optional)</li>
              <li>Profile picture (if provided via OAuth)</li>
              <li>Authentication provider information</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">
              2.3 Analytics Data
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We collect anonymised usage data including page views, calculator usage patterns, and
              general geographic region. This data cannot identify you personally.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              3. Data Processing
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your data may be processed by the following services:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-medium text-gray-700 dark:text-gray-200">Neon Database</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Stores account data and chat history for logged-in users. Data centre location: EU.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-medium text-gray-700 dark:text-gray-200">Vercel</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Hosts our website. Processes requests and serves content. Edge locations worldwide.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-medium text-gray-700 dark:text-gray-200">AI Services</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Chat conversations are processed by AI models to provide assistance. Conversations
                  may be used to improve AI services as per provider terms.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              4. Data Retention
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-left py-2 text-gray-700 dark:text-gray-200">Data Type</th>
                    <th className="text-left py-2 text-gray-700 dark:text-gray-200">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">Session data</td>
                    <td className="py-2">Browser session</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">Account data</td>
                    <td className="py-2">Until account deletion</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">Chat history</td>
                    <td className="py-2">90 days, or until deletion</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2">Analytics</td>
                    <td className="py-2">26 months (anonymised)</td>
                  </tr>
                  <tr>
                    <td className="py-2">Server logs</td>
                    <td className="py-2">30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              5. Data Transfers
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Some of our service providers may process data outside the UK/EEA. Where this occurs,
              we ensure appropriate safeguards are in place (such as Standard Contractual Clauses)
              to protect your data in accordance with UK GDPR requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              6. Your Data Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You can exercise the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li><strong>Access:</strong> Request a copy of your data</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Export:</strong> Receive your data in a portable format</li>
              <li><strong>Correction:</strong> Update inaccurate information</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              To exercise these rights, contact us through our website or delete your account from
              your profile settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              7. Security Measures
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We protect your data using:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>HTTPS encryption for all data transmission</li>
              <li>Encrypted data storage at rest</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
              <li>Secure coding practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              8. Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              For data-related enquiries or to exercise your rights, please contact us through
              our website.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
