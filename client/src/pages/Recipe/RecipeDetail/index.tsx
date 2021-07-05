import Aside from "layouts/Aside";
import Header from "layouts/Header";
import React, { useState } from "react";
import "./styles.scss";
import coffee from "static/coffee.jpg";
import { AiOutlineDown } from "react-icons/ai";

const RecipeDetail = () => {
  return (
    <>
      <Header />
      <Aside />
      <div id="RecipeDetail" className="side-layout">
        <div className="page-inner">
          <div className="inner-detail">
            <div className="menu-left">
              <img src={coffee} alt="" />
              <p>description 자리 입니다</p>
            </div>
            <div className="menu-right">
              <div className="name">아메리카노</div>

              <div className="menu-recipe">
                <div className="recipe-tit">레시피</div>
                <div>레시피 내용 들어갈 자리 입니다.</div>
              </div>
            </div>
          </div>

          <div className="menu-comment">댓글</div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
