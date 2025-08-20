import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { Testimonials } from "./components/Testimonials";
import { ShoppingCart } from "./components/ShoppingCart";
import { Checkout } from "./components/Checkout";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { mockProducts, cartUtils } from "./mock";

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(null);

  // Auto-populate cart with 12 items on first load
  useEffect(() => {
    const existingCart = cartUtils.getCart();
    if (existingCart.length === 0) {
      // Add first 12 products to cart with random quantities
      mockProducts.slice(0, 12).forEach((product, index) => {
        const quantity = Math.floor(Math.random() * 3) + 1; // 1-3 items
        cartUtils.addToCart(product, quantity);
      });
      
      // Trigger cart update event
      window.dispatchEvent(new CustomEvent('cartUpdated'));
    }
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = (orderData) => {
    setOrderComplete(orderData);
    setIsCheckoutOpen(false);
    // You could show a success modal here or redirect to a success page
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onCartClick={handleCartClick} />
      
      {/* Hero Section */}
      <Hero onShopNowClick={scrollToProducts} />
      
      {/* Product Grid */}
      <ProductGrid />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Footer */}
      <Footer />
      
      {/* Shopping Cart Sidebar */}
      <ShoppingCart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />
      
      {/* Checkout Modal */}
      <Checkout 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onComplete={handleOrderComplete}
      />
      
      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;