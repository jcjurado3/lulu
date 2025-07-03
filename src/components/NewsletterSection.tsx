import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail('');

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-gopher text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Join The Lulu List
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Be the first to know about new collections, styling tips, exclusive events, and special offers. 
            Plus, get 10% off your first order when you subscribe.
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-gopher text-xl font-semibold text-neutral-900 mb-2">
                Welcome to The Lulu List!
              </h3>
              <p className="text-neutral-600">
                Check your inbox for a special welcome offer and the latest from Lulu Vine.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 border-2 border-white bg-white rounded-full text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-secondary-400 transition-colors shadow-lg"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-secondary-500 text-white rounded-full font-medium hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Joining...</span>
                    </>
                  ) : (
                    <>
                      <span>Join Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from Lulu Vine.
              </p>
            </form>
          )}

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 flex items-center justify-center space-x-8 text-sm text-neutral-600"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary-500 rounded-full" />
              <span>5,000+ subscribers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary-500 rounded-full" />
              <span>Weekly updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary-500 rounded-full" />
              <span>Exclusive offers</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;