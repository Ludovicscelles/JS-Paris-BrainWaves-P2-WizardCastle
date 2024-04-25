import PropTypes from "prop-types";
import "./spellsdetail.css";

function SpellsDetail({ item }) {
  console.info("item c'est ca :", item);
  return (
    <ul className="list">
      <li>
        {item.desc.map((descri) => (
          <p key={descri.index}>{descri}</p>
        ))}
      </li>
      <li>
        <div className="listestat">
          <p>school: {item.school.name}</p>
          <p>casting time: {item.casting_time}</p>
          <p>range: {item.range}</p>
          <p>shape: {item.area_of_effect}</p>
        </div>
      </li>

      <li>
        <div className="detailLigne">
          <p>classes:</p>
          {item.classes.map((className, index) => (
            <p className="desc" key={className.index}>
              {className.name}
              {index === item.classes.length - 1 ? "" : " |"}
            </p>
          ))}
        </div>
      </li>
      <li>{item.material}</li>
    </ul>
  );
}

SpellsDetail.propTypes = {
  item: PropTypes.shape({
    level: PropTypes.number,
    school: PropTypes.arrayOf(PropTypes.string),
    casting_time: PropTypes.string,
    range: PropTypes.string,
    material: PropTypes.string,
    duration: PropTypes.string,
    area_of_effect: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    ),
    desc: PropTypes.arrayOf(PropTypes.string),
    classes: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default SpellsDetail;
