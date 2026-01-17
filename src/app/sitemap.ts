import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mortgagecalculator.quest'
  const currentDate = new Date().toISOString()

  // Core pages with highest priority
  const corePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/calculators`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mortgage-rates`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Calculator pages - high priority, frequently updated
  const calculatorPages = [
    { slug: 'stamp-duty-calculator', priority: 0.9 }, // 368K search volume
    { slug: 'mortgage-repayment-calculator', priority: 0.9 }, // 110K search volume
    { slug: 'mortgage-overpayment-calculator', priority: 0.85 }, // 74K search volume
    { slug: 'how-much-can-i-borrow-calculator', priority: 0.85 }, // 60K search volume
    { slug: 'buy-to-let-mortgage-calculator', priority: 0.85 }, // 27K search volume
    { slug: 'remortgage-calculator', priority: 0.85 }, // 27K search volume
  ].map(({ slug, priority }) => ({
    url: `${baseUrl}/calculators/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority,
  }))

  // Mortgage types pages
  const mortgageTypePages = [
    { path: '/mortgage-types', priority: 0.8 },
    { path: '/mortgage-types/buy-to-let-mortgage', priority: 0.85 }, // 40K search volume
    { path: '/mortgage-types/fixed-rate-mortgage', priority: 0.8 }, // 10K search volume
    { path: '/mortgage-types/first-time-buyer-mortgage', priority: 0.8 }, // 8K search volume
    { path: '/mortgage-types/tracker-mortgage', priority: 0.75 }, // 3.6K search volume
  ].map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority,
  }))

  return [
    ...corePages,
    ...calculatorPages,
    ...mortgageTypePages,
  ]
}
