import { Link } from 'react-router-dom'

function Header() {
  // const { cartContext } = useCart();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <div>
        card icon
      </div>
    </nav>
  );
}

export default Header;
