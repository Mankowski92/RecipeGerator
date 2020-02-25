import React, {useState, useEffect} from "react";

const SearchRecipe = () => {
    const [data, setData] = useState(false);

    useEffect(() => {
        fetch("https://api.spoonacular.com/recipes/search?query=cheese&number=2&apiKey=72537751dcd74f0cbe54623e5064fa3b", 
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
        return <h1>Searching...</h1>
    }
    return (
        <div>
          <div>
            
          </div>
        </div>
      );
    }

export default SearchRecipe