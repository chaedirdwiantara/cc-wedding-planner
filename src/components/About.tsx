'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { Award, Heart, Users, MapPin, Clock, Star } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Award-Winning Planner',
      description: 'Recognized for excellence in luxury wedding planning'
    },
    {
      icon: Users,
      title: '150+ Happy Couples',
      description: 'Successfully planned weddings across UK and Europe'
    },
    {
      icon: Clock,
      title: '5 Years Experience',
      description: 'Dedicated to creating perfect wedding moments'
    },
    {
      icon: Star,
      title: '98% Satisfaction Rate',
      description: 'Consistently exceeding client expectations'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-rose-50 via-white to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft mb-4">
                <Heart className="w-4 h-4 text-rose-400" />
                <span className="text-sm font-medium text-gray-700">About Charlotte</span>
              </div>
              
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Passionate About Creating
                <span className="text-gradient block">Perfect Moments</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 5 years of experience in luxury wedding planning, I specialize in creating 
                elegant and sophisticated celebrations that reflect each couple's unique love story.
              </p>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <p className="text-gray-600 leading-relaxed">
                Based in the heart of London, I've had the privilege of planning weddings across 
                the UK and Europe. From intimate garden ceremonies to grand château celebrations, 
                I believe every wedding should be a reflection of the couple's personality and dreams.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                My approach combines meticulous attention to detail with creative vision, ensuring 
                that your special day is not only flawlessly executed but also filled with personal 
                touches that make it uniquely yours.
              </p>
            </motion.div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-rose text-white px-6 py-3 rounded-full shadow-soft"
            >
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Based in London, Serving UK & Europe</span>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Charlotte's Portrait */}
              <div className="w-full h-96 lg:h-[500px] rounded-3xl shadow-elegant overflow-hidden">
                <Image
                  src="/images/about/charlotte-portrait.jpg"
                  alt="Charlotte Chalder - Professional Wedding Planner"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Achievement Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-elegant"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-rose rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Award Winner</div>
                    <div className="text-sm text-gray-600">Excellence in Planning</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-elegant"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-sage rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">150+ Weddings</div>
                    <div className="text-sm text-gray-600">Successfully Planned</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4">
              Why Choose Charlotte Chalder
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience, expertise, and passion come together to create unforgettable wedding celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-rose rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-elegant transition-all duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Planning Your Dream Wedding?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your vision and create a celebration that perfectly reflects your love story.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-rose text-white px-8 py-4 rounded-full hover:shadow-elegant transition-all duration-300 font-semibold"
            >
              Schedule Your Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 