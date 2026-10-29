'use client'

import { useState, useEffect } from 'react'
import { Button } from '../../components/Button/Button'

interface MarketInsight {
  id: string
  title: string
  description: string
  link: string
  category: string
  section?: 'market-stability' | 'inventory-trends' | 'investment-outlook' | 'general'
  publishedDate: string
  imageUrl?: string
}

interface MarketSectionWidgetProps {
  section: 'market-stability' | 'inventory-trends' | 'investment-outlook'
  limit?: number
  showImages?: boolean
}

const sectionConfig = {
  'market-stability': {
    title: 'Market Stability',
    subtitle: 'Strong fundamentals support continued growth in Las Vegas real estate market',
    icon: '📈',
    color: 'blue'
  },
  'inventory-trends': {
    title: 'Inventory Trends',
    subtitle: 'Balanced supply and demand creating healthy market conditions',
    icon: '🏠',
    color: 'green'
  },
  'investment-outlook': {
    title: 'Investment Outlook',
    subtitle: 'Favorable conditions for both buyers and sellers in Las Vegas',
    icon: '💼',
    color: 'purple'
  }
}

export function MarketSectionWidget({ 
  section, 
  limit = 2, 
  showImages = false 
}: MarketSectionWidgetProps) {
  const [insights, setInsights] = useState<MarketInsight[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const config = sectionConfig[section]

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/market-insights?section=${section}&limit=${limit}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch market insights')
        }
        
        const data = await response.json()
        setInsights(data.insights || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load insights')
      } finally {
        setLoading(false)
      }
    }

    fetchInsights()
  }, [section, limit])

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">{config.icon}</span>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{config.title}</h3>
            <p className="text-sm text-gray-600">{config.subtitle}</p>
          </div>
        </div>
        <div className="space-y-4">
          {[...Array(limit)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">{config.icon}</span>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{config.title}</h3>
            <p className="text-sm text-gray-600">{config.subtitle}</p>
          </div>
        </div>
        <p className="text-gray-600">Unable to load market insights at this time.</p>
      </div>
    )
  }

  if (insights.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">{config.icon}</span>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{config.title}</h3>
            <p className="text-sm text-gray-600">{config.subtitle}</p>
          </div>
        </div>
        <p className="text-gray-600">No insights available at this time.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{config.icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{config.title}</h3>
          <p className="text-sm text-gray-600">{config.subtitle}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight) => (
          <article key={insight.id} className="border-b border-gray-100 pb-4 last:border-b-0">
            <div className="flex gap-3">
              {showImages && insight.imageUrl && (
                <div className="flex-shrink-0">
                  <img
                    src={insight.imageUrl}
                    alt={insight.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-${config.color}-100 text-${config.color}-800`}>
                    {insight.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(insight.publishedDate).toLocaleDateString()}
                  </span>
                </div>
                
                <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                  {insight.title}
                </h4>
                
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  {insight.description}
                </p>
                
                <Button
                  intent="secondary"
                  size="sm"
                  onClick={() => window.open(insight.link, '_blank')}
                  className="text-xs px-2 py-1"
                >
                  Read More
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100">
        <Button
          intent="primary"
          onClick={() => window.open('https://www.simplifyingthemarket.com', '_blank')}
          className="w-full text-sm"
        >
          View All {config.title} Insights
        </Button>
      </div>
    </div>
  )
} 