import Aside from "layouts/Aside";
import Header from "layouts/Header";
import React from "react";
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
            <div className="menu-img">
              <img src={coffee} alt="" />
            </div>
            <div className="menu-des">
              <div className="name">아메리카노</div>

              <div className="menu-recipe">
                <div className="recipe-tit">레시피</div>
                <ul>
                  <li>
                    <div className="recipe">
                      <span className="level">1단계</span>
                      <span className="content">자른다</span>
                      <button>
                        <AiOutlineDown size="20" />
                      </button>
                    </div>
                    <div className="comment-list">
                      <div className="comment">
                        <span className="comment-cont">
                          └ 원두 갈다가 조심하십쇼 손가락 날아가붕께
                        </span>
                        <span className="comment-writer"> | 이도갓</span>
                        <span className="comment-date">2021-07-01</span>
                      </div>
                      <div className="comment">
                        <span className="comment-cont">
                          └ 원두 갈다가 조심하십쇼 손가락 날아가붕께
                        </span>
                        <span className="comment-writer"> | 이도갓</span>
                        <span className="comment-date">2021-07-01</span>
                      </div>
                      <div className="comment">
                        <span className="comment-cont">
                          └ 원두 갈다가 조심하십쇼 손가락 날아가붕께
                        </span>
                        <span className="comment-writer"> | 이도갓</span>
                        <span className="comment-date">2021-07-01</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="recipe">
                      <span className="level">2단계</span>
                      <span className="content">물 끓인다</span>
                    </div>
                    <div className="comment-list">
                      <div className="comment">
                        <span className="comment-cont">
                          └ 원두 갈다가 조심하십쇼 손가락 날아가붕께
                        </span>
                        <span className="comment-writer"> | 이도갓</span>
                        <span className="comment-date">2021-07-01</span>
                      </div>
                      <div className="comment">
                        <span className="comment-cont">
                          └ 원두 갈다가 조심하십쇼 손가락 날아가붕께
                        </span>
                        <span className="comment-writer"> | 이도갓</span>
                        <span className="comment-date">2021-07-01</span>
                      </div>
                      <div className="comment">
                        <span className="comment-cont">
                          └ 원두 갈다가 조심하십쇼 손가락 날아가붕께
                        </span>
                        <span className="comment-writer"> | 이도갓</span>
                        <span className="comment-date">2021-07-01</span>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="recipe">
                      <span className="level">3단계</span>
                      <span className="content">물 붓는다</span>
                    </div>
                    <div className="comment-list">
                      <div className="comment">
                        <span className="comment-cont">
                          └ 원두 갈다가 조심하십쇼 손가락 날아가붕께
                        </span>
                        <span className="comment-writer"> | 이도갓</span>
                        <span className="comment-date">2021-07-01</span>
                      </div>
                      <div className="comment">
                        <span className="comment-cont">
                          └ 원두 갈다가 조심하십쇼 손가락 날아가붕께
                        </span>
                        <span className="comment-writer"> | 이도갓</span>
                        <span className="comment-date">2021-07-01</span>
                      </div>
                      <div className="comment">
                        <span className="comment-cont">
                          └ 원두 갈다가 조심하십쇼 손가락 날아가붕께
                        </span>
                        <span className="comment-writer"> | 이도갓</span>
                        <span className="comment-date">2021-07-01</span>
                      </div>
                    </div>
                  </li>

                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
