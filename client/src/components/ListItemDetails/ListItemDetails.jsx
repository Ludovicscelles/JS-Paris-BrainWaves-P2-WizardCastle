import "./ListItemDetails.css"
import PropTypes from 'prop-types'
import MonstersDetail from './Monsters/MonstersDetail'
import SpellsDetail from './Spells/SpellsDetail'
import ClassesDetail from "./Classes/ClassesDetail"
import RacesDetail from "./Races/RacesDetail"

function ListItemDetails( {item} ) {
    return (
        <section className="list-item-details" id="list-item-details">
            <h3>{item.name}</h3>
            {item.type ? <MonstersDetail item={item}/> : null}
            {item.school ? <SpellsDetail /> : null}
            {item.hit_die ? <ClassesDetail item={item}/> : null}
            {item.alignment ? <RacesDetail item={item}/> : null}
        </section>
    )
}

ListItemDetails.propTypes = {
    item: PropTypes.string.isRequired,
}

export default ListItemDetails;