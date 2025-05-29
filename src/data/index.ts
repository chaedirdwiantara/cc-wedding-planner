import { Service, Testimonial, PortfolioItem, BlogPost, ContactInfo, LeadMagnet } from '@/types';

export const contactInfo: ContactInfo = {
  email: 'hello@charlottechalder.com',
  phone: '+44 20 7123 4567',
  address: '123 Kensington Gardens',
  city: 'London',
  country: 'United Kingdom',
  instagram: '@cctheweddingplanner',
  workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM'
};

export const services: Service[] = [
  {
    id: '1',
    title: 'Full Wedding Planning',
    description: 'Complete wedding planning service from concept to execution, ensuring every detail is perfect for your special day.',
    icon: 'Crown',
    features: [
      'Initial consultation & vision development',
      'Venue sourcing & booking',
      'Vendor coordination & management',
      'Timeline & budget management',
      'Day-of coordination',
      'Post-wedding follow-up'
    ],
    price: 'From £5,000'
  },
  {
    id: '2',
    title: 'Partial Wedding Planning',
    description: 'Perfect for couples who want professional guidance for specific aspects of their wedding planning journey.',
    icon: 'Heart',
    features: [
      'Vendor recommendations',
      'Design consultation',
      'Timeline creation',
      'Budget guidance',
      'Monthly check-ins',
      'Final month coordination'
    ],
    price: 'From £2,500'
  },
  {
    id: '3',
    title: 'Day-of Coordination',
    description: 'Stress-free wedding day management, allowing you to enjoy every moment while we handle the logistics.',
    icon: 'Calendar',
    features: [
      'Final venue walkthrough',
      'Vendor coordination',
      'Timeline management',
      'Emergency problem solving',
      '12-hour day coverage',
      'Setup supervision'
    ],
    price: 'From £1,200'
  },
  {
    id: '4',
    title: 'Destination Weddings',
    description: 'Specialized planning for destination weddings across Europe, creating magical celebrations in stunning locations.',
    icon: 'MapPin',
    features: [
      'Location scouting',
      'Local vendor network',
      'Guest accommodation',
      'Travel coordination',
      'Legal requirements guidance',
      'Cultural considerations'
    ],
    price: 'From £8,000'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Emily & James Richardson',
    role: 'Bride & Groom',
    content: 'Charlotte made our dream wedding come true! Her attention to detail and calm presence made our day absolutely perfect. We couldn\'t have asked for a better wedding planner.',
    rating: 5,
    weddingDate: 'June 2024',
    venue: 'Kew Gardens, London'
  },
  {
    id: '2',
    name: 'Sarah & Michael Thompson',
    role: 'Bride & Groom',
    content: 'From our first meeting to the last dance, Charlotte exceeded every expectation. Her vendor network is incredible and she truly understood our vision.',
    rating: 5,
    weddingDate: 'September 2024',
    venue: 'Château de Varennes, France'
  },
  {
    id: '3',
    name: 'Alexandra & David Chen',
    role: 'Bride & Groom',
    content: 'Charlotte\'s expertise in destination weddings is unmatched. She handled every detail of our Tuscany wedding flawlessly, allowing us to enjoy every moment.',
    rating: 5,
    weddingDate: 'May 2024',
    venue: 'Villa San Crispolto, Italy'
  },
  {
    id: '4',
    name: 'Rebecca & Thomas Wilson',
    role: 'Bride & Groom',
    content: 'Professional, creative, and incredibly organized. Charlotte turned our vision into reality and made the entire planning process enjoyable and stress-free.',
    rating: 5,
    weddingDate: 'August 2024',
    venue: 'Hampton Court Palace'
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Elegant Garden Romance',
    description: 'A sophisticated garden wedding featuring blush roses, eucalyptus, and romantic candlelight.',
    images: ['/portfolio/garden-1.jpg', '/portfolio/garden-2.jpg', '/portfolio/garden-3.jpg'],
    venue: 'Kew Gardens, London',
    date: 'June 2024',
    style: 'Romantic Garden',
    category: 'luxury'
  },
  {
    id: '2',
    title: 'Château Destination Dream',
    description: 'A fairytale destination wedding in the French countryside with vintage elegance.',
    images: ['/portfolio/chateau-1.jpg', '/portfolio/chateau-2.jpg', '/portfolio/chateau-3.jpg'],
    venue: 'Château de Varennes, France',
    date: 'September 2024',
    style: 'Vintage Elegance',
    category: 'destination'
  },
  {
    id: '3',
    title: 'Intimate City Celebration',
    description: 'A chic and modern intimate wedding in the heart of London with contemporary design.',
    images: ['/portfolio/city-1.jpg', '/portfolio/city-2.jpg', '/portfolio/city-3.jpg'],
    venue: 'The Shard, London',
    date: 'March 2024',
    style: 'Modern Chic',
    category: 'intimate'
  },
  {
    id: '4',
    title: 'Tuscan Villa Magic',
    description: 'A luxurious destination wedding in Tuscany with olive groves and golden hour magic.',
    images: ['/portfolio/tuscany-1.jpg', '/portfolio/tuscany-2.jpg', '/portfolio/tuscany-3.jpg'],
    venue: 'Villa San Crispolto, Italy',
    date: 'May 2024',
    style: 'Tuscan Romance',
    category: 'destination'
  },
  {
    id: '5',
    title: 'Royal Palace Grandeur',
    description: 'A grand traditional wedding at a historic palace with timeless elegance.',
    images: ['/portfolio/palace-1.jpg', '/portfolio/palace-2.jpg', '/portfolio/palace-3.jpg'],
    venue: 'Hampton Court Palace',
    date: 'August 2024',
    style: 'Royal Traditional',
    category: 'traditional'
  },
  {
    id: '6',
    title: 'Minimalist Modern Love',
    description: 'A sleek and contemporary wedding with clean lines and sophisticated details.',
    images: ['/portfolio/modern-1.jpg', '/portfolio/modern-2.jpg', '/portfolio/modern-3.jpg'],
    venue: 'Tate Modern, London',
    date: 'October 2024',
    style: 'Contemporary Minimalist',
    category: 'modern'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Ultimate Wedding Planning Timeline: 12 Months to Your Perfect Day',
    excerpt: 'A comprehensive guide to planning your wedding with a detailed month-by-month timeline to ensure nothing is forgotten.',
    content: 'Planning a wedding can feel overwhelming, but with the right timeline, you can stay organized and stress-free...',
    image: '/blog/timeline.jpg',
    publishedAt: '2024-01-15',
    readTime: 8,
    tags: ['Planning', 'Timeline', 'Organization'],
    slug: 'ultimate-wedding-planning-timeline'
  },
  {
    id: '2',
    title: 'Top 10 Wedding Venues in London for 2024',
    excerpt: 'Discover the most stunning wedding venues London has to offer, from historic palaces to modern galleries.',
    content: 'London offers an incredible array of wedding venues, each with its own unique character and charm...',
    image: '/blog/venues.jpg',
    publishedAt: '2024-02-01',
    readTime: 6,
    tags: ['Venues', 'London', 'Inspiration'],
    slug: 'top-wedding-venues-london-2024'
  },
  {
    id: '3',
    title: 'Destination Wedding Planning: Everything You Need to Know',
    excerpt: 'Essential tips and considerations for planning the perfect destination wedding in Europe.',
    content: 'Destination weddings offer a unique opportunity to celebrate your love in a stunning location...',
    image: '/blog/destination.jpg',
    publishedAt: '2024-02-20',
    readTime: 10,
    tags: ['Destination', 'Europe', 'Travel'],
    slug: 'destination-wedding-planning-guide'
  }
];

export const leadMagnet: LeadMagnet = {
  title: 'The Ultimate Wedding Planning Checklist',
  description: 'Get our comprehensive 12-month wedding planning checklist and never miss a detail for your perfect day.',
  downloadTitle: 'Download Your Free Wedding Planning Checklist',
  benefits: [
    'Complete 12-month timeline',
    'Budget tracking templates',
    'Vendor contact sheets',
    'Day-of timeline template',
    'Emergency kit checklist',
    'Post-wedding follow-up guide'
  ]
}; 