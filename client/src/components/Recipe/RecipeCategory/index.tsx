import { reduxStoreState } from "modules";
import { categoryState, getCategories } from "modules/category";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./styles.scss";

const RecipeCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state: reduxStoreState) => state.category.category
  );
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const activeStyle = {
    color: "rgb(91, 78, 246)",
    fontSize: "16px",
    FontWeight: "700",
  };
  return (
    <div id="RecipeCategory">
      <div className="inner-category">
        <ul>
          <li>
            <NavLink activeStyle={activeStyle} exact to={`/recipe`}>
              All
            </NavLink>
          </li>
          {categories &&
            categories.map((category: categoryState, index) => (
              <li key={index}>
                <NavLink
                  activeStyle={activeStyle}
                  exact
                  to={`/recipe/${category.name}`}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
        </ul>

        <div className="recipe-manage">
          <Link to={"/recipe/manage/category"}>레시피 관리</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCategory;
