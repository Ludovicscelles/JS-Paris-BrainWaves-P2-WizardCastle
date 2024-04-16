import PropTypes from 'prop-types'
import "./FilterButton.css"

function FilterButton( { filterType }) {
    return (
        <button type="button" className="filter-button"><img src={`/src/assets/icons/monsters/${filterType}-icon.svg`} alt=""/>{filterType}s</button>
    )
}

FilterButton.propTypes = {
    filterType: PropTypes.string.isRequired,
}

export default FilterButton;