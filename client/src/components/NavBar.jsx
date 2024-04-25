import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <div className="navItem">
            <Link to="/">Home</Link>
          </div>
        </li>
        <li>
          <div className="navItem">
            <Link to="/rules">Rules</Link>
          </div>
        </li>
        <li>
          <div className="navItem">
            <Link to="/classes">Class</Link>
          </div>
        </li>
        <li>
          <div className="navItem">
            <Link to="/bestiary">Bestiary</Link>
          </div>
        </li>
        <li>
          <div className="navItem">
            <Link to="/spells">Spells</Link>
          </div>
        </li>
        <li>
          <div className="navItem">
            <Link to="/test">Test</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
