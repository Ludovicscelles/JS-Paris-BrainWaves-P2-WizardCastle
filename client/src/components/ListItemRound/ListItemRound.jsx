import "./ListItemRound.css"
import PropTypes from 'prop-types'

function ListItemRound({ itemName, setState, itemInfo }) {
    return (
        <button type="button" className="ListItemRound" onClick={() => setState(itemInfo)}><a href="#list-item-details">{itemName}</a></button>
    )
}

ListItemRound.propTypes = {
    itemName: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    itemInfo: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default ListItemRound;