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
    venue: 'Kew Gardens, London',
    image: '/images/testimonials/couple-1.jpg'
  },
  {
    id: '2',
    name: 'Sarah & Michael Thompson',
    role: 'Bride & Groom',
    content: 'From our first meeting to the last dance, Charlotte exceeded every expectation. Her vendor network is incredible and she truly understood our vision.',
    rating: 5,
    weddingDate: 'September 2024',
    venue: 'Château de Varennes, France',
    image: '/images/testimonials/couple-2.jpg'
  },
  {
    id: '3',
    name: 'Alexandra & David Chen',
    role: 'Bride & Groom',
    content: 'Charlotte\'s expertise in destination weddings is unmatched. She handled every detail of our Tuscany wedding flawlessly, allowing us to enjoy every moment.',
    rating: 5,
    weddingDate: 'May 2024',
    venue: 'Villa San Crispolto, Italy',
    image: '/images/testimonials/couple-3.jpg'
  },
  {
    id: '4',
    name: 'Rebecca & Thomas Wilson',
    role: 'Bride & Groom',
    content: 'Professional, creative, and incredibly organized. Charlotte turned our vision into reality and made the entire planning process enjoyable and stress-free.',
    rating: 5,
    weddingDate: 'August 2024',
    venue: 'Hampton Court Palace',
    image: '/images/testimonials/couple-4.jpg'
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Elegant Garden Romance',
    description: 'A sophisticated garden wedding featuring blush roses, eucalyptus, and romantic candlelight.',
    images: ['/images/portfolio/garden-1.jpg', '/images/portfolio/garden-2.jpg', '/images/portfolio/garden-3.jpg'],
    venue: 'Kew Gardens, London',
    date: 'June 2024',
    style: 'Romantic Garden',
    category: 'luxury'
  },
  {
    id: '2',
    title: 'Château Destination Dream',
    description: 'A fairytale destination wedding in the French countryside with vintage elegance.',
    images: ['/images/portfolio/chateau-1.jpg', '/images/portfolio/chateau-2.jpg', '/images/portfolio/chateau-3.jpg'],
    venue: 'Château de Varennes, France',
    date: 'September 2024',
    style: 'Vintage Elegance',
    category: 'destination'
  },
  {
    id: '3',
    title: 'Intimate City Celebration',
    description: 'A chic and modern intimate wedding in the heart of London with contemporary design.',
    images: ['/images/portfolio/city-1.jpg', '/images/portfolio/city-2.jpg', '/images/portfolio/city-3.jpg'],
    venue: 'The Shard, London',
    date: 'March 2024',
    style: 'Modern Chic',
    category: 'intimate'
  },
  {
    id: '4',
    title: 'Tuscan Villa Magic',
    description: 'A luxurious destination wedding in Tuscany with olive groves and golden hour magic.',
    images: ['/images/portfolio/tuscany-1.jpg', '/images/portfolio/tuscany-2.jpg', '/images/portfolio/tuscany-3.jpg'],
    venue: 'Villa San Crispolto, Italy',
    date: 'May 2024',
    style: 'Tuscan Romance',
    category: 'destination'
  },
  {
    id: '5',
    title: 'Royal Palace Grandeur',
    description: 'A grand traditional wedding at a historic palace with timeless elegance.',
    images: ['/images/portfolio/palace-1.jpg', '/images/portfolio/palace-2.jpg', '/images/portfolio/palace-3.jpg'],
    venue: 'Hampton Court Palace',
    date: 'August 2024',
    style: 'Royal Traditional',
    category: 'traditional'
  },
  {
    id: '6',
    title: 'Minimalist Modern Love',
    description: 'A sleek and contemporary wedding with clean lines and sophisticated details.',
    images: ['/images/portfolio/modern-1.jpg', '/images/portfolio/modern-2.jpg', '/images/portfolio/modern-3.jpg'],
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
    content: `Planning a wedding can feel overwhelming, but with the right timeline, you can stay organized and stress-free throughout your entire journey to "I do."

Starting your wedding planning 12 months in advance gives you the luxury of time to make thoughtful decisions, secure your dream vendors, and truly enjoy the process. Here's your complete month-by-month guide:

**12 Months Before: The Foundation**
Begin with the big picture. Set your budget, create your guest list, and start researching venues. This is also the perfect time to hire a wedding planner who can guide you through every step.

**10-11 Months Before: Securing the Essentials**
Book your venue, photographer, and caterer. These are typically the most in-demand vendors and booking early ensures you get your first choices.

**8-9 Months Before: The Creative Phase**
Choose your wedding party, shop for your dress, and start planning your design aesthetic. This is when your wedding vision really starts to come to life.

**6-7 Months Before: The Details**
Book your florist, band or DJ, and other remaining vendors. Send save-the-dates and begin planning your honeymoon.

**4-5 Months Before: Final Preparations**
Order invitations, plan your menu tasting, and schedule dress fittings. The excitement is building!

**2-3 Months Before: The Home Stretch**
Send invitations, finalize details with all vendors, and enjoy your engagement party or bridal shower.

**1 Month Before: The Final Countdown**
Confirm final guest count, prepare seating charts, and delegate day-of responsibilities to your wedding party.

Remember, every wedding is unique, and this timeline can be adjusted to fit your specific needs and circumstances. The key is to stay organized and enjoy this special time in your life!`,
    image: '/images/blog/timeline.jpg',
    publishedAt: '2024-01-15',
    readTime: 8,
    tags: ['Planning', 'Timeline', 'Organization'],
    slug: 'ultimate-wedding-planning-timeline'
  },
  {
    id: '4',
    title: 'Elegant Weddings in London: Why Charlotte Chalder is the Organizer You Can Trust',
    excerpt: 'Discover why Charlotte Chalder stands out as London\'s premier wedding organizer, bringing elegance, precision, and peace of mind to your special day.',
    content: `Planning a wedding in London requires not just taste, but trusted hands. Charlotte Chalder, a distinguished **wedding organizer**, brings elegance, precision, and calm to your most important day. With a tailored approach to each couple, Charlotte ensures your wedding reflects your story—beautifully and effortlessly.

**The Charlotte Chalder Difference**
What sets Charlotte apart in London's competitive wedding industry is her commitment to creating bespoke experiences that truly reflect each couple's unique love story. Her approach combines traditional elegance with modern innovation, ensuring every detail is perfectly executed.

**Expert Team and Technology Integration**
Her trusted team, including a dedicated **wedding planner assistant**, manages everything from vendor coordination to last-minute changes. Clients enjoy a seamless experience, supported by the latest **wedding planning apps** for real-time updates and collaborative planning.

**Comprehensive Wedding Planning Services**
Whether it's an intimate garden ceremony or a lavish ballroom event, Charlotte combines modern tools with timeless attention to detail. For couples seeking sophistication without the stress, she offers more than a service—she offers peace of mind.

**Modern Tools for Timeless Celebrations**
Charlotte leverages cutting-edge technology to enhance the planning process:
- Real-time budget tracking and updates
- Collaborative planning platforms for couples and families
- Digital vendor coordination systems
- Mobile apps for day-of timeline management
- Virtual reality venue tours for destination planning

**Why Choose Charlotte as Your Wedding Organizer**
- **Proven Track Record**: Over 200 successful weddings across London and Europe
- **Vendor Network**: Exclusive relationships with London's finest suppliers
- **Personal Touch**: Every wedding is treated as a unique celebration
- **Stress-Free Process**: From initial consultation to final farewell
- **Technology Integration**: Modern planning tools for seamless coordination

**Client-Centered Approach**
Charlotte's philosophy centers on understanding each couple's vision and translating it into reality. Her team works tirelessly to ensure that your wedding day unfolds exactly as you've dreamed, with every detail thoughtfully planned and flawlessly executed.

**Beyond the Wedding Day**
The relationship doesn't end when the last dance finishes. Charlotte provides post-wedding services including vendor follow-up, gift coordination, and even anniversary planning to help couples continue celebrating their love story.

When you choose Charlotte Chalder as your wedding organizer, you're not just hiring a planner—you're partnering with a dedicated professional who will transform your wedding dreams into an elegant reality.`,
    image: '/images/blog/weddingPlanner.jpg',
    publishedAt: '2024-03-01',
    readTime: 7,
    tags: ['Wedding Organizer', 'London', 'Professional Services'],
    slug: 'elegant-weddings-charlotte-chalder-organizer'
  },
  {
    id: '2',
    title: 'Top 10 Wedding Venues in London for 2024',
    excerpt: 'Discover the most stunning wedding venues London has to offer, from historic palaces to modern galleries.',
    content: `London offers an incredible array of wedding venues, each with its own unique character and charm. From royal palaces to contemporary art galleries, the capital provides endless possibilities for your perfect day.

**1. Hampton Court Palace**
Step into history with a wedding at Henry VIII's former palace. The magnificent Great Hall and beautiful gardens create an unforgettable royal experience.

**2. Kew Gardens**
Say "I do" surrounded by some of the world's most beautiful botanical collections. The Victorian glasshouses provide a magical backdrop for any season.

**3. The Shard**
For couples seeking modern luxury, The Shard offers breathtaking views across London from Western Europe's tallest building.

**4. Natural History Museum**
Exchange vows beneath the stunning architecture of Hintze Hall, surrounded by the grandeur of this iconic South Kensington institution.

**5. Claridge's**
Timeless elegance meets Art Deco glamour at this legendary Mayfair hotel, perfect for intimate celebrations.

**6. One Marylebone**
This Grade II listed former church offers high ceilings, beautiful stained glass, and versatile spaces for both ceremonies and receptions.

**7. The Roundhouse**
For creative couples, this former railway engine shed in Camden provides an industrial-chic backdrop with incredible acoustics.

**8. Spencer House**
London's finest surviving 18th-century aristocratic palace offers opulent state rooms overlooking Green Park.

**9. Horniman Museum**
This Victorian gem in South London combines stunning gardens with unique museum spaces for a truly distinctive celebration.

**10. The Old Royal Naval College**
Sir Christopher Wren's baroque masterpiece in Greenwich provides an magnificent riverside setting steeped in maritime history.

Each venue offers something special, and the key is finding the one that reflects your personal style and vision for your wedding day.`,
    image: '/images/blog/venues.jpg',
    publishedAt: '2024-02-01',
    readTime: 6,
    tags: ['Venues', 'London', 'Inspiration'],
    slug: 'top-wedding-venues-london-2024'
  },
  {
    id: '3',
    title: 'Destination Wedding Planning: Everything You Need to Know',
    excerpt: 'Essential tips and considerations for planning the perfect destination wedding in Europe.',
    content: `Destination weddings offer a unique opportunity to celebrate your love in a stunning location while creating an unforgettable experience for you and your guests. However, planning a wedding away from home requires careful consideration and expert guidance.

**Choosing Your Destination**
Europe offers countless romantic destinations, from the rolling hills of Tuscany to the dramatic coastlines of Santorini. Consider factors like travel requirements for guests, local marriage laws, weather patterns, and cultural considerations.

**Legal Requirements**
Each country has different requirements for foreign marriages. Some popular destinations include:
- **Italy**: Requires specific documentation and often a civil ceremony in addition to religious ceremonies
- **France**: Civil ceremonies are legally binding, while religious ceremonies are symbolic
- **Spain**: Offers both civil and religious options with varying documentation requirements

**Timeline Considerations**
Destination weddings typically require longer planning timelines:
- 18-24 months for popular destinations
- Legal documentation can take 3-6 months to process
- Multiple venue visits may be needed

**Guest Experience**
Make your guests' journey as smooth as possible:
- Provide detailed travel information early
- Consider group accommodation bookings
- Plan welcome events and departure brunches
- Create itineraries for free time

**Local Vendors vs. Traveling Vendors**
Work with experienced local vendors who understand the area's regulations and logistics. A destination wedding planner with local connections is invaluable.

**Budgeting Considerations**
Factor in travel costs, international vendor payments, shipping for decorations, and potential currency fluctuations. While guest lists are typically smaller, per-person costs may be higher.

**Weather and Seasonal Planning**
Research your destination's climate patterns and peak tourist seasons. Consider backup plans for outdoor ceremonies and seasonal vendor availability.

The magic of a destination wedding lies in creating an immersive experience that reflects both your love story and the beauty of your chosen location. With proper planning and the right team, your destination wedding will be the adventure of a lifetime.`,
    image: '/images/blog/destination.jpg',
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