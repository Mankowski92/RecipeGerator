import React, {useState} from "react";
import "../scss/AddToFridge.scss";


const AddToFridge = ()=>{

  const [stan, setStan] = useState([]);

  const handleAddtoStan = () =>{
    setStan(prevState => [...prevState])
  }

  return (
    <form>
        <input type = "text" placeholder ="Add ingredient to fridge" />
        <input type ="submit" onSubmit={handleAddtoStan} value="Add"/>
        {stan.map(() => (
    <li>{stan}</li>
))}</form>
  )
}

export default AddToFridge
