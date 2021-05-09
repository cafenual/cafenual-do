import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import "./styles.css";

const MenuCategory = [
  { value: "coffee", label: "coffee" },
  { value: "latte", label: "latte" },
  { value: "juice", label: "juice" },
  { value: "tea", label: "tea" },
];

interface PathParamsProps {
  history: RouteComponentProps["history"];
  location: RouteComponentProps["location"];
  match: any;
}

const MenuModify = (props: PathParamsProps) => {
  const { history, location, match } = props;
  const menuId = match.params.id;
  console.log(menuId);
  const [menu, setMenu] = useState({
    menuName: "",
    menuRecipe: "",
    menuCategory: "coffee",
  });

  const { menuName, menuRecipe, menuCategory } = menu;
  useEffect(() => {
    let body = {
      menuId,
    };

    axios
      .post("/api/menus/getMenuDetail", body)
      .then((response: AxiosResponse) => {
        console.log(response.data);
        const nextForm = {
          ...menu,
          menuName: response.data.menu.menuName,
          menuRecipe: response.data.menu.menuRecipe,
          menuCategory: response.data.menu.menuCategory,
        };
        setMenu(nextForm);
      });
  }, []);

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const nextForm = {
      ...menu,
      [e.target.name]: e.target.value,
    };
    setMenu(nextForm);
  };

  const onMenuModify = (e: any) => {
    e.preventDefault();

    let body = {
      menuId,
      menuName,
      menuRecipe,
      menuCategory,
    };

    axios
      .post("/api/menus/menuModify", body)
      .then((response: AxiosResponse) => {
        console.log(response);
      });
  };

  const onMenuDelete = (e: any) => {
    e.preventDefault();

    let body = {
      menuId,
    };
    axios
      .post("/api/menus/menuDelete", body)
      .then((response: AxiosResponse) => {
        console.log("삭제됐음 : " + response.data);
        if (response.data.success) {
          history.push("/menu/list");
        }
      });
  };
  return (
    <div>
      <form action="">
        <input
          name="menuName"
          value={menuName}
          type="text"
          placeholder="메뉴이름"
          onChange={onChange}
        />
        <input
          name="menuRecipe"
          value={menuRecipe}
          type="text"
          placeholder="레시피"
          onChange={onChange}
        />
        <select name="menuCategory" value={menuCategory} onChange={onChange}>
          {MenuCategory.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <button type="button" onClick={onMenuModify}>
          등록하기
        </button>
        <button type="button" onClick={onMenuDelete}>
          삭제하기
        </button>
      </form>
    </div>
  );
};

export default MenuModify;
