import ManageNav from "components/Recipe/ManageNav";
import Aside from "layouts/Aside";
import Header from "layouts/Header";
import React, { useState, useEffect } from "react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { SetMenu } from "modules/menu";
import { reduxStoreState } from "modules";
import { getCategories } from "modules/category";
import axios from "axios";
import { SERVER_URL } from "config";

const RecipeManage = () => {
  const dispatch = useDispatch();
  const [menuImg, setMenuImg] = useState("");
  const menu = useSelector((state: reduxStoreState) => state.menu);
  const categories = useSelector(
    (state: reduxStoreState) => state.category.categories
  );
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    let body = {
      key: name,
      value,
    };

    dispatch(SetMenu(body));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, description, categoryId, recipe } = menu;
    let body = {
      name,
      description,
      categoryId,
      recipe,
      image: menuImg,
    };

    try {
      const response = await axios.post("/api/v1/recipe/menu/create", body);
      if (response.data.success) {
        window.location.replace("/recipe");
      }
    } catch (e) {
      alert("매뉴 등록에 실패하였습니다.");
    }
  };

  const imgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //빈파일이 아닌 경우 함수 진행
    if (e.target.files !== null) {
      //FormData 생성
      const fd = new FormData();
      //FormData에 key, value 추가하기
      fd.append("menu_img", e.target.files[0]);
      // axios 사용해서 백엔드에게 파일 보내기
      axios
        .post(`/api/v1/recipe/uploadImg`, fd)
        .then((response) => {
          console.log(response.data);
          setMenuImg(response.data.image);
        })
        //에러가 날 경우 처리
        .catch((error) => {
          console.log(error.response);
        });
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
      <div
        id="RecipeDetail"
        className="side-layout manage-layout recipe-manage"
      >
        <div className="page-inner">
          <form onSubmit={onSubmit}>
            <div className="inner-detail">
              <div className="menu-left">
                <div className="upload-img">
                  <input type="file" onChange={imgUpload} />
                  <img src={`${SERVER_URL}/${menuImg}`} alt="" />
                </div>
                <div className="upload-des">
                  <input
                    type="text"
                    name="description"
                    onChange={onChange}
                    placeholder="메뉴 설명"
                  />
                </div>
              </div>
              <div className="menu-right">
                <input
                  type="text"
                  name="name"
                  onChange={onChange}
                  placeholder="메뉴 이름"
                />
                <select name="categoryId" onChange={onChange}>
                  <option value="">카테고리 선택</option>
                  {categories?.map((category, index) => (
                    <option key={index} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className="menu-recipe">
                  <div className="recipe-tit">레시피</div>
                  <div className="write-cont">
                    <CKEditor
                      onReady={(editor: any) => {
                        console.log("Editor is ready to use!", editor);
                        editor.ui
                          .getEditableElement()
                          .parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                          );
                      }}
                      onChange={(event: any, editor: any) => {
                        const data = editor.getData();
                        let body = {
                          key: "recipe",
                          value: data,
                        };
                        dispatch(SetMenu(body));
                      }}
                      editor={DecoupledEditor}
                      data=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit">등록</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecipeManage;
