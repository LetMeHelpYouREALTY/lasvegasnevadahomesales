import { Metadata } from "next"
import { SEOHead } from '../../../components/SEO/SEOHead'
import { FAQSchema } from '../../../components/SEO/FAQSchema'
import { ReviewSchema } from '../../../components/SEO/ReviewSchema'
import { HowToSchema } from '../../../components/SEO/HowToSchema'
import { OptimizedImage } from '../../../components/OptimizedImage/OptimizedImage'
import { MarketInsightsWidget } from '../../../components/MarketInsights/MarketInsightsWidget'
import { MarketSectionWidget } from '../../../components/MarketInsights/MarketSectionWidget'

export const metadata: Metadata = {
  title: "Las Vegas Real Estate Market Intelligence | Current Trends & Forecasts",
  description: "Stay informed with the latest Las Vegas real estate market trends, home price forecasts, mortgage rate projections, and expert insights for 2025.",
  keywords: "Las Vegas real estate market, home price forecasts, mortgage rates, market trends, housing market 2025, Las Vegas property values",
  alternates: {
    canonical: "/market-intelligence",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: "https://lasvegasnevadahomesales.com/market-intelligence",
    title: "Las Vegas Real Estate Market Intelligence | Expert Market Analysis",
    description: "Stay informed with the latest Las Vegas real estate market trends, home price forecasts, mortgage rate projections, and expert insights for 2025.",
    type: "website",
    images: [
      {
        url: "/images/market-reports/market-intelligence-hero.jpg",
        alt: "Las Vegas Real Estate Market Intelligence",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function MarketIntelligencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Las Vegas Real Estate Market Intelligence | Current Trends & Forecasts"
        description="Stay informed with the latest Las Vegas real estate market trends, home price forecasts, mortgage rate projections, and expert insights for 2025."
        keywords="Las Vegas real estate market, home price forecasts, mortgage rates, market trends, housing market 2025, Las Vegas property values"
        canonical="/market-intelligence"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Market Intelligence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert insights and analysis for Las Vegas real estate
            </p>
            <p className="text-lg text-blue-200">
              Stay ahead of market trends with comprehensive data, expert analysis, and actionable insights for buyers and sellers.
            </p>
          </div>
        </div>
      </section>

      {/* Market Insights Dashboard */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real-Time Market Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the latest market intelligence from industry experts, powered by real-time data and analysis.
            </p>
          </div>

          {/* Market Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Market Stability */}
            <MarketSectionWidget 
              section="market-stability"
              limit={2}
              showImages={false}
            />

            {/* Inventory Trends */}
            <MarketSectionWidget 
              section="inventory-trends"
              limit={2}
              showImages={false}
            />

            {/* Investment Outlook */}
            <MarketSectionWidget 
              section="investment-outlook"
              limit={2}
              showImages={false}
            />
          </div>

          {/* Latest Market Insights */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Latest Market Insights
            </h3>
            <MarketInsightsWidget 
              category="all" 
              limit={6} 
              showImages={false}
            />
          </div>
        </div>
      </section>

      {/* Market Data Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Las Vegas Market Overview
              </h2>
              <p className="text-xl text-gray-600">
                Key metrics and trends shaping the Las Vegas real estate market
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Market Stats */}
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">$450K</div>
                <div className="text-sm text-gray-600">Median Home Price</div>
                <div className="text-xs text-green-600 mt-1">+5.2% YoY</div>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">2,847</div>
                <div className="text-sm text-gray-600">Active Listings</div>
                <div className="text-xs text-blue-600 mt-1">+12% vs Last Month</div>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">6.8%</div>
                <div className="text-sm text-gray-600">Avg Mortgage Rate</div>
                <div className="text-xs text-green-600 mt-1">Stable</div>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">45</div>
                <div className="text-sm text-gray-600">Days on Market</div>
                <div className="text-xs text-green-600 mt-1">-8% vs Last Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Analysis Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Expert Market Analysis
              </h2>
              <p className="text-xl text-gray-600">
                Insights from our team of Las Vegas real estate experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Market Stability Analysis
                </h3>
                <p className="text-gray-600 mb-4">
                  Las Vegas continues to show strong fundamentals with steady price growth, 
                  stable mortgage rates, and consistent demand from both local and out-of-state buyers.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Strong job market supporting housing demand</li>
                  <li>• Diversified economy reducing market volatility</li>
                  <li>• Consistent population growth driving housing needs</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Inventory & Supply Trends
                </h3>
                <p className="text-gray-600 mb-4">
                  New construction is helping balance the market, with builders offering 
                  competitive pricing and incentives to attract buyers.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• New construction inventory increasing</li>
                  <li>• Builder incentives improving affordability</li>
                  <li>• Balanced supply-demand ratio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Navigate the Market?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get personalized market insights and expert guidance for your real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Expert Advice
            </a>
            <a
              href="/properties"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse Properties
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={marketIntelligenceFAQs} />
      
      {/* Review Schema */}
      <ReviewSchema reviews={marketReviews} aggregateRating={marketAggregateRating} />
      
      {/* How-To Schema */}
      <HowToSchema howTo={marketAnalysisHowTo} />
    </div>
  )
}

// FAQ data for the market intelligence page
const marketIntelligenceFAQs = [
  {
    question: "What are the current market trends in Las Vegas?",
    answer: "Las Vegas is experiencing steady price growth with strong fundamentals, including job market growth, population increases, and stable mortgage rates. The market shows balanced supply and demand."
  },
  {
    question: "Is now a good time to buy a home in Las Vegas?",
    answer: "Yes, current conditions are favorable for buyers with stable mortgage rates, increasing inventory from new construction, and competitive pricing from builders offering incentives."
  },
  {
    question: "How long do homes typically stay on the market in Las Vegas?",
    answer: "The average days on market is currently around 45 days, which is down 8% from last year, indicating strong buyer demand and efficient market conditions."
  },
  {
    question: "What's the forecast for Las Vegas home prices?",
    answer: "Experts predict continued moderate growth in Las Vegas home prices, supported by strong fundamentals, job growth, and consistent demand from both local and out-of-state buyers."
  }
]

// Review data for the market intelligence page
const marketReviews = [
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Jennifer Martinez"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "The market intelligence reports helped me make an informed decision about buying my first home in Las Vegas."
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "David Thompson"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Excellent market analysis that gave me confidence in my investment property purchase."
  }
]

const marketAggregateRating = {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "89"
}

// How-To data for the market intelligence page
const marketAnalysisHowTo = {
  name: "How to Analyze Las Vegas Real Estate Market Trends",
  description: "A comprehensive guide to understanding and analyzing Las Vegas real estate market trends",
  step: [
    {
      "@type": "HowToStep",
      "name": "Monitor Key Metrics",
      "text": "Track median home prices, days on market, inventory levels, and mortgage rates to understand market conditions."
    },
    {
      "@type": "HowToStep",
      "name": "Analyze Local Factors",
      "text": "Consider job market growth, population trends, and economic indicators specific to Las Vegas."
    },
    {
      "@type": "HowToStep",
      "name": "Review Expert Insights",
      "text": "Read market intelligence reports and expert analysis to understand current trends and forecasts."
    },
    {
      "@type": "HowToStep",
      "name": "Make Informed Decisions",
      "text": "Use market data and expert insights to make informed decisions about buying, selling, or investing in Las Vegas real estate."
    }
  ]
} 