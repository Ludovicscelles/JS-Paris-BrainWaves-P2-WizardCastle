import "./assets/reset.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useScroll } from "./context/noScroll";

// import styles from "./App.module.css";
import "./App.css";


function App() {

  const {noScroll} = useScroll();

  return (
    <>
      <NavBar />
        <section className={noScroll}>
          <Outlet/>
        </section>
      <Footer />
    </>
  );
}

export default App;
