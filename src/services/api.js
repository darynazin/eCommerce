import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com" });

export const getProducts = (limit = 20) => api.get(`/products?limit=${limit}`);
export const getSingleProduct = (productId) =>
  api.get(`/products/${productId}`);
export const getCategories = () => api.get("/products/categories");
export const getProductsByCategory = (category) =>
  api.get(`/products/category/${category}`);

// cart handling via local storage in Context
/* export const addCart = (cartData) => api.post("/carts", cartData);
export const updateCart = (cartId, cartData) =>
  api.put(`/carts/${cartId}`, cartData);
export const patchCart = (cartId, cartData) =>
  api.patch(`/carts/${cartId}`, cartData);
export const deleteCart = (cartId) => api.delete(`/carts/${cartId}`); */
