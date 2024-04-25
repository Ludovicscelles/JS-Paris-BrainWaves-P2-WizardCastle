
import "./GlobalSearch.css"
import { useState } from "react";
import Modal from 'react-modal';
import { BsSearch } from "react-icons/bs";
import GlobalSearchResults from "../GlobalSearchResults/GlobalSearchResults";

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
    },
  };

Modal.setAppElement('#root');

function GlobalSearch() {
    const [isOpen, setisOpen] = useState(false);

    const openSearch = () => {setisOpen(true)}
    const closeSearch = () => {setisOpen(false)}

    const [isSearchResult, setIsSearchResult] = useState(false)

    const handleSubmit = (event) => {
      event.preventDefault()
      setIsSearchResult(true)
    }

    const [search, setSearch] = useState(null)

    return(
            <>
            <button type="button" className="global-search-container" onClick={openSearch}>Search <BsSearch className="global-search-icon" /></button>
            <Modal 
                isOpen={isOpen}
                onRequestClose={closeSearch}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="global-search-title">Welcome to our library</h2>
                <p className="global-search-intro-text">Our librarians can help you to find all kinds of ancient knowledge, about spells, monsters, and so much more... <br/> Just tell us what you need !</p>
                <section className="search-decoration">
                  <form className="main-search-container"onSubmit={handleSubmit}>
                    <input className="main-search" placeholder="What are you looking for ?" value={search} onChange={(event) => setSearch(event.target.value)} />
                    <BsSearch type="submit" className="search-icon" />
                  </form>
                </section>
                {isSearchResult ? <GlobalSearchResults search={search}/> : null}
                <button className="global-search-button" type="button" onClick={closeSearch}>Close</button>
            </Modal>
            </>
    )
}

export default GlobalSearch