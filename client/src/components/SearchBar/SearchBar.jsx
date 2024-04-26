
import "./SearchBar.css";
/* eslint-disable import/no-unresolved */
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <section className="search-decoration">
      <form className="main-search-container">
        <input className="main-search" placeholder="Looking for a monster ?" />
        <BsSearch className="search-icon" />
      </form>
    </section>
  );
}

export default SearchBar;
