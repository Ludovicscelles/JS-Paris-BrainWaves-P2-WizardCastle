import { useLoaderData } from "react-router-dom";

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
      <h2>Filter by monster type</h2>
      <h2>All monsters</h2>
      {monsters.results.map((monster) => (<h3 key={monster.name}>{monster.name}</h3>))}
    </>
  );
}

export default Bestiary;
