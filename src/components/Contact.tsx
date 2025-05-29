'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Instagram, Send, CheckCircle } from 'lucide-react';
import { contactInfo } from '@/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    venue: '',
    guestCount: '',
    budget: '',
    message: '',
    services: [] as string[]
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    'Full Wedding Planning',
    'Partial Wedding Planning', 
    'Day-of Coordination',
    'Destination Weddings'
  ];

  const budgetRanges = [
    'Under £5,000',
    '£5,000 - £15,000',
    '£15,000 - £30,000',
    '£30,000 - £50,000',
    'Over £50,000'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        weddingDate: '',
        venue: '',
        guestCount: '',
        budget: '',
        message: '',
        services: []
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-sage/20 to-cream">
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
            Let's Create Your
            <span className="text-gradient block">Dream Wedding</span>
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto font-medium">
            Ready to start planning your perfect day? Get in touch to schedule your complimentary consultation 
            and let's begin bringing your wedding vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <h3 className="font-playfair text-2xl font-bold text-charcoal mb-6">
                Get In Touch
              </h3>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-rose rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Email</h4>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-sage rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Phone</h4>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-rose rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Location</h4>
                    <p className="text-gray-600">
                      {contactInfo.address}<br />
                      {contactInfo.city}, {contactInfo.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-sage rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Working Hours</h4>
                    <p className="text-gray-600">{contactInfo.workingHours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-rose rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Follow Us</h4>
                    <p className="text-gray-600">{contactInfo.instagram}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blush to-rose-gold/20 rounded-xl">
                <h4 className="font-playfair text-lg font-bold text-charcoal mb-2">
                  Complimentary Consultation
                </h4>
                <p className="text-sm text-gray-600">
                  Book your free 30-minute consultation to discuss your wedding vision and how we can help make it a reality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              {!isSubmitted ? (
                <>
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-6">
                    Tell Us About Your Wedding
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none"
                          placeholder="+44 20 1234 5678"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">
                          Wedding Date
                        </label>
                        <input
                          type="date"
                          name="weddingDate"
                          value={formData.weddingDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">
                          Venue (if known)
                        </label>
                        <input
                          type="text"
                          name="venue"
                          value={formData.venue}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none"
                          placeholder="Wedding venue"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">
                          Expected Guest Count
                        </label>
                        <input
                          type="number"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none"
                          placeholder="Number of guests"
                        />
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Wedding Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none"
                      >
                        <option value="">Select your budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    {/* Services */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-3">
                        Services of Interest
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {serviceOptions.map((service) => (
                          <label key={service} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleServiceChange(service)}
                              className="w-4 h-4 text-rose-400 border-gray-300 rounded focus:ring-rose-400"
                            />
                            <span className="text-sm text-gray-700">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Tell us about your dream wedding
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none resize-none"
                        placeholder="Share your vision, style preferences, special requirements, or any questions you have..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-rose text-white py-4 rounded-lg hover:shadow-elegant transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Your message has been sent successfully. I'll get back to you within 24 hours to discuss your dream wedding!
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 