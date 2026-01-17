"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedLink {
  title: string;
  href: string;
  description: string;
}

interface ContentPageLayoutProps {
  // SEO
  title: string;
  primaryKeyword: string;

  // Content sections
  introduction: ReactNode;
  calculator?: ReactNode;
  howItWorks: ReactNode;
  resultsExplanation: ReactNode;
  marketOverview?: ReactNode;
  tips: { title: string; content: string }[];
  faqs: FAQItem[];
  relatedLinks: RelatedLink[];
  summary: ReactNode;

  // Optional
  children?: ReactNode;
  lastUpdated?: string;
}

export function ContentPageLayout({
  title,
  primaryKeyword,
  introduction,
  calculator,
  howItWorks,
  resultsExplanation,
  marketOverview,
  tips,
  faqs,
  relatedLinks,
  summary,
  children,
  lastUpdated = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
}: ContentPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Quick Links Navigation */}
        <nav className="mb-6 text-sm">
          <span className="text-gray-600 dark:text-gray-400 font-medium">Quick Links: </span>
          <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Mortgage Calculator</Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/calculators" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Calculators</Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/mortgage-rates" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Mortgage Rates</Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/mortgage-types" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Mortgage Types</Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/guides" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Guides</Link>
        </nav>

        {/* H1 Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          {title}
        </h1>

        {/* Introduction */}
        <div className="prose dark:prose-invert max-w-none mb-8">
          {introduction}
        </div>

        {/* Anchor Links */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 shadow-sm">
          <span className="text-gray-600 dark:text-gray-400 font-medium">Jump to: </span>
          <a href="#how-it-works" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">How It Works</a>
          {calculator && (
            <>
              <span className="mx-2 text-gray-400">|</span>
              <a href="#calculator" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Calculator</a>
            </>
          )}
          <span className="mx-2 text-gray-400">|</span>
          <a href="#results" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Results Guide</a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#tips" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Tips</a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#faqs" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">FAQs</a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#related" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Related</a>
        </div>

        {/* How It Works Section */}
        <section id="how-it-works" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            How {primaryKeyword} Works
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            {howItWorks}
          </div>
        </section>

        {/* Calculator Section */}
        {calculator && (
          <section id="calculator" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              {primaryKeyword}
            </h2>
            {calculator}
          </section>
        )}

        {/* Additional Content */}
        {children}

        {/* Understanding Results */}
        <section id="results" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Understanding Your {primaryKeyword} Results
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            {resultsExplanation}
          </div>
        </section>

        {/* Market Overview */}
        {marketOverview && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              {primaryKeyword.split(' ')[0]} in the UK: Current Overview
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              {marketOverview}
            </div>
          </section>
        )}

        {/* Tips Section */}
        <section id="tips" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Top Tips for Using the {primaryKeyword}
          </h2>
          <div className="space-y-4">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  {index + 1}. {tip.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Frequently Asked Questions About {primaryKeyword}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section id="related" className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Related Mortgage Tools & Resources
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Explore more calculators and guides to help with your mortgage journey:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Summary
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            {summary}
          </div>
        </section>

        {/* Footer / Disclaimer */}
        <footer className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-10">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            <em>Last updated: {lastUpdated}</em>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Your home may be repossessed if you do not keep up repayments on your mortgage.
            Mortgage Calculator Quest provides tools and information for educational purposes.
            Always seek professional financial advice before making mortgage decisions.
          </p>
        </footer>
      </div>
    </div>
  );
}
