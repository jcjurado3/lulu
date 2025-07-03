import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingBag, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  colors: Array<{ name: string; value: string; image: string }>;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  specifications: Array<{ label: string; value: string }>;
  isNew?: boolean;
  isBestseller?: boolean;
  slug: string;
}

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { dispatch } = useCart();
  
  // Mock product data - in real app, this would come from API
  const [product] = useState<Product>({
    id: '1',
    name: 'The Elegance Tote',
    price: 89,
    images: [
      'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1338155/pexels-photo-1338155.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'totes',
    colors: [
      { name: 'Champagne', value: 'champagne', image: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Blush Pink', value: 'pink', image: 'https://images.pexels.com/photos/1338155/pexels-photo-1338155.jpeg?auto=compress&cs=tinysrgb&w=800' },
      { name: 'Deep Wine', value: 'wine', image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=800' }
    ],
    rating: 4.9,
    reviews: 127,
    description: 'The Elegance Tote is our signature piece, designed for the modern wine enthusiast who values both style and function. Crafted from premium materials with thoughtful details, this tote securely carries your favorite bottles while making a sophisticated statement.',
    features: [
      'Holds up to 2 standard wine bottles',
      'Padded interior compartments for protection',
      'Premium vegan leather construction',
      'Adjustable shoulder strap',
      'Interior pocket for accessories',
      'Magnetic closure for easy access'
    ],
    specifications: [
      { label: 'Dimensions', value: '12" W x 14" H x 6" D' },
      { label: 'Weight', value: '1.2 lbs' },
      { label: 'Material', value: 'Premium Vegan Leather' },
      { label: 'Lining', value: 'Soft Microfiber' },
      { label: 'Hardware', value: 'Antique Brass' },
      { label: 'Care', value: 'Spot clean with damp cloth' }
    ],
    isBestseller: true,
    slug: 'elegance-tote'
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');

  const relatedProducts = [
    {
      id: '2',
      name: 'The Rosé Purse',
      price: 65,
      image: 'https://images.pexels.com/photos/1338155/pexels-photo-1338155.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'rose-purse'
    },
    {
      id: '3',
      name: 'The Bordeaux Carrier',
      price: 95,
      image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'bordeaux-carrier'
    },
    {
      id: '4',
      name: 'The Minimalist Sleeve',
      price: 45,
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'minimalist-sleeve'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `${product.id}-${selectedColor.value}`,
        name: product.name,
        price: product.price,
        image: selectedColor.image,
        color: selectedColor.name
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-neutral-600">
            <li><Link to="/" className="hover:text-secondary-500">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-secondary-500">Shop</Link></li>
            <li>/</li>
            <li className="text-neutral-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2">
                {product.isBestseller && (
                  <span className="block px-3 py-1 text-xs font-medium rounded-full bg-secondary-100 text-secondary-700">
                    Bestseller
                  </span>
                )}
                {product.isNew && (
                  <span className="block px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                    New
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentImageIndex ? 'border-secondary-500' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Rating */}
            <div className="flex items-center space-x-2">
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
              <span className="text-sm text-neutral-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Title and Price */}
            <div>
              <h1 className="font-gopher text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-semibold text-secondary-500">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-neutral-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-neutral-900 mb-3">
                Color: {selectedColor.name}
              </h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-2 overflow-hidden transition-colors ${
                      selectedColor.value === color.value 
                        ? 'border-secondary-500' 
                        : 'border-neutral-300'
                    }`}
                  >
                    <img
                      src={color.image}
                      alt={color.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-neutral-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-neutral-300 rounded-md flex items-center justify-center hover:border-secondary-500 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-neutral-300 rounded-md flex items-center justify-center hover:border-secondary-500 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={addToCart}
                  className="flex-1 bg-secondary-500 text-white py-4 px-6 rounded-lg font-medium hover:bg-secondary-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="w-14 h-14 border border-neutral-300 rounded-lg flex items-center justify-center hover:border-secondary-500 hover:text-secondary-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-neutral-200">
              <div className="text-center">
                <Truck className="w-6 h-6 text-secondary-500 mx-auto mb-2" />
                <p className="text-xs text-neutral-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-secondary-500 mx-auto mb-2" />
                <p className="text-xs text-neutral-600">1 Year Warranty</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 text-secondary-500 mx-auto mb-2" />
                <p className="text-xs text-neutral-600">30-Day Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-neutral-200">
            <nav className="flex space-x-8">
              {[
                { key: 'description', label: 'Description' },
                { key: 'specifications', label: 'Specifications' },
                { key: 'reviews', label: `Reviews (${product.reviews})` }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.key
                      ? 'border-secondary-500 text-secondary-600'
                      : 'border-transparent text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-lg text-neutral-700 mb-6">{product.description}</p>
                <h4 className="font-gopher text-xl font-semibold text-neutral-900 mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-neutral-200">
                    <span className="font-medium text-neutral-900">{spec.label}</span>
                    <span className="text-neutral-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="text-center py-8">
                  <p className="text-neutral-600">Reviews coming soon...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="font-gopher text-2xl font-semibold text-neutral-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/product/${relatedProduct.slug}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-neutral-100 mb-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-gopher text-lg font-semibold text-neutral-900 mb-2 group-hover:text-secondary-600 transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-secondary-500 font-medium">${relatedProduct.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;