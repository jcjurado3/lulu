import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "The Elegance Tote",
      price: "$89",
      image: "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "Bestseller",
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      name: "The Rosé Purse",
      price: "$65",
      image: "https://images.pexels.com/photos/1338155/pexels-photo-1338155.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "New",
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      name: "The Bordeaux Carrier",
      price: "$95",
      image: "https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=600",
      badge: "Premium",
      rating: 5.0,
      reviews: 203
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-gopher text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Meet the Line-Up
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Each piece in our collection is thoughtfully designed to elevate your wine experience, 
            whether you're gifting or treating yourself.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    product.badge === 'Bestseller' ? 'bg-secondary-100 text-secondary-700' :
                    product.badge === 'New' ? 'bg-green-100 text-green-700' :
                    'bg-accent-100 text-accent-700'
                  }`}>
                    {product.badge}
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-neutral-600 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <h3 className="font-gopher text-xl font-semibold text-neutral-900 mb-2 group-hover:text-secondary-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-lg font-medium text-secondary-500 mb-4">
                    {product.price}
                  </p>

                  <button className="w-full bg-neutral-900 text-white py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/shop"
            className="inline-flex items-center bg-secondary-500 text-white px-8 py-4 rounded-full font-medium hover:bg-secondary-600 transition-colors group"
          >
            View All Products
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;