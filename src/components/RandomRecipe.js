import React, {useState, useEffect} from "react";

const RandomRecipe = () => {
    const [data, setData] = useState(false);

    useEffect(() => {
        fetch("https://api.spoonacular.com/recipes/random?apiKey=72537751dcd74f0cbe54623e5064fa3b", 
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
            setData(data);
            console.log(data)
            })
        .catch(err => {
            console.error("Unfortunately, there was a hungry mistake: " + err.message)
        })
    },[])

    if (data ===false ) {
        return <h1>Brace yourself recipe is coming...</h1>
    }
    return (
        <div>
          <img src={data.recipes[0].image} alt="Tekst alternatywny"></img>
          <div>
              {data.recipes[0].instructions.replace(/<[^>]*>?/gm, '')} 
              {/* {data.recipes[0].extendedIngredients[0]} */}
          </div>
        </div>
      );
    }

export default RandomRecipe