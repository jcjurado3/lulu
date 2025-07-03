import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PreLaunch from './pages/PreLaunch';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
  // For demo purposes, we'll show the pre-launch page
  // In production, this would be controlled by a feature flag or environment variable
  const isPreLaunch = false;

  if (isPreLaunch) {
    return <PreLaunch />;
  }

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;