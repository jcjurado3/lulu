import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onCarrierChange?: (carrierIndex: number) => void;
}

const Hero: React.FC<HeroProps> = ({ onCarrierChange }) => {
  const [currentCarrier, setCurrentCarrier] = useState(0);

  const carriers = [
    {
      id: 1,
      name: "The Champagne Elegance",
      image: "/image copy.png",
      background: {
        gradient: `linear-gradient(180deg, 
          #f5f1eb 0%, 
          #f0e8d8 25%, 
          #e8dcc8 50%, 
          #d4c0a8 100%)`,
        solid: "#d4c0a8"
      }
    },
    {
      id: 2,
      name: "The Rosé Romance",
      image: "/ChatGPT Image Jun 16, 2025, 10_36_21 PM.png",
      background: {
        gradient: `linear-gradient(180deg, 
          #fdf4f8 0%, 
          #f9e7f0 25%, 
          #f4d1e2 50%, 
          #e8b4cb 100%)`,
        solid: "#e8b4cb"
      }
    },
    {
      id: 3,
      name: "The Bordeaux Bold",
      image: "/ChatGPT Image Jun 16, 2025, 10_36_23 PM.png",
      background: {
        gradient: `linear-gradient(180deg, 
          #fdf8f6 0%, 
          #f5e8e0 25%, 
          #e8d0c0 50%, 
          #c19c7d 100%)`,
        solid: "#c19c7d"
      }
    }
  ];

  // Auto-cycle through carriers every 6 seconds (increased from 4)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarrier((prev) => {
        const newIndex = (prev + 1) % carriers.length;
        onCarrierChange?.(newIndex);
        return newIndex;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [onCarrierChange]);

  const handleCarrierChange = (index: number) => {
    setCurrentCarrier(index);
    onCarrierChange?.(index);
  };

  const currentBg = carriers[currentCarrier].background;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      style={{
        backgroundColor: '#f5e6d3',
        backgroundImage: 'url("/Patterns Swatches-images-4.jpg")',
        backgroundSize: '400px 400px',
        backgroundRepeat: 'repeat'
      }}
    >
      {/* Pattern background extends to edges */}
      
      {/* Centered gradient area - matches content width with rounded edges */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto h-full relative px-6 py-20">
          {/* White base layer for smooth transitions with rounded corners */}
          <div 
            className="absolute inset-0 bg-white rounded-3xl"
          />
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={`bg-${currentCarrier}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 rounded-3xl"
              style={{
                background: currentBg.gradient
              }}
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 pt-32 pb-16">
        <div className="text-center">
          {/* Main Heading - positioned above the bag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="font-gopher text-5xl md:text-6xl lg:text-7xl font-normal text-neutral-900 mb-6 leading-tight">
              Wine Meets —
              <br />
              <span className="font-medium">FASHION</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-700 mb-12 max-w-2xl mx-auto font-light">
              The ultimate blend of fashion and function — Lulu Vine 
              <br />
              Wine Carrier for the Stylish Women.
            </p>
          </motion.div>

          {/* Animated Product Images */}
          <div className="mb-8 relative">
            <div className="relative max-w-2xl mx-auto h-96 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`carrier-${currentCarrier}`}
                  initial={{ opacity: 0, scale: 0.85, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -30 }}
                  transition={{ 
                    duration: 1.6, 
                    ease: [0.25, 0.1, 0.25, 1],
                    scale: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] },
                    opacity: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src={carriers[currentCarrier].image}
                    alt={carriers[currentCarrier].name}
                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))'
                    }}
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Dynamic glow effect behind the bag */}
              <motion.div 
                key={`glow-${currentCarrier}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 -z-10 blur-3xl"
                style={{
                  background: `radial-gradient(ellipse at center, ${currentBg.solid}80 0%, transparent 70%)`
                }}
              />
            </div>

            {/* Product Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {carriers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleCarrierChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ease-out ${
                    index === currentCarrier 
                      ? 'bg-neutral-800 scale-125' 
                      : 'bg-neutral-400 hover:bg-neutral-600'
                  }`}
                />
              ))}
            </div>

            {/* Product Name */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`name-${currentCarrier}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-4"
              >
                <p className="text-sm font-medium text-neutral-600 tracking-wide">
                  {carriers[currentCarrier].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA Buttons - enhanced spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto"
          >
            <Link
              to="/shop"
              className="group relative overflow-hidden bg-transparent border-2 border-neutral-800 text-neutral-800 px-8 py-3 rounded-full font-medium hover:bg-neutral-800 hover:text-white transition-all duration-300 flex items-center justify-center"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: '500',
                letterSpacing: '0.3px'
              }}
            >
              <span className="relative z-10">Shop the Collection</span>
            </Link>
            
            <button 
              className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border border-neutral-300 text-neutral-800 px-8 py-3 rounded-full font-medium hover:bg-white hover:shadow-md transition-all duration-300 flex items-center justify-center"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: '500',
                letterSpacing: '0.3px'
              }}
            >
              <span className="relative z-10">See How it Works</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-neutral-600 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;