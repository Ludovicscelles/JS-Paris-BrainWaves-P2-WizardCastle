import "./SectionHeader.css"
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
 

function SectionHeader({searchInput, setSearchInput}) {

    return(
        <header className="section-header">
            <h1>Monsters</h1>
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        </header>
        
    )
}
SectionHeader.propTypes = 
{
    searchInput: PropTypes.string.isRequired,
    setSearchInput: PropTypes.func.isRequired,
 }

export default SectionHeader;