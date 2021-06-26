import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

// 이 메뉴에 해당하는 값을 또 가져와야 하는군.

interface MenuDetailProps {
  match: any;
}

const MenuDetail: React.FunctionComponent<MenuDetailProps> = ({ match }) => {
  const menuId = match.params.id;
  console.log(menuId);
  const [menuName, setMenuName] = useState("");

  useEffect(() => {
    axios
      .post("/api/menus/getMenuDetail", { menuId })
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setMenuName(response.data.menu.menuName);
      });
  }, []);
  return (
    <div>
      {menuName}
      <a href={`/menu/modify/${menuId}`}>메뉴 정보수정</a>
    </div>
  );
};

export default MenuDetail;
