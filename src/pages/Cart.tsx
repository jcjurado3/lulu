import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, X, ShoppingBag, ArrowLeft, Tag, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const applyPromoCode = () => {
    // Mock promo code logic
    if (promoCode.toLowerCase() === 'welcome10') {
      setPromoApplied(true);
      setPromoDiscount(state.total * 0.1);
    }
  };

  const removePromoCode = () => {
    setPromoApplied(false);
    setPromoDiscount(0);
    setPromoCode('');
  };

  const subtotal = state.total;
  const shipping = subtotal > 75 ? 0 : 9.99;
  const tax = (subtotal - promoDiscount) * 0.08;
  const total = subtotal - promoDiscount + shipping + tax;

  const relatedProducts = [
    {
      id: 'related-1',
      name: 'Wine Glass Charms Set',
      price: 24,
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'wine-glass-charms'
    },
    {
      id: 'related-2',
      name: 'Bottle Stopper Collection',
      price: 32,
      image: 'https://images.pexels.com/photos/1649565/pexels-photo-1649565.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'bottle-stopper-collection'
    }
  ];

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="w-12 h-12 text-neutral-400" />
            </div>
            <h1 className="font-gopher text-3xl font-semibold text-neutral-900 mb-4">
              Your cart is empty
            </h1>
            <p className="text-neutral-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start shopping to find your perfect wine carrier.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center bg-secondary-500 text-white px-8 py-4 rounded-full font-medium hover:bg-secondary-600 transition-colors group"
            >
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-gopher text-3xl font-semibold text-neutral-900">
            Shopping Cart ({state.items.reduce((sum, item) => sum + item.quantity, 0)} items)
          </h1>
          <Link
            to="/shop"
            className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-600 transition-colors group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {state.items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-gopher text-lg font-semibold text-neutral-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-3">{item.color}</p>
                    <p className="text-lg font-medium text-secondary-500">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3 bg-neutral-50 rounded-lg p-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-neutral-200 rounded-md transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-neutral-200 rounded-md transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Promo Code */}
            <div className="bg-neutral-50 rounded-2xl p-6">
              <h3 className="font-medium text-neutral-900 mb-4 flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                Promo Code
              </h3>
              {!promoApplied ? (
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter promo code"
                    className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="px-6 py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-green-800 font-medium">WELCOME10 applied</span>
                    <span className="text-green-600">-${promoDiscount.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={removePromoCode}
                    className="text-green-600 hover:text-green-800 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-50 rounded-2xl p-6 sticky top-24">
              <h2 className="font-gopher text-xl font-semibold text-neutral-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                {promoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (WELCOME10)</span>
                    <span>-${promoDiscount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-neutral-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-neutral-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-neutral-300 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-neutral-900">Total</span>
                    <span className="text-lg font-semibold text-neutral-900">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-secondary-500 text-white py-4 rounded-lg font-medium hover:bg-secondary-600 transition-colors mb-4">
                Proceed to Checkout
              </button>

              {/* Shipping Info */}
              <div className="space-y-3 text-sm text-neutral-600">
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4" />
                  <span>Free shipping on orders over $75</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="font-gopher text-2xl font-semibold text-neutral-900 mb-8">
            Complete Your Set
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-neutral-900 mb-1">{product.name}</h3>
                      <p className="text-secondary-500 font-medium">${product.price}</p>
                    </div>
                    <button className="bg-secondary-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;