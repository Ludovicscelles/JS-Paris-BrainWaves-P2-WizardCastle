import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./GlobalSearchResults.css";
import ListItemRound from "../ListItemRound/ListItemRound";

function GlobalSearchResults({ search }) {
  const [searchMonsters, setSearchMonsters] = useState([]);
  const [searchSpells, setSearchSpells] = useState([]);
  const [searchJob, setSearchJob] = useState([]);

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/classes")
      .then((res) => res.json())
      .then((data) => setSearchJob(data.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/monsters")
      .then((res) => res.json())
      .then((data) => setSearchMonsters(data.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/spells")
      .then((res) => res.json())
      .then((data) => setSearchSpells(data.results))
      .catch((err) => console.error(err));
  }, []);

  const filteredJob = searchJob.filter((job) =>
    job.name.toLowerCase().includes(search.toLowerCase())
  );
  const filteredSpells = searchSpells.filter((spell) =>
    spell.name.toLowerCase().startsWith(search.toLowerCase())
  );
  const filteredMonsters = searchMonsters.filter((monster) =>
    monster.name.toLowerCase().startsWith(search.toLowerCase())
  )
  
  const noResult = !!((filteredSpells.length === 0 && filteredMonsters.length === 0 && filteredJob.length === 0));

  return (
    <section className="global-search-result">
      {filteredSpells.length !== 0 && (
        <h3 className="global-search-result-category">Spells</h3>
      )}
      <section className="search-result">
        {search !== "" &&
          filteredSpells.map((spell) => (
            <ListItemRound
              key={`global-search-${spell.name}`}
              itemName={spell.name}
            />
          ))}
      </section>
      {filteredMonsters.length !== 0 && (
        <h3 className="global-search-result-category">Monsters</h3>
      )}
      <section className="search-result">
        {search !== "" &&
          filteredMonsters.map((monster) => (
            <ListItemRound
              key={`global-search-${monster.name}`}
              itemName={monster.name}
            />
          ))}
      </section>
      {filteredJob.length !== 0 && (
        <h3 className="global-search-result-category">Classes</h3>
      )}
      <section className="search-result">
        {search !== "" &&
          filteredJob.map((job) => (
            <ListItemRound
              key={`global-search-${job.name}`}
              itemName={job.name}
            />
          ))}
      </section>
      {noResult && (
        <p className="global-search-no-result">
          No result... Try another search ?
        </p>
      )}
    </section>
  );
}

GlobalSearchResults.propTypes = {
  search: PropTypes.string.isRequired,
};

export default GlobalSearchResults;
