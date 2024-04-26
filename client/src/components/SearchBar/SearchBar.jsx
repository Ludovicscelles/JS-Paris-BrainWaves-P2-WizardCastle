import "./SearchBar.css";
import { BsSearch } from "react-icons/bs";
import PropTypes from "prop-types";

function SearchBar({searchInput, setSearchInput}) {

  return (
    <section className="search-decoration">
      <form className="main-search-container">
        <input className="main-search" 
        placeholder="Looking for a monster ?"
        type="text"
        value={searchInput}
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
        />

        <BsSearch className="search-icon"   />
      </form>
    </section>

  );
}

SearchBar.propTypes = 
{
    searchInput: PropTypes.arrayOf(PropTypes.string).isRequired.isRequired,
    setSearchInput: PropTypes.string.isRequired,
 }

export default SearchBar;
