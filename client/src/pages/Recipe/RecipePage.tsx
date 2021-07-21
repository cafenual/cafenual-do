import React from "react";
import { Route } from "react-router-dom";
import CategoryManagePage from "./CategoryManagePage";
import RecipeDetailPage from "./RecipeDetailPage";
import RecipeEditPage from "./RecipeEditPage";
import RecipeMainPage from "./RecipeMainPage";
import RecipeUploadPage from "./RecipeUploadPage";

const RecipePage = () => {
  return (
    <>
      <Route path="/recipe/:category?" exact component={RecipeMainPage} />
      <Route path="/recipe/menu/:menuId" exact component={RecipeDetailPage} />
      <Route path="/recipe/manage/upload" exact component={RecipeUploadPage} />
      <Route path="/recipe/edit/:menuId" exact component={RecipeEditPage} />
      <Route
        path="/recipe/manage/category"
        exact
        component={CategoryManagePage}
      />
    </>
  );
};

export default RecipePage;
