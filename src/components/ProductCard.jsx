import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react"

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = cart.some((item) => item.id === product.id);
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    if(isInCart) {
      const itemInCart = cart.find( item => item.id === product.id)
    setQuantity(itemInCart.quantity)
    }
  }, [isInCart, addToCart, removeFromCart]);

  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold mb-2 truncate">{product.title}</h3>
      <p className="text-gray-600 mb-4">${product.price}</p>

      {isInCart ? (
        <div>
          <button
            onClick={() => removeFromCart(product.id)}
            className="bg-yellow-500 text-white p-2 rounded-md mr-2 hover:bg-yellow-400"
          >
            -
          </button>
          <span className="mr-2 text-black">{quantity}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-400"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white w-full p-2 rounded-md hover:bg-blue-400"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
