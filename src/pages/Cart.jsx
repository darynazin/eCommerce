import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartTable from "../components/CartTable";

function Cart() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="card bg-base-100 shadow-xl max-w-md mx-auto mt-20">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">Your cart is empty!</h2>
          <p className="text-base-content pl-1">
            Add some products to make your cart happy. 😊
          </p>
          <div className="card-actions justify-center">
            <Link to="/" className="btn btn-neutral btn-md">
              Let's go shopping!
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mt-8 mx-auto p-2">
      <h3 className="text-xl font-bold mb-8 text-center">
        Your Shopping Cart 🛒
      </h3>
      <CartTable />
    </div>
  );
}
export default Cart;
