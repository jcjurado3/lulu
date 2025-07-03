import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="font-gopher text-8xl md:text-9xl font-bold text-secondary-500 mb-4">
              404
            </h1>
            <div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full" />
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="font-gopher text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              Oops! This page has gone missing
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-lg mx-auto">
              It looks like the page you're looking for doesn't exist. 
              Perhaps it's been moved, deleted, or you entered the wrong URL. 
              Don't worry—let's get you back on track!
            </p>
          </motion.div>

          {/* Wine Glass Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="text-6xl">🍷</div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center bg-secondary-500 text-white px-8 py-4 rounded-full font-medium hover:bg-secondary-600 transition-colors group"
            >
              <Home className="mr-2 w-4 h-4" />
              Go Home
            </Link>
            
            <Link
              to="/shop"
              className="inline-flex items-center border-2 border-secondary-500 text-secondary-500 px-8 py-4 rounded-full font-medium hover:bg-secondary-500 hover:text-white transition-colors group"
            >
              <Search className="mr-2 w-4 h-4" />
              Browse Products
            </Link>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="border-t border-neutral-200 pt-8"
          >
            <p className="text-sm text-neutral-600 mb-4">
              Or try one of these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/about"
                className="text-secondary-500 hover:text-secondary-600 transition-colors underline"
              >
                About Us
              </Link>
              <Link
                to="/journal"
                className="text-secondary-500 hover:text-secondary-600 transition-colors underline"
              >
                The Lulu Edit
              </Link>
              <Link
                to="/contact"
                className="text-secondary-500 hover:text-secondary-600 transition-colors underline"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-secondary-300 rounded-full opacity-60"
          />
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent-300 rounded-full opacity-40"
          />
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-primary-300 rounded-full opacity-50"
          />
          <motion.div
            animate={{ y: [5, -5, 5], rotate: [0, -3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-secondary-400 rounded-full opacity-30"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;