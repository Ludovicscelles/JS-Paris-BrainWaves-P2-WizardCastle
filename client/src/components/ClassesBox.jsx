import PropTypes from "prop-types";

function ClassesBox({itemName,setState,itemInfo }) {
    
    return (
        <article className="classes-box">
            <h3>{itemName}</h3>
            <button type="button" onClick={() => setState(itemInfo)}><a href="#list-item-details">Choose this</a></button>
        </article>
    );
} 

ClassesBox.propTypes = {
    itemName: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    itemInfo: PropTypes.objectOf(PropTypes.string).isRequired,
}


export default ClassesBox;