import Script from 'next/script'

interface BreadcrumbItem {
  name: string
  href: string
}

interface SchemaMarkupProps {
  type: 'calculator' | 'article' | 'guide' | 'webpage'
  title: string
  description: string
  url: string
  breadcrumbs?: BreadcrumbItem[]
  datePublished?: string
  dateModified?: string
  faq?: { question: string; answer: string }[]
}

export function SchemaMarkup({
  type,
  title,
  description,
  url,
  breadcrumbs = [],
  datePublished = '2025-01-01',
  dateModified = new Date().toISOString().split('T')[0],
  faq = [],
}: SchemaMarkupProps) {
  const baseUrl = 'https://mortgagecalculator.quest'

  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': type === 'calculator' ? 'WebApplication' : type === 'article' ? 'Article' : 'WebPage',
    name: title,
    description: description,
    url: `${baseUrl}${url}`,
    ...(type === 'calculator' && {
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'GBP',
      },
    }),
    ...(type === 'article' || type === 'guide' ? {
      datePublished,
      dateModified,
      author: {
        '@type': 'Organization',
        name: 'Mortgage Calculator Quest',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Mortgage Calculator Quest',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/favicon.svg`,
        },
      },
    } : {}),
    isPartOf: {
      '@type': 'WebSite',
      name: 'Mortgage Calculator Quest',
      url: baseUrl,
    },
  }

  // Breadcrumb schema
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      ...breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: crumb.name,
        item: `${baseUrl}${crumb.href}`,
      })),
    ],
  } : null

  // FAQ schema
  const faqSchema = faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null

  return (
    <>
      <Script
        id={`schema-${type}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {breadcrumbSchema && (
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {faqSchema && (
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  )
}

// Authoritative external links component
export const authoritativeLinks = {
  hmrc: {
    stampDuty: { url: 'https://www.gov.uk/stamp-duty-land-tax', label: 'HMRC Stamp Duty' },
    stampDutyRates: { url: 'https://www.gov.uk/stamp-duty-land-tax/residential-property-rates', label: 'HMRC SDLT Rates' },
    firstTimeBuyer: { url: 'https://www.gov.uk/stamp-duty-land-tax/residential-property-rates#if-youre-a-first-time-buyer', label: 'HMRC First-Time Buyer Relief' },
  },
  bankOfEngland: {
    baseRate: { url: 'https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate', label: 'Bank of England Base Rate' },
    mortgages: { url: 'https://www.bankofengland.co.uk/statistics/mortgage-lenders-and-administrators-statistics', label: 'BoE Mortgage Statistics' },
  },
  moneyHelper: {
    home: { url: 'https://www.moneyhelper.org.uk/', label: 'Money Helper' },
    mortgages: { url: 'https://www.moneyhelper.org.uk/en/homes/buying-a-home', label: 'Money Helper Buying Guide' },
    affordability: { url: 'https://www.moneyhelper.org.uk/en/homes/buying-a-home/estimate-your-overall-budget', label: 'Money Helper Budget Guide' },
    firstTimeBuyer: { url: 'https://www.moneyhelper.org.uk/en/homes/buying-a-home/first-time-buyer-money-tips', label: 'Money Helper FTB Tips' },
  },
  fca: {
    register: { url: 'https://register.fca.org.uk/', label: 'FCA Register' },
    mortgages: { url: 'https://www.fca.org.uk/consumers/mortgages', label: 'FCA Mortgage Information' },
  },
  landRegistry: {
    home: { url: 'https://www.gov.uk/government/organisations/land-registry', label: 'HM Land Registry' },
    housePrices: { url: 'https://www.gov.uk/government/collections/uk-house-price-index-reports', label: 'UK House Price Index' },
  },
  ons: {
    housePrices: { url: 'https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/housepriceindex/latest', label: 'ONS House Price Index' },
  },
  gov: {
    helpToBuy: { url: 'https://www.gov.uk/help-to-buy-equity-loan', label: 'Help to Buy' },
    sharedOwnership: { url: 'https://www.gov.uk/shared-ownership-scheme', label: 'Shared Ownership' },
    firstHomes: { url: 'https://www.gov.uk/first-homes-scheme', label: 'First Homes Scheme' },
    lisa: { url: 'https://www.gov.uk/lifetime-isa', label: 'Lifetime ISA' },
  },
}

// External link component
export function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline ${className}`}
    >
      {children}
    </a>
  )
}
