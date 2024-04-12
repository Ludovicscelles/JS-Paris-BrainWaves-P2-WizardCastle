import axios from "axios"

function Test() {
    
  
    const getApi= () => {
      axios
      .get('https://www.dnd5eapi.co/api/classes')
      .then((response)=>{
        console.info(response.data);
      });
      }

    return (
        getApi()
    )
}


export default Test;