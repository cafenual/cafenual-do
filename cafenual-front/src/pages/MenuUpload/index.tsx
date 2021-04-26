import axios from "axios";
import React, { useEffect, useState } from "react";

const MenuUpload = () => {
  const [menu, setMenu] = useState({
    menuName: "",
    menuRecipe: "",
    menuCategory: "",
  });

  // const [test, setTest] = useState([]);

  const { menuName, menuRecipe, menuCategory } = menu;

  const onChange = (e: any) => {
    const nextForm = {
      ...menu,
      [e.target.name]: e.target.value,
    };
    setMenu(nextForm);
  };

  const onSubmit = (e: any) => {
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
        <input
          name="menuCategory"
          value={menuCategory}
          type="text"
          placeholder="카테고리"
          onChange={onChange}
        />
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
};

export default MenuUpload;
