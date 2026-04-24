
export type ProjectDetail = {
  id: string;
  client: string;
  type: string;
  category: string;
  overview: string;
  services: string[];
  marketingStrategy: string[];
  targetAudience: string[];
  conclusion: string;
  tech: string[];
  color: string;
  link?: string;
  problem: string;
  results: string;
};

export const PROJECTS: ProjectDetail[] = [
  {
    id: 'tnstc-app',
    category: 'mobile',
    client: 'TNSTC App',
    type: 'Official Govt. Transit Super-App',
    problem: 'Official app for Tamil Nadu government buses. Needed a robust system for intra-state and long-distance bus booking.',
    overview: 'The official ticket reservation platform for TNSTC & SETC. It manages high-concurrency seat selection and real-time route tracking for millions of commuters across Tamil Nadu.',
    services: [
      'Ticket reservation for TNSTC & SETC',
      'Route and timing lookups',
      'Real-time seat availability tracking',
      'Integrated booking & cancellation management'
    ],
    marketingStrategy: [
      'Positioned as the authoritative source for state bus travel',
      'Focused on reliability and zero-leakage booking',
      'Integrated feedback loops for service improvement'
    ],
    targetAudience: [
      'Daily intra-state commuters',
      'Long-distance travelers',
      'Tourists visiting Tamil Nadu'
    ],
    conclusion: 'A mission-critical infrastructure tool that has digitized the backbone of Tamil Nadu transport.',
    results: 'Enabled real-time seat availability and automated booking/cancellations for millions of TNSTC & SETC commuters.',
    tech: ['React Native', 'Real-time APIs', 'Payment Integration'],
    color: 'from-blue-600/10 to-primary/5'
  },
  {
    id: 'gsrtc-app',
    category: 'mobile',
    client: 'GSRTC App',
    type: 'State Transport Booking App',
    problem: 'Government bus booking app for Gujarat. Required a reliable interface for schedules and live bus status.',
    overview: 'Specialized mobile application for the Gujarat State Road Transport Corporation. Engineered for scale and uptime to support state-wide transit operations.',
    services: [
      'GSRTC bus seat reservation',
      'Live bus status & schedules',
      'Easy booking management interface'
    ],
    marketingStrategy: [
      'Leveraged state-wide transit network as primary user base',
      'Focused on ease-of-use for diverse demographics',
      'Real-time information as a key value prop'
    ],
    targetAudience: [
      'Gujarat state commuters',
      'Business travelers',
      'Rural-to-Urban transit users'
    ],
    conclusion: 'Streamlined state-wide bus travel for millions of daily commuters with easy booking management.',
    results: 'High user retention through reliable real-time scheduling and secure payment processing.',
    tech: ['Flutter', 'Live Tracking', 'GSRTC API'],
    color: 'from-orange-500/10 to-accent/5'
  },
  {
    id: 'kandhan-solar',
    category: 'marketing',
    client: 'Kandhan Solar',
    type: 'Solar Energy Solutions',
    link: 'https://kandhansolar.com/',
    problem: 'Needed to reach homeowners and industries to promote sustainable energy adoption and cost savings.',
    overview: 'Kandhan Solar is a premier solar energy solutions company providing end-to-end installation, maintenance, and project services.',
    services: [
      'Rooftop & ground-mounted solar systems',
      'Operation & Maintenance (O&M)',
      'Government approval & subsidy assistance'
    ],
    marketingStrategy: [
      'Value-Based Marketing: Focused on massive cost savings on electricity bills',
      'Environmental Impact: Highlighted eco-friendly and green energy benefits',
      'Digital Dominance: Implemented high-performance website and lead capture forms',
      'Authority Building: Documented project experience to build B2B trust'
    ],
    targetAudience: [
      'Homeowners seeking long-term savings',
      'Industrial plants with high energy consumption',
      'Commercial buildings and complexes'
    ],
    conclusion: 'By focusing on "Savings + Sustainability", we attracted a massive client base across residential and industrial sectors.',
    results: 'Significant increase in high-intent project inquiries and documented trust in the renewable sector.',
    tech: ['Growth Strategy', 'Lead Generation', 'SEO'],
    color: 'from-yellow-500/10 to-primary/5'
  },
  {
    id: 'subramanya-realty',
    category: 'marketing',
    client: 'Subramanya Swami Realty',
    type: 'Real Estate Development',
    link: 'https://subramanyaswamirealty.com/',
    problem: 'Property buyers and investors needed a secure and transparent platform to find profitable investment opportunities.',
    overview: 'A leading real estate development firm focused on high-growth residential and commercial property investments.',
    services: [
      'Property buying & selling brokerage',
      'Real estate development & planning',
      'Strategic investment support'
    ],
    marketingStrategy: [
      'Investment Security: Promoted transparent and high-ROI property opportunities',
      'Location Advantage: Highlighted growth projections for specific local hotspots',
      'Digital Showcase: Architected a premium website to list and visualize properties',
      'Targeted Acquisition: Focused on high-net-worth investors and business owners'
    ],
    targetAudience: [
      'First-time property buyers',
      'Real estate portfolio investors',
      'Business owners seeking commercial space'
    ],
    conclusion: 'Focuses on trust, investment value, and property growth to attract high-value customers.',
    results: 'Positioned the brand as a trusted local expert, driving high-intent leads for residential and commercial sales.',
    tech: ['Investment Strategy', 'SEO', 'Lead Management'],
    color: 'from-amber-600/10 to-accent/5'
  },
  {
    id: 'priya-jewellery',
    category: 'marketing',
    client: 'Priya Jewellery',
    type: 'Luxury Retail Growth',
    problem: 'A heritage jewellery brand needed to modernize its identity and attract a younger digital audience.',
    overview: 'Modernizing a heritage jewellery brand for the digital age while maintaining its legacy of craftsmanship.',
    services: [
      'Brand identity modernization',
      'Cinematic product photography',
      'High-performance digital advertising'
    ],
    marketingStrategy: [
      'Heritage Storytelling: Blended traditional trust with modern aesthetics',
      'Paid Social: Aggressive performance ads for luxury inventory',
      'Visual Dominance: Cinematic brand narrative videos'
    ],
    targetAudience: [
      'Younger digital-first luxury buyers',
      'Wedding and bridal shoppers',
      'Collectors of fine jewellery'
    ],
    conclusion: 'Significantly boosted store footfall and social engagement through data-led digital ad targeting.',
    results: 'Successful transition to a younger demographic without alienating existing heritage customers.',
    tech: ['Brand Narrative', 'Performance Ads', 'Creative'],
    color: 'from-rose-500/10 to-accent/5'
  },
  {
    id: 'chaloyaar',
    category: 'web',
    client: 'Chaloyaar',
    type: 'Travel Booking Aggregator',
    problem: 'The market needed a unified private travel platform for bus, hotel, and flight bookings across India (RedBus model).',
    overview: 'A comprehensive travel booking platform serving as an aggregator for buses, flights, and hotels across India.',
    services: [
      'Unified bus ticket booking across India',
      'Hotel and flight reservation systems',
      'Integrated cab booking services',
      'Dynamic discount & deal engine'
    ],
    marketingStrategy: [
      'Aggregator Model: Positioned as a one-stop-shop for all travel needs',
      'Value-Driven: Focused on discounts and deals to attract cost-conscious travelers',
      'Multi-Channel Presence: Broad reach across all travel verticals'
    ],
    targetAudience: [
      'Budget-conscious Indian travelers',
      'Frequent bus and flight users',
      'Vacation planners'
    ],
    conclusion: 'Successfully scaled as a versatile travel hub competing with major market aggregators.',
    results: 'Rapid scaling of user base through provider API integrations and competitive pricing strategies.',
    tech: ['Next.js', 'RedBus API', 'Flight Data Sync'],
    color: 'from-green-500/10 to-primary/5'
  },
  {
    id: 'amazoprint',
    category: 'web',
    client: 'AmazoPrint',
    type: 'Custom Printing E-commerce',
    problem: 'Businesses lacked a seamless online solution for individual and bulk custom printing orders.',
    overview: 'A user-driven e-commerce platform for personalized and bulk custom printing orders.',
    services: [
      'Custom T-shirt, Mug, and ID card printing',
      'User design upload and preview',
      'Bulk corporate branding fulfillment'
    ],
    marketingStrategy: [
      'Self-Service Model: Empowered users to design and order instantly',
      'B2B Focus: Targeted corporate branding and event logistics',
      'Automation: Streamlined workflow from design to production'
    ],
    targetAudience: [
      'Small business owners',
      'Corporate marketing departments',
      'Individuals seeking custom gifts'
    ],
    conclusion: 'Automated order workflows from design upload to production for corporate branding.',
    results: 'Reduced operational friction and automated the intake of custom design assets.',
    tech: ['E-commerce', 'Image Processing', 'Workflow Automation'],
    color: 'from-purple-500/10 to-accent/5'
  },
  {
    id: 'tnstc-etm',
    category: 'events',
    client: 'TNSTC ETM Systems',
    type: 'Enterprise IT Servicing',
    problem: 'Manual bus ticketing led to revenue leakage and errors. Required a digital auditing and ticketing solution.',
    overview: 'Implementation and maintenance of Electronic Ticketing Machines for state-wide bus operations.',
    services: [
      'Electronic Ticketing Machine (ETM) deployment',
      'Automated fare calculation systems',
      'Real-time revenue & passenger tracking'
    ],
    marketingStrategy: [
      'Efficiency Narrative: Focused on eliminating revenue leakage',
      'Data Integrity: Emphasized real-time auditing and accuracy',
      'IT Servicing Expertise: Positioned Knewrix as an enterprise transit partner'
    ],
    targetAudience: [
      'Government transit authorities',
      'Conductors and operational staff',
      'State revenue auditors'
    ],
    conclusion: 'Eliminated manual errors and revenue leakage; provided real-time tracking across TN.',
    results: 'Systemic improvement in revenue collection and data accuracy for state transport.',
    tech: ['ETM Integration', 'Revenue Analytics', 'Data Security'],
    color: 'from-primary/10 to-secondary/30'
  }
];
