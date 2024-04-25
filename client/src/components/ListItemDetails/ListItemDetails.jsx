import "./ListItemDetails.css";
import PropTypes from "prop-types";
import MonstersDetail from "./Monsters/MonstersDetail";
import SpellsDetail from "./Spells/SpellsDetail";

function ListItemDetails({ item }) {
  return (
    <section className="list-item-details" id="list-item-details">
      <h3>{item.name}</h3>
      {item.type ? <MonstersDetail item={item} /> : null}
      {item.school ? <SpellsDetail item={item} /> : null}
    </section>
  );
}

ListItemDetails.propTypes = {
  item: PropTypes.string.isRequired,
};

export default ListItemDetails;
