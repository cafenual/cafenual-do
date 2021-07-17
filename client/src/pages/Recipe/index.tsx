import RecipeCategory from "components/Recipe/RecipeCategory";
import RecipeList from "components/Recipe/RecipeList";
import Aside from "components/Aside";
import Header from "components/Header";
import React from "react";
import "./styles.scss";

const Recipe = () => {
  return (
    <>
      <Header />
      <Aside />
      <div id="Recipe" className="side-layout ">
        <RecipeCategory />
        <RecipeList />
      </div>
    </>
  );
};

export default Recipe;
