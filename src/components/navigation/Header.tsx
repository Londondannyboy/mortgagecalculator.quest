'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { authClient } from '@/lib/auth/client'
import { VoiceWidget } from '@/components/VoiceWidget'

const navItems = {
  calculators: {
    label: 'Calculators',
    href: '/calculators',
    items: [
      { label: 'Mortgage Calculator', href: '/', description: 'Calculate monthly payments' },
      { label: 'Stamp Duty Calculator', href: '/calculators/stamp-duty-calculator', description: 'SDLT for England & NI' },
      { label: 'Overpayment Calculator', href: '/calculators/mortgage-overpayment-calculator', description: 'Save by overpaying' },
      { label: 'How Much Can I Borrow', href: '/calculators/how-much-can-i-borrow-calculator', description: 'Affordability check' },
      { label: 'Buy to Let Calculator', href: '/calculators/buy-to-let-mortgage-calculator', description: 'BTL investment analysis' },
      { label: 'Repayment Calculator', href: '/calculators/mortgage-repayment-calculator', description: 'Monthly repayments' },
    ],
  },
  rates: {
    label: 'Mortgage Rates',
    href: '/mortgage-rates',
    items: [
      { label: 'Current UK Rates', href: '/mortgage-rates', description: 'Compare today\'s rates' },
    ],
  },
  types: {
    label: 'Mortgage Types',
    href: '/mortgage-types',
    items: [
      { label: 'All Mortgage Types', href: '/mortgage-types', description: 'Find the right mortgage' },
      { label: 'First-Time Buyer', href: '/mortgage-types/first-time-buyer-mortgage', description: 'Getting on the ladder' },
      { label: 'Buy to Let', href: '/mortgage-types/buy-to-let-mortgage', description: 'Landlord mortgages' },
    ],
  },
  guides: {
    label: 'Guides',
    href: '/guides',
    items: [
      { label: 'All Guides', href: '/guides', description: 'Expert mortgage advice' },
    ],
  },
}

function NavDropdown({
  label,
  href,
  items,
  isOpen,
  onToggle
}: {
  label: string
  href: string
  items: { label: string; href: string; description: string }[]
  isOpen: boolean
  onToggle: () => void
}) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={onToggle}
            >
              <span className="block text-sm font-medium text-gray-800">{item.label}</span>
              <span className="block text-xs text-gray-500">{item.description}</span>
            </Link>
          ))}
          <div className="border-t border-gray-100 mt-2 pt-2">
            <Link
              href={href}
              className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 font-medium"
              onClick={onToggle}
            >
              View all →
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { data: session } = authClient.useSession()
  const user = session?.user

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openDropdown && !(e.target as Element).closest('.nav-dropdown')) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [openDropdown])

  const handleSignOut = async () => {
    await authClient.signOut()
  }

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white border-b border-gray-100'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl">🏠</span>
            <span className="font-bold text-gray-800 hidden sm:block">
              MortgageCalculator<span className="text-blue-500">.quest</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 nav-dropdown">
            {Object.entries(navItems).map(([key, nav]) => (
              <NavDropdown
                key={key}
                label={nav.label}
                href={nav.href}
                items={nav.items}
                isOpen={openDropdown === key}
                onToggle={() => toggleDropdown(key)}
              />
            ))}
          </div>

          {/* Center - Voice Widget */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 hidden md:block">
              Talk to me
            </span>
            <VoiceWidget
              variant="inline"
              size="sm"
              user={user ? { id: user.id, name: user.name || undefined, email: user.email || undefined } : undefined}
            />
          </div>

          {/* Right side - Auth & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Auth */}
            {user ? (
              <div className="hidden sm:flex items-center gap-3">
                <Link href="/profile" className="flex items-center gap-2 hover:opacity-80">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name || 'User'}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                      {(user.name || user.email || 'U').charAt(0).toUpperCase()}
                    </div>
                  )}
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/auth/sign-in"
                className="hidden sm:block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            {Object.entries(navItems).map(([key, nav]) => (
              <div key={key} className="py-2">
                <Link
                  href={nav.href}
                  className="block px-2 py-2 text-sm font-semibold text-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {nav.label}
                </Link>
                <div className="pl-4">
                  {nav.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-2 py-1.5 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Mobile Auth */}
            <div className="border-t border-gray-100 mt-4 pt-4">
              {user ? (
                <div className="flex items-center justify-between px-2">
                  <Link href="/profile" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                      {(user.name || user.email || 'U').charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {user.name || user.email?.split('@')[0]}
                    </span>
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  href="/auth/sign-in"
                  className="block mx-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
