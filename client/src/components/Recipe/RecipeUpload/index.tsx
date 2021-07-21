import ManageNav from "components/Recipe/ManageNav";
import RecipeForm from "components/Recipe/RecipeForm";
import useHandleRecipe from "hooks/recipe/useHandleRecipe";
import React from "react";

const RecipeUpload = () => {
  const { onUpload } = useHandleRecipe();
  return (
    <>
      <ManageNav />
      <RecipeForm onSubmit={onUpload} />
    </>
  );
};

export default RecipeUpload;
