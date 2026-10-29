import { NextRequest, NextResponse } from 'next/server'

interface RSSItem {
  title: string
  description: string
  link: string
  pubDate: string
  category?: string
}

interface ParsedInsight {
  id: string
  title: string
  description: string
  link: string
  category: string
  publishedDate: string
  imageUrl?: string
  section?: 'market-stability' | 'inventory-trends' | 'investment-outlook' | 'general'
}

// Cache the feed data for 1 hour to avoid hitting the external API too frequently
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour in milliseconds
let cachedData: { insights: ParsedInsight[]; timestamp: number } | null = null

function extractCategoryFromTitle(title: string): string {
  const lowerTitle = title.toLowerCase()
  
  if (lowerTitle.includes('buy') || lowerTitle.includes('buyer') || lowerTitle.includes('credit score')) {
    return 'buyers'
  }
  
  if (lowerTitle.includes('sell') || lowerTitle.includes('seller') || lowerTitle.includes('price')) {
    return 'sellers'
  }
  
  if (lowerTitle.includes('rate') || lowerTitle.includes('mortgage') || lowerTitle.includes('market')) {
    return 'market-trends'
  }
  
  return 'general'
}

function extractSectionFromContent(title: string, description: string): 'market-stability' | 'inventory-trends' | 'investment-outlook' | 'general' {
  const lowerTitle = title.toLowerCase()
  const lowerDesc = description.toLowerCase()
  const combined = `${lowerTitle} ${lowerDesc}`
  
  // Market Stability indicators
  if (combined.includes('stability') || combined.includes('stabilizing') || 
      combined.includes('steady') || combined.includes('consistent') ||
      combined.includes('fundamentals') || combined.includes('growth') ||
      combined.includes('mortgage rate') || combined.includes('rate stability')) {
    return 'market-stability'
  }
  
  // Inventory Trends indicators
  if (combined.includes('inventory') || combined.includes('supply') || 
      combined.includes('demand') || combined.includes('homes for sale') ||
      combined.includes('new construction') || combined.includes('builders') ||
      combined.includes('available') || combined.includes('stock')) {
    return 'inventory-trends'
  }
  
  // Investment Outlook indicators
  if (combined.includes('investment') || combined.includes('opportunity') ||
      combined.includes('outlook') || combined.includes('forecast') ||
      combined.includes('favorable') || combined.includes('conditions') ||
      combined.includes('buyers and sellers') || combined.includes('market conditions')) {
    return 'investment-outlook'
  }
  
  return 'general'
}

function cleanDescription(description: string): string {
  // Remove HTML tags and clean up the text
  return description
    .replace(/<[^>]*>/g, '')
    .replace(/\[\[>\]\]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 200) + '...'
}

