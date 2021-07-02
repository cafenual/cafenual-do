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
import EditCategoryModal from "components/Modal/EditCategoryModal";
import { useDispatch, useSelector } from "react-redux";
import { EditCategory } from "modules/category";
import { reduxStoreState } from "modules";

const CategoryManage = () => {
  const dispatch = useDispatch();
  const category = useSelector((state: reduxStoreState) => state.category);
  const [categoryForm, setCategoryForm] = useState({
    addCategoryInput: "",
  });
  const { addCategoryInput } = categoryForm;

  const [categories, setCategories] = useState([]);
  const [editModalState, setEditModalState] = useState(false);

  const ModalToggle = () => {
    setEditModalState(!editModalState);
  };

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
      const nextForm = {
        ...categoryForm,
        addCategoryInput: "",
      };
      setCategoryForm(nextForm);
    } catch (e) {
      alert("카테고리 생성에 실패했습니다.");
    }
  };

  // 카테고리 수정할 정보 리덕스에 저장
  const CategoryInfoInRedux = (_id: string, name: string) => {
    ModalToggle();
    dispatch(EditCategory({ _id, name }));
  };

  // 카테고리 수정
  const editCategory = async () => {
    let body = {
      categoryId: category._id,
      name: category.name,
    };

    try {
      const response = await axios.patch(
        "/api/v1/recipe/category/update",
        body
      );

      if (response.data.success) {
        window.location.replace(`/recipe/manage/category`);
      }
      console.log(response);
    } catch (e) {
      alert("카테고리 수정에 실패했습니다.");
    }
  };

  // 카테고리 삭제
  const deleteCategory = async (id: string) => {
    try {
      const response = await axios.delete(`/api/v1/recipe/category/${id}`);
      console.log(response);
      setCategories(response.data.categories);
    } catch (e) {
      alert("카테고리 삭제에 실패했습니다.");
    }
  };

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
                          <button
                            type="button"
                            onClick={() =>
                              CategoryInfoInRedux(category._id, category.name)
                            }
                          >
                            <MdEdit size="26" />
                          </button>
                        </td>
                        <td className="ico">
                          <button
                            type="button"
                            onClick={() => deleteCategory(category._id)}
                          >
                            <HiMinusCircle size="26" />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
                {editModalState && (
                  <EditCategoryModal
                    ModalToggle={ModalToggle}
                    handlefunc={editCategory}
                  />
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryManage;
