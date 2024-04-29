import PropTypes from 'prop-types'

function RacesDetail({item}) {
    return(
        <section className="monster-detail">
            <p>{item.alignment}</p>
            <p>{item.age}</p>
            <p>{item.size_description}</p>
        </section>
    )
}

export default RacesDetail;

RacesDetail.propTypes = {
    item: PropTypes.shape({
        alignment: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        size_description: PropTypes.string.isRequired
    }).isRequired
}