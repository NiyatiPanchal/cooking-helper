import React from "react";
import { useState } from "react";
import axios from 'axios'
import "../css/UserRecipe.css";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const UserRecipe = () => {
  const ingredientArray = {  };
  const stepArray = { step: "" };
  const [file,setFile]=useState(null);
  const [ingredient, setIngredient] = useState([ingredientArray]);
  const [ingredientCount, setIngredientCount] = useState(1);
  const [error, setError] = useState(false);
 
  const [formdata,setData]=useState({
 
    'recipetitle':"",
    'recipecontent':"",
    'recipeorigin':"",
    'serves':"",
    'cooktime':""

  });

  const [step, setStep] = useState([stepArray]);
  const [stepCount, setStepCount] = useState(1);
  const [recipeImage, setRecipeImage] = useState("");
  // const [ingrid,setIngrid]=useState([]);
  const ingrid =[];
  const steps=[];
  // const imageHandler = (e) => {
  //   const selected = e.target.files[0];
  //   if (selected) {
  //     let reader = new FileReader();
  //     reader.onloadend = () => {
  //       setRecipeImage(selected);
  //     };
  //     reader.readAsDataURL(selected);
  //   }
  // };

  const addIngredient = () => {
    if (ingredientCount < 5) {
      setIngredient([...ingredient, ingredientArray]);
      setIngredientCount(ingredientCount + 1);
    } else {
      setError(true);
    }
  };

  const removeIngredient = (index) => {
    const removeItem = [...ingredient];
    removeItem.splice(index, 1);
    setIngredient(removeItem);
    setIngredientCount(ingredientCount - 1);
    setError(false);
  };

  const addStep = () => {
    setError(false);
    if (stepCount < 5) {
      setStep([...step, stepArray]);
      setStepCount(stepCount + 1);
    } else {
      setError(true);
    }
  };

  const removeStep = (index) => {
    const removeItem = [...step];
    removeItem.splice(index, 1);
    setStep(removeItem);
    setStepCount(stepCount - 1);
    setError(false);
  };


const formdatahandler  = (e)=>{
  const {name,value} = e.target;

  setData(prev=>{
      return {
          ...prev,
          [name]:value
      }
  });
}
const filechangehandle = (e) =>{
  console.log(e.target.files[0]);
  setFile(e.target.files[0]);
}

 const handleSubmit = (e)=>{
  
     
   for(var i=0;i<ingredientCount;i++){
     
     const aao=document.getElementsByClassName(i);
    
     if(aao[0].value.length>0){console.log(aao[0].value);
      
      ingrid.push(aao[0].value);
    

    }
     
   }
   for(var i=0;i<stepCount;i++){
     
    const temp=`${i}s`;
    const aas=document.getElementsByClassName(temp);
   
    if(aas[0].value.length>0){console.log(aas[0].value);
     
     steps.push(aas[0].value);
   

   }
    
  }
  //  console.log('ss',ingrid);
    
         function fetchs() {
           const data=new FormData();
           data.append('recipetitle',formdata.recipetitle);
           data.append('recipecontent',formdata.recipecontent);
           data.append('recipeorigin',formdata.recipeorigin);
           data.append('serves',formdata.serves);
           data.append('cooktime',formdata.cooktime);
           for(var i=0;i<ingrid.length;i++) {
            data.append(`ings`,ingrid[i]);
           }
           for(var i=0;i<steps.length;i++) {
            data.append('steps',steps[i]);
           }
          
           data.append('imager',file);

          //  const fulldata={
          //   forms: formdata,
          //   ings: ingrid,
            
          //   steps:steps,
          //   imager:file
             
          //  }
         axios.post("http://localhost:3001/recipeData",data);
      console.log('SUCCESSFULLY SUBMITTED');
        }
   
   fetchs();
 }
  return (

    <div className="form-container">
<Header/>
      <form  enctype="multipart/form-data" action="/recipeData" method="post" onSubmit={handleSubmit} >
        <div
          style={{
            background: { recipeImage }
              ? `url("${recipeImage}") no-repeat center/cover`
              : "#FFFFFF",
          }}
        >
          <label htmlFor="input-image">
            <img src="https://img.icons8.com/bubbles/2x/camera.png" alt="" />
          </label>
          <input
           onChange={filechangehandle}
            type="file"
            alt="..."
            accept="image/*"
            name="imager"
     
            // id="input-image"
           
            // onChange={(e) => console.log(e.target.files)}
          />
        </div>

        <div className="container">
          <input
          onChange={formdatahandler}
            type="text"
            name="recipetitle"
            id="recipe-title"
            placeholder="Add Your Recipe Title"
            className="about-recipe"
          />
          <div>
            <textarea
            onChange={formdatahandler}
              name="recipecontent"
              cols="45"
              rows="10"
              placeholder="Tell us about your recipe - who inspired it, why it's special, what makes it unique, who you cooked it for."
              id="recipe-info"
              className="about-recipe"
            />
          </div>
          <div>
            <input
            onChange={formdatahandler}
              type="text"
              name="recipeorigin"
              id="recipe-origin"
              placeholder="Add Recipe Origin"
              className="about-recipe"
            />
          </div>
          <div className="div">
            <label htmlFor="serves" className="label-info">
              Serves
            </label>
            <input
            onChange={formdatahandler}
              type="number"
              name="serves"
              id="serves"
              placeholder="2 people"
              className="about-recipe info"
            />
          </div>
          <div className="div">
            <label htmlFor="cooktime" className="label-info">
              Cook Time
            </label>
            <input
            onChange={formdatahandler}
              type="text"
              name="cooktime"
              id="cooktime"
              placeholder="1 hr 30 min"
              className="about-recipe info"
            />
          </div>
        </div>
        <div className="container">
          <h1 className="heading">Ingredients</h1>
          <div>
            {ingredient.map((_,index) => (
              <div key={index} className="ingredient-div">
                <label htmlFor="ingredient" className="bars">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKUMOf_vEXhQJuTzyq-JekZL4eWoWrnYO8Q&usqp=CAU"
                    className="label-img"
                  />
                </label>
                <input
               
              className={`ingredient-steps ${index}`}
                  type="text"
                  name={index}
                  id="ingredient"
                  placeholder="2cup flour"
                  
                 
                />
                <button
                  className="remove-button"
                  onClick={() => removeIngredient(index)}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"
                    alt=""
                    className="label-img"
                  />
                </button>
              </div>
            ))}
            {error ? (
              <p className="para">You can only add 5 ingredients</p>
            ) : (
              <button
                type="button"
                onClick={addIngredient}
                className="add-button"
                id="btn"
              >
                <img
                  src="https://assets.dryicons.com/uploads/icon/preview/9921/small_1x_be477657-9276-422b-a2b0-0c67d539e23b.png"
                  alt=""
                  className="plus"
                />
                ingredient
              </button>
            )}
          </div>
        </div>

        <div className="container">
          <h1 className="heading">Steps</h1>
          {step.map((_,index) => (
            <div key={index} className="ingredient-div">
             
              <textarea
                name={index+"s"}

                id="steps"
                cols="30"
                rows="5"
                className={`ingredient-steps  ${index}s`}
                // className= {index+"s"}
              ></textarea>
              <button
                onClick={() => removeStep(index)}
                className="remove-button"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"
                  alt=""
                  className="label-img"
                />
              </button>
            </div>
          ))}
          {error ? (
            <p className="para">You can only add 5 Steps</p>
          ) : (
            <button type="button" onClick={addStep} className="add-button">
              <img
                src="https://assets.dryicons.com/uploads/icon/preview/9921/small_1x_be477657-9276-422b-a2b0-0c67d539e23b.png"
                alt=""
                className="plus"
              />
              step
            </button>
          )}
        </div>
    <button className="publish-btn" type="submit" ><Link to="/users">PUBLISH</Link></button>
      </form>
    </div>
  );
};
export default UserRecipe;
