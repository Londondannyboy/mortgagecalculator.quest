'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function HeroSection() {
  const [loanAmount, setLoanAmount] = useState(250000)
  const [interestRate] = useState(4.5)
  const [term] = useState(25)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const monthlyRate = interestRate / 100 / 12
    const totalMonths = term * 12
    const payment = loanAmount * (
      monthlyRate * Math.pow(1 + monthlyRate, totalMonths)
    ) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
    setMonthlyPayment(Math.round(payment))
  }, [loanAmount, interestRate, term])

  // Animate the payment value
  useEffect(() => {
    const duration = 500
    const steps = 20
    const stepDuration = duration / steps
    const increment = (monthlyPayment - animatedValue) / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      setAnimatedValue(prev => Math.round(prev + increment))
      if (step >= steps) {
        clearInterval(timer)
        setAnimatedValue(monthlyPayment)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [monthlyPayment])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Trusted by 50,000+ UK homebuyers</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              UK Mortgage Calculator
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                with AI Assistant
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-xl">
              Calculate mortgage payments, stamp duty, affordability and more.
              Get instant answers from our AI-powered assistant trained on
              UK mortgage regulations.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#calculator"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
              >
                Start Calculating
              </Link>
              <Link
                href="/calculators"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl font-semibold text-lg transition-all border border-white/20"
              >
                View All Tools
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { value: '368K+', label: 'Monthly searches' },
                { value: '6', label: 'Free calculators' },
                { value: '24/7', label: 'AI assistance' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Interactive Calculator Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl transform rotate-3" />

            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-2xl">🧮</span>
                Quick Calculator
              </h3>

              {/* Slider input */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Mortgage Amount</span>
                  <span className="font-semibold">£{loanAmount.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-400 [&::-webkit-slider-thumb]:to-indigo-400 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <div className="flex justify-between text-xs text-blue-300">
                  <span>£50k</span>
                  <span>£1m</span>
                </div>
              </div>

              {/* Result display */}
              <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl p-6 border border-emerald-400/30">
                <div className="text-sm text-emerald-200 mb-1">Estimated Monthly Payment</div>
                <div className="text-4xl font-bold text-white flex items-baseline">
                  £{animatedValue.toLocaleString()}
                  <span className="text-lg text-emerald-300 ml-2">/month</span>
                </div>
                <div className="text-xs text-emerald-300 mt-2">
                  at {interestRate}% over {term} years
                </div>
              </div>

              {/* Quick links */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: 'Stamp Duty', href: '/calculators/stamp-duty-calculator' },
                  { label: 'Overpayments', href: '/calculators/mortgage-overpayment-calculator' },
                  { label: 'Affordability', href: '/calculators/how-much-can-i-borrow-calculator' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-gray-50 dark:fill-gray-900"
          />
        </svg>
      </div>
    </section>
  )
}
