import { Project, ServiceItem, ScaleEngineNode, InsightArticle, KolkataSpot, ContentLabFormat } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'howrah-roar',
    client: 'Kolkata Thunderbolts / League Sports',
    industry: 'Sports & Entertainment',
    title: 'THE ROAR OF HOWRAH',
    tagline: 'Transforming a local franchise into an unstoppable regional phenomenon.',
    category: ['ALL', 'ATL', 'FILMS', 'DIGITAL'],
    services: ['Campaign Identity', 'Cinematic Brand Film', 'OOH Blitz Across Kolkata', 'Social Fan Army', 'Matchday BTL Activation'],
    heroImage: 'https://images.unsplash.com/photo-1571677246347-5040036b95cc?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80'
    ],
    videoThumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    story: 'We took the raw electrical pulse of Kolkata sports fandom and scaled it from stadium chatter into a citywide cultural wave. Spanning 45 monumental OOH hoardings from Airport Expressway to Park Circus, backed by an adrenaline-fueled cinema film with authentic local rhythm.',
    challenge: 'Local sporting teams struggled to break out of niche television ratings and generate on-ground ticket frenzy in a football and cricket dominated city.',
    solution: 'An integrated blitz that unified outdoor scale with vertical mobile reels and neighborhood street art in North and South Kolkata.',
    scaleMetric: {
      label: 'City Reach & Engagement',
      value: '18.4M+',
      detail: 'Total impressions across Eastern India with 94% stadium sellout across 6 fixtures'
    },
    featuredSize: 'full',
    year: '2025'
  },
  {
    id: 'darjeeling-gold',
    client: 'East India Tea Estates',
    industry: 'FMCG & Luxury Beverage',
    title: 'BREWED BOLD: THE MIST & THE FLAME',
    tagline: 'Re-imagining century-old tea heritage for the digital generation.',
    category: ['ALL', 'BRANDING', 'CONTENT', 'COMMERCIAL_PRODUCTION' as any, 'FILMS'],
    services: ['Brand Repositioning', 'Packaging Architecture', 'Docu-Style Brand Film', 'Performance Marketing', 'Influencer Tastemakers'],
    heroImage: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Shot on location across Kurseong and Darjeeling misty ridges on Arri Alexa cameras, capturing the intense hand-plucked craftsmanship. We stripped away boring colonial cliches to present high-grown orthodox tea as modern luxury.',
    challenge: 'Historic tea brand suffered from aging consumer demographics and low direct-to-consumer e-commerce velocity.',
    solution: 'A cinematic sensory journey across YouTube, Instagram Cine-reels, and prime print spreads in national publications.',
    scaleMetric: {
      label: 'D2C Revenue Scale',
      value: '340%',
      detail: 'Quarter-on-quarter direct revenue surge with over 45,000 new first-time subscribers'
    },
    featuredSize: 'large',
    year: '2024'
  },
  {
    id: 'park-street-nocturne',
    client: 'The Flurys & Park Street Hospitality Group',
    industry: 'Hospitality & Luxury Nightlife',
    title: 'AFTER DARK AT PARK STREET',
    tagline: 'The timeless legendary strip, reimagined through neon and cinema.',
    category: ['ALL', 'CONTENT', 'DIGITAL', 'BTL'],
    services: ['Experiential Night', 'Short-form Social Series', 'Influencer Preview Gala', 'High-Impact Paid Social'],
    heroImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Park Street is the soul of Kolkata nightlife. We turned its historic culinary legacy into a 30-day interactive nightlife festival, blending vintage jazz vibes with cutting-edge mobile storytelling and immersive bar takeovers.',
    challenge: 'Re-igniting footfalls among Gen-Z and millennial professionals who drifted towards satellite shopping malls.',
    solution: 'Live experiential crawls, guerrilla projection mapping on heritage facades, and dynamic geolocation ads.',
    scaleMetric: {
      label: 'Footfall Surge',
      value: '2.8X',
      detail: 'Weekend table reservations booked out 3 weeks in advance during festival month'
    },
    featuredSize: 'medium',
    year: '2025'
  },
  {
    id: 'bengal-loom-couture',
    client: 'Shantipur Heritage Weaves',
    industry: 'Fashion & Handloom Couture',
    title: 'THE GEOMETRY OF SILK',
    tagline: 'Translating traditional Jamdani into high-fashion runways across Mumbai and Paris.',
    category: ['ALL', 'BRANDING', 'CONTENT', 'FILMS'],
    services: ['Lookbook Art Direction', 'Fashion Film', 'Global PR Rollout', 'E-commerce Overhaul'],
    heroImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'We juxtaposed 400-year-old Bengal handloom techniques with brutalist architectural backdrops. The campaign earned international features in Harper’s Bazaar and Vogue India.',
    challenge: 'Handloom was pigeonholed as traditional occasional-wear rather than modern avant-garde luxury.',
    solution: 'Cinematic visual direction, high-contrast monochrome cinematography with saturated crimson accents.',
    scaleMetric: {
      label: 'International Order Inquiries',
      value: '520%',
      detail: 'Featured in 14 international editorial publications across Milan, Paris & London'
    },
    featuredSize: 'medium',
    year: '2024'
  },
  {
    id: 'pay-bengal-neobank',
    client: 'FinScale NeoBanking',
    industry: 'Fintech & Digital Banking',
    title: 'ZERO FRICTION: FROM TEA STALL TO TECH HUB',
    tagline: 'Digitizing merchant transactions from Kumartuli artisans to Salt Lake startups.',
    category: ['ALL', 'DIGITAL', 'ATL', 'BTL'],
    services: ['Performance Marketing', 'Hyperlocal Audio Advertising', 'Transit Advertising on Kolkata Metro', 'App Store Optimization'],
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Fintech apps usually look sterile and westernized. We created a high-energy campaign in colloquial Bengali and English that resonated with every street vendor and tech professional alike.',
    challenge: 'Overcoming trust deficit in second-tier digital wallet platforms against entrenched national giants.',
    solution: 'Hyper-relatable characters, massive Metro branding across all 33 stations of Kolkata Metro Blue & Green lines.',
    scaleMetric: {
      label: 'Merchant App Onboardings',
      value: '220,000+',
      detail: 'Merchant acquisition cost decreased by 62% compared to industry benchmarks'
    },
    featuredSize: 'large',
    year: '2025'
  },
  {
    id: 'durga-electric-night',
    client: 'Bengal Telecom & Media Network',
    industry: 'Telecommunications & Culture',
    title: 'LIGHT UP THE PUJA: 5G REBORN',
    tagline: 'Connecting 10 million pandal-hoppers with real-time crowd heatmaps and AR art.',
    category: ['ALL', 'BTL', 'DIGITAL', 'ATL'],
    services: ['AR Pandal Navigation', '3D Anamorphic Billboard on Gariahat', 'Live Stream Production', 'Street Guerilla Team'],
    heroImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
    ],
    story: 'Kolkata’s Durga Puja is the world’s largest public art festival. We engineered an unprecedented 3D anamorphic installation in South Kolkata alongside interactive mobile lenses that scaled to 4.2 million user sessions in 5 days.',
    challenge: 'Standing out during the most advertising-cluttered 100-hour period on earth.',
    solution: 'An awe-inspiring combination of physical scale (Gariahat crossing) and frictionless digital utility.',
    scaleMetric: {
      label: 'Festival Peak Engagement',
      value: '4.2M',
      detail: 'Real-time unique AR interactions with 98.4% uptime during peak festive rush'
    },
    featuredSize: 'full',
    year: '2024'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'digital',
    code: '01',
    title: 'DIGITAL',
    subtitle: 'High-Velocity Performance & Digital Experiences',
    copy: 'Where attention moves fast, we move faster.',
    deliverables: [
      'Digital Marketing Strategy',
      'Social Media Marketing & Community',
      'Performance Marketing & CAC Optimization',
      'Google, Meta & Programmatic Advertising',
      'Organic Search (SEO & GEO/AI Engine Optimization)',
      'Influencer Marketing & Creator Networks',
      'Immersive Websites & Digital Experiences'
    ],
    metrics: 'Algorithmic targeting, real-time ROI tracking, viral distribution loops.',
    bgImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'atl',
    code: '02',
    title: 'ATL',
    subtitle: 'Above-The-Line Mass Market Dominance',
    copy: 'Big ideas deserve big visibility.',
    deliverables: [
      'Television Commercial Campaigns (TVC)',
      'High-Impact Print Advertising & Editorial Spreads',
      'Outdoor Advertising (Hoardings & Billboards)',
      'Radio & Audio OTT Commercials',
      'OOH & 3D DOOH (Anamorphic Screens)',
      'Integrated Multi-City Brand Blitzes'
    ],
    metrics: 'Unmissable scale across highway junctions, metro corridors & national networks.',
    bgImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'btl',
    code: '03',
    title: 'BTL',
    subtitle: 'Below-The-Line Experiential & Activation',
    copy: 'Turn audiences into participants.',
    deliverables: [
      'Experiential Brand Activations',
      'On-Ground Stadium & Campus Campaigns',
      'Retail Environment Design & POS Deployments',
      'High-Profile Launch Events & Galas',
      'Interactive Guerilla Stunts & Flash Mobs',
      'Festival & Cultural Sponsorship Activations'
    ],
    metrics: 'Direct sensory engagement that converts passive viewers into die-hard advocates.',
    bgImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'content',
    code: '04',
    title: 'CONTENT',
    subtitle: 'Culture-Defining Content & Narrative Strategy',
    copy: 'Content that doesn’t just fill a feed. It builds a brand.',
    deliverables: [
      'Omnichannel Content Strategy',
      'Viral Short-Form Reels & Shorts Studio',
      'Signature Brand Films & Mini-Docs',
      'Cinematic Product Photography',
      'High-Concept Copywriting & Micro-Copy',
      'Visual Brand Identity & Creative Design'
    ],
    metrics: 'Content engines engineered to capture organic share-of-mind and cultural relevance.',
    bgImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'commercial-production',
    code: '05',
    title: 'COMMERCIAL PRODUCTION',
    subtitle: 'Full-Service Film Production & Post-House',
    copy: 'From the first frame to the final cut.',
    deliverables: [
      'Concept Development & Storyboarding',
      'Creative Direction & Director Talent Roster',
      'Commercial Ad Films & Broadcast TVCs',
      'High-End Product Films & Tabletop Direction',
      'Corporate & Investor Showcase Films',
      'Production Management & Line Production',
      'Advanced Post-Production, VFX & Color Grading'
    ],
    metrics: 'Broadcast-grade cinematic craft powered by top Kolkata & national crew talent.',
    bgImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80'
  }
];

