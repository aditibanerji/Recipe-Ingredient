
import React from 'react';
import { useState , useEffect } from 'react';
import Recipe from './components/Recipe';



function App() {

   const APP_ID='c47fd4e9';
   const APP_KEY= '3e52eda75fa8731683b941531c6ae7c6';

   const [search , setSearch] = useState('');
   const [query , setQuery] = useState(''); 
   const [ recipeData , setData] = useState([]);
   const [state  , setState] = useState(true);


   useEffect(()=>{

    getRecipe();
     

   },[query])

   const getRecipe =  async ()=>{

      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setData(data.hits);
   
   }

   const inputHandler=(e)=>{
     
      setSearch(e.target.value);
      
   }
    
   const formHandler=(e)=>{
      e.preventDefault();
      setQuery(search);
      setState(false);
   }



    return(
    
      <div className='App'> 
          <form className='recipe-form' >
            <input type="text" placeholder='Enter Keyword' className="search-bar" value={search} onChange={inputHandler}></input>
            <button type="submit" className='search-btn' onClick={formHandler}>Search</button>
          </form>
          
          <div> 
             {
               state ? (
                 
                  <>
                  <div className='heading-div'> 
                          <h1 className='heading'>Welcome to Recipe Finder</h1>

                  </div>
                        
                  </>
               ):('')
               
            
             }
             </div>
            
          
          <div className='main-container'> 

          {
            recipeData.map( (currElem )=>{

               return(

                
                  <Recipe 
                   key={currElem.recipe.label}
                   label={currElem.recipe.label}
                   calories={currElem.recipe.calories}
                   image={currElem.recipe.image}
                   ingredients={currElem.recipe.ingredients}
                  >
                  </Recipe>

               )
              
            }) 
          }
          </div>
      </div>
       
   
     );
   
  
 
}


export default App;
