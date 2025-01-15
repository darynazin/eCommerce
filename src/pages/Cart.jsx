import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartTable from "../components/CartTable";

function Cart() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="card bg-base-100 shadow-xl max-w-md mx-auto mt-10">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">Your cart is empty!</h2>
          <p className="text-base-content pl-1">
            Add some products to make your cart happy.
          </p>
          <div className="card-actions justify-center">
            <Link to="/" className="btn btn-primary btn-wide">
              Let's go shopping!
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
      <CartTable />
    </div>
  );
}
export default Cart;
