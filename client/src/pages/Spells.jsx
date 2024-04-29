import SpellList from "../components/SpellList";
import SectionHeaderSpells from "../components/SectionHeader/SectionHeaderSpells";

import "./Bestiary.css";

function Spells() {
  return (
    <>
      <SectionHeaderSpells />
      <main>
        <h2>spells in D&D</h2>
        <p className="intro-text">
          In the vast realm of Dungeons & Dragons, where heroes rise and fall in
          epic quests, there exists a myriad of creatures both wondrous and
          terrifying. These beings, known collectively as monsters, inhabit the
          deepest dungeons, the darkest forests, and the highest peaks. Some are
          born of ancient magic, while others are the twisted creations of dark
          sorcery.
        </p>

        <SpellList />
      </main>
    </>
  );
}

export default Spells;
