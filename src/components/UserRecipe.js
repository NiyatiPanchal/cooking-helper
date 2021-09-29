import React from "react";
import { useState } from "react";
import "../css/UserRecipe.css";
import Footer from "./Footer";
import Header from "./Header";

const UserRecipe = () => {
  const ingredientArray = { ingredient: "" };
  const stepArray = { step: "" };
  const [ingredient, setIngredient] = useState([ingredientArray]);
  const [ingredientCount, setIngredientCount] = useState(1);
  const [error, setError] = useState(false);
  const [step, setStep] = useState([stepArray]);
  const [stepCount, setStepCount] = useState(1);
  const [recipeImage, setRecipeImage] = useState("");

  const imageHandler = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setRecipeImage(selected);
      };
      reader.readAsDataURL(selected);
    }
  };

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

  return (

    <div className="form-container">
<Header/>
      <form action="">
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
            type="file"
            alt=""
            accept="image/*"
            id="input-image"
            onChange={imageHandler}
            // onChange={(e) => console.log(e.target.files)}
          />
        </div>

        <div className="container">
          <input
            type="text"
            name=""
            id="recipe-title"
            placeholder="Add Your Recipe Title"
            className="about-recipe"
          />
          <div>
            <textarea
              name=""
              cols="45"
              rows="10"
              placeholder="Tell us about your recipe - who inspired it, why it's special, what makes it unique, who you cooked it for."
              id="recipe-info"
              className="about-recipe"
            />
          </div>
          <div>
            <input
              type="text"
              name=""
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
              type="number"
              name=""
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
              type="text"
              name=""
              id="cooktime"
              placeholder="1 hr 30 min"
              className="about-recipe info"
            />
          </div>
        </div>
        <div className="container">
          <h1 className="heading">Ingredients</h1>
          <div>
            {ingredient.map((index) => (
              <div key={index} className="ingredient-div">
                <label htmlFor="ingredient" className="bars">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKUMOf_vEXhQJuTzyq-JekZL4eWoWrnYO8Q&usqp=CAU"
                    className="label-img"
                  />
                </label>
                <input
                  type="text"
                  name="ingredient"
                  id="ingredient"
                  placeholder="2cup flour"
                  className="ingredient-steps"
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
          {step.map((index) => (
            <div key={index} className="ingredient-div">
              <label htmlFor="steps" className="bars">
                <img
                  src="https://img-premium.flaticon.com/png/128/2958/premium/2958791.png?token=exp=1632906074~hmac=475c9534fa580a24b0f0df69df1196e4"
                  className="label-img"
                />
              </label>
              <textarea
                name=""
                id="steps"
                cols="30"
                rows="5"
                className="ingredient-steps"
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
        <button className="publish-btn" type="submit" >PUBLISH</button>
      </form>
    </div>
  );
};
export default UserRecipe;
