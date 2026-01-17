'use client'

import Link from 'next/link'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const rateData = [
  { month: 'Jul', twoYear: 5.8, fiveYear: 5.5, baseRate: 5.25 },
  { month: 'Aug', twoYear: 5.6, fiveYear: 5.3, baseRate: 5.25 },
  { month: 'Sep', twoYear: 5.4, fiveYear: 5.2, baseRate: 5.25 },
  { month: 'Oct', twoYear: 5.2, fiveYear: 5.0, baseRate: 5.0 },
  { month: 'Nov', twoYear: 5.0, fiveYear: 4.8, baseRate: 5.0 },
  { month: 'Dec', twoYear: 4.8, fiveYear: 4.6, baseRate: 4.75 },
  { month: 'Jan', twoYear: 4.5, fiveYear: 4.3, baseRate: 4.5 },
]

const currentRates = [
  { ltv: '60%', twoYear: '4.19%', fiveYear: '4.09%' },
  { ltv: '75%', twoYear: '4.49%', fiveYear: '4.29%' },
  { ltv: '85%', twoYear: '4.89%', fiveYear: '4.69%' },
  { ltv: '90%', twoYear: '5.19%', fiveYear: '5.09%' },
]

export function RatesOverview() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium mb-4">
              Live Data
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              UK Mortgage Rates
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              Current rates from leading UK lenders. Updated January 2025.
            </p>
          </div>
          <Link
            href="/mortgage-rates"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline mt-4 md:mt-0"
          >
            View all rates
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Rate Trends (6 Months)
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={rateData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTwoYear" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorFiveYear" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="month"
                    stroke="#6b7280"
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#6b7280"
                    fontSize={12}
                    tickLine={false}
                    domain={[4, 6]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (!active || !payload?.length) return null
                      return (
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                          <p className="font-semibold text-gray-800 dark:text-white">{label} 2024/25</p>
                          {payload.map((entry, index) => (
                            <p key={index} className="text-sm" style={{ color: entry.color }}>
                              {entry.name}: {entry.value}%
                            </p>
                          ))}
                        </div>
                      )
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="twoYear"
                    name="2-Year Fixed"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorTwoYear)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="fiveYear"
                    name="5-Year Fixed"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorFiveYear)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">2-Year Fixed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">5-Year Fixed</span>
              </div>
            </div>
          </div>

          {/* Rate table */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Current Rates by LTV
            </h3>
            <div className="space-y-3">
              {currentRates.map((rate, index) => (
                <div
                  key={rate.ltv}
                  className={`flex items-center justify-between p-4 rounded-xl ${
                    index === 0
                      ? 'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800'
                      : 'bg-gray-50 dark:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-gray-900 dark:text-white w-12">
                      {rate.ltv}
                    </span>
                    {index === 0 && (
                      <span className="text-xs font-medium px-2 py-1 bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-full">
                        Best rates
                      </span>
                    )}
                  </div>
                  <div className="flex gap-8">
                    <div className="text-right">
                      <div className="text-xs text-gray-500 dark:text-gray-400">2-Year</div>
                      <div className="font-semibold text-blue-600 dark:text-blue-400">{rate.twoYear}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 dark:text-gray-400">5-Year</div>
                      <div className="font-semibold text-emerald-600 dark:text-emerald-400">{rate.fiveYear}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bank of England rate */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">Bank of England Base Rate</div>
                  <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">4.50%</div>
                </div>
                <a
                  href="https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Source: BoE →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
