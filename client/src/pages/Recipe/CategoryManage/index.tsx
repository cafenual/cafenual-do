import ManageNav from "components/Recipe/ManageNav";
import Aside from "layouts/Aside";
import Header from "layouts/Header";
import React, { useState } from "react";
import "./styles.scss";
import { MdEdit } from "react-icons/md";
import { HiMinusCircle } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { useEffect } from "react";
import { recipeCategory } from "types/data";

const CategoryManage = () => {
  const [categoryForm, setCategoryForm] = useState({
    addCategoryInput: "",
  });

  const [categories, setCategories] = useState([]);

  const { addCategoryInput } = categoryForm;

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nextForm = {
      ...categoryForm,
      [name]: value,
    };
    setCategoryForm(nextForm);
  };

  // 카테고리 추가
  const AddCategory = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    let body = {
      name: addCategoryInput,
    };
    try {
      const response = await axios.post("/api/v1/recipe/category/create", body);
      console.log(response);
      setCategories(response.data.currentCategory);
    } catch (e) {
      alert("카테고리 생성에 실패했습니다.");
    }
  };

  const editCategory = async (id: string) => {};

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/v1/recipe/category");
      console.log(response);
      setCategories(response.data.categories);
    };

    getData();
  }, []);

  return (
    <>
      <Header />
      <Aside />
      <ManageNav />

      <div id="CategoryManage" className="side-layout manage-layout">
        <div className="inner-manage">
          <div className="manage-tit">
            <span>Category</span>
            <form action="" onSubmit={AddCategory}>
              <input
                type="text"
                name="addCategoryInput"
                value={addCategoryInput}
                onChange={onChangeForm}
                placeholder="카테고리 입력"
              />
              <button type="submit">카테고리 등록</button>
            </form>
          </div>
          <div className="category-list-table">
            <div className="search-box">
              <div className="search">
                <input type="text" placeholder="카테고리 검색" />
                <button>
                  <AiOutlineSearch size="30" />
                </button>
              </div>
            </div>

            <div className="category-list">
              <table>
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}>번호</th>
                    <th style={{ width: "45%" }}>이름</th>
                    <th style={{ width: "25%" }}>레시피 수</th>
                    <th style={{ width: "10%" }}>수정</th>
                    <th style={{ width: "10%" }}>삭제</th>
                  </tr>
                </thead>
                <tbody>
                  {categories &&
                    categories.map((category: recipeCategory, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td className="name">{category.name}</td>
                        <td>{category.recipes.length}</td>
                        <td className="ico">
                          <button type="button">
                            <MdEdit size="26" />
                          </button>
                        </td>
                        <td className="ico">
                          <button type="button">
                            <HiMinusCircle size="26" />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryManage;
