import React from "react";
import "./styles.scss";
import coffee from "static/coffee.jpg";
import { Link, useRouteMatch, withRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterMenus, getMenus, menuState } from "modules/menu";
import { reduxStoreState } from "modules";

interface MatchParams {
  category: string;
}

const RecipeList = () => {
  const match = useRouteMatch<MatchParams>();
  const category = match.params.category;
  const dispatch = useDispatch();
  const menu = useSelector((state: reduxStoreState) => state.menu);
  useEffect(() => {
    if (!category) {
      dispatch(getMenus());
    } else {
      dispatch(filterMenus(category));
    }
  }, [dispatch, category]);

  return (
    <div id="RecipeList">
      <ul>
        {menu.menus?.map((menu: menuState, index) => (
          <li key={index}>
            <Link to={`/recipe/menu/${menu._id}`} className="img-link">
              <img src={coffee} alt="" />
            </Link>
            <Link to={`/recipe/menu/${menu._id}`} className="menu-name">
              <span>{menu.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(RecipeList);
