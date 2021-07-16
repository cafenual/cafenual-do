import ManageNav from "components/Recipe/ManageNav";
import Aside from "layouts/Aside";
import Header from "layouts/Header";
import React, { useState, useEffect } from "react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { SetImage, SetMenu } from "modules/menu";
import { reduxStoreState } from "modules";
import axios from "axios";
import { SERVER_URL } from "config";
import { AiOutlineCloudUpload } from "react-icons/ai";
import UploadImg from "static/img-upload.png";
import { getCategoriesHandle } from "modules/category";

interface RecipeFormProps {
  onSubmit: () => Promise<void>;
}

const RecipeForm = ({ onSubmit }: RecipeFormProps) => {
  const dispatch = useDispatch();
  const menu = useSelector((state: reduxStoreState) => state.menu);
  const categories = useSelector(
    (state: reduxStoreState) => state.category.categories
  );
  const { name, image, description, recipe, categoryId } = menu;
  const [menuImg, setMenuImg] = useState(image);
  const [imgUrl, setImgUrl] = useState("파일 선택");
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

  const imgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setImgUrl(e.target.value);
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
          setMenuImg(response.data.image);
          dispatch(SetImage({ image: response.data.image }));
        })
        //에러가 날 경우 처리
        .catch((error) => {
          console.log(error.response);
        });
    }
  };

  useEffect(() => {
    dispatch(getCategoriesHandle());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Aside />

      <div
        id="RecipeDetail"
        className="side-layout manage-layout recipe-manage"
      >
        <div className="page-inner">
          <div className="inner-detail">
            <div className="menu-left">
              <div className="img-upload">
                <label htmlFor="img-upload">
                  <span>{imgUrl}</span>
                  <AiOutlineCloudUpload size="30" />
                </label>
                <input type="file" id="img-upload" onChange={imgUpload} />
              </div>
              <div className="img-preview">
                {!menuImg && <img src={UploadImg} alt="" />}
                {menuImg && <img src={`${SERVER_URL}/${menuImg}`} alt="" />}
              </div>
            </div>
            <div className="menu-right">
              <div className="menu-category">
                <select
                  name="categoryId"
                  value={categoryId}
                  onChange={onChange}
                >
                  <option value="">카테고리 선택</option>
                  {categories?.map((category, index) => (
                    <option key={index} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="menu-name">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChange}
                  placeholder="메뉴 이름"
                />
              </div>

              <div className="menu-description">
                <input
                  type="text"
                  name="description"
                  onChange={onChange}
                  value={description}
                  placeholder="메뉴 설명"
                />
              </div>
              <div className="menu-recipe">
                <div className="write-cont">
                  <CKEditor
                    onReady={(editor: any) => {
                      editor.ui
                        .getEditableElement()
                        .parentElement.insertBefore(
                          editor.ui.view.toolbar.element,
                          editor.ui.getEditableElement()
                        );
                    }}
                    config={{ placeholder: "레시피를 입력해주세요" }}
                    onChange={(event: any, editor: any) => {
                      const data = editor.getData();
                      let body = {
                        key: "recipe",
                        value: data,
                      };
                      dispatch(SetMenu(body));
                    }}
                    editor={DecoupledEditor}
                    data={recipe}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="submit-btn">
            <button onClick={onSubmit} className="menu-submit" type="button">
              완료
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeForm;
