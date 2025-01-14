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
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  </CartProvider>
  );
}

export default App;

