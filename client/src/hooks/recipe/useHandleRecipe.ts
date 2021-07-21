import { createMenu, updateMenu } from "lib/api/menu";
import { reduxStoreState } from "modules";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

interface matchProps {
  menuId: string;
}

export default function useHandleRecipe() {
  const menu = useSelector((state: reduxStoreState) => state.menu);
  const { name, description, categoryId, recipe, image } = menu;
  const match = useRouteMatch<matchProps>();
  const menuId = match.params.menuId;

  const onUpload = async () => {
    try {
      await createMenu(name, description, categoryId, recipe, image);
      window.location.replace("/recipe");
    } catch (e) {
      alert("매뉴 등록에 실패하였습니다.");
    }
  };

  const onEdit = async () => {
    try {
      await updateMenu(name, description, categoryId, recipe, image, menuId);
      window.location.replace("/recipe");
    } catch (e) {
      alert("매뉴 등록에 실패하였습니다.");
    }
  };

  return {
    onUpload,
    onEdit,
  };
}
