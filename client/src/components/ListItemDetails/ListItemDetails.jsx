import "./ListItemDetails.css"
import PropTypes from 'prop-types'

function ListItemDetails( {itemTitle, itemText, itemSize, itemType} ) {
    return (
        <section className="list-item-details" id="list-item-details">
            <h3>{itemTitle}</h3>
            {itemText ? <p>{itemText}</p> : <p>Our adventurers didn't survive long enough to see this monster...<br/> We're not sure what it looks like, sorry !</p>}
            <p>Type : {itemType}</p>
            <p>Size : {itemSize}</p>
        </section>
    )
}

ListItemDetails.propTypes = {
    itemTitle: PropTypes.string.isRequired,
    itemText: PropTypes.string.isRequired,
    itemSize: PropTypes.string.isRequired,
    itemType: PropTypes.string.isRequired,
}

export default ListItemDetails;