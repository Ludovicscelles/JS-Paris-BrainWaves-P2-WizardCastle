import PropTypes from 'prop-types';

function MonstersDetail({item}) {
    return(
        <section className="monster_detail">
            <img src={`/src/assets/icons/monsters/${item.type.toLowerCase()}-icon.svg`} alt=""/>
            <section className="monster-info">
            {item.desc ? <p className="item-desc">{item.desc}</p> : <p>Our adventurers didn't survive long enough to see this monster...<br/> We're not sure what it looks like, sorry !</p>}
            </section>
            <section className="stats-block">
                <p>Armor class : {item.armor_class.map(((ac) => (<p key={ac.type}>{ac.type} : {ac.value}</p>)))}</p>
                <p>Hit Points : {item.hit_points}</p>
                <p>XP : {item.xp}</p>
                <p>Challenge rating : {item.challenge_rating}</p>
                <p>Proficiency Bonus : {item.proficiency_bonus}</p>
                <p>Hit Dice : {item.charisma}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Strength</td>
                            <td>Dexterity</td>
                            <td>Constitution</td>
                            <td>Intelligence</td>
                            <td>Wisdom</td>
                            <td>Charisma</td>
                        </tr>
                        <tr>
                            <td>{item.strength}</td>
                            <td>{item.dexterity}</td>
                            <td>{item.constitution}</td>
                            <td>{item.intelligence}</td>
                            <td>{item.wisdom}</td>
                            <td>{item.charisma}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
                {item.special_abilities.length !== 0 ?
                <section className="special-attacks">
                    <h4>Special Abilities</h4>
                    <ul>
                        {item.special_abilities.map((ability) => (<p key={ability.name} >{ability.name} : {ability.desc}</p>))}
                    </ul>
                </section>
                 : null
                }
            
        </section>
    )
}

MonstersDetail.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string.isRequired,
        desc: PropTypes.string,
        armor_class: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
        })).isRequired,
        hit_points: PropTypes.number.isRequired,
        xp: PropTypes.number.isRequired,
        challenge_rating: PropTypes.number.isRequired,
        proficiency_bonus: PropTypes.number.isRequired,
        hit_dice: PropTypes.string.isRequired,
        strength: PropTypes.number.isRequired,
        dexterity: PropTypes.number.isRequired,
        constitution: PropTypes.number.isRequired,
        intelligence: PropTypes.number.isRequired,
        wisdom: PropTypes.number.isRequired,
        charisma: PropTypes.number.isRequired,
        special_abilities: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired
        }))
    }).isRequired
}

export default MonstersDetail;