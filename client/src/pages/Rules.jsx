/* eslint-disable react/no-array-index-key */
import "./Rules.css";
import { useLoaderData } from "react-router-dom";
import RulesType from "../components/RulesType";
import SectionHeaderRules from "../components/SectionHeader/SectionHeaderRules";

function Rules() {
  const rules = useLoaderData();

  return (
    <>
      <SectionHeaderRules />
      <main className="main-rules">
        <aside className="bloc-adventuring">
          {rules.results.map((rule, index) => (
            <a
              href={`#${rule.index}`}
              key={`${rule.index}${index}`}
              className="link"
            >
              <h3 className="title-adventuring-h3">{rule.name}</h3>
            </a>
          ))}
        </aside>
        <section className="bloc-adventuring2">
        <p className="intro-text">Rules provide the framework upon which epic adventures unfold. From the roll of the dice to the turn of a page, these rules govern the flow of combat, the resolution of challenges, and the unfolding of narrative as players embark on quests of daring and discovery.</p>

        <p className="intro-text">At its core, the game is guided by the Dungeon Master, the storyteller who weaves the threads of fate and guides the players through their adventures. It is they who set the stage, populate the world with allies and adversaries alike, and arbitrate the outcomes of the players' actions.</p>

        <p className="intro-text">But while the rules provide structure, they also leave room for creativity and improvisation. The players are not merely bound by the limits of their character sheets; they are encouraged to think outside the box, to devise clever strategies, and to immerse themselves fully in the world of their imagination.</p>
          {rules.results.map((rule, index) => (
            <RulesType
              name={rule.name}
              url={rule.url}
              key={`${rule.url}${index}`}
              id={rule.index}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Rules;
