import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Mail } from 'lucide-react';

const PreLaunch: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-100 via-secondary-50 to-accent-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <h1 className="font-gopher text-5xl md:text-7xl font-bold text-neutral-900 mb-6">
            Lulu Vine
          </h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-gopher text-2xl md:text-3xl text-neutral-700 mb-8"
          >
            Sipping Soon...
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-idealist text-lg text-neutral-600 mb-12 leading-relaxed"
          >
            We're crafting something beautiful for wine lovers everywhere. 
            Designer wine carriers, purses, and accessories that blend style with function. 
            Be the first to sip in style when we launch.
          </motion.p>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 border-2 border-neutral-200 rounded-full text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-secondary-400 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-secondary-500 text-white rounded-full font-medium hover:bg-secondary-600 transition-colors flex items-center justify-center gap-2"
                >
                  Notify Me
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-gopher text-xl font-semibold text-neutral-900 mb-2">
                  You're on the list!
                </h3>
                <p className="text-neutral-600">
                  We'll let you know the moment Lulu Vine is ready to pour. 
                  Get ready to sip in style!
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow text-neutral-600 hover:text-secondary-500"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow text-neutral-600 hover:text-secondary-500"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary-300 rounded-full opacity-60"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent-300 rounded-full opacity-40"
          />
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary-400 rounded-full opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default PreLaunch;