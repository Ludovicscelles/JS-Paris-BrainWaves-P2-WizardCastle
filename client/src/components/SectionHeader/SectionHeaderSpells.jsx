import "./SectionHeader.css";
import SearchBar from "../SearchBar/SearchBar";

function SectionHeaderSpells() {
  return (
    <header className="section-header-spell">
      <h1>Spells</h1>
      <SearchBar />
    </header>
  );
}

export default SectionHeaderSpells;
