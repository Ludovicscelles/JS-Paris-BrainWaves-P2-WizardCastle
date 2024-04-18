import "./SectionHeader.css"
import SearchBar from "../SearchBar/SearchBar";

function SectionHeader() {
    
    return(
        <header className="section-header">
            <h1>Monsters</h1>
            <SearchBar />
        </header>
        
    )
}

export default SectionHeader;