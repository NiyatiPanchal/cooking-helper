import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import Cards from "./Cards";
import { data } from "./data";

const List = ({ name }) => {
  const [recipe, setRecipe] = useState(data);
  const [recipeIndex, setRecipeIndex] = useState(0);

  let firstFourRecipe = recipe.slice(recipeIndex, recipeIndex + 4);

  let firstTwoRecipe = recipe.slice(recipeIndex, recipeIndex + 2);

  const nextFourRecipe = () => {
    const lastRecipeIndex = recipe.length - 1;
    const resetRecipeIndex = recipeIndex + 3 === lastRecipeIndex;
    const index = resetRecipeIndex ? 0 : recipeIndex + 4;
    setRecipeIndex(index);
  };
  const prevFourRecipe = () => {
    const lastRecipeIndex = recipe.length - 4;
    const resetRecipeIndex = recipeIndex === 0;
    const index = resetRecipeIndex ? lastRecipeIndex : recipeIndex - 4;
    setRecipeIndex(index);
  };
  const nextTwoRecipe = () => {
    const lastRecipeIndex = recipe.length - 1;
    const resetRecipeIndex = recipeIndex + 1 === lastRecipeIndex;
    const index = resetRecipeIndex ? 0 : recipeIndex + 2;
    setRecipeIndex(index);
  };
  const prevTwoRecipe = () => {
    const lastRecipeIndex = recipe.length - 2;
    const resetRecipeIndex = recipeIndex === 0;
    const index = resetRecipeIndex ? lastRecipeIndex : recipeIndex - 2;
    setRecipeIndex(index);
  };
  const nextRecipe = () => {
    const lastRecipeIndex = recipe.length - 1;
    const resetRecipeIndex = recipeIndex === lastRecipeIndex;
    const index = resetRecipeIndex ? 0 : recipeIndex + 1;
    setRecipeIndex(index);
  };
  const prevRecipe = () => {
    const lastRecipeIndex = recipe.length - 1;
    const resetRecipeIndex = recipeIndex === 0;
    const index = resetRecipeIndex ? lastRecipeIndex : recipeIndex - 1;
    setRecipeIndex(index);
  };

  return (
    <div className="section-div">
      <h1>{name}</h1>
      <section className="list" id="bigScreen">
        {firstFourRecipe.map((recipe) => {
          const { id, image, name } = recipe;
          return <Cards key={id} image={image} name={name} />;
        })}

        <button className="prev" onClick={prevFourRecipe}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextFourRecipe}>
          <FiChevronRight />
        </button>
      </section>

      <section className="list" id="tablet">
        {firstTwoRecipe.map((recipe) => {
          const { id, image, name } = recipe;
          return <Cards key={id} image={image} name={name} />;
        })}

        <button className="prev" onClick={prevTwoRecipe}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextTwoRecipe}>
          <FiChevronRight />
        </button>
      </section>
      <section className="list" id="mobile">
        {recipe.map((recipe) => {
          const { id, image, name } = recipe;
          return <Cards key={id} image={image} name={name} />;
        })}

        <button className="prev" onClick={prevRecipe}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextRecipe}>
          <FiChevronRight />
        </button>
      </section>
      <button className="btn explore">Explore</button>
    </div>
  );
};

export default List;
