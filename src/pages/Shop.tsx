import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List, Star, Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  color: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
  slug: string;
}

const Shop: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'The Elegance Tote',
      price: 89,
      image: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'totes',
      color: 'Champagne',
      rating: 4.9,
      reviews: 127,
      isBestseller: true,
      slug: 'elegance-tote'
    },
    {
      id: '2',
      name: 'The Rosé Purse',
      price: 65,
      image: 'https://images.pexels.com/photos/1338155/pexels-photo-1338155.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'purses',
      color: 'Blush Pink',
      rating: 4.8,
      reviews: 89,
      isNew: true,
      slug: 'rose-purse'
    },
    {
      id: '3',
      name: 'The Bordeaux Carrier',
      price: 95,
      image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'carriers',
      color: 'Deep Wine',
      rating: 5.0,
      reviews: 203,
      slug: 'bordeaux-carrier'
    },
    {
      id: '4',
      name: 'The Minimalist Sleeve',
      price: 45,
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'sleeves',
      color: 'Natural Linen',
      rating: 4.7,
      reviews: 156,
      slug: 'minimalist-sleeve'
    },
    {
      id: '5',
      name: 'The Statement Tote',
      price: 110,
      originalPrice: 125,
      image: 'https://images.pexels.com/photos/1649565/pexels-photo-1649565.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'totes',
      color: 'Midnight Black',
      rating: 4.9,
      reviews: 98,
      slug: 'statement-tote'
    },
    {
      id: '6',
      name: 'The Travel Companion',
      price: 75,
      image: 'https://images.pexels.com/photos/1284171/pexels-photo-1284171.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'carriers',
      color: 'Sage Green',
      rating: 4.6,
      reviews: 67,
      isNew: true,
      slug: 'travel-companion'
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const { dispatch } = useCart();

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'totes', label: 'Wine Totes' },
    { value: 'purses', label: 'Wine Purses' },
    { value: 'carriers', label: 'Bottle Carriers' },
    { value: 'sleeves', label: 'Bottle Sleeves' }
  ];

  const colors = [
    { value: 'all', label: 'All Colors' },
    { value: 'champagne', label: 'Champagne' },
    { value: 'pink', label: 'Pink Tones' },
    { value: 'wine', label: 'Wine Tones' },
    { value: 'neutral', label: 'Neutrals' },
    { value: 'black', label: 'Black' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by color (simplified matching)
    if (selectedColor !== 'all') {
      filtered = filtered.filter(product => {
        const productColor = product.color.toLowerCase();
        switch (selectedColor) {
          case 'champagne':
            return productColor.includes('champagne');
          case 'pink':
            return productColor.includes('pink') || productColor.includes('blush');
          case 'wine':
            return productColor.includes('wine') || productColor.includes('bordeaux');
          case 'neutral':
            return productColor.includes('linen') || productColor.includes('natural');
          case 'black':
            return productColor.includes('black') || productColor.includes('midnight');
          default:
            return true;
        }
      });
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - bestsellers first, then new, then others
        filtered.sort((a, b) => {
          if (a.isBestseller && !b.isBestseller) return -1;
          if (!a.isBestseller && b.isBestseller) return 1;
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedColor, sortBy, products]);

  const addToCart = (product: Product) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        color: product.color
      }
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-gopher text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              The Collection
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Discover our curated selection of designer wine carriers, each crafted to elevate your wine experience.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center justify-center space-x-2 bg-neutral-100 px-4 py-2 rounded-md"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>

          {/* Desktop Filters */}
          <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 ${showFilters ? 'block' : 'hidden lg:flex'}`}>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
            >
              {colors.map(color => (
                <option key={color.value} value={color.value}>
                  {color.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort and View Controls */}
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className="flex border border-neutral-300 rounded-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-secondary-500 text-white' : 'text-neutral-600'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-secondary-500 text-white' : 'text-neutral-600'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-neutral-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group cursor-pointer ${
                viewMode === 'list' ? 'flex space-x-6' : ''
              }`}
            >
              <div className={`relative overflow-hidden rounded-2xl bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300 ${
                viewMode === 'list' ? 'w-64 flex-shrink-0' : ''
              }`}>
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 space-y-2">
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
                  {product.originalPrice && (
                    <span className="block px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-700">
                      Sale
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4 text-neutral-600 hover:text-red-500 transition-colors" />
                </button>

                {/* Product Image */}
                <Link to={`/product/${product.slug}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                        viewMode === 'list' ? 'w-full h-48' : 'w-full h-64'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>

                {/* Quick Add Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 left-4 right-4 bg-neutral-900 text-white py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Quick Add</span>
                </button>
              </div>

              {/* Product Details */}
              <div className={`${viewMode === 'list' ? 'flex-1 py-4' : 'p-6'}`}>
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
                
                <Link to={`/product/${product.slug}`}>
                  <h3 className="font-gopher text-xl font-semibold text-neutral-900 mb-2 group-hover:text-secondary-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-sm text-neutral-600 mb-3">{product.color}</p>
                
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-medium text-secondary-500">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-neutral-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {viewMode === 'list' && (
                  <div className="mt-4 flex space-x-3">
                    <Link
                      to={`/product/${product.slug}`}
                      className="flex-1 border border-neutral-300 text-neutral-700 py-2 px-4 rounded-md font-medium hover:border-secondary-500 hover:text-secondary-500 transition-colors text-center"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-secondary-500 text-white py-2 px-4 rounded-md font-medium hover:bg-secondary-600 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-neutral-400" />
            </div>
            <h3 className="text-xl font-medium text-neutral-900 mb-2">No products found</h3>
            <p className="text-neutral-600 mb-6">Try adjusting your filters to see more results.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedColor('all');
                setSortBy('featured');
              }}
              className="bg-secondary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-secondary-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;