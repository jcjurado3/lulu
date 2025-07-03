import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-neutral-800">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-gopher text-2xl md:text-3xl font-semibold mb-4">
              Join The Lulu List
            </h2>
            <p className="text-neutral-400 mb-8">
              Be the first to know about new collections, styling tips, and exclusive events.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-secondary-500 text-white rounded-md font-medium hover:bg-secondary-600 transition-colors flex items-center justify-center gap-2"
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-gopher text-2xl font-semibold mb-4 block">
              Lulu Vine
            </Link>
            <p className="text-neutral-400 mb-6">
              Designer wine accessories for the modern enthusiast. Sip in style with our curated collection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-medium mb-4">Shop</h3>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=totes" className="hover:text-white transition-colors">Wine Totes</Link></li>
              <li><Link to="/shop?category=purses" className="hover:text-white transition-colors">Wine Purses</Link></li>
              <li><Link to="/shop?category=sleeves" className="hover:text-white transition-colors">Bottle Sleeves</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-neutral-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">The Lulu Edit</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-medium mb-4">Support</h3>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2024 Lulu Vine. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-neutral-400 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;