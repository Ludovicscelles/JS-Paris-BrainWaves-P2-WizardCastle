import { useLoaderData } from "react-router-dom";

function Rules() {
    const rule = useLoaderData();

    return(
        <>
            <h1>Rules</h1>
            <p>You want to learn the rules of Dungeons & Dragons ? Here is everything you need to get started !</p>
            <p>Here is a rule : {rule}</p>
        </>
    )
}

export default Rules; 