async function fetchMarketInsights(): Promise<ParsedInsight[]> {
  try {
    const response = await fetch('https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LasVegasNevadaHomeSales/1.0)',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status}`)
    }

    const xmlText = await response.text()
    
    // Simple XML parsing for RSS feed
    const items: RSSItem[] = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match

    while ((match = itemRegex.exec(xmlText)) !== null) {
      const itemContent = match[1]
      
      const titleMatch = itemContent.match(/<title>([\s\S]*?)<\/title>/)
      const descriptionMatch = itemContent.match(/<description>([\s\S]*?)<\/description>/)
      const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/)
      const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/)
      const categoryMatch = itemContent.match(/<category>([\s\S]*?)<\/category>/)

      if (titleMatch && descriptionMatch && linkMatch && pubDateMatch) {
        items.push({
          title: titleMatch[1].trim(),
          description: descriptionMatch[1].trim(),
          link: linkMatch[1].trim(),
          pubDate: pubDateMatch[1].trim(),
          category: categoryMatch ? categoryMatch[1].trim() : undefined
        })
      }
    }

    // Convert to our format with enhanced categorization
    const insights: ParsedInsight[] = items.map((item, index) => {
      const category = extractCategoryFromTitle(item.title)
      const section = extractSectionFromContent(item.title, item.description)
      
      return {
        id: `insight-${index}`,
        title: item.title,
        description: cleanDescription(item.description),
        link: item.link,
        category,
        section,
        publishedDate: new Date(item.pubDate).toISOString()
      }
    })

    return insights
  } catch (error) {
    console.error('Error fetching market insights:', error)
    
    // Return enhanced fallback data with proper section categorization
    return [
      {
        id: 'fallback-1',
        title: 'The 3 Things You Risk by Pricing Too High',
        description: 'When selling your house, the price you choose isn\'t just a number, it\'s a strategy. And in today\'s market, that strategy needs to be sharp.',
        link: 'https://www.simplifyingthemarket.com/en/2025/07/31/the-3-things-you-risk-by-pricing-too-high',
        category: 'sellers',
        section: 'investment-outlook',
        publishedDate: new Date().toISOString()
      },
      {
        id: 'fallback-2',
        title: 'What Credit Score Do You Really Need To Buy a Home?',
        description: 'According to Fannie Mae, 90% of buyers don\'t actually know what credit score lenders are looking for, or they overestimate the minimum needed.',
        link: 'https://www.simplifyingthemarket.com/en/2025/07/30/what-credit-score-do-you-really-need-to-buy-a-home',
        category: 'buyers',
        section: 'investment-outlook',
        publishedDate: new Date().toISOString()
      },
      {
        id: 'fallback-3',
        title: 'Mortgage Rates Are Stabilizing – How That Helps Today\'s Buyers',
        description: 'Over the past few years, affordability has been the biggest challenge for homebuyers. But something pretty encouraging is happening.',
        link: 'https://www.simplifyingthemarket.com/en/2025/07/16/mortgage-rates-are-stabilizing-how-that-helps-todays-buyers',
        category: 'market-trends',
        section: 'market-stability',
        publishedDate: new Date().toISOString()
      },
      {
        id: 'fallback-4',
        title: 'Why a Newly Built Home Might Be the Move Right Now',
        description: 'Are you looking for better home prices, or even a lower mortgage rate? You might find both in one place: a newly built home.',
        link: 'https://www.simplifyingthemarket.com/en/2025/07/17/why-a-newly-built-home-might-be-the-move-right-now',
        category: 'buyers',
        section: 'inventory-trends',
        publishedDate: new Date().toISOString()
      }
    ]
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category') || 'all'
    const section = searchParams.get('section') || 'all'
    const limit = parseInt(searchParams.get('limit') || '3')
    
    // Check cache first
    if (cachedData && (Date.now() - cachedData.timestamp) < CACHE_DURATION) {
      let filteredInsights = cachedData.insights
      
      if (category !== 'all') {
        filteredInsights = filteredInsights.filter(insight => insight.category === category)
      }
      
      if (section !== 'all') {
        filteredInsights = filteredInsights.filter(insight => insight.section === section)
      }
      
      return NextResponse.json({
        insights: filteredInsights.slice(0, limit),
        source: 'cache'
      })
    }
    
    // Fetch fresh data
    const insights = await fetchMarketInsights()
    
    // Filter by category and section if specified
    let filteredInsights = insights
    if (category !== 'all') {
      filteredInsights = filteredInsights.filter(insight => insight.category === category)
    }
    
    if (section !== 'all') {
      filteredInsights = filteredInsights.filter(insight => insight.section === section)
    }
    
    // Update cache
    cachedData = {
      insights: filteredInsights,
      timestamp: Date.now()
    }
    
    return NextResponse.json({
      insights: filteredInsights.slice(0, limit),
      source: 'fresh'
    })
    
  } catch (error) {
    console.error('Error in market insights API:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch market insights',
        insights: []
      },
      { status: 500 }
    )
  }
} 