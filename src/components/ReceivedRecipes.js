import React from "react";
import "../scss/ReceivedRecipes.scss"

const ReceivedRecipes = ({recipes,onDetailsClick}) => {
    
console.log(recipes);
return (

  <div className="receivedRecipes-container">
    {recipes.map((recipe) => {
      return (
      <div key={recipe.id}>
        <p className="recipe-title">{recipe.title}</p>
        <p>Preparation time: {recipe.readyInMinutes}</p>
        <button onClick={()=>onDetailsClick(recipe.id)}>See more</button>
      </div>
      )
    })}
  </div>
  );
}

export default ReceivedRecipes