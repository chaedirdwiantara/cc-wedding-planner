'use client';

import { motion } from 'framer-motion';
import { Crown, Heart, Calendar, MapPin, Check, ArrowRight } from 'lucide-react';
import { services } from '@/data';

const Services = () => {
  const iconMap = {
    Crown,
    Heart,
    Calendar,
    MapPin,
  };

  return (
    <section id="services" className="py-20 bg-white">
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
            <Crown className="w-4 h-4 text-rose-400" />
            <span className="text-sm font-medium text-gray-700">Wedding Planning Services</span>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tailored Services for Your
            <span className="text-gradient block">Perfect Wedding</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From intimate celebrations to grand destination weddings, I offer comprehensive planning 
            services designed to bring your vision to life with elegance and sophistication.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-rose-50 to-sage-50 rounded-3xl p-8 h-full hover:shadow-elegant transition-all duration-300 border border-gray-100">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-rose rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-2">
                          {service.title}
                        </h3>
                        {service.price && (
                          <div className="text-rose-500 font-semibold text-lg">
                            {service.price}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-5 h-5 bg-gradient-rose rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-white text-gray-800 px-6 py-3 rounded-full border-2 border-gray-200 hover:border-rose-300 hover:shadow-soft transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group-hover:bg-gradient-rose group-hover:text-white group-hover:border-transparent"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-rose-50 via-white to-sage-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4">
              My Planning Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach that ensures every detail is perfect and your wedding day is stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'We discuss your vision, budget, and timeline to create a personalized planning strategy.'
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'I coordinate vendors, manage timelines, and handle all the details while keeping you informed.'
              },
              {
                step: '03',
                title: 'Perfect Execution',
                description: 'On your wedding day, I ensure everything runs smoothly so you can focus on celebrating.'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-rose rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-playfair text-xl font-bold text-white">{process.step}</span>
                </div>
                <h4 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
              Not Sure Which Service is Right for You?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's schedule a complimentary consultation to discuss your needs and find the perfect planning package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-rose text-white px-8 py-4 rounded-full hover:shadow-elegant transition-all duration-300 font-semibold"
              >
                Book Free Consultation
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#portfolio');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-gray-800 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-rose-300 hover:shadow-soft transition-all duration-300 font-semibold"
              >
                View Our Work
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 