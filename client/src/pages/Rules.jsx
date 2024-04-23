/* eslint-disable react/no-array-index-key */
import "./Rules.css";
import { useLoaderData } from "react-router-dom";
import RulesType from "../components/RulesType";


function Rules() {
    const rules = useLoaderData();
    
    return(
        <>
            {/* <h1>Rules</h1>
            <p>You want to learn the rules of Dungeons & Dragons ? Here is everything you need to get started !</p> */}
            <main className="main-rules">
            <aside className="bloc-adventuring">
                {rules.results.map((rule, index) => 
                <a href={`#${rule.index}`} key={`${rule.index}${index}`} className="link"><h3 className="title-adventuring-h3">{rule.name}</h3></a> 
                )}
                




                {/* <h3 className="title-adventuring-h3">Adventuring</h3> */}
                {/* <ul className="list-adventuring" >
                // <li>Time</li>
                // <li>Movement</li>
                // <li>The Environnment</li>
                // <li>Traps</li>
                // </ul>
                // <h3 className="title-adventuring-h3">Combat</h3>
                // <ul className="list-combat">
                // <li>Movement and Position</li>
                // <li>Actions in Combat</li>
                // </ul> */}

                </aside>

                <section className="bloc-adventuring2">
                
                

                    {rules.results.map((rule, index) => 
                        (<RulesType name={rule.name} url={rule.url} key={`${rule.url}${index}`} id={rule.index} />

                            
                            
                            
                           
                        )
                    )}

  

                  

        
                </section>

            </main>


            
            





        </>
    )
}

export default Rules; 