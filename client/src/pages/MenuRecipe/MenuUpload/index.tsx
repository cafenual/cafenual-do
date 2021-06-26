import axios from "axios";
import React, { useState } from "react";

const MenuCategory = [
  { value: "coffee", label: "coffee" },
  { value: "latte", label: "latte" },
  { value: "juice", label: "juice" },
  { value: "tea", label: "tea" },
];

const MenuUpload = () => {
  const [menu, setMenu] = useState({
    menuName: "",
    menuRecipe: "",
    menuCategory: "coffee",
  });

  // const [test, setTest] = useState([]);

  const { menuName, menuRecipe, menuCategory } = menu;

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const nextForm = {
      ...menu,
      [e.target.name]: e.target.value,
    };
    setMenu(nextForm);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let body = {
      menuName,
      menuRecipe,
      menuCategory,
    };

    axios.post("/api/menus/upload", body).then((response: any) => {
      console.log(response);
    });
  };

  // useEffect(() => { //디비 불러오기 연습용
  //   axios.post("/api/menus/getMenu").then((response: any) => {
  //     console.log(response.data.menu);
  //     setTest(response.data.menu)
  //   });
  // }, []);

  return (
    <div>
      {/* <div>   시험용
        <span>여기에 나타나게하자: </span>
        <ul>{test.map((tes: any, index)=> (
          <li key={index}>{tes.menuName}{tes.menuCategory}</li>
        ))}</ul>
      </div> */}
      <form action="" onSubmit={onSubmit}>
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
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
};

export default MenuUpload;
