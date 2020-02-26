import React from "react";

const ReceivedRecipes = ({recipes}) => {
    
console.log(recipes);
return (

    <div>{recipes[0].title}</div>
  );
}

export default ReceivedRecipes