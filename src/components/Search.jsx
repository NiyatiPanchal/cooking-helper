import { useState } from 'react';
import SearchBar from './SearchBar';
import Card from './Card';
// import {FaRegHeart} from 'react-icons/fa'
import axios from 'axios';

function Search() {

    const [recipeName, setRecipeName] = useState("");
    const [result,setResult]=useState([]);
const api_ID='cdb2a86f';
 const api_KEY='18c123593182cf4fbc5230aa15e2c375'	;
 var url=`https://api.edamam.com/search?q=${recipeName}&app_id=${api_ID}&app_key=${api_KEY}`;  

// useEffect(() => {
  
//     return () => {
//       
//     };
// }, [F1name,f2name]);
 async function getRecipes(){

   var res=  await axios.get(url)   ;

   
   setResult(res.data.hits);
   
}
function sunbm(e){
    e.preventDefault();
    getRecipes();   

}
    return (
        <div>
            <SearchBar submits={(e)=>sunbm(e)}  meth={(e)=>setRecipeName(e.target.value)} name={recipeName}/>
            {console.log(recipeName)}
            {console.log(result)}
            <section className="search-section-container">

                <article className="filter-section">
                    <h2>Filter Food Items</h2>
                    <h3>Diet Options:</h3>
                    <select id="dietInput">
                        <option value="none"></option>
                        <option value="balanced">balanced</option>
                        <option value="high-protein">high-protein</option>
                        <option value="low-fat">low-fat</option>
                        <option value="low-carb">low-carb</option>
                    </select>
                    <h3>Health Options:</h3>
                    <select id="healthInput">
                        <option value="none"></option>
                        <option value="sugar-conscious">sugar-conscious</option>
                        <option value="peanut-free">peanut-free</option>
                        <option value="tree-nut-free">tree-nut-free</option>
                        <option value="alcohol-free">alcohol-free</option>
                        <option value="vegan">vegan</option>
                        <option value="vegetarian">vegetarian</option>
                    </select>
                </article>
                
                <article className="cards-section">
                    {result.map((recipes)=>{

                        return ( 
                        <Card link={recipes.recipe.url} info={recipes.recipe.mealType} title={recipes.recipe.label} img={recipes.recipe.image}/>);
                        
                    })}
                  
                    
                </article>
                
            </section>
        </div>
        
    )
}

export default Search;
