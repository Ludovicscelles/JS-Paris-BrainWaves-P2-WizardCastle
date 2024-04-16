import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rules">Rules</Link>
        </li>
        <li>
          <Link to="/classes">Class</Link>
        </li>
        <li>
          <Link to="/bestiary">bestiary</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
