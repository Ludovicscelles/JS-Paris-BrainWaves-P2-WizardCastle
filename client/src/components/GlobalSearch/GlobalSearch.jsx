
import "./GlobalSearch.css"
import { useState } from "react";
import Modal from 'react-modal';
import { BsSearch } from "react-icons/bs";
import GlobalSearchResults from "../GlobalSearchResults/GlobalSearchResults";
import { useScroll } from "../../context/noScroll";

const customStyles = {
    content: {
      backgroundColor: '#283d3bea',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',  
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '80vw',
      transform: 'translate(-50%, -50%)',
      zIndex: '30',
      maxHeight: '80vh',
      overflowY: 'auto',
    },
  };

Modal.setAppElement('#root');

function GlobalSearch() {
    const [isOpen, setisOpen] = useState(false);
    const [isSearchResult, setIsSearchResult] = useState(false)
    const [search, setSearch] = useState(null)
    const {setNoScroll} = useScroll();

    const openSearch = () => {
      setisOpen(true)
      setNoScroll("no-scroll")
    }
    const closeSearch = () => {
      setisOpen(false)
      setIsSearchResult(false)
      setSearch(null)
      setNoScroll("")
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      setIsSearchResult(true)
    }

    return(
            <>
            <button type="button" className="global-search-container" onClick={openSearch}>Search our library...<BsSearch className="global-search-icon" /></button>
            <Modal 
                isOpen={isOpen}
                onRequestClose={closeSearch}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="global-search-title">Welcome to Wizard's Castle library</h2>
                <p className="global-search-intro-text">Our librarians can help you to find all kinds of ancient knowledge, about spells, monsters, and so much more... <br/> Just tell us what you need !</p>
                <section className="search-decoration">
                  <form className="main-search-container"onSubmit={handleSubmit}>
                    <input className="main-search" placeholder="What are you looking for ?" value={search} onChange={(event) => setSearch(event.target.value)} />
                    <button className="search-icon-button" type="submit">Search<BsSearch className="search-icon"/></button>
                  </form>
                </section>
                {isSearchResult ? <GlobalSearchResults search={search}/> : null}
                <button className="global-search-button" type="button" onClick={closeSearch}>Leave the library</button>
            </Modal>
            </>
    )
}

export default GlobalSearch