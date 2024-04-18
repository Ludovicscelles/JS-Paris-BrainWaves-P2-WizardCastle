import PropTypes from 'prop-types'
import "./FilterButton.css"

function FilterButton( { filterType, list, handleList, handleDetails }) {
    return (
        <button type="button" className="filter-button" onClick={() => {
            handleList(list.filter((element) => (element.type.toLowerCase() === filterType.toLowerCase())))
            handleDetails(null)
        }}>
            <img src={`/src/assets/icons/monsters/${filterType}-icon.svg`} alt=""/>
            {filterType !== "monstrosity" ? `${filterType}s` : "monstrosities"}
        </button>
    )
}

FilterButton.propTypes = {
    filterType: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleList: PropTypes.func.isRequired,
    handleDetails: PropTypes.func.isRequired
}

export default FilterButton;