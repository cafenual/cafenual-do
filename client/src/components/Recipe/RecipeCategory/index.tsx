import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.scss";

const RecipeCategory = () => {
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
            <NavLink activeStyle={activeStyle} to={`/recipe`}>
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="">Coffee</NavLink>
          </li>
          <li>
            <NavLink to="">Juice</NavLink>
          </li>
          <li>
            <NavLink to="">Latte</NavLink>
          </li>
        </ul>

        <div className="recipe-manage">
          <Link to={"/recipe/manage/category"}>레시피 관리</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCategory;
