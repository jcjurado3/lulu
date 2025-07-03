import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const MiniCart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {state.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
          />
        )}
      </AnimatePresence>

      {/* Mini Cart */}
      <AnimatePresence>
        {state.isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-lg font-gopher font-semibold">Shopping Bag</h2>
              <button
                onClick={() => dispatch({ type: 'TOGGLE_CART' })}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-6">
                  <ShoppingBag className="w-16 h-16 text-neutral-300 mb-4" />
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">Your bag is empty</h3>
                  <p className="text-neutral-600 mb-6">Start shopping to add items to your bag</p>
                  <Link
                    to="/shop"
                    onClick={() => dispatch({ type: 'TOGGLE_CART' })}
                    className="bg-secondary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-secondary-600 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              ) : (
                <div className="p-6 space-y-6">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-neutral-900">{item.name}</h3>
                        <p className="text-sm text-neutral-600">{item.color}</p>
                        <p className="text-sm font-medium text-neutral-900">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-neutral-100 rounded transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-neutral-100 rounded transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-neutral-400 hover:text-neutral-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Subtotal</span>
                  <span className="text-lg font-semibold">${state.total.toFixed(2)}</span>
                </div>
                <div className="space-y-3">
                  <Link
                    to="/cart"
                    onClick={() => dispatch({ type: 'TOGGLE_CART' })}
                    className="block w-full bg-neutral-900 text-white text-center py-3 rounded-md font-medium hover:bg-neutral-800 transition-colors"
                  >
                    View Cart
                  </Link>
                  <button className="w-full bg-secondary-500 text-white py-3 rounded-md font-medium hover:bg-secondary-600 transition-colors">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MiniCart;