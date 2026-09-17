export type CategoryType = 'ALL' | 'DIGITAL' | 'ATL' | 'BTL' | 'CONTENT' | 'FILMS' | 'BRANDING';

export interface Project {
  id: string;
  client: string;
  industry: string;
  title: string;
  tagline: string;
  category: CategoryType[];
  services: string[];
  heroImage: string;
  galleryImages: string[];
  videoThumbnail?: string;
  story: string;
  challenge: string;
  solution: string;
  scaleMetric: {
    label: string;
    value: string;
    detail: string;
  };
  featuredSize?: 'full' | 'large' | 'medium';
  year: string;
}

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  copy: string;
  deliverables: string[];
  metrics: string;
  bgImage: string;
}

export interface ScaleEngineNode {
  id: string;
  step: number;
  name: string;
  title: string;
  description: string;
  deliverables: string[];
  highlightMetric: string;
  quote: string;
  color: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  excerpt: string;
  content: string[];
  pullQuote: string;
  coverImage: string;
  tags: string[];
}

export interface KolkataSpot {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  scaleAngle: string;
}

export interface ContentLabFormat {
  id: string;
  name: string;
  badge: string;
  description: string;
  aspectRatio: string;
  mockupType: 'reel' | 'billboard' | 'carousel' | 'cinema' | 'story' | 'print';
}
