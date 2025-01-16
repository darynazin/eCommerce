import { createContext, useContext, useState, useEffect } from "react";
import {
  getProducts,
  getCategories,
  getProductsByCategory,
} from "../services/api";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (err) {
      setError(err.message || "An error occurred while fetching categories");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (err) {
      setError(err.message || "An error occurred");
    }
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await getProductsByCategory(category);
      setProducts(response.data);
    } catch (err) {
      setError(err.message || "An error occurred");
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        fetchProductsByCategory,
        fetchProducts,
        categories,
        error
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const {
    products,
    fetchProductsByCategory,
    fetchProducts,
    categories,
    error
  } = useContext(ProductsContext);

  return {
    products,
    fetchProductsByCategory,
    fetchProducts,
    categories,
    error
  };
};
