function TestAPI() {
    fetch("https://www.dnd5eapi.co/api/classes")
    .then((response) => response.json())
    .then((data) => console.info(data))
    .catch((error) => console.error(error))
    

    return (
            <p>bonjour</p>

    )
}

export default TestAPI;