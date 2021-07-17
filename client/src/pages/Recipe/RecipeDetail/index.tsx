import Aside from "components/Aside";
import Header from "components/Header";
import React, { useEffect } from "react";
import "./styles.scss";
import Comment from "components/Recipe/Comment";
import { getMenuDetailHandle } from "modules/menu";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reduxStoreState } from "modules";
import { SERVER_URL } from "config";
import { deleteMenu } from "lib/api/menu";

interface MatchParams {
  menuId: string;
}

const RecipeDetail = () => {
  const match = useRouteMatch<MatchParams>();
  const menuId = match.params.menuId;
  const dispatch = useDispatch();
  const menu = useSelector((state: reduxStoreState) => state.menu);

  useEffect(() => {
    dispatch(getMenuDetailHandle(menuId));
  }, [dispatch, menuId]);

  const onDelete = async () => {
    try {
      await deleteMenu(menuId);
      window.location.replace("/recipe");
    } catch (e) {
      alert("메뉴 삭제에 실패했습니다.");
    }
  };

  return (
    <>
      <div id="RecipeDetail" className="side-layout">
        <div className="page-inner">
          <div className="inner-detail">
            <div className="menu-left">
              <img src={`${SERVER_URL}/${menu.image}`} alt="" />
            </div>
            <div className="menu-right">
              <div className="menu-btn">
                <button className="btn-type2" type="button" onClick={onDelete}>
                  삭제
                </button>
                <Link to={`/recipe/edit/${menuId}`} className="btn-type1">
                  수정
                </Link>
              </div>
              <div className="menu-name">
                <span>{menu.name}</span>
              </div>

              <div className="menu-description">
                <p>{menu.description}</p>
              </div>

              <div className="menu-recipe">
                {menu.recipe && (
                  <div dangerouslySetInnerHTML={{ __html: menu.recipe }}></div>
                )}
              </div>
            </div>
          </div>

          <Comment />
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
