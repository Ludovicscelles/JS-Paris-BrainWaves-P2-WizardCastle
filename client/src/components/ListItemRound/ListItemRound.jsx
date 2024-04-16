import "./ListItemRound.css"
import PropTypes from 'prop-types'

function ListItemRound({ itemName }) {
    return (
        <button type="button">{itemName}</button>
    )
}

ListItemRound.propTypes = {
    itemName: PropTypes.string.isRequired,
}

export default ListItemRound;