import ManageNav from "components/Recipe/ManageNav";
import RecipeForm from "components/Recipe/RecipeForm";
import { createMenu } from "lib/api/menu";
import { reduxStoreState } from "modules";
import React from "react";
import { useSelector } from "react-redux";

const RecipeUpload = () => {
  const menu = useSelector((state: reduxStoreState) => state.menu);
  const onSubmit = async () => {
    const { name, description, categoryId, recipe, image } = menu;

    try {
      await createMenu(name, description, categoryId, recipe, image);
      window.location.replace("/recipe");
    } catch (e) {
      alert("매뉴 등록에 실패하였습니다.");
    }
  };
  return (
    <>
      <ManageNav />
      <RecipeForm onSubmit={onSubmit} />
    </>
  );
};

export default RecipeUpload;
