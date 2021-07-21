import { getMenuDetail } from "lib/api/menu";
import { EditMenu } from "modules/menu";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
interface matchProps {
  menuId: string;
}

export default function useEditRecipeEffect() {
  const match = useRouteMatch<matchProps>();
  const menuId = match.params.menuId;
  const dispatch = useDispatch();
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
}
