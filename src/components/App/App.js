import React,{useState} from 'react';
import '../../scss/App.scss';
import AddToFridge from "../../components/AddToFridge";
// import ViewRecipes from '../../components/ViewRecipes';
import ViewJoke from '../ViewJoke';
import RandomRecipe from "../RandomRecipe";

function App() {

  const [isOpen,toggleOpen] = useState(false);
  const [showRandomRecipe, setShowRandomRecipe] = useState(false)

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

  return (
    <>
      
        {/* {(isOpen)&&<ViewRecipes/>}     Aktualnie przez błąd 404 nie można użyć tej funkcjonalności  */}
        {/* {(isOpen)&&<ViewJoke/>} */}
      
      <div className= "main-container">
        <div className= "RandomRecipe-container">
          {showRandomRecipe && <RandomRecipe/>}
        </div>

        <div className= "fridge-container">
		      <div className="fridge">
			      <div className="back-wall"></div>
		  	    <div className="shelf one">
              <button onClick= {handleShowRandomRecipe} >Very important button</button>
            </div>
			      <div className="shelf two"></div>
		    	  <div className="shelf three"></div>
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
