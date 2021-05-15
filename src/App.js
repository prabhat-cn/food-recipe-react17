import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  // 3rd then pass by this
  const [recipes, setRecipes] = useState([]);
  // 1st search
  const[search, setSearch] = useState("");
  const[query, setQuery] = useState('chicken')

  // taken from "https://developer.edamam.com/admin/applications"
  const APP_ID = "27670e6e" ;
  const APP_KEY = "9658cefb0e4ea344a3d11bbd876b18a8";
  const exampleReq = `${process.env.REACT_APP_API}/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

// const [counter, setCounter] = useState(0);

  // useEffect(() => {
    
  //   console.log('Effect-> has been run');
  // }, [counter]);
  
  // 2nd then load and search operates under here
  useEffect(() => {
    getRecipes();
  }, [query]);

  // 1st data coming
  const getRecipes = async () =>{
    const response = await fetch(exampleReq);
    const data = await response.json();
    // console.log('data->', data.hits);
    // console.log('data->', data);

    setRecipes(data.hits);
  }

  // 2nd search
  const updateSearch = (evt) => {
    setSearch(evt.target.value);
    // console.log('search->', search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    // to reset after search button click
    setSearch('');
    
  };


  return (
   <div className="App">
     <form onSubmit={getSearch} className="search-form">
       <input 
       className="search-bar" 
       type="text"
        value={search} 
        onChange={updateSearch} />

       <button className="search-button" type="submit"
        >
          Search
        </button>
     </form>
     {/* <h2 onClick={() => setCounter(counter + 1)}> {counter} </h2> */}
    <div className="recipes">
      {/* pass here */}
      {recipes.map((recipeData) =>(
        <Recipe 
        key={recipeData.recipe.totalWeight}
        title={recipeData.recipe.label} 
        calories={recipeData.recipe.calories}
        image={recipeData.recipe.image}
        totalWeight={recipeData.recipe.totalWeight}
        ingredients={recipeData.recipe.ingredients}
        />

      ))}
     </div>
   </div>
  );
}

export default App;
