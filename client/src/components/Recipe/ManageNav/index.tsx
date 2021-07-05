import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import { AiFillFolderOpen } from "react-icons/ai";
import { SiCmake } from "react-icons/si";

const ManageNav = () => {
  const activeStyle = {
    backgroundColor: "#fff",
    marginLeft: "15px",
    boxShadow: "0px 7px 6px rgba(0, 0, 0, 0.08)",
  };

  return (
    <>
      <div id="ManageNav">
        <div className="nav-tit">Setting</div>
        <div className="nav-tit-des">레시피 관리</div>

        <div className="nav-menu">
          <ul>
            <li>
              <NavLink activeStyle={activeStyle} to={`/recipe/manage/category`}>
                <div className="menu-tit">
                  <AiFillFolderOpen size="20" />
                  <span>Category</span>
                </div>
                <span className="menu-des">카테고리 관리(등록,수정,삭제)</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={activeStyle} to={`/recipe/manage/recipe`}>
                <div className="menu-tit">
                  <SiCmake size="20" />
                  <span>Recipe</span>
                </div>
                <span className="menu-des">레시피 관리(등록,수정,삭제)</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ManageNav;
