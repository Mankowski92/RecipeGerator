import React, { useState, useEffect } from "react";
import "../scss/Joke.scss";

const ViewJoke = () => {
  const [data, setData] = useState(false);

  // const ingredientsList = ['bananas', 'apples', 'cheese', 'crackers'];

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/food/jokes/random?apiKey=72537751dcd74f0cbe54623e5064fa3b",
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
          throw new Error("net error");
        }
      })
      .then(data => {
        setData(data);
      })
      .catch(err => {
        console.error("Error appeard - " + err.message);
      });
  }, []);

  if (data === false) {
    return <h1>Ładuję...</h1>;
  }
  return <div className="joke-div">{data.text}</div>;
};

export default ViewJoke;
