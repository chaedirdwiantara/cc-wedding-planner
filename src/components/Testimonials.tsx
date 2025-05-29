'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Calendar, MapPin } from 'lucide-react';
import Image from "next/image";
import { testimonials } from '@/data';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-rose-50 px-4 py-2 rounded-full shadow-soft mb-6">
            <Heart className="w-4 h-4 text-rose-400" />
            <span className="text-sm font-medium text-gray-700">Client Testimonials</span>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our Couples
            <span className="text-gradient block">Are Saying</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our happy couples have to say about their 
            wedding planning experience with Charlotte Chalder.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-rose-50 via-white to-sage-50 rounded-3xl p-8 lg:p-12 shadow-elegant mb-16 relative overflow-hidden"
        >
          {/* Background Quote */}
          <div className="absolute top-8 right-8 opacity-10">
            <Quote className="w-24 h-24 text-rose-400" />
          </div>

          <div className="relative z-10">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-6 font-medium">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="space-y-2">
                  <div className="font-playfair text-xl font-bold text-gray-800">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-600">{currentTestimonial.role}</div>
                  
                  {/* Wedding Details */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {currentTestimonial.weddingDate && (
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{currentTestimonial.weddingDate}</span>
                      </div>
                    )}
                    {currentTestimonial.venue && (
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{currentTestimonial.venue}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Client Image */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="w-full h-64 lg:h-80 rounded-2xl shadow-soft overflow-hidden">
                    <Image
                      src={currentTestimonial.image || '/images/testimonials/couple-1.jpg'}
                      alt={`${currentTestimonial.name} - Happy Couple`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-soft hover:shadow-elegant transition-all duration-300 flex items-center justify-center group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-rose-500" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-rose-400 w-8'
                        : 'bg-gray-300 hover:bg-rose-200'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-soft hover:shadow-elegant transition-all duration-300 flex items-center justify-center group"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-rose-500" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4">
              More Happy Couples
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every wedding is unique, and every couple has their own story to tell
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.filter((_, index) => index !== currentIndex).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 border border-gray-100"
              >
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-playfair text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{testimonial.role}</div>
                  
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    {testimonial.weddingDate && (
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{testimonial.weddingDate}</span>
                      </div>
                    )}
                    {testimonial.venue && (
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.venue}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-rose-50 via-white to-sage-50 rounded-3xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
              Ready to Create Your Own Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our family of happy couples and let us help you create the wedding of your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-rose text-white px-8 py-4 rounded-full hover:shadow-elegant transition-all duration-300 font-semibold"
              >
                Start Your Journey
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-gray-800 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-rose-300 hover:shadow-soft transition-all duration-300 font-semibold"
              >
                View Our Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 