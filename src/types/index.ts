export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
  weddingDate?: string;
  venue?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  venue: string;
  date: string;
  style: string;
  category: 'luxury' | 'intimate' | 'destination' | 'traditional' | 'modern';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  slug: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  instagram: string;
  workingHours: string;
}

export interface LeadMagnet {
  title: string;
  description: string;
  downloadTitle: string;
  benefits: string[];
} 