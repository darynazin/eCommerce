import React from 'react';

const ProductCard = ({ product, handleAddToCart, handleDecrement, handleRemoveFromCart, cart }) => {
  const isInCart = cart.some(item => item.id === product.id);
  const productInCart = cart.find(item => item.id === product.id);
  
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300">
      <img 
        src={product.image} 
        alt={product.title} 
        className="h-40 w-full object-contain mb-4 rounded-md" 
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-4">${product.price}</p>

      {isInCart ? (
        <div>
          <button
            onClick={() => handleDecrement(product)}
            className="bg-yellow-500 text-white p-2 rounded-md mr-2 hover:bg-yellow-400"
          >
            -
          </button>
          <span className="mr-2">{productInCart.quantity}</span>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-400"
          >
            +
          </button>
          <button
            onClick={() => handleRemoveFromCart(product)}
            className="text-red-500 mt-2 block hover:text-red-400"
          >
            Remove from Cart
          </button>
        </div>
      ) : (
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-blue-500 text-white w-full p-2 rounded-md hover:bg-blue-400"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
