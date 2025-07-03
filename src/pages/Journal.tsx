import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

const Journal: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'wine-tips', label: 'Wine Tips' },
    { value: 'styling', label: 'Styling Ideas' },
    { value: 'entertaining', label: 'Entertaining' },
    { value: 'travel', label: 'Wine Travel' },
    { value: 'lifestyle', label: 'Lifestyle' }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Art of Wine Gifting: Making Every Bottle Special',
      excerpt: 'Transform a simple bottle of wine into a memorable gift with thoughtful presentation and the perfect carrier.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/1649565/pexels-photo-1649565.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'styling',
      author: 'Sarah Chen',
      publishDate: '2024-01-15',
      readTime: '5 min read',
      slug: 'art-of-wine-gifting',
      featured: true
    },
    {
      id: '2',
      title: 'Hosting the Perfect Wine Tasting at Home',
      excerpt: 'Create an unforgettable wine tasting experience for your friends with these expert tips and styling ideas.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/1284171/pexels-photo-1284171.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'entertaining',
      author: 'Emma Rodriguez',
      publishDate: '2024-01-10',
      readTime: '7 min read',
      slug: 'perfect-wine-tasting-home'
    },
    {
      id: '3',
      title: 'Wine Country Weekend: Packing Essentials',
      excerpt: 'Everything you need to know about traveling to wine country in style, including what to pack and how to transport your finds.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'travel',
      author: 'Jessica Park',
      publishDate: '2024-01-05',
      readTime: '6 min read',
      slug: 'wine-country-weekend-packing'
    },
    {
      id: '4',
      title: 'Pairing Wine Carriers with Your Personal Style',
      excerpt: 'Discover how to choose the perfect wine carrier that complements your wardrobe and lifestyle.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'styling',
      author: 'Sarah Chen',
      publishDate: '2023-12-28',
      readTime: '4 min read',
      slug: 'pairing-wine-carriers-style'
    },
    {
      id: '5',
      title: 'Understanding Wine Storage: Temperature, Light, and More',
      excerpt: 'Learn the fundamentals of proper wine storage to preserve your collection and enhance your tasting experience.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'wine-tips',
      author: 'Michael Torres',
      publishDate: '2023-12-20',
      readTime: '8 min read',
      slug: 'understanding-wine-storage'
    },
    {
      id: '6',
      title: 'Sustainable Wine Practices: What to Look For',
      excerpt: 'Explore the world of sustainable and organic wines, and learn how to make environmentally conscious choices.',
      content: 'Full article content would go here...',
      image: 'https://images.pexels.com/photos/1338155/pexels-photo-1338155.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'lifestyle',
      author: 'Emma Rodriguez',
      publishDate: '2023-12-15',
      readTime: '6 min read',
      slug: 'sustainable-wine-practices'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-gopher text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              The Lulu Edit
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Stories, tips, and inspiration for wine lovers who appreciate the finer things in life. 
              Discover how to elevate every wine moment with style and sophistication.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-secondary-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && searchQuery === '' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary-500 text-white">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-4">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(featuredPost.publishDate)}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span className="capitalize">{featuredPost.category.replace('-', ' ')}</span>
                    </span>
                  </div>
                  <h2 className="font-gopher text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">By {featuredPost.author}</span>
                    <Link
                      to={`/journal/${featuredPost.slug}`}
                      className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-600 transition-colors group"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 text-neutral-700 capitalize">
                      {post.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-neutral-500 mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.publishDate)}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  
                  <h3 className="font-gopher text-lg font-semibold text-neutral-900 mb-3 group-hover:text-secondary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500">By {post.author}</span>
                    <Link
                      to={`/journal/${post.slug}`}
                      className="text-secondary-500 text-sm font-medium hover:text-secondary-600 transition-colors flex items-center space-x-1 group"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-neutral-400" />
            </div>
            <h3 className="text-xl font-medium text-neutral-900 mb-2">No articles found</h3>
            <p className="text-neutral-600 mb-6">Try adjusting your search or filter to see more results.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-secondary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-secondary-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-secondary-50 to-primary-50 rounded-3xl p-8 lg:p-12 text-center"
        >
          <h2 className="font-gopher text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
            Never Miss a Story
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Subscribe to The Lulu Edit and get the latest wine tips, styling ideas, and lifestyle inspiration delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-secondary-500 text-white rounded-lg font-medium hover:bg-secondary-600 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Journal;