'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { blogPosts } from '@/data';
import { useState, useEffect } from 'react';
import type { BlogPost } from '@/types';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedPost) {
        closePost();
      }
    };

    if (selectedPost) {
      document.addEventListener('keydown', handleEscKey);
      return () => {
        document.removeEventListener('keydown', handleEscKey);
      };
    }
  }, [selectedPost]);

  // Cleanup effect to restore scroll when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closePost = () => {
    setSelectedPost(null);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };

  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
          // Handle bold headers
          const text = paragraph.trim().slice(2, -2);
          return (
            <h3 key={index} className="text-xl font-bold text-charcoal mt-8 mb-4 font-playfair">
              {text}
            </h3>
          );
        } else if (paragraph.trim().startsWith('- ')) {
          // Handle bullet points
          const items = paragraph.split('\n').filter(item => item.trim().startsWith('- '));
          return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-6 ml-4">
              {items.map((item, itemIndex) => {
                const text = item.trim().slice(2);
                // Handle bold items within lists
                if (text.includes('**')) {
                  const parts = text.split('**');
                  return (
                    <li key={itemIndex} className="text-lg leading-relaxed">
                      {parts.map((part, partIndex) => (
                        partIndex % 2 === 1 ? 
                          <strong key={partIndex} className="font-semibold text-charcoal">{part}</strong> : 
                          part
                      ))}
                    </li>
                  );
                }
                return (
                  <li key={itemIndex} className="text-lg leading-relaxed">
                    {text}
                  </li>
                );
              })}
            </ul>
          );
        } else if (paragraph.trim()) {
          // Handle regular paragraphs
          const text = paragraph.trim();
          // Handle bold text within paragraphs
          if (text.includes('**')) {
            const parts = text.split('**');
            return (
              <p key={index} className="text-lg leading-relaxed mb-6">
                {parts.map((part, partIndex) => (
                  partIndex % 2 === 1 ? 
                    <strong key={partIndex} className="font-semibold text-charcoal">{part}</strong> : 
                    part
                ))}
              </p>
            );
          }
          return (
            <p key={index} className="text-lg leading-relaxed mb-6">
              {text}
            </p>
          );
        }
        return null;
      })
      .filter(Boolean);
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
                <button 
                  onClick={() => openPost(post)}
                  className="flex items-center space-x-2 text-rose-gold font-semibold hover:text-sage transition-colors duration-300"
                >
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

      {/* Blog Post Modal */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closePost}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={closePost}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>

                {/* Tags */}
                <div className="absolute bottom-4 left-6">
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-white/90 backdrop-blur-sm text-charcoal text-sm px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
              {/* Meta Information */}
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(selectedPost.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime} min read</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-6">
                {selectedPost.title}
              </h1>

              {/* Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl text-gray-600 mb-8 font-medium">
                  {selectedPost.excerpt}
                </p>
                
                <div className="space-y-2">
                  {formatContent(selectedPost.content)}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={() => {
                    closePost();
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-rose text-white px-8 py-3 rounded-full hover:shadow-elegant transition-all duration-300 font-semibold"
                >
                  Get Planning Help
                </button>
                <button
                  onClick={closePost}
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 font-semibold"
                >
                  Continue Reading Blog
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Blog; 