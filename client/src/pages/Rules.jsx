import { useLoaderData } from "react-router-dom";

function Rules() {
    const ruleSet = useLoaderData();

    

    return(
        <>
            <h1>Rules</h1>
            <p>You want to learn the rules of Dungeons & Dragons ? Here is everything you need to get started !</p>
            {ruleSet.results.map((rule) => <p key={rule.index}>{rule.name}</p>)}
            <p><a href={`${ruleSet.results[0].url}`}>See rule</a></p>
        </>
    )
}

export default Rules; 