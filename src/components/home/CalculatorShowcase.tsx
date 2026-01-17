'use client'

import Link from 'next/link'
import { useState } from 'react'

const calculators = [
  {
    title: 'Stamp Duty Calculator',
    href: '/calculators/stamp-duty-calculator',
    description: 'Calculate SDLT for England & Northern Ireland with first-time buyer relief.',
    icon: '📋',
    gradient: 'from-rose-500 to-pink-500',
    searchVolume: '368K',
    features: ['First-time buyer rates', 'Additional property surcharge', 'Full breakdown'],
  },
  {
    title: 'Mortgage Repayment',
    href: '/calculators/mortgage-repayment-calculator',
    description: 'Calculate your monthly mortgage payments and total interest costs.',
    icon: '🏠',
    gradient: 'from-blue-500 to-cyan-500',
    searchVolume: '110K',
    features: ['Monthly payments', 'Total interest', 'Amortisation'],
  },
  {
    title: 'Overpayment Calculator',
    href: '/calculators/mortgage-overpayment-calculator',
    description: 'See how much you could save by overpaying your mortgage.',
    icon: '💰',
    gradient: 'from-emerald-500 to-teal-500',
    searchVolume: '74K',
    features: ['Interest saved', 'Years saved', 'Visual comparison'],
  },
  {
    title: 'How Much Can I Borrow',
    href: '/calculators/how-much-can-i-borrow-calculator',
    description: 'Estimate your borrowing power based on your income.',
    icon: '📊',
    gradient: 'from-violet-500 to-purple-500',
    searchVolume: '33K',
    features: ['Income multiples', 'Joint applications', 'Debt impact'],
  },
  {
    title: 'Buy to Let Calculator',
    href: '/calculators/buy-to-let-mortgage-calculator',
    description: 'Analyse BTL investments with rental yield and ICR calculations.',
    icon: '🏢',
    gradient: 'from-amber-500 to-orange-500',
    searchVolume: '27K',
    features: ['Rental yield', 'ICR analysis', 'Cashflow'],
  },
  {
    title: 'Remortgage Calculator',
    href: '/calculators/remortgage-calculator',
    description: 'Compare your current deal with new rates and see potential savings.',
    icon: '🔄',
    gradient: 'from-indigo-500 to-blue-500',
    searchVolume: '27K',
    features: ['Rate comparison', 'Break-even analysis', 'Fee calculation'],
  },
]

export function CalculatorShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
            Free Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            UK Mortgage Calculators
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional-grade calculators used by thousands of UK homebuyers every month.
            All tools are free, instant, and require no registration.
          </p>
        </div>

        {/* Calculator grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc, index) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${calc.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
              />

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full group-hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{calc.icon}</span>
                  <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                    {calc.searchVolume} searches/mo
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">
                  {calc.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {calc.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {calc.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                  <span>Try calculator</span>
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${
                      hoveredIndex === index ? 'translate-x-1' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            href="/calculators"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            View All Calculators
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
