import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartTable = () => {
  const { cart, removeFromCart, addToCart, decrementFromCart } = useCart();

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td>{item.title}</td>
              <td>
                <button
                  onClick={() => decrementFromCart(item.id)}
                  className="bg-slate-950 text-white p-2 rounded-md hover:bg-slate-800"
                >
                  -
                </button>
                <span className="mr-2">{item.quantity}</span>
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
        <tfoot>
          <tr>
            <td colSpan="4" className="text-right font-bold">
              Total:
            </td>
            <td className="font-bold">${totalAmount.toFixed(2)}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <div className="mt-4 text-right">
        <Link
          to="/"
          className="bg-slate-950 text-white p-2 rounded-md hover:bg-slate-800"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartTable;
