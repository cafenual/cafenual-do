import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import { AiFillFolderOpen } from "react-icons/ai";
import { SiCmake } from "react-icons/si";

const ManageNav = () => {
  return (
    <>
      <div id="ManageNav">
        <div className="nav-tit">Setting</div>
        <div className="nav-tit-des">레시피 관리</div>

        <div className="nav-menu">
          <ul>
            <li>
              <NavLink to={""}>
                <div className="menu-tit">
                  <AiFillFolderOpen size="20" />
                  <span>Category</span>
                </div>
                <span className="menu-des">카테고리 관리(등록,수정,삭제)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={""}>
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
