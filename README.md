# Charlotte Chalder - Luxury Wedding Planner

A sophisticated and elegant landing page for Charlotte Chalder, a luxury wedding planner based in London, specializing in creating unforgettable wedding celebrations across the UK and Europe.

## 🌟 Features

- **Elegant Design**: Professional and sophisticated design with a wedding-focused color palette
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **SEO Optimized**: Proper meta tags and structured data for search engines
- **Lead Generation**: Built-in lead magnet with wedding planning checklist
- **Interactive Portfolio**: Filterable portfolio gallery with modal views
- **Client Testimonials**: Carousel-style testimonials with navigation
- **Service Showcase**: Detailed service offerings with pricing

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display + Inter)

## 🎨 Design System

### Color Palette
- **Rose Gold**: #E8B4B8 (Primary brand color)
- **Blush**: #F7E7E7 (Soft accent)
- **Sage**: #A8B5A0 (Secondary accent)
- **Cream**: #FAF7F2 (Background)
- **Charcoal**: #2C2C2C (Text)

### Typography
- **Headings**: Playfair Display (Elegant serif)
- **Body**: Inter (Clean sans-serif)

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with lead magnet
2. **About**: Charlotte's story and credentials
3. **Services**: Four main service offerings with detailed features
4. **Portfolio**: Filterable gallery of past weddings
5. **Testimonials**: Client reviews with interactive carousel
6. **Blog**: Placeholder for future content
7. **Contact**: Placeholder for contact form

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd cc-wedding-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
cc-wedding-planner/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   └── Testimonials.tsx
│   ├── data/
│   │   └── index.ts
│   └── types/
│       └── index.ts
├── public/
├── package.json
└── README.md
```

## 🎯 Key Components

### Header
- Fixed navigation with smooth scrolling
- Mobile-responsive hamburger menu
- Brand logo with Charlotte's initials (CC)

### Hero Section
- Compelling headline and value proposition
- Lead magnet modal for wedding planning checklist
- Statistics showcase (150+ weddings, 5 years experience)
- Call-to-action buttons

### Services
- Four main service packages with pricing
- Feature lists with checkmarks
- Three-step planning process
- Interactive hover effects

### Portfolio
- Filterable gallery by wedding style
- Modal popup for detailed views
- Category badges and venue information
- Smooth animations and transitions

### Testimonials
- Featured testimonial carousel
- Star ratings and client details
- Grid of additional testimonials
- Navigation controls

## 📊 Data Structure

All content is stored in `src/data/index.ts` with TypeScript interfaces:

- **Services**: Wedding planning packages
- **Portfolio**: Past wedding projects
- **Testimonials**: Client reviews
- **Contact Info**: Business details
- **Lead Magnet**: Free resource offering

## 🎨 Customization

### Colors
Update the color palette in `src/app/globals.css`:
```css
:root {
  --rose-gold: #E8B4B8;
  --blush: #F7E7E7;
  --sage: #A8B5A0;
  /* ... */
}
```

### Content
Modify the data in `src/data/index.ts` to update:
- Service offerings and pricing
- Portfolio items
- Testimonials
- Contact information

### Styling
Tailwind classes can be customized throughout the components. The design system uses:
- `bg-gradient-rose` for primary gradients
- `bg-gradient-sage` for secondary gradients
- `shadow-elegant` for premium shadows
- `font-playfair` for headings

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
```bash
npm run build
npm start
```

## 📈 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Static Generation**: Pre-rendered pages for better performance
- **Font Optimization**: Optimized Google Fonts loading

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📝 Future Enhancements

- [ ] Blog section with CMS integration
- [ ] Contact form with email integration
- [ ] Image gallery with real wedding photos
- [ ] Booking calendar integration
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Performance monitoring

## 👥 Credits

- **Design**: Custom wedding planner theme
- **Development**: Next.js + TypeScript + Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Animations**: Framer Motion

## 📄 License

This project is created for Charlotte Chalder's wedding planning business.

---

**Charlotte Chalder Wedding Planning**  
*Creating Unforgettable Wedding Moments*  
📍 London, UK | 🌍 Serving UK & Europe  
📧 hello@charlottechalder.com  
📱 @cctheweddingplanner
