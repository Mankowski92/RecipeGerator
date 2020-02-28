import React,{useState} from 'react';
import '../../scss/App.scss';
import AddToFridge from "../../components/AddToFridge";
import ViewJoke from '../ViewJoke';
import RandomRecipe from "../RandomRecipe";
import SearchRecipe from "../SearchRecipe"
import ReceivedRecipes from '../ReceivedRecipes';
import RecipeDetails from "../RecipeDetails";
import HamburgerMenuPage from "../HamburgerMenu";
import About from "../About"
import Contact from "../Contact"

import {HashRouter as Router,Switch,Route} from "react-router-dom";

function MainView() {

  const [isOpen,toggleOpen] = useState(false);
  const [showRandomRecipe, setShowRandomRecipe] = useState(false)
  const [ShowSearchedRecipe, setShowSearchedRecipe] = useState(false)
  const [receivedRecipes, setReceivedRecipes] = useState(null)
  const [joke, setJoke] = useState(false)
  const [addToFridge, setaddToFridge] = useState(false)
  const [recipeInfo,setRecipeInfo] = useState(false)

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
    setJoke(false)
    setaddToFridge(false)
    setShowSearchedRecipe(false)
  }

  const handleShowSearchedRecipe = () => {
    setShowSearchedRecipe(true)
    setShowRandomRecipe(false)
    setJoke(false)
    setaddToFridge(false)
  }

  const handleJoke = () => {
    setJoke(true)
    setShowSearchedRecipe(false)
    setShowRandomRecipe(false)
    setaddToFridge(false)
  }

  const handleAddToFridge = () => {
    setaddToFridge(true)
    setShowSearchedRecipe(false)
    setShowRandomRecipe(false)
    setJoke(false)
  }


  return (
    <>
      <div className= "main-container">
      <HamburgerMenuPage/>
        
        <div className="main-row-container">
          <div className= "RandomRecipe-container">
            {showRandomRecipe && <RandomRecipe/>}
            {ShowSearchedRecipe &&<SearchRecipe onFound={setReceivedRecipes}/>}
            {((receivedRecipes !== null) && ShowSearchedRecipe) &&<ReceivedRecipes recipes={receivedRecipes} onDetailsClick={setRecipeInfo}/>}
            {addToFridge && <AddToFridge/>}
            {joke && <ViewJoke/>}
          </div>
          <div className= "fridge-container">
		        <div className="fridge">
			        <div className="back-wall">
                <div className ="back-wall-button-container">
                  <button className="button-fridge" onClick= {handleShowRandomRecipe} >Random recipe</button>
                  <button className="button-fridge button-modifier" onClick= {handleShowSearchedRecipe} >Match recipe</button>
                  <button className="button-fridge button-modifier" onClick= {handleAddToFridge} >Add to fridge</button>
                  <button className="button-fridge button-modifier" onClick= {handleJoke} >Joke</button>
                </div>
              </div>
		  	      <div className="shelf one"></div>
			        <div className="shelf two"></div>
		    	    <div className="shelf three"></div>
              <div className= {isOpen ? "door door-open" : "door"} onClick={handleFridgeClick}> </div>
		        </div>
          </div>
          <div className="infos-container">
            {recipeInfo&&<RecipeDetails recipeInfo={recipeInfo} />}
          </div>
        </div>
      </div>
        </>
   );
  }

const App = ()=>{
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={MainView}/>
        <Route  path="/about" component={About}/>
        <Route  path="/contact" component={Contact}/>
      </Switch>
    </Router>
  )
}

export default App;