export const SCALE_ENGINE_STEPS: ScaleEngineNode[] = [
  {
    id: 'idea',
    step: 1,
    name: 'IDEA',
    title: 'The Unreasonable Spark',
    description: 'Every scaling brand starts with an insight that cuts through the noise. We interrogate market truths, cultural tensions, and consumer desires to find the sharpest core proposition.',
    deliverables: ['Cultural Insight Mining', 'White-Space Identification', 'Brand Positioning', 'Core Tension Mapping'],
    highlightMetric: '1 Sharp Truth',
    quote: 'If the idea is weak, scaling only multiplies mediocrity. We make sure the idea is bulletproof.',
    color: '#ff3b00'
  },
  {
    id: 'strategy',
    step: 2,
    name: 'STRATEGY',
    title: 'The Growth Blueprint',
    description: 'Translating raw creative energy into an operational roadmap. We map customer touchpoints, define audience cohorts, and engineer distribution mechanics.',
    deliverables: ['Go-To-Market Playbooks', 'Audience Segmentation', 'Funnel Architecture', 'Competitor Counter-Strategies'],
    highlightMetric: '360° Alignment',
    quote: 'Strategy is deciding what NOT to do so that what you do create creates immense reverberation.',
    color: '#ff5c26'
  },
  {
    id: 'creative',
    step: 3,
    name: 'CREATIVE',
    title: 'Unforgettable Expression',
    description: 'The visual, verbal, and emotional hook. From typography to campaign slogans that enter everyday language and billboards that stop traffic.',
    deliverables: ['Art Direction & Identity', 'Campaign Taglines', 'Key Visual Systems', 'Storyboards & Scripts'],
    highlightMetric: 'Top-Of-Mind Recall',
    quote: 'Creativity is the greatest commercial unfair advantage in business.',
    color: '#ff7b4d'
  },
  {
    id: 'content',
    step: 4,
    name: 'CONTENT',
    title: 'The Engine of Everyday Presence',
    description: 'One big idea broken down into hundreds of daily moments. Reels, carousels, podcasts, interactive stories, and behind-the-scenes cinema.',
    deliverables: ['High-Velocity Production', 'Social Narrative Hooks', 'Product Visuals', 'Micro-Content Libraries'],
    highlightMetric: '100+ Assets / Sprint',
    quote: 'Attention is earned daily. We build content systems that keep audiences hungry for more.',
    color: '#ff9973'
  },
  {
    id: 'media',
    step: 5,
    name: 'MEDIA',
    title: 'Intelligent Amplification',
    description: 'Putting the work exactly where eyes and hearts are. Precision programmatic buying, prime OOH placements across metro choke points, and influencer catalysts.',
    deliverables: ['Performance Media Buying', 'Prime OOH Site Curation', 'Omnichannel Retargeting', 'Bidding Optimization'],
    highlightMetric: 'Maximum ROI & Reach',
    quote: 'The right creative in the wrong place is a whisper. In the right place, it is an earthquake.',
    color: '#ffb399'
  },
  {
    id: 'experience',
    step: 6,
    name: 'EXPERIENCE',
    title: 'Tangible Immersion',
    description: 'Bridging screens into the real world. Pop-up spaces, live experiential activations, stadium spectacles, and seamless digital product interfaces.',
    deliverables: ['On-Ground Brand Experiences', 'Pop-Up Architecture', 'Interactive Web Apps', 'VIP & Press Previews'],
    highlightMetric: 'Unmatched Stickiness',
    quote: 'When customers can physically touch and experience a brand, loyalty becomes lifelong.',
    color: '#ffccbf'
  },
  {
    id: 'impact',
    step: 7,
    name: 'IMPACT',
    title: 'Measurable, Exponential Scale',
    description: 'The culmination of all channels working as one synchronized organism. Market share dominance, revenue acceleration, and cultural permanence.',
    deliverables: ['Share of Voice Gain', 'Direct Revenue Velocity', 'Brand Equity Lift', 'Regional to Global Expansion'],
    highlightMetric: 'Exponential Scale',
    quote: 'We don’t just report vanity metrics. We measure real commercial momentum.',
    color: '#ffffff'
  }
];

