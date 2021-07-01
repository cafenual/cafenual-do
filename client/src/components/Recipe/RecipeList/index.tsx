import React from "react";
import "./styles.scss";
import coffee from "static/coffee.jpg";
import latte from "static/latte.jpg";
import milk from "static/milk.jpg";
import { Link } from "react-router-dom";

const RecipeList = () => {
  return (
    <div id="RecipeList">
      <ul>
        <li>
          <Link to="/recipe/1" className="img-link">
            <img src={coffee} alt="" />
          </Link>
          <Link to="" className="menu-name">
            <span>아메리카노</span>
          </Link>
        </li>

        <li>
          <a href="" className="img-link">
            <img src={latte} alt="" />
          </a>
          <a href="" className="menu-name">
            <span>카페라떼</span>
          </a>
        </li>

        <li>
          <a href="" className="img-link">
            <img src={milk} alt="" />
          </a>
          <a href="" className="menu-name">
            <span>밀크티</span>
          </a>
        </li>
        <li>
          <a href="" className="img-link">
            <img src={coffee} alt="" />
          </a>
          <a href="" className="menu-name">
            <span>아메리카노</span>
          </a>
        </li>

        <li>
          <a href="" className="img-link">
            <img src={latte} alt="" />
          </a>
          <a href="" className="menu-name">
            <span>카페라떼</span>
          </a>
        </li>

        <li>
          <a href="" className="img-link">
            <img src={milk} alt="" />
          </a>
          <a href="" className="menu-name">
            <span>밀크티</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RecipeList;
