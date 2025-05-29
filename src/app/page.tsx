import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      
      {/* Placeholder sections for now */}
      <section id="blog" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">Blog</h2>
          <p className="text-gray-600">Blog section coming soon...</p>
        </div>
      </section>
      
      <section id="contact" className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-600">Contact section coming soon...</p>
        </div>
      </section>
    </main>
  );
}
