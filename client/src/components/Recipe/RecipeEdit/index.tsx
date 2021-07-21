import RecipeForm from "components/Recipe/RecipeForm";
import useEditRecipeEffect from "hooks/recipe/useEditRecipeEffect";
import useHandleRecipe from "hooks/recipe/useHandleRecipe";
import { reduxStoreState } from "modules";
import React from "react";
import { useSelector } from "react-redux";

const RecipeEdit = () => {
  const menu = useSelector((state: reduxStoreState) => state.menu);

  useEditRecipeEffect();
  const { onEdit } = useHandleRecipe();

  return <>{menu.image && <RecipeForm onSubmit={onEdit} />}</>;
};

export default RecipeEdit;
