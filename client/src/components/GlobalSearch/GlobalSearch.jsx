import "./GlobalSearch.css"
import { BsSearch } from "react-icons/bs";

function GlobalSearch() {
    return(
            <form className="global-search-container">
                <input className="global-search" placeholder="Search our library..." />
                <BsSearch className="global-search-icon" />
            </form>
    )
}

export default GlobalSearch