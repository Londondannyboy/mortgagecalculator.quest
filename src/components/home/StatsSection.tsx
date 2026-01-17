'use client'

import { useEffect, useState, useRef } from 'react'

const stats = [
  {
    value: 600000,
    suffix: '+',
    label: 'Annual searches',
    description: 'People searching for our calculators',
    icon: '🔍',
  },
  {
    value: 50000,
    suffix: '+',
    label: 'Calculations',
    description: 'Mortgage calculations performed',
    icon: '🧮',
  },
  {
    value: 99,
    suffix: '%',
    label: 'Accuracy',
    description: 'Based on HMRC & lender criteria',
    icon: '✓',
  },
  {
    value: 4.5,
    suffix: '',
    prefix: '£',
    label: 'Avg base rate',
    description: 'Bank of England rate',
    icon: '📈',
  },
]

function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 2000,
}: {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          const steps = 60
          const stepDuration = duration / steps
          const increment = value / steps

          let currentStep = 0
          const timer = setInterval(() => {
            currentStep++
            setCount(Math.min(value, increment * currentStep))
            if (currentStep >= steps) {
              clearInterval(timer)
              setCount(value)
            }
          }, stepDuration)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  const displayValue = value % 1 === 0 ? Math.round(count).toLocaleString() : count.toFixed(1)

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
      {prefix}{displayValue}{suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by UK Homebuyers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our calculators are used by thousands of people every month to make
            informed decisions about their mortgages.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative text-center p-6 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                <span className="text-3xl mb-4 block">{stat.icon}</span>
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-200 mt-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Official Sources & Partners
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <a
              href="https://www.gov.uk/stamp-duty-land-tax"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <span className="text-2xl">🏛️</span>
              <span className="font-medium">HMRC</span>
            </a>
            <a
              href="https://www.bankofengland.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <span className="text-2xl">🏦</span>
              <span className="font-medium">Bank of England</span>
            </a>
            <a
              href="https://www.moneyhelper.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <span className="text-2xl">💷</span>
              <span className="font-medium">Money Helper</span>
            </a>
            <a
              href="https://www.fca.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <span className="text-2xl">📜</span>
              <span className="font-medium">FCA</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
