'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import { ArrowDown, Download, MapPin, Star } from 'lucide-react';
import { leadMagnet } from '@/data';

const Hero = () => {
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  const [email, setEmail] = useState('');

  const handleLeadMagnetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
    alert('Thank you! Your wedding planning checklist will be sent to your email.');
    setShowLeadMagnet(false);
    setEmail('');
  };

  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-background.jpg"
          alt="Elegant wedding background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft mb-6"
            >
              <MapPin className="w-4 h-4 text-rose-400" />
              <span className="text-sm font-medium text-gray-700">Based in London</span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Creating{' '}
              <span className="text-gradient">Unforgettable</span>
              <br />
              Wedding Moments
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            >
              I'm Charlotte Chalder, a luxury wedding planner specializing in elegant and sophisticated celebrations across the UK and Europe. Let me turn your dream wedding into reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-rose text-white px-8 py-4 rounded-full hover:shadow-elegant transition-all duration-300 font-semibold text-lg"
              >
                Book Your Consultation
              </button>
              
              <button
                onClick={() => setShowLeadMagnet(true)}
                className="bg-white text-gray-800 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-rose-300 hover:shadow-soft transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Free Planning Guide</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20"
            >
              <div className="text-center lg:text-left">
                <div className="font-playfair text-3xl font-bold text-white">150+</div>
                <div className="text-sm text-white/80">Weddings Planned</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-playfair text-3xl font-bold text-white">5</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-playfair text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-white/80">Happy Couples</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Charlotte's Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl shadow-elegant overflow-hidden">
              <Image
                src="/images/hero/charlotte-portrait.png"
                alt="Charlotte Chalder - Wedding Planner"
                fill
                className="object-cover"
              />
              
              {/* Floating elements */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-soft">
                <span className="text-sm font-medium text-gray-700">London Based</span>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-soft">
                <span className="text-sm font-medium text-gray-700">Luxury Weddings</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm font-medium">Discover More</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Lead Magnet Modal */}
      {showLeadMagnet && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowLeadMagnet(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-rose rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-2">
                {leadMagnet.title}
              </h3>
              <p className="text-gray-600">
                {leadMagnet.description}
              </p>
            </div>

            <form onSubmit={handleLeadMagnetSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-rose text-white py-3 rounded-lg hover:shadow-elegant transition-all duration-300 font-semibold"
              >
                Download Free Checklist
              </button>
            </form>

            <button
              onClick={() => setShowLeadMagnet(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero; 