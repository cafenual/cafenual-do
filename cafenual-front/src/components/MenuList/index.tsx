import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

interface MenuListProps {
  category: string;
}

const MenuList: React.FunctionComponent<MenuListProps> = ({ category }) => {
  const [menus, setMenus] = useState([]);

 

  useEffect(() => {
    axios.post("/api/menus/getMenu").then((response: any) => {
      console.log(response.data.menu);
      setMenus(response.data.menu);
    });
  }, []);

  const MenuCategoryList = menus.filter(
    (menu: any) => menu.menuCategory === category
  );

  return (
    <div id="menus-list">
      <div className="menu-items">
        <div className="inner-items">
          <ul className="list">
            {category === "all"
              ? menus.map((menu: any, index) => (
                  <li key={index}>
                    <a href="">
                      <div className="menu-img"></div>
                      <div className="menu-name">{menu.menuName}</div>
                    </a>
                  </li>
                ))
              : MenuCategoryList.map((menu: any, index) => (
                  <li key={index}>
                    <a href="">
                      <div className="menu-img"></div>
                      <div className="menu-name">{menu.menuName}</div>
                    </a>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
