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
import EditCategoryModal from "components/Modal/EditCategoryModal";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryState,
  EditCategory,
  getCategories,
  SetCategory,
} from "modules/category";
import { reduxStoreState } from "modules";

const CategoryManage = () => {
  const dispatch = useDispatch();
  const category = useSelector((state: reduxStoreState) => state.category);
  const [editModalState, setEditModalState] = useState(false);

  const ModalToggle = () => {
    setEditModalState(!editModalState);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SetCategory({ name: e.target.value }));
  };

  // 카테고리 추가
  const AddCategory = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    let body = {
      name: category.name,
    };
    try {
      await axios.post("/api/v1/recipe/category/create", body);
      dispatch(getCategories());
      dispatch(SetCategory({ name: "" }));
    } catch (e) {
      alert("카테고리 생성에 실패했습니다.");
    }
  };

  // 카테고리 수정할 정보 리덕스에 저장
  const CategoryInfoInRedux = (
    _id: string | undefined,
    name: string | undefined
  ) => {
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
    } catch (e) {
      alert("카테고리 수정에 실패했습니다.");
    }
  };

  // 카테고리 삭제
  const deleteCategory = async (id: string | undefined) => {
    try {
      await axios.delete(`/api/v1/recipe/category/${id}`);
      dispatch(getCategories());
    } catch (e) {
      alert("카테고리 삭제에 실패했습니다.");
    }
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
                onChange={onChange}
                value={category.name}
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
                  {category.categories?.map(
                    (category: categoryState, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td className="name">{category.name}</td>
                        <td>0</td>
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
                    )
                  )}
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
