import ManageNav from "components/Recipe/ManageNav";
import React from "react";
import "./styles.scss";
import { MdEdit } from "react-icons/md";
import { HiMinusCircle } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { categoryState } from "modules/category";
import useCategoryManageEffect from "hooks/recipe/useCategoryManageEffect";

const CategoryManage = () => {
  const {
    categories,
    onChangeForAdd,
    createCategoryInput,
    onCreate,
    onDelete,
    updateCategoryId,
    updateCategoryInput,
    onUpdateActive,
    onChangeForUpdate,
    onUpdateCancel,
    onUpdate,
  } = useCategoryManageEffect();

  return (
    <>
      <ManageNav />

      <div id="CategoryManage" className="side-layout manage-layout">
        <div className="inner-manage">
          <div className="manage-tit">
            <span>Category</span>
            <form onSubmit={onCreate}>
              <input
                type="text"
                name="addCategoryInput"
                onChange={onChangeForAdd}
                value={createCategoryInput}
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
                            onChange={onChangeForUpdate}
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
                          onClick={() => onDelete(category._id)}
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
