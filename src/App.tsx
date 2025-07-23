import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import { Product } from './data/products';

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header cartItemsCount={cartItems.length} />
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={<Home onAddToCart={handleAddToCart} />} 
            />
            <Route 
              path="/producto/:id" 
              element={<ProductDetail onAddToCart={handleAddToCart} />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;