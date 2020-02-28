import React, {useState} from "react";
import "../scss/SearchRecipe.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


const SearchRecipe = (props) => {
    const [data] = useState(null);
    const [query, setQuery] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [diet, setDiet] = useState("");
    const [excludeIngredients, setexcIudeIngredients] = useState("");
    const [intolerances, setIntolerances] = useState("");
    const [number, setNumber] = useState(2);

    
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://api.spoonacular.com/recipes/search?query=${query}&cuisine=${cuisine}&diet=${diet}&excludeIngredients=${excludeIngredients}&intolerances=${intolerances}&number=${number}&apiKey=72537751dcd74f0cbe54623e5064fa3b`, 
        {
        method: "GET",
        headers: {  
        "Content-Type": "application/json"
          }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Some hungry error apeard");
            }
        })
        .then(data => {
            props.onFound(data.results);
            // console.log(data)
        })
            
        .catch(err => {
            console.error("Unfortunately, there was a hungry mistake: " + err.message)
        })
    }
    
    if (data ===false ) {
        return <h1>Searching...</h1>
        }
    
    return (

<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridText">
      <Form.Label>Dish type</Form.Label>
      <Form.Control value={query} onChange={e => setQuery(e.target.value)} type="text" placeholder="e.g Hamburger" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Cousine type</Form.Label>
      <Form.Control value={cuisine} onChange={e => setCuisine(e.target.value)} as="select">
        <option value="">All</option>
        <option value="african">African</option>
        <option value="american">American</option>
        <option value="british">British</option>
        <option value="cajun">Cajun</option>
        <option value="caribbean">Caribbean</option>
        <option value="chinese">Chinese</option>
        <option value="eastern european">Eastern European</option>
        <option value="european">European</option>
        <option value="french">French</option>
        <option value="german">German</option>
        <option value="greek">Greek</option>
        <option value="indian">Indian</option>
        <option value="irish">Irish</option>
        <option value="italian">Italian</option>
        <option value="japanese">Japanese</option>
        <option value="jewish">Jewish</option>
        <option value="korean">Korean</option>
        <option value="latin american">Latin American</option>
        <option value="mediterranean">Mediterranean</option>
        <option value="mexican">Mexican</option>
        <option value="eiddle eastern">Middle Eastern</option>
        <option value="nordic">Nordic</option>
        <option value="southern">Southern</option>
        <option value="spanish">Spanish</option>
        <option value="thai">Thai</option>
        <option value="vietnamese">Vietnamese</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridText">
      <Form.Label>Excluded ingredients</Form.Label>
      <Form.Control value={excludeIngredients} onChange={e => setexcIudeIngredients(e.target.value)} type="text" placeholder="e.g Pasta" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Diet type</Form.Label>
      <Form.Control value={diet} onChange={e => setDiet(e.target.value)} as="select">
        <option value="">All</option>
        <option value="gluten free">Gluten Free</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="lacto-vegetarian">Lacto-Vegetarian</option>
        <option value="ovo-vegetarian">Ovo-Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="pescetarian">Pescetarian</option>
        <option value="paleo">Paleo</option>
        <option value="primal">Primal</option>
        <option value="whole30">Whole30</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridText">
      <Form.Label>How many recipes for you?</Form.Label>
      <Form.Control value={number} onChange={e => setNumber(e.target.value)} type="text" placeholder="e.g 3- (up to 100)" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Intolerances</Form.Label>
      <Form.Control value={intolerances} onChange={e => setIntolerances(e.target.value)} as="select">
        <option value="">None</option>
        <option value="dairy">Dairy</option>
        <option value="egg">Egg</option>
        <option value="gluten">Gluten</option>
        <option value="grain">Grain</option>
        <option value="peanut">Peanut</option>
        <option value="seafood">Seafood</option>
        <option value="sesame">Sesame</option>
        <option value="shellfish">Shellfish</option>
        <option value="soy">Soy</option>
        <option value="sulfite">Sulfite</option>
        <option value="tree nut">Tree aNut</option>
        <option value="wheat">Wheat</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>
  <Button onClick={handleSubmit}>
    Submit
  </Button>
</Form>

      );
    }


export default SearchRecipe