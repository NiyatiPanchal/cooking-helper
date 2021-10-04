import React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import Card from './Card';
import Footer from "./Footer";
import Header from "./Header";
// import {FaRegHeart} from 'react-icons/fa'
import axios from 'axios';

function Search() {

    const [recipeName, setRecipeName] = useState("");
    const [result,setResult]=useState([]);
    const [dietF1,setDietF1] = useState(null);
    const [healthF2,setHealthF2] = useState(null);
    const api_ID='cdb2a86f';
    const api_KEY='18c123593182cf4fbc5230aa15e2c375';  
    var url;
    
    async function getRecipes(url){
        var res=  await axios.get(url);
        setResult(res.data.hits);
    }
    function sunbm(e){
        e.preventDefault();
        // var diet = $("#dietInput").val();
        // var health = $("#healthInput").val();
        const diet = dietF1;
        const health = healthF2;
        const filter1 = "&diet=";
        const filter2 = "&health=";
        const filter3 = "mealType"
        url =`https://api.edamam.com/search?q=${recipeName}&app_id=${api_ID}&app_key=${api_KEY}`;
        
        if (diet !== null) {
            url += filter1 + diet;
        }
        if (health !== null) {
            url += filter2 + health;
        }
        getRecipes(url);   
    }
    return (
        <div>
        <Header/>
        <img style={{display:'block',width:'30%',margin:'10px auto', height:'100px' ,objectFit:'contain'}}
            src="images/logo.png"
            alt="logo"
          />
            <SearchBar submits={(e)=>sunbm(e)}  meth={(e)=>setRecipeName(e.target.value)} name={recipeName}/>
          
            <section className="search-section-container">

                <article className="filter-section">
                    <h2>Filter Food Items</h2>
                    <h3>Diet Options:</h3>
                    <select id="dietInput" onChange={(e)=>setDietF1(e.target.value)}>
                        <option value="none"></option>
                        <option value="balanced">balanced</option>
                        <option value="high-protein">high-protein</option>
                        <option value="low-fat">low-fat</option>
                        <option value="low-carb">low-carb</option>
                    </select>
                    <h3>Health Options:</h3>
                    <select id="healthInput" onChange={(e)=>setHealthF2(e.target.value)}>
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
                    {result.map((recipes,index)=>{
                        return ( 
                        <Card key={index} id={index} link={recipes.recipe.url} info={recipes.recipe.mealType} title={recipes.recipe.label} img={recipes.recipe.image}/>);
                    })}
                </article>
                
            </section>
            <Footer/>
        </div>
        
    )
    
}

export default Search;
