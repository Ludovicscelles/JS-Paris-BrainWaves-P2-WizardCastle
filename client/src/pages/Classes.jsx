import { useLoaderData } from "react-router-dom";
import ClassesBox from "../components/ClassesBox";
import "./Classes.css";


function Classes() {
  const result = useLoaderData();

  return (
    <>
      <h1>Classes</h1>
      <main id="main">
        <h2>WHAT IS A CLASS ?</h2>
        <div>
          <p>
            Adventurers are extraordinary people, driven by a thirst for
            excitement into a life that others would never dare lead. They are
            heroes, compelled to explore the dark places of the world and take
            on the challenges that lesser women and men can’t stand against.
          </p>
          <p>
            Class is the primary definition of what your character can do. It’s
            more than a profession; it’s your character’s calling.
          </p>
        </div>
        <h2>CHOOSE A CLASS</h2>
        <section className="class">
          {result.results.map((classe) => (
            <ClassesBox job={classe} key={classe.name} />
          ))}
          
        </section>
      </main>
    </>
  );
}

export default Classes;