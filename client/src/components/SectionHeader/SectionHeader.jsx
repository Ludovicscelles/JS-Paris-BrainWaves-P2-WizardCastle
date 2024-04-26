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
    searchInput: PropTypes.arrayOf(PropTypes.string).isRequired.isRequired,
    setSearchInput: PropTypes.string.isRequired,
 }

export default SectionHeader;