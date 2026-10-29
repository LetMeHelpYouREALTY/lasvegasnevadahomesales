// RealScout Configuration

// Widgets need the encoded id (base64 of "Agent-<n>"). A bare numeric id or the old
// 'demo-agent-id' placeholder renders nothing, so fall back to Dr. Jan's real id.
const DEFAULT_REALSCOUT_AGENT_ID = 'QWdlbnQtMjI1MDUw';

function normalizeRealScoutAgentId(raw: string | undefined): string {
  const value = raw?.trim();
  if (!value || value === 'demo-agent-id') return DEFAULT_REALSCOUT_AGENT_ID;
  if (/^\d+$/.test(value)) return btoa(`Agent-${value}`);
  return value;
}

const agentEncodedId = normalizeRealScoutAgentId(process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID);

export const realScoutConfig = {
  agentEncodedId,

  // Widget Configuration
  widgets: {
    homeValue: {
      agentEncodedId,
    },
    officeListings: {
      agentEncodedId,
      sortOrder: 'price-desc',
      listingStatus: 'active',
      propertyTypes: 'single-family,condo,townhouse',
      priceMin: '200000',
      priceMax: '2000000',
    },
    yourListings: {
      agentEncodedId,
    },
    simpleSearch: {
      agentEncodedId,
    },
    advancedSearch: {
      agentEncodedId,
    },
  },

  // API Configuration
  api: {
    baseUrl: 'https://api.realscout.com',
    version: 'v3',
  },

  // Widget Loading Configuration
  loading: {
    strategy: 'beforeInteractive' as const,
    type: 'module' as const,
  },
};

// RealScout Widget Types
export type RealScoutWidgetType =
  | 'home-value'
  | 'office-listings'
  | 'your-listings'
  | 'simple-search'
  | 'advanced-search';

// RealScout Widget Props Interface
export interface RealScoutWidgetProps {
  agentEncodedId?: string;
  className?: string;
  style?: React.CSSProperties;
}
