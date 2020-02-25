// import React, {useState, useEffect} from "react";

// const ViewRecipes = () => {
//     const [data, setData] = useState(false);

//     // const ingredientsList = ['bananas', 'apples', 'cheese', 'crackers'];

//     useEffect(() => {
//         fetch("https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,flour,sugar&number=2?apiKey=72537751dcd74f0cbe54623e5064fa3b", 
//         {
//         method: "GET",
//         headers: {  
//         "Content-Type": "application/json"
//           }
//         }).then(response => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error("net error");
//             }
//         })
//         .then(data => {
//             setData(data);
//             })
//         .catch(err => {
//             console.error("Error appeard - " + err.message)
//         })
//     },[])

//     if (data ===false ) {
//         return <h1>Ładuję...</h1>
//     }
//     return (
//         <div>
//           <ul>
//             {/* {data.map( => )} */}
//             <li>{data.text}</li>
//             {/* <li>{data.product}</li> */}
//           </ul>
//         </div>
//       );
//     }

// export default ViewRecipes