import "./assets/reset.css";

import "./App.css";
import { Link, Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <header>
        <img src="/src/assets/wizard_logo_black.svg" alt="" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/classes">Class</Link>
          <Link to="/bestiary">bestiary</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
