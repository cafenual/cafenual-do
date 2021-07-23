import ManageNav from "components/Recipe/ManageNav";
import React, { useState } from "react";
import "./styles.scss";
import { MdEdit } from "react-icons/md";
import { HiMinusCircle } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { categoryState } from "modules/category";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "lib/api/category";

const CategoryManage = () => {
  const dispatch = useDispatch();
  const [categoryInput, setCategoryInput] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    getData();
  }, [dispatch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryInput(e.target.value);
  };

  // 카테고리 추가
  const onAddCategory = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const categories = await createCategory(categoryInput);
      setCategories(categories);
      setCategoryInput("");
    } catch (e) {
      alert("카테고리 생성에 실패했습니다.");
    }
  };

  // 카테고리 삭제
  const onDeleteCategory = async (id: string | undefined) => {
    try {
      const categories = await deleteCategory(id);
      setCategories(categories);
    } catch (e) {
      alert("카테고리 삭제에 실패했습니다.");
    }
  };

  const [updateCategoryId, setUpdateCategoryId] = useState("");
  const [updateCategoryInput, setUpdateCategoryInput] = useState("");

  // 카테고리 수정 활성화
  const onUpdateActive = (categoryId: string, name: string) => {
    setUpdateCategoryId(categoryId);
    setUpdateCategoryInput(name);
  };

  // 카테고리 수정 input
  const onChangeUpdateCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateCategoryInput(e.target.value);
  };

  // 카테고리 수정 취소
  const onUpdateCancel = () => {
    setUpdateCategoryId("");
  };

  // 카테고리 수정
  const onUpdate = async (categoryId: string) => {
    try {
      const categories = await updateCategory(categoryId, updateCategoryInput);
      console.log(categories);
      setCategories(categories);
      setUpdateCategoryId("");
    } catch (e) {
      alert("카테고리 수정에 실패했습니다.");
    }
  };

  return (
    <>
      <ManageNav />

      <div id="CategoryManage" className="side-layout manage-layout">
        <div className="inner-manage">
          <div className="manage-tit">
            <span>Category</span>
            <form onSubmit={onAddCategory}>
              <input
                type="text"
                name="addCategoryInput"
                onChange={onChange}
                value={categoryInput}
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
                  {categories?.map((category: categoryState, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>

                      {updateCategoryId === category._id ? (
                        <td className="category-edit">
                          <input
                            value={updateCategoryInput}
                            onChange={onChangeUpdateCategory}
                            type="text"
                          />
                          <button
                            type="button"
                            className="btn-type1"
                            onClick={() => onUpdate(category._id)}
                          >
                            저장
                          </button>
                          <button
                            type="button"
                            className="btn-type2"
                            onClick={onUpdateCancel}
                          >
                            취소
                          </button>
                        </td>
                      ) : (
                        <td className="name">{category.name}</td>
                      )}

                      <td>0</td>
                      <td className="ico">
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateActive(category._id, category.name)
                          }
                        >
                          <MdEdit size="26" />
                        </button>
                      </td>
                      <td className="ico">
                        <button
                          type="button"
                          onClick={() => onDeleteCategory(category._id)}
                        >
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
