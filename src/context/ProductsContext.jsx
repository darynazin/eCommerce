import { createContext, useContext, useState, useEffect } from 'react';
import { getProducts, getSingleProduct, getCategories, getProductsByCategory } from "../services/api";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]); 
  const [singleProduct, setSingleProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (err) {
        setError(err.message || "An error occurred");
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (err) {
        setError(err.message || "An error occurred");
      }
    };

    fetchCategories();
  }, []);

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await getProductsByCategory(category);
      setProducts(response.data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } 
  };


  const fetchSingleProduct = async (productId) => {
    try {
      const response = await getSingleProduct(productId);
      setSingleProduct(response.data);
    } catch (err) {
      setError(err.message || "An error occurred");
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        singleProduct,
        categories,
        setProducts,
        fetchProductsByCategory,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
};
