import { useLoaderData } from "react-router-dom";
import ListItemRound from "../components/ListItemRound/ListItemRound";

function Bestiary() {
  // states
  const monsters = useLoaderData()

  // fonctions



  // appel du composant

  // tests
  
  return (
    <>
      <h1>Bestiary</h1>
      <h2>Monsters in D&D</h2>
      <p>
      In the vast realm of Dungeons & Dragons, where heroes rise and fall in epic quests, there exists a myriad of creatures both wondrous and  terrifying. These beings, known collectively as monsters, inhabit the  deepest dungeons, the darkest forests, and the highest peaks. Some are  born of ancient magic, while others are the twisted creations of dark sorcery.
      </p>
      <ListItemRound />
      <h2>Filter by monster type</h2>
      <h2>All monsters</h2>
      {monsters.results.map((monster) => (<ListItemRound key={monster.name} itemName={monster.name}/>))}
    </>
  );
}

export default Bestiary;
