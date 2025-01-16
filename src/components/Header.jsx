import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();

  return (
    <div className="navbar p-0">
      <div className="w-11/12 mx-auto">
        <div className="flex-1">
          <Link to="/" className="text-3xl font-bold">
            eCommerce
          </Link>
        </div>
        <div className="flex-none">
          <Link to="/cart">
            <div
              role="button"
              className="btn btn-ghost bg-[#374151] text-white rounded-full"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-middle">
                  {cart.length}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
