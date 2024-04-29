import PropTypes from "prop-types";
import "./spellsdetail.css";

function SpellsDetail({ item }) {
  console.info("item c'est ca :", item);
  return (
    <div>
      <section className="monster-info">
        {item.desc.map((descri) => (
          <p className="item-desc" key={descri.index}>
            {descri}
          </p>
        ))}
      </section>

      <section className="info-block">
        <section className="diverse-trivia">
          <p>school: {item.school.name}</p>
        </section>

        <section className="info-block">
          <section className="diverse-trivia">
            {item.damage && <p>damage type : {item.damage.damage_type.name}</p>}
            <p>casting time: {item.casting_time}</p>
            <p>range: {item.range}</p>
            <p>{item.material}</p>
          </section>
        </section>
      </section>
      <section className="class-require">
        <p>classes: </p>
        {item.classes.map((className, index) => (
          <p className="desc" key={className.index}>
            {className.name}
            {index === item.classes.length - 1 ? "" : " | "}
          </p>
        ))}
      </section>
    </div>
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
    damage: PropTypes.shape({
      damage_type: PropTypes.shape({ name: PropTypes.string }),
    }),
    desc: PropTypes.arrayOf(PropTypes.string),
    classes: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default SpellsDetail;
