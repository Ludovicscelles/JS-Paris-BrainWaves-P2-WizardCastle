import PropTypes from "prop-types";

function ClassesBox({job}) {
    
    return (
        <article>
            <h3>{job.name}</h3>
            <p>A fierce warrior of primitive background who can enter a battle rage</p>
        </article>
    );
} 

ClassesBox.propTypes = { 
    job:PropTypes.shape({
        name:PropTypes.string.isRequired
    }).isRequired
}

export default ClassesBox;