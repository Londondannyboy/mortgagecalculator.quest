'use client'

export function StatsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* What We Offer */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Free Educational Mortgage Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide free calculators to help you understand mortgage costs.
            We are an independent educational site with no commercial partnerships.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
            <span className="text-3xl mb-4 block">🧮</span>
            <div className="text-lg font-semibold text-gray-700 dark:text-gray-200 mt-2">
              Free Calculators
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Mortgage, stamp duty, affordability and overpayment calculators
            </div>
          </div>

          <div className="text-center p-6 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
            <span className="text-3xl mb-4 block">📚</span>
            <div className="text-lg font-semibold text-gray-700 dark:text-gray-200 mt-2">
              Educational Content
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Guides to help you understand UK mortgages and property buying
            </div>
          </div>

          <div className="text-center p-6 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
            <span className="text-3xl mb-4 block">🔗</span>
            <div className="text-lg font-semibold text-gray-700 dark:text-gray-200 mt-2">
              Official Source Links
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              We link to official sources so you can verify information
            </div>
          </div>
        </div>

        {/* Official Sources - NOT Partners */}
        <div className="pt-12 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Official UK Government Sources
            </span>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              We recommend verifying all information with these official sources. We have no affiliation with these organisations.
            </p>
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
