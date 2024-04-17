import PropTypes from 'prop-types'
import "./FilterButton.css"

function FilterButton( { filterType, list, handleList}) {
    return (
        <button type="button" className="filter-button" onClick={() => handleList(list.filter((element) => (element.type.toLowerCase() === filterType.toLowerCase())))}><img src={`/src/assets/icons/monsters/${filterType}-icon.svg`} alt=""/>{filterType}s</button>
    )
}

FilterButton.propTypes = {
    filterType: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleList: PropTypes.func.isRequired,
}

export default FilterButton;