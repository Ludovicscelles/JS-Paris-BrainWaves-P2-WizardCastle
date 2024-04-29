/* eslint-disable react/no-array-index-key */
import "./Rules.css";
import { useLoaderData } from "react-router-dom";
import RulesType from "../components/RulesType";
import SectionHeader from "../components/SectionHeader/SectionHeader";


function Rules() {
    const rules = useLoaderData();
    
    return(
        <>
        <SectionHeader/>
        <main className="main-rules">
            <aside className="bloc-adventuring">
                {rules.results.map((rule, index) => 
                <a href={`#${rule.index}`} key={`${rule.index}${index}`} className="link"><h3 className="title-adventuring-h3">{rule.name}</h3></a> 
                )}
            </aside>
            <section className="bloc-adventuring2">
                {rules.results.map((rule, index) => 
                    (<RulesType name={rule.name} url={rule.url} key={`${rule.url}${index}`} id={rule.index} />)
                )}
            </section>
        </main>
        </>
         )
}

export default Rules; 