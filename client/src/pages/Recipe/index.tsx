import RecipeCategory from "components/Recipe/RecipeCategory";
import RecipeList from "components/Recipe/RecipeList";
import React from "react";
import "./styles.scss";

const Recipe = () => {
  return (
    <>
      <div id="Recipe" className="side-layout ">
        <RecipeCategory />
        <RecipeList />
      </div>
    </>
  );
};

export default Recipe;
