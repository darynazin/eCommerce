import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductsContext";

const CartTable = () => {
  const { cart, decrementInCart, addToCart, clearCart, removeFromCart} =
    useCart();
  const { fetchProductsByCategory, setActiveCategory } = useProducts();
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => setShowCheckoutPopup(true);

  const handleClosePopup = () => {
    setShowCheckoutPopup(false);
    clearCart();
  };

  const handleCategorySelect = (category) => {
    fetchProductsByCategory(category);
    navigate(`/?category=${category}`);
    setActiveCategory(category)
  };

  return (
    <div className="flex flex-col h-full mb-36">
      <div className="flex container mx-auto px-2 gap-8">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Line Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-md border-2 border-white w-36 h-32 object-cover"
                  />
                </td>
                <td>
                  <div className="max-w-[300px] break-words overflow-hidden text-ellipsis">
                    {item.title}
                  </div>
                  <button
                    onClick={() => handleCategorySelect(item.category)}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mt-2"
                  >
                    {item.category}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => decrementInCart(item.id)}
                    className="bg-slate-950 text-white p-2 rounded-md hover:bg-slate-800"
                  >
                    -
                  </button>
                  <span className="m-2">{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-slate-950 text-white p-2 rounded-md hover:bg-slate-800"
                  >
                    +
                  </button>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white p-2 rounded-md hover:bg-red-400"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr className="border-t border-rose-600 my-4" />
        <div className="mt-4 flex justify-start ml-auto min-w-44">
          <div className="p-4 flex flex-col">
            <div className="flex flex-col items-center justify-between mb-2">
              <span className="text-xl font-bold">
                Total: ${totalAmount.toFixed(2)}
              </span>
              <span className="text-xs">VAT included</span>
            </div>
            <button
              onClick={handleCheckout}
              className="btn text-white bg-slate-950 mt-2 hover:bg-slate-800"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {showCheckoutPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md flex flex-col items-center">
            <p className="mb-4">Checkout was successful!</p>
            <div className="flex justify-center">
              <button
                onClick={handleClosePopup}
                className="bg-slate-950 text-white p-2 rounded-md hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartTable;