export const KOLKATA_SPOTS: KolkataSpot[] = [
  {
    id: 'howrah-bridge',
    title: 'Howrah Bridge (Rabindra Setu)',
    subtitle: 'The Cantilever of Ambition',
    description: 'The monumental steel gateway where 100,000 vehicles cross daily. It represents architectural courage, unyielding strength, and the scale of human engineering.',
    image: 'https://images.unsplash.com/photo-1571677246347-5040036b95cc?auto=format&fit=crop&w=1200&q=80',
    scaleAngle: 'Monumental Physical Presence'
  },
  {
    id: 'victoria-memorial',
    title: 'Victoria Memorial & The Maidan',
    subtitle: 'Scale & Classical Grandeur',
    description: 'Sprawling green open lungs facing immaculate white marble. The intersection of history, open skies, and the epic scale of public gathering.',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80',
    scaleAngle: 'Timeless Cultural Stature'
  },
  {
    id: 'yellow-cabs-streets',
    title: 'The Yellow Ambassador Fleet',
    subtitle: 'The Cinematic Urban Pulse',
    description: 'Canary yellow icons weaving through tram tracks, heritage arches, and modern flyovers. Kolkata’s cinematic character in motion.',
    image: 'https://images.unsplash.com/photo-1600100397608-f010f443bbf6?auto=format&fit=crop&w=1200&q=80',
    scaleAngle: 'Dynamic Street-Level Vitality'
  },
  {
    id: 'gariahat-billboards',
    title: 'Gariahat & Shyambazar Billboard Corridors',
    subtitle: 'Where Outdoor Advertising is an Art Form',
    description: 'The bustling retail avenues where mega-hoardings and theater posters have shaped generations of Indian advertising copywriting and visual drama.',
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80',
    scaleAngle: 'The Birthplace of Modern Indian Advertising'
  },
  {
    id: 'salt-lake-sector-v',
    title: 'Salt Lake Sector V & New Town',
    subtitle: 'The New High-Tech Skyline',
    description: 'Glass-and-steel IT towers, futuristic convention centers, and fintech startups powering Eastern India’s next technological leap.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
    scaleAngle: 'Global Digital Infrastructure'
  }
];

