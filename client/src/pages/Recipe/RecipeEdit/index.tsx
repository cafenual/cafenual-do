import axios from "axios";
import RecipeForm from "components/Recipe/RecipeForm";
import { getMenuDetail } from "lib/api/menu";
import { reduxStoreState } from "modules";
import { EditMenu } from "modules/menu";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

interface matchProps {
  menuId: string;
}

const RecipeEdit = () => {
  const match = useRouteMatch<matchProps>();
  const menuId = match.params.menuId;
  const dispatch = useDispatch();
  const menu = useSelector((state: reduxStoreState) => state.menu);

  useEffect(() => {
    const getData = async () => {
      const menu = await getMenuDetail(menuId);
      const { name, description, categoryId, recipe, image } = menu;
      const body = {
        name,
        description,
        categoryId,
        recipe,
        image,
      };
      dispatch(EditMenu(body));
    };

    getData();
  }, [menuId, dispatch]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, description, categoryId, recipe, image, _id } = menu;
    let body = {
      name,
      description,
      categoryId,
      recipe,
      image,
      menuId: _id,
    };

    try {
      const response = await axios.patch("/api/v1/recipe/menu/update", body);
      if (response.data.success) {
        window.location.replace("/recipe");
      }
    } catch (e) {
      alert("매뉴 등록에 실패하였습니다.");
    }
  };

  return <>{menu.image && <RecipeForm onSubmit={onSubmit} />}</>;
};

export default RecipeEdit;
