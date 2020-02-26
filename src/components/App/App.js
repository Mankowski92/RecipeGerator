import React,{useState} from 'react';
import '../../scss/App.scss';
import AddToFridge from "../../components/AddToFridge";
import ViewRecipes from '../../components/ViewRecipes';
import ViewJoke from '../ViewJoke';
import RandomRecipe from "../RandomRecipe";
import SearchRecipe from "../SearchRecipe"
import ReceivedRecipes from '../ReceivedRecipes';

function App() {

  const [isOpen,toggleOpen] = useState(false);
  const [showRandomRecipe, setShowRandomRecipe] = useState(false)
  const [ShowSearchedRecipe, setShowSearchedRecipe] = useState(false)
  const [receivedRecipes, setReceivedRecipes] = useState(null)

  const [joke, setJoke] = useState(false)

  const handleFridgeClick = ()=>{
      toggleOpen(!isOpen)

      if(!isOpen){
        console.log("otwiera się");
        
      }else{
        console.log("zamyka się ");
      }
  }

  const handleShowRandomRecipe = () => {
    setShowRandomRecipe(true)
  }

  const handleShowSearchedRecipe = () => {
    setShowSearchedRecipe(true)
  }

  const handleJoke = () => {
    setJoke(true)
  }
  
  // const handleReceivedRecipes = () => {
  //   setReceivedRecipes() //zamiast true false to są dane czy nie ma danych null/nie null
  // }

  return (
    <>
      
        {/* {(isOpen)&&<ViewRecipes/>}     Aktualnie przez błąd 404 nie można użyć tej funkcjonalności  */}
        {/* {(isOpen)&&<ViewJoke/>} */}
      
      <div className= "main-container">
        <div className= "RandomRecipe-container">
          {showRandomRecipe && <RandomRecipe/>}
          {ShowSearchedRecipe &&<SearchRecipe onFound={setReceivedRecipes}/>}
          {(receivedRecipes !== null) &&<ReceivedRecipes recipes={receivedRecipes}/>}
          {joke && <ViewJoke/>}
        </div>

        <div className= "fridge-container">
		      <div className="fridge">
			      <div className="back-wall">

            <button className="button-fridge" onClick= {handleShowRandomRecipe} >Random recipe</button>

            <button className="button-fridge" onClick= {handleShowSearchedRecipe} >Match recipe</button>

            <button className="button-fridge" onClick= {handleShowSearchedRecipe} >Add to fridge</button>

            <button className="button-fridge" onClick= {handleJoke} >Joke</button>

            </div>
		  	    <div className="shelf one">{handleShowRandomRecipe}
              
            </div>
			      <div className="shelf two">
            
            </div>
		    	  <div className="shelf three">
              
            </div>
			  <div className= {isOpen ? "door door-open" : "door"} onClick={handleFridgeClick}> </div>
		      </div>
        </div>

        <div className="addIngredient-container">
          {(isOpen)&&<AddToFridge />}
        </div>
      </div>
        </>
  );
}

export default App;



/* BACKUP

import React,{useState} from 'react';
import '../../scss/App.scss';
import AddToFridge from "../../components/AddToFridge";
import ViewRecipes from '../../components/ViewRecipes';
import ViewJoke from '../ViewJoke';
import RandomRecipe from "../RandomRecipe";
import SearchRecipe from "../SearchRecipe"
import ReceivedRecipes from '../ReceivedRecipes';

function App() {

  const [isOpen,toggleOpen] = useState(false);
  const [showRandomRecipe, setShowRandomRecipe] = useState(false)
  const [ShowSearchedRecipe, setShowSearchedRecipe] = useState(false)
  const [receivedRecipes, setReceivedRecipes] = useState(null)

  const handleFridgeClick = ()=>{
      toggleOpen(!isOpen)

      if(!isOpen){
        console.log("otwiera się");
        
      }else{
        console.log("zamyka się ");
      }
  }

  const handleShowRandomRecipe = () => {
    setShowRandomRecipe(true)
  }

  const handleShowSearchedRecipe = () => {
    setShowSearchedRecipe(true)
  }
  // const handleReceivedRecipes = () => {
  //   setReceivedRecipes() //zamiast true false to są dane czy nie ma danych null/nie null
  // }

  return (
    <>
      
        {/* {(isOpen)&&<ViewRecipes/>}     Aktualnie przez błąd 404 nie można użyć tej funkcjonalności  */
        // {/* {(isOpen)&&<ViewJoke/>} */}
      
//         <div className= "main-container">
//         <div className= "RandomRecipe-container">
//           {showRandomRecipe && <RandomRecipe/>}
//           {ShowSearchedRecipe &&<SearchRecipe onFound={setReceivedRecipes}/>}
//           {(receivedRecipes !== null) &&<ReceivedRecipes recipes={receivedRecipes}/>}
//         </div>

//         <div className= "fridge-container">
// 		      <div className="fridge">
// 			      <div className="back-wall"></div>
// 		  	    <div className="shelf one">{handleShowRandomRecipe}
//               <button onClick= {handleShowRandomRecipe} >Generate random recipe</button>
//             </div>
// 			      <div className="shelf two">
//             <button onClick= {handleShowSearchedRecipe} >Show matched recipe</button>
//             </div>
// 		    	  <div className="shelf three">
//               <button onClick= {handleShowSearchedRecipe} >Check what you can do</button>
//             </div>
// 			  <div className= {isOpen ? "door door-open" : "door"} onClick={handleFridgeClick}> </div>
// 		      </div>
//         </div>

//         <div className="addIngredient-container">
//           {(isOpen)&&<AddToFridge />}
//         </div>
//       </div>
//         </>
//   );
// }

// export default App;