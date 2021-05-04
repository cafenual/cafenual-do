import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

interface MenuListProps {
  category: string;
}

interface MenuInfo {
  _id: string;
  menuName: string;
  menuRecipe: string;
  menuCategory: string;
}

const MenuList: React.FunctionComponent<MenuListProps> = ({ category }) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get("/api/menus/getMenu").then((response: AxiosResponse) => {
      console.log(response.data.menu);
      setMenus(response.data.menu);
    });
  }, []);

  const MenuCategoryList = menus.filter(
    (menu: MenuInfo) => menu.menuCategory === category
  );

  return (
    <div id="menus-list">
      <div className="menu-items">
        <div className="inner-items">
          <ul className="list">
            {category === "all"
              ? menus.map((menu: MenuInfo, index) => (
                  <li key={index}>
                    <a href={`/menu/detail/${menu._id}`}>
                      <div className="menu-img"></div>
                      <div className="menu-name">{menu.menuName}</div>
                    </a>
                  </li>
                ))
              : MenuCategoryList.map((menu: MenuInfo, index) => (
                  <li key={index}>
                    <a href={`/menu/detail/${menu._id}`}>
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
