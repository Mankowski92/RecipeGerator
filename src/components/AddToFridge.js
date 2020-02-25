import React, {useState} from "react";
import "../scss/AddToFridge.scss";


const AddToFridge = ()=>{
  const [value,setValue]  = useState('');
  const [ingredients, setIngredient] = useState([]);

  const handleAddClick = (e) =>{
    e.preventDefault()
    setIngredient(prevState => [...prevState, value])
  }


  return (
    <form onSubmit={handleAddClick}>
        <input className="ingredient" type = "text" placeholder ="Add ingredient to fridge" onChange={(e)=>setValue(e.target.value)} value={value} />
        <input className="asdf" type ="submit"  value="Add"/>

        <ul>
          {ingredients.map(ingredient => <li>{ingredient}</li>)}
        </ul>
    </form>
  )
}

export default AddToFridge



