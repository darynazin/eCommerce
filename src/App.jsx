import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MainLayout from "./components/MainLayout";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext"
import "./App.css";

function App() {
  return (
    <ProductsProvider>
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
    </ProductsProvider>
  );
}

export default App;
