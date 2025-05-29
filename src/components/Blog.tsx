'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data';

const Blog = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-cream to-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Wedding Planning
            <span className="text-gradient block">Insights & Tips</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert advice, inspiration, and practical tips to help you plan your perfect wedding day. 
            From timelines to venues, we've got you covered.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-elegant overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Featured Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/90 backdrop-blur-sm text-charcoal text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-3 group-hover:text-rose-gold transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <button className="flex items-center space-x-2 text-rose-gold font-semibold hover:text-sage transition-colors duration-300">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">
              Want More Wedding Planning Tips?
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for exclusive planning tips, vendor recommendations, 
              and behind-the-scenes insights from real weddings.
            </p>
            <button className="bg-gradient-rose text-white px-8 py-3 rounded-full hover:shadow-elegant transition-all duration-300 font-semibold">
              Subscribe to Newsletter
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 