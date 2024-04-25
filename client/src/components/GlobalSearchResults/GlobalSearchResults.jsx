import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import './GlobalSearchResults.css'
import ListItemRound from '../ListItemRound/ListItemRound'


function GlobalSearchResults({search}) {

const [searchMonsters, setSearchMonsters] = useState([])
const [searchSpells, setSearchSpells] = useState([])
const [searchJob, setSearchJob] = useState([])


useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/classes")
    .then((res) => res.json())
    .then((data) => setSearchJob(data.results))
    .catch((err) => console.error(err))
}, [])

useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/monsters")
    .then((res) => res.json())
    .then((data) => setSearchMonsters(data.results))
    .catch((err) => console.error(err))
}, [])

useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/spells")
    .then((res) => res.json())
    .then((data) => setSearchSpells(data.results))
    .catch((err) => console.error(err))
}, [])


    return(
        <section className="global-search-result">
            <h3 className="global-search-result-category">Spells</h3>
            <section className="search-result">
                {search !== "" && searchSpells.filter((spell) => (spell.name.toLowerCase().startsWith(search.toLowerCase()))).map((spell) => (<ListItemRound key={`global-search-${spell.name}`} itemName={spell.name}/>))}
            </section>
            <h3 className="global-search-result-category">Monsters</h3>
            <section className="search-result">
                {search !== "" && searchMonsters.filter((monster) => (monster.name.toLowerCase().startsWith(search.toLowerCase()))).map((monster) => (<ListItemRound key={`global-search-${monster.name}`} itemName={monster.name}/>))}
            </section>
            <h3 className="global-search-result-category">Classes</h3>
            <section className="search-result">
                {search !== "" && searchJob.filter((job) => (job.name.toLowerCase().includes(search.toLowerCase()))).map((job) => (<ListItemRound key={`global-search-${job.name}`} itemName={job.name}/>))}
            </section>
        </section>
        
        
    )
}

GlobalSearchResults.propTypes = {
    search: PropTypes.string.isRequired,
}

export default GlobalSearchResults;