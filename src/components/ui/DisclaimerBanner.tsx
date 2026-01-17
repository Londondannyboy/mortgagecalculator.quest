'use client'

import { useState, useEffect } from 'react'

export function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(true) // Start true to avoid flash
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDismissed = sessionStorage.getItem('disclaimer-dismissed')
    setDismissed(!!isDismissed)
  }, [])

  const handleDismiss = () => {
    sessionStorage.setItem('disclaimer-dismissed', 'true')
    setDismissed(true)
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted || dismissed) return null

  return (
    <div className="sticky top-0 z-[60] bg-amber-50 border-b border-amber-200 text-amber-900">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-start gap-2 text-sm">
            <span className="text-amber-600 mt-0.5 flex-shrink-0">&#9888;</span>
            <p>
              <strong>Beta:</strong> This is an independent educational site with no commercial partnerships.
              We do not provide financial advice. Always verify information with{' '}
              <a
                href="https://www.gov.uk/stamp-duty-land-tax"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 underline hover:text-amber-900"
              >
                HMRC
              </a>
              {' '}and{' '}
              <a
                href="https://www.moneyhelper.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 underline hover:text-amber-900"
              >
                Money Helper
              </a>
              {' '}before making any financial decisions.
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-amber-600 hover:text-amber-800 text-sm font-medium flex-shrink-0"
            aria-label="Dismiss banner"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  )
}
