'use client'

import { useState } from 'react'
import Script from 'next/script'

const faqs = [
  {
    question: 'How accurate is this mortgage calculator?',
    answer: 'Our mortgage calculator uses the standard UK mortgage amortisation formula and is highly accurate for estimating monthly payments. Results are based on the interest rate and term you input. Actual payments may vary slightly based on lender-specific calculation methods, fees, and insurance requirements.',
  },
  {
    question: 'How much deposit do I need for a mortgage in the UK?',
    answer: 'Most UK lenders require a minimum 5-10% deposit, though 15-20% will unlock better interest rates. First-time buyers may access special schemes with 5% deposits. The more deposit you have, the lower your loan-to-value (LTV) ratio and the better rates available to you.',
  },
  {
    question: 'What is the current Bank of England base rate?',
    answer: 'As of January 2025, the Bank of England base rate is 4.50%. This rate influences all UK mortgage rates, with fixed rates typically priced based on future rate expectations and tracker mortgages directly following the base rate plus a margin.',
  },
  {
    question: 'How much can I borrow for a mortgage?',
    answer: 'UK lenders typically offer 4-4.5 times your annual income, though some offer up to 5-5.5x for certain professions or larger deposits. Use our How Much Can I Borrow calculator to get an estimate based on your income and circumstances.',
  },
  {
    question: 'Do first-time buyers pay stamp duty?',
    answer: 'First-time buyers in England and Northern Ireland pay no stamp duty on properties up to £425,000. For properties between £425,001 and £625,000, they pay 5% only on the amount above £425,000. Properties over £625,000 are charged at standard rates.',
  },
  {
    question: 'What is the difference between fixed and tracker mortgages?',
    answer: 'Fixed rate mortgages lock in your interest rate for a set period (typically 2-5 years), giving predictable payments. Tracker mortgages follow the Bank of England base rate plus a margin, so your payments change when the base rate changes. Fixed rates offer certainty, while trackers can benefit from rate cuts.',
  },
  {
    question: 'Should I overpay my mortgage?',
    answer: 'Overpaying can save thousands in interest and help you become mortgage-free years earlier. Most mortgages allow 10% overpayment per year without penalty. Before overpaying, ensure you have adequate emergency savings and no higher-interest debts. Use our Overpayment Calculator to see potential savings.',
  },
  {
    question: 'How does stamp duty work for buy-to-let properties?',
    answer: 'Buy-to-let and additional properties attract a 3% surcharge on top of standard stamp duty rates across all bands. This surcharge applies to the entire property value. Use our Stamp Duty Calculator to see the exact amount for your purchase.',
  },
]

// Generate FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Common questions about UK mortgages and our calculators
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Still have questions? Our AI assistant can help.
            </p>
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
            >
              <span>Ask the AI Assistant</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
