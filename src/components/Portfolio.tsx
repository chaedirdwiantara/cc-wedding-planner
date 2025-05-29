'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Camera, MapPin, Calendar, Filter, Eye } from 'lucide-react';
import Image from "next/image";
import { portfolioItems } from '@/data';
import type { PortfolioItem } from '@/types';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', name: 'All Weddings' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'intimate', name: 'Intimate' },
    { id: 'destination', name: 'Destination' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'modern', name: 'Modern' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-sage-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft mb-6">
            <Camera className="w-4 h-4 text-rose-400" />
            <span className="text-sm font-medium text-gray-700">Wedding Portfolio</span>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Celebrating Love Stories
            <span className="text-gradient block">Across Europe</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each wedding is a unique celebration of love. Browse through some of our most memorable 
            celebrations, from intimate garden ceremonies to grand château destinations.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-soft">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Filter by style:</span>
          </div>
          
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-rose text-white shadow-soft'
                  : 'bg-white/80 text-gray-700 hover:bg-rose-50 hover:text-rose-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 group-hover:-translate-y-2">
                {/* Portfolio Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Eye className="w-6 h-6 text-gray-800" />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{item.venue}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-rose-500 bg-rose-50 px-2 py-1 rounded-full">
                        {item.style}
                      </span>
                      <button className="text-rose-500 hover:text-rose-600 transition-colors text-sm font-medium">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
              Ready to Create Your Own Love Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can bring your wedding vision to life with the same attention to detail and elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-rose text-white px-8 py-4 rounded-full hover:shadow-elegant transition-all duration-300 font-semibold"
              >
                Start Planning Today
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#testimonials');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-gray-800 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-rose-300 hover:shadow-soft transition-all duration-300 font-semibold"
              >
                Read Client Stories
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for portfolio item details - placeholder for now */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-elegant max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
                {selectedItem.title}
              </h3>
              <p className="text-gray-600 mb-4">{selectedItem.description}</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center space-x-2 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedItem.venue}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedItem.date}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Full gallery and details coming soon...
              </p>
              <button
                onClick={() => setSelectedItem(null)}
                className="bg-gradient-rose text-white px-6 py-3 rounded-full hover:shadow-elegant transition-all duration-300 font-semibold"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio; 