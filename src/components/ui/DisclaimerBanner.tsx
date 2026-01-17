'use client'

import { useState, useEffect } from 'react'

export function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('disclaimer-dismissed')
    if (isDismissed) setDismissed(true)
  }, [])

  const handleDismiss = () => {
    sessionStorage.setItem('disclaimer-dismissed', 'true')
    setDismissed(true)
  }

  if (dismissed) return null

  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-start gap-2 text-sm">
            <span className="text-amber-600 mt-0.5 flex-shrink-0">&#9888;</span>
            <p>
              <strong>Beta:</strong> This site is for educational purposes only and does not provide financial advice.
              Always consult{' '}
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
                href="https://www.gov.uk/government/organisations/hm-treasury"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 underline hover:text-amber-900"
              >
                UK Government
              </a>
              {' '}sources before making financial decisions.
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-amber-600 hover:text-amber-800 text-sm font-medium flex-shrink-0"
            aria-label="Dismiss banner"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
