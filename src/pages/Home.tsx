import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Heart, Gift, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import LifestyleSections from '../components/LifestyleSections';
import TestimonialSection from '../components/TestimonialSection';
import NewsletterSection from '../components/NewsletterSection';
import Header from '../components/Header';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [currentCarrier, setCurrentCarrier] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCarrierChange = (carrierIndex: number) => {
    setCurrentCarrier(carrierIndex);
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      {/* Header with dynamic logo */}
      <Header currentCarrier={currentCarrier} />

      {/* Hero Section */}
      <Hero onCarrierChange={handleCarrierChange} />

      {/* Wine Sticker Divider */}
      <section className="h-24 w-full overflow-hidden">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'url("/sticker.svg")',
            backgroundSize: '200px auto',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'center'
          }}
        />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-gopher text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              Wine Worth Celebrating, Style Worth Noticing
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our designer wine carriers blend style with function, perfect for every wine moment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <img src="/wine-woman-icon.png" alt="Thoughtfully Designed" className="w-8 h-8" />,
                title: "Thoughtfully Designed",
                description: "Each piece is crafted with wine lovers in mind, featuring secure compartments and elegant aesthetics."
              },
              {
                icon: <img src="/wine-hand-icon.png" alt="Premium Materials" className="w-8 h-8" />,
                title: "Premium Materials",
                description: "Made from high-quality materials that protect your wine while making a sophisticated statement."
              },
              {
                icon: <img src="/wine-glass-icon.png" alt="Perfect for Gifting" className="w-8 h-8" />,
                title: "Perfect for Gifting",
                description: "Beautifully packaged and perfect for housewarmings, celebrations, or treating yourself."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-neutral-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-gopher text-xl font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Lifestyle Sections */}
      <LifestyleSections />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-gopher text-3xl md:text-4xl font-semibold text-neutral-900 mb-6">
              Ready to Sip in Style?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Join thousands of wine enthusiasts who've discovered the perfect blend of style and function.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="bg-secondary-500 text-white px-8 py-4 rounded-full font-medium hover:bg-secondary-600 transition-colors flex items-center justify-center group"
              >
                Shop the Collection
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-secondary-500 text-secondary-500 px-8 py-4 rounded-full font-medium hover:bg-secondary-500 hover:text-white transition-colors"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default Home;