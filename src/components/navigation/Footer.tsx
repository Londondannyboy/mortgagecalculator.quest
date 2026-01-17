import Link from 'next/link'

const footerLinks = {
  calculators: {
    title: 'Calculators',
    links: [
      { label: 'Mortgage Calculator', href: '/' },
      { label: 'Stamp Duty Calculator', href: '/calculators/stamp-duty-calculator' },
      { label: 'Overpayment Calculator', href: '/calculators/mortgage-overpayment-calculator' },
      { label: 'How Much Can I Borrow', href: '/calculators/how-much-can-i-borrow-calculator' },
      { label: 'Buy to Let Calculator', href: '/calculators/buy-to-let-mortgage-calculator' },
      { label: 'Repayment Calculator', href: '/calculators/mortgage-repayment-calculator' },
      { label: 'All Calculators', href: '/calculators' },
    ],
  },
  mortgageTypes: {
    title: 'Mortgage Types',
    links: [
      { label: 'First-Time Buyer', href: '/mortgage-types/first-time-buyer-mortgage' },
      { label: 'Buy to Let', href: '/mortgage-types/buy-to-let-mortgage' },
      { label: 'Remortgage', href: '/mortgage-types/remortgage' },
      { label: 'Fixed Rate', href: '/mortgage-types/fixed-rate-mortgage' },
      { label: 'Tracker', href: '/mortgage-types/tracker-mortgage' },
      { label: 'All Mortgage Types', href: '/mortgage-types' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Mortgage Rates UK', href: '/mortgage-rates' },
      { label: 'Mortgage Guides', href: '/guides' },
      { label: 'First-Time Buyer Guide', href: '/guides/first-time-buyer-guide' },
    ],
  },
  external: {
    title: 'Useful Links',
    links: [
      { label: 'Bank of England', href: 'https://www.bankofengland.co.uk/', external: true },
      { label: 'HMRC Stamp Duty', href: 'https://www.gov.uk/stamp-duty-land-tax', external: true },
      { label: 'Money Helper', href: 'https://www.moneyhelper.org.uk/', external: true },
      { label: 'FCA Register', href: 'https://register.fca.org.uk/', external: true },
      { label: 'Land Registry', href: 'https://www.gov.uk/government/organisations/land-registry', external: true },
    ],
  },
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Logo & Description */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏠</span>
              <span className="font-bold text-white">
                MortgageCalculator<span className="text-blue-400">.quest</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-md">
              Free UK mortgage calculators and guides. Helping homebuyers make informed decisions
              about mortgages, stamp duty, and property investment.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Disclaimer */}
            <div className="text-xs text-gray-500 max-w-2xl">
              <p className="mb-2">
                <strong>Important:</strong> Your home may be repossessed if you do not keep up
                repayments on your mortgage. Mortgage Calculator Quest provides tools and information
                for educational purposes only. Always seek professional financial advice before making
                mortgage decisions.
              </p>
              <p>
                Mortgage Calculator Quest is not authorised or regulated by the Financial Conduct Authority.
                We do not provide mortgage advice or recommend specific lenders or products.
              </p>
            </div>

            {/* Copyright */}
            <div className="text-xs text-gray-500 flex-shrink-0">
              <p>© {currentYear} MortgageCalculator.quest</p>
              <p className="mt-1">All rights reserved.</p>
            </div>
          </div>

          {/* Regulatory Links */}
          <div className="mt-4 pt-4 border-t border-gray-800 flex flex-wrap gap-4 text-xs text-gray-500">
            <a
              href="https://www.fca.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              FCA
            </a>
            <a
              href="https://www.gov.uk/government/organisations/hm-revenue-customs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              HMRC
            </a>
            <a
              href="https://www.moneyhelper.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Money Helper
            </a>
            <a
              href="https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Bank of England Base Rate
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
