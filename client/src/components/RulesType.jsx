import PropTypes from "prop-types";
import { useState, useEffect } from "react";


function RulesType({ name, url, id }) {
    const [subsection, setSubsection] = useState([]);
    const [detailRule, setDetailRule] = useState(null);
    
    const [isOpen, setIsOpen] = useState(false);
    


    useEffect(()=> {
        fetch(`https://www.dnd5eapi.co${url}`)
        .then(response => response.json())
        .then(data => {setSubsection(data.subsections)})
        .catch(error => console.error(error))
    },[url])

    const handleClick  = (link) => {
        setIsOpen(!isOpen)
        fetch(`https://www.dnd5eapi.co${link}`)
        .then(reponse => reponse.json())
        .then(data => {setDetailRule(data)} )
        .catch(error => console.error(error))
    }

    

        return (
        <>         
        <h2 className="title-adventuring-h2" key={name} id={id}>{name}</h2> 
    
            

       
            {subsection.map((element) =>
             <ul key={element.url}>

                
                <button className="rule-button"type="button" onClick={()=> (handleClick(element.url))}  >
                 
                <section><h3>{element.name}</h3>
                <p className="plus">+</p>
                </section>
                {isOpen && detailRule && detailRule.name === element.name && <div><p className="detailRule">{detailRule.desc}</p></div>}  
                
                </button>


                </ul>
        
             
            )
                  
        
        }
           
 
    </>
);
}
    
RulesType.propTypes = 
{
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
 }

export default RulesType;