export const CONTENT_LAB_FORMATS: ContentLabFormat[] = [
  {
    id: 'format-reels',
    name: 'VERTICAL CINE-REELS',
    badge: '9:16 Video',
    description: 'High-retention 15-30s edits with sound design, dynamic cuts, and thumb-stopping visual hooks for Instagram and YouTube Shorts.',
    aspectRatio: 'aspect-[9/16]',
    mockupType: 'reel'
  },
  {
    id: 'format-billboard',
    name: 'MONUMENTAL OOH CANVAS',
    badge: '16:6 Large Format',
    description: 'High-contrast typography and singular hero visuals designed to be understood in 2.5 seconds at 60 km/h.',
    aspectRatio: 'aspect-[16/7]',
    mockupType: 'billboard'
  },
  {
    id: 'format-cinema',
    name: 'CINEMATIC BRAND ANTHEM',
    badge: '2.39:1 Anamorphic',
    description: 'Wide theatrical aspect ratio, nuanced color grading, Dolby sound design, and emotional storytelling for cinema halls & OTT pre-rolls.',
    aspectRatio: 'aspect-[21/9]',
    mockupType: 'cinema'
  },
  {
    id: 'format-carousel',
    name: 'EDITORIAL SWIPE CAROUSEL',
    badge: '4:5 Social Grid',
    description: 'Multi-slide educational or visual narratives that maximize user dwell time and drive high bookmark/save rates.',
    aspectRatio: 'aspect-[4/5]',
    mockupType: 'carousel'
  },
  {
    id: 'format-story',
    name: 'IMMERSIVE AR STORIES',
    badge: 'Interactive Mobile',
    description: 'Interactive filters, poll triggers, and swipe-up product tags bridging social virality into frictionless checkout.',
    aspectRatio: 'aspect-[9/16]',
    mockupType: 'story'
  },
  {
    id: 'format-print',
    name: 'FULL-PAGE NEWSPAPER WRAP',
    badge: 'Print Broadside',
    description: 'Tactile, high-credibility broadsheet execution that captures morning attention and sets the tone for national press pickup.',
    aspectRatio: 'aspect-[3/4]',
    mockupType: 'print'
  }
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: 'scale-beyond-algorithms',
    title: 'Why Most Brands Stall: The Myth of Algorithmic Scaling vs. Cultural Magnetism',
    category: 'BRAND STRATEGY',
    readTime: '6 MIN READ',
    date: 'OCTOBER 2025',
    author: {
      name: 'Aniruddha Sen',
      role: 'Chief Strategy Officer, Scale Up'
    },
    excerpt: 'Performance marketing can buy you traffic, but only cultural resonance builds enduring enterprise value. Here is why the next wave of iconic Indian brands will be built on narrative scale.',
    pullQuote: 'You cannot optimize your way into people’s hearts. At some point, you must make a bold, unreasonable creative leap.',
    coverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    tags: ['Brand Strategy', 'Performance Marketing', 'Cultural Resonance'],
    content: [
      'In an era where every agency promises ROAS formulas and programmatic targeting, advertising has suffered an unfortunate homogenization. Brands run the exact same carousels, bid on the exact same keywords, and wonder why their customer acquisition cost climbs 40% year-on-year.',
      'The missing variable is scale of imagination. When Scale Up works with founders and CMOs, we begin with a foundational truth: visibility is commoditized; emotional impact is scarce.',
      'True scale happens when an idea jumps from an Instagram ad into dinner conversations, WhatsApp forwards, and billboard culture. That requires integrating your ATL presence with your digital execution, so every dollar spent reinforces an indelible brand universe.'
    ]
  },
  {
    id: 'kolkata-creative-renaissance',
    title: 'The Kolkata Advantage: Why India’s Cultural Capital Is Breeding a New Breed of Global Advertising',
    category: 'EDITORIAL ESSAY',
    readTime: '8 MIN READ',
    date: 'SEPTEMBER 2025',
    author: {
      name: 'Rupsha Mukherjee',
      role: 'Executive Creative Director, Scale Up'
    },
    excerpt: 'From Satyajit Ray’s legendary advertising days at D.J. Keymer to modern anamorphic screens on Gariahat, Kolkata has always been the crucible of storytelling with deep literary and visual soul.',
    pullQuote: 'Kolkata does not follow trends; it gives trends emotional weight and philosophical depth.',
    coverImage: 'https://images.unsplash.com/photo-1571677246347-5040036b95cc?auto=format&fit=crop&w=1200&q=80',
    tags: ['Kolkata Culture', 'Creative Direction', 'Advertising History'],
    content: [
      'Long before "storytelling" became an agency buzzword, Kolkata was writing the playbook. The city that gave the subcontinent its Nobel laureates, its cinematic auteurs, and its most passionate street debates possesses an innate instinct for narrative tension.',
      'Scale Up was born in this environment not by accident, but by design. We deliberately set our roots here because the talent pool understands both classical typography and vertical video pacing.',
      'By marrying this rich artistic heritage with bleeding-edge commercial film gear and digital performance analytics, we deliver campaigns that stand head-and-shoulders above generic Mumbai or Bangalore agency templates.'
    ]
  },
  {
    id: 'cinematic-craft-micro-screens',
    title: 'Shooting for the 6-Inch Screen with 35mm Ambition: The New Rules of Commercial Production',
    category: 'PRODUCTION & FILM',
    readTime: '5 MIN READ',
    date: 'AUGUST 2025',
    author: {
      name: 'Devraj Bhattacharya',
      role: 'Head of Production, Scale Up Studios'
    },
    excerpt: 'Why low-fi UGC isn’t enough for luxury and high-consideration brands. How we apply Arri cameras, anamorphic glass, and bespoke sound design to vertical storytelling.',
    pullQuote: 'A small screen does not give you permission to make small, cheap cinema.',
    coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    tags: ['Commercial Film', 'Cinematography', 'Sound Design'],
    content: [
      'The consumer swiping through their feeds has witnessed hundreds of mediocre videos by breakfast. When a truly cinematic piece of craft appears—with lighting that sculpts shadow, grading that sings, and foley sound that vibrates their headphones—they stop.',
      'Our production philosophy at Scale Up treats every 15-second commercial ad with the rigor of a festival feature. We invest in real art direction, practical sets in Kolkata studios, and original musical scores.',
      'The result is unmistakable: watch times increase by 300%, and viewers view the brand as an established market titan rather than an insecure newcomer.'
    ]
  }
];

export const SHOWREEL_CLIPS = [
  {
    id: 'showreel-main',
    title: 'SCALE UP 2025 MASTER REEL',
    duration: '01:45',
    client: 'Scale Up Studios',
    type: 'Commercials / Brand Films / OOH / Digital',
    coverImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80',
    description: 'An adrenaline rush across our latest commercial campaigns, aerial Kolkata cinematography, high-fashion handloom shoots, and explosive stadium spectacles.'
  },
  {
    id: 'showreel-sports',
    title: 'THE ROAR OF HOWRAH (DIRECTOR’S CUT)',
    duration: '00:60',
    client: 'Kolkata Thunderbolts',
    type: 'Broadcast Ad Film',
    coverImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80',
    description: 'High-octane sports cinematography shot on high-speed Phantom 4K cameras with Kolkata street soundscape.'
  },
  {
    id: 'showreel-luxury',
    title: 'BREWED BOLD: DARJEELING GOLD',
    duration: '01:15',
    client: 'East India Tea Estates',
    type: 'Cinema Film & OTT Pre-Roll',
    coverImage: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    description: 'Poetic sensory journey captured on anamorphic lenses across mist-shrouded Himalayan tea estates.'
  }
];
