import React, { useState, useEffect } from "react";
import "../scss/RecipeDetails.scss";

const RecipeDetails = ({ recipeInfo }) => {
  const [data, setData] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipeInfo}/information?apiKey=72537751dcd74f0cbe54623e5064fa3b`,
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
  }, [recipeInfo]);

  if (data === false) {
    return <h1>Brace yourself recipe is coming...</h1>;
  }
  return (
    <div className="detail-container">
      <div className="title-img-container">
        <p>Dish health Score:{data.healthScore}</p>
        <img
          className="recipeDetail-image"
          src={data.image}
          alt="Tekst alternatywny"
        ></img>
      </div>
      <div className="summary-container">
        <span dangerouslySetInnerHTML={{ __html: data.summary }} />
      </div>
      <div className="summary-container"></div>
    </div>
  );
};

export default RecipeDetails;
