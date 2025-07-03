import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import MiniCart from './MiniCart';

interface HeaderProps {
  currentCarrier?: number;
}

const Header: React.FC<HeaderProps> = ({ currentCarrier = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { state, dispatch } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
    { name: 'Contact', href: '/contact' },
  ];

  // Logo selection based on current carrier and scroll state
  const getLogoSrc = () => {
    if (isScrolled) {
      return '/Primary Logo_Horizontal_Black.png';
    }
    
    // Use different logo colors based on carrier background
    switch (currentCarrier) {
      case 0: // Champagne - use black for contrast
        return '/Primary Logo_Horizontal_Black.png';
      case 1: // Pink - use red for warmth
        return '/Primary Logo_Horizontal_Red.png';
      case 2: // Red/Bordeaux - use white for contrast
        return '/Primary Logo_Horizontal_White copy.png';
      default:
        return '/Primary Logo_Horizontal_Black.png';
    }
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 transition-all duration-1000 ease-out">
              <img
                src={getLogoSrc()}
                alt="Lulu Vine"
                className="h-8 lg:h-10 w-auto transition-all duration-1000 ease-out hover:scale-105"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-idealist text-sm font-medium transition-colors duration-300 hover:text-secondary-500 ${
                    location.pathname === item.href
                      ? 'text-secondary-500'
                      : isScrolled 
                        ? 'text-neutral-700' 
                        : 'text-neutral-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className={`hidden sm:block p-2 transition-colors duration-300 hover:text-secondary-500 ${
                isScrolled ? 'text-neutral-700' : 'text-neutral-800'
              }`}>
                <Search className="w-5 h-5" />
              </button>
              <button className={`p-2 transition-colors duration-300 hover:text-secondary-500 ${
                isScrolled ? 'text-neutral-700' : 'text-neutral-800'
              }`}>
                <User className="w-5 h-5" />
              </button>
              <button
                onClick={() => dispatch({ type: 'TOGGLE_CART' })}
                className={`relative p-2 transition-colors duration-300 hover:text-secondary-500 ${
                  isScrolled ? 'text-neutral-700' : 'text-neutral-800'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 transition-colors duration-300 hover:text-secondary-500 ${
                  isScrolled ? 'text-neutral-700' : 'text-neutral-800'
                }`}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-secondary-500 bg-secondary-50'
                      : 'text-neutral-700 hover:text-secondary-500 hover:bg-neutral-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mini Cart */}
      <MiniCart />
    </>
  );
};

export default Header;