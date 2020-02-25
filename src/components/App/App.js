import React,{useState} from 'react';
import '../../scss/App.scss';
import AddToFridge from "../../components/AddToFridge";
// import ViewRecipes from '../../components/ViewRecipes';
import ViewJoke from '../ViewJoke';

function App() {

  const [isOpen,toggleOpen] = useState(false);

  const handleFridgeClick = ()=>{
      toggleOpen(!isOpen)

      if(!isOpen){
        console.log("otwiera się");
        
      }else{
        console.log("zamyka się ");
      }
  }

  return (
      <div onClick={handleFridgeClick} className="fridge">
        {(isOpen)&&<AddToFridge />}
        {/* {(isOpen)&&<ViewRecipes/>}     Aktualnie przez błąd 404 nie można użyć tej funkcjonalności  */}
        {/* {(isOpen)&&<ViewJoke/>} */}
      </div>
  );
}

export default App;
