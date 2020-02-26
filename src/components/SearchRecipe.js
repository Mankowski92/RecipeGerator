import React, {useState} from "react";
import "../scss/SearchRecipe.scss"

const SearchRecipe = (props) => {
    const [data, setData] = useState(null);
    const [query, setQuery] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [diet, setDiet] = useState("");
    const [excludeIngredients, setexcIudeIngredients] = useState("");
    const [intolerances, setIntolerances] = useState("");
    const [number, setNumber] = useState(2);

    
    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
          }
        


        fetch(`https://api.spoonacular.com/recipes/search?query=${query}&cuisine=${cuisine}&diet=${diet}&excludeIngredients=${excludeIngredients}&intolerances=${intolerances}&number=${number}&apiKey=72537751dcd74f0cbe54623e5064fa3b`, 
        {
        method: "GET",
        headers: {  
        "Content-Type": "application/json"
          }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Some hungry error apeard");
            }
        })
        .then(data => {
            props.onFound(data.results);
            // console.log(data)
        })   
            
        .catch(err => {
            console.error("Unfortunately, there was a hungry mistake: " + err.message)
        })
    }
    

    if (data ===false ) {
        return <h1>Searching...</h1>
        }
    
    return (
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Put meal type"/>
        <input
        type="text"
        value={excludeIngredients}
        onChange={e => setexcIudeIngredients(e.target.value)}
        placeholder="Ingredients you want to exclude"/>
        <input
        type="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Put number of recipes you want to receive"/>
        <select
        value={cuisine}
        onChange={e => setCuisine(e.target.value)}>
        <option value="italian">Italian</option>
        <option value="chinese">Chinese</option>
        <option value="american">American</option>
      </select>
      <select
        value={diet}
        onChange={e => setDiet(e.target.value)}>
        <option value="vegan">vegan</option>
        <option value="no vegan">no vegan</option>
      </select>
        <select
        value={intolerances}
        onChange={e => setIntolerances(e.target.value)}>
        <option value="Milk">vegan</option>
        <option value="Apples">no vegan</option>
        </select> 
      <button onClick={handleSubmit}>Search for recipes</button>
    </form>
      );
    }


export default SearchRecipe