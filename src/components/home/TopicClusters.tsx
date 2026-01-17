'use client'

import Link from 'next/link'

const topics = [
  {
    title: 'First-Time Buyers',
    icon: '🏡',
    description: 'Everything you need to get on the property ladder',
    gradient: 'from-blue-500 to-cyan-500',
    links: [
      { label: 'First-Time Buyer Mortgage', href: '/mortgage-types/first-time-buyer-mortgage' },
      { label: 'How Much Can I Borrow', href: '/calculators/how-much-can-i-borrow-calculator' },
      { label: 'Stamp Duty Relief', href: '/calculators/stamp-duty-calculator' },
      { label: 'First-Time Buyer Guide', href: '/guides/first-time-buyer-guide' },
    ],
  },
  {
    title: 'Property Investors',
    icon: '🏢',
    description: 'Tools and guides for landlords and BTL investors',
    gradient: 'from-purple-500 to-pink-500',
    links: [
      { label: 'Buy to Let Calculator', href: '/calculators/buy-to-let-mortgage-calculator' },
      { label: 'BTL Mortgage Guide', href: '/mortgage-types/buy-to-let-mortgage' },
      { label: 'Rental Yield Analysis', href: '/calculators/buy-to-let-mortgage-calculator' },
      { label: 'Additional Property Stamp Duty', href: '/calculators/stamp-duty-calculator' },
    ],
  },
  {
    title: 'Existing Homeowners',
    icon: '🔄',
    description: 'Remortgaging, overpayments, and savings strategies',
    gradient: 'from-emerald-500 to-teal-500',
    links: [
      { label: 'Overpayment Calculator', href: '/calculators/mortgage-overpayment-calculator' },
      { label: 'Remortgage Guide', href: '/mortgage-types/remortgage' },
      { label: 'Current Mortgage Rates', href: '/mortgage-rates' },
      { label: 'Fixed vs Tracker', href: '/mortgage-types' },
    ],
  },
]

const mortgageTypes = [
  {
    title: 'Fixed Rate',
    href: '/mortgage-types/fixed-rate-mortgage',
    description: 'Predictable payments for 2-5 years',
    icon: '📊',
  },
  {
    title: 'Tracker',
    href: '/mortgage-types/tracker-mortgage',
    description: 'Follows Bank of England rate',
    icon: '📈',
  },
  {
    title: 'Interest Only',
    href: '/mortgage-types/interest-only-mortgage',
    description: 'Lower payments, capital owed at end',
    icon: '💳',
  },
  {
    title: 'Remortgage',
    href: '/mortgage-types/remortgage',
    description: 'Switch to a better deal',
    icon: '🔄',
  },
]

export function TopicClusters() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
            Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mortgage Guides & Resources
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive guides and tools for every stage of your mortgage journey.
          </p>
        </div>

        {/* Topic clusters */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity`}
              />

              <div className="relative bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{topic.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                  {topic.description}
                </p>
                <ul className="space-y-3">
                  {topic.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-gray-400 group-hover/link:text-blue-500 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mortgage types quick links */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Explore Mortgage Types
            </h3>
            <p className="text-gray-300">
              Find the right mortgage for your situation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mortgageTypes.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center transition-all hover:scale-105 border border-white/10"
              >
                <span className="text-3xl block mb-2">{type.icon}</span>
                <h4 className="font-semibold text-white text-sm mb-1">{type.title}</h4>
                <p className="text-xs text-gray-400">{type.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/mortgage-types"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
            >
              View all mortgage types
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
