import { useEffect, useState } from "react";
import ListItemRound from "./ListItemRound/ListItemRound";
import ListItemDetails from "./ListItemDetails/ListItemDetails";

// Votre composant Test
function SpellList() {
  const [lvls, setLvls] = useState([[], [], [], [], [], [], [], [], []]);
  const [currentSpell, setCurrentSpell] = useState(null);
  const [spellInfo, setSpellInfo] = useState(null);

  async function fetchAndPopulateLvls() {
    try {
      const response = await fetch("https://www.dnd5eapi.co/api/spells");
      const data = await response.json();

      // Regrouper les sorts par niveau
      const spellsByLevel = {};
      data.results.forEach((spell) => {
        const { level } = spell;
        if (!spellsByLevel[level]) {
          spellsByLevel[level] = [];
        }
        spellsByLevel[level].push(spell);
      });

      // Mettre à jour l'état lvls avec les noms de sorts par niveau
      setLvls(Object.values(spellsByLevel));
      console.info(spellsByLevel);
    } catch (error) {
      console.error("Erreur lors de la récupération des sorts :", error);
    }
  }

  useEffect(() => {
    fetchAndPopulateLvls();
  }, []);

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/spells/${currentSpell}`)
      .then((res) => res.json())
      .then((data) => setSpellInfo(data))
      .catch((err) => console.error(err));
  }, [currentSpell]);
  console.info("currentSpell", currentSpell);
  console.info("spellInfo", spellInfo);

  return (
    <div className="App">
      {currentSpell ? <ListItemDetails item={spellInfo} /> : null}
      {lvls.map((levelSpells, index) => (
        <div key={levelSpells.index}>
          {index === 0 ? <h2>Cantrips</h2> : <h2>Level {index}</h2>}
          {levelSpells.map((spell) => (
            <ListItemRound
              key={spell.index}
              itemName={spell.name}
              setState={setCurrentSpell}
              itemInfo={spell.index}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default SpellList;
