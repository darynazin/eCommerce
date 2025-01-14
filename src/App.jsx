import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import MainLayout from './components/MainLayout';
import { CartProvider } from './context/CartContext';
import './App.css'


function App() {
  return (
    <CartProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </MainLayout>
      </Router>
    </CartProvider>
  );
}

export default App;

