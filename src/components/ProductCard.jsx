import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = cart.some((item) => item.id === product.id);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (isInCart) {
      const itemInCart = cart.find((item) => item.id === product.id);
      setQuantity(itemInCart.quantity);
    }
  }, [isInCart, cart, product.id]);

  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[350px]">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold mb-2 text-center">{product.title}</h3>
      <p className="text-gray-600 mb-4 text-center">${product.price}</p>

      <div className="mt-auto">
        {isInCart ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-600"
              >
                -
              </button>
              <span className="text-black font-medium">{quantity}</span>
              <button
                onClick={() => addToCart(product)}
                className="bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-600"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="text-gray-700 text-sm underline hover:text-gray-600"
            >
              Remove
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="bg-gray-700 text-white w-full py-2 rounded-md hover:bg-gray-600"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
