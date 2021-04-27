import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const categories = [
  {
    name: "",
    text: "전체보기",
  },
  {
    name: "coffee",
    text: "커피",
  },
  {
    name: "latte",
    text: "라떼",
  },
  {
    name: "juice",
    text: "쥬스",
  },
  {
    name: "tea",
    text: "티",
  },
];

const MenuCategory = () => {
  const activeStyle = {
    color: "#444263",
    fontSize: "16px",
  };

  return (
    <div id="Menu-category">
      <ul className="nav-list">
        {categories.map((category, index) => (
          <li key={index}>
            <NavLink
              activeStyle={activeStyle}
              exact
              to={`/menu/list/${category.name}`}
            >
              {category.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuCategory;
