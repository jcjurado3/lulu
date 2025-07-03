import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      location: "San Francisco, CA",
      rating: 5,
      text: "I absolutely love my Lulu Vine tote! It's become my go-to for dinner parties and weekend brunches. The quality is exceptional and it gets compliments everywhere I go.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      location: "Austin, TX",
      rating: 5,
      text: "Perfect for gifting! I bought three different styles for my wine-loving friends and they were all thrilled. The packaging is beautiful and the carriers are so functional.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 3,
      name: "Jessica Park",
      location: "New York, NY",
      rating: 5,
      text: "As someone who hosts a lot, these wine carriers have been a game-changer. They're stylish, practical, and my guests always ask where I got them!",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-gopher text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Loved by Wine Enthusiasts
          </h2>
          <p className="text-lg text-neutral-600">
            Don't just take our word for it—see what our customers are saying.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-secondary-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-neutral-700 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-center">
                  <p className="font-semibold text-neutral-900">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow text-neutral-600 hover:text-secondary-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-secondary-500' : 'bg-neutral-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow text-neutral-600 hover:text-secondary-500"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mt-16 text-center"
        >
          <div>
            <p className="text-3xl font-bold text-secondary-500 mb-2">4.9</p>
            <p className="text-sm text-neutral-600">Average Rating</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary-500 mb-2">500+</p>
            <p className="text-sm text-neutral-600">Happy Customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary-500 mb-2">1,200+</p>
            <p className="text-sm text-neutral-600">Orders Delivered</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;