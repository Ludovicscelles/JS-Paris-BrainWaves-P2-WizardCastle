import SpellList from "../components/SpellList";
import SectionHeaderSpells from "../components/SectionHeader/SectionHeaderSpells";

import "./Bestiary.css";

function Spells() {
  return (
    <>
      <SectionHeaderSpells />
      <main className="main-bestiary">
        <h2>Spells in D&D</h2>
        <p className="intro-text">
        Within the boundless tapestry of magic that weaves through the realms of Dungeons & Dragons, spells are the threads that shape reality itself. Wielded by wizards, sorcerers, clerics, and druids, these mystical incantations harness the forces of nature, the elements, and the arcane to achieve wondrous feats and unleash devastating power.
        </p>

        <SpellList />
      </main>
    </>
  );
}

export default Spells;
