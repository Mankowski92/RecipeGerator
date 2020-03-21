import React, { useState, useEffect } from "react";
import "../scss/RandomRecipe.scss";

const RandomRecipe = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=72537751dcd74f0cbe54623e5064fa3b",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Some hungry error apeard");
        }
      })
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(err => {
        console.error(
          "Unfortunately, there was a hungry mistake: " + err.message
        );
      });
  }, []);

  if (data === false) {
    return <h1>Brace yourself recipe is coming...</h1>;
  }
  return (
    <div>
      <h2>{data.recipes[0].title}</h2>
      <img src={data.recipes[0].image} alt="Tekst alternatywny"></img>
      <div>
        <h3>Preparation instruction</h3>
        <span
          dangerouslySetInnerHTML={{ __html: data.recipes[0].instructions }}
        />
      </div>
    </div>
  );
};

export default RandomRecipe;
