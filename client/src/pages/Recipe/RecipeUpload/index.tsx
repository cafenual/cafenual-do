import axios from "axios";
import RecipeForm from "components/Recipe/RecipeForm";
import { reduxStoreState } from "modules";
import React from "react";
import { useSelector } from "react-redux";

const RecipeUpload = () => {
  const menu = useSelector((state: reduxStoreState) => state.menu);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, description, categoryId, recipe, image } = menu;
    let body = {
      name,
      description,
      categoryId,
      recipe,
      image,
    };

    try {
      const response = await axios.post("/api/v1/recipe/menu/create", body);
      if (response.data.success) {
        window.location.replace("/recipe");
      }
    } catch (e) {
      alert("매뉴 등록에 실패하였습니다.");
    }
  };
  return (
    <>
      <RecipeForm onSubmit={onSubmit} />
    </>
  );
};

export default RecipeUpload;
