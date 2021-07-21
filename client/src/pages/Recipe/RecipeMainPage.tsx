import RecipeCategory from "components/Recipe/RecipeCategory";
import RecipeList from "components/Recipe/RecipeList";
import React from "react";

const RecipeListPage = () => {
  return (
    <div id="Recipe" className="side-layout">
      <RecipeCategory />
      <RecipeList />
    </div>
  );
};

export default RecipeListPage;
