import Aside from "layouts/Aside";
import Header from "layouts/Header";
import React, { useState } from "react";
import "./styles.scss";
import coffee from "static/coffee.jpg";
import { AiOutlineDown } from "react-icons/ai";

const RecipeDetail = () => {
  const [commentToggle, setCommentToggle] = useState(false);
  // 백앤드 객체에 이제 각 코맨트에 checked: true, false를 넣어서 그 check의 값이 true이면 보이고 false이면 안보이게하자
  // 그리고 저 화살표 버튼 에다가 onclick으로 각객체의 checked를 바꿀수있는 백앤드 api를 넣자
  // albalog의 인수인계부분 토글 체크박스 느낌으로 말이지.

  const CommentToggleHandle = () => {
    setCommentToggle(!commentToggle);
  };

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
                      <button type="button" onClick={CommentToggleHandle}>
                        <AiOutlineDown
                          className={commentToggle === true ? "on" : ""}
                          size="20"
                        />
                      </button>
                    </div>
                    {commentToggle && (
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
                        <form action="">
                          <input type="text" placeholder="댓글 작성" />
                          <button>등록</button>
                        </form>
                      </div>
                    )}
                  </li>

                  <li>
                    <div className="recipe">
                      <span className="level">1단계</span>
                      <span className="content">자른다</span>
                      <button type="button" onClick={CommentToggleHandle}>
                        <AiOutlineDown
                          className={commentToggle === true ? "on" : ""}
                          size="20"
                        />
                      </button>
                    </div>
                    {commentToggle && (
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
                        <form action="">
                          <input type="text" placeholder="댓글 작성" />
                          <button>등록</button>
                        </form>
                      </div>
                    )}
                  </li>

                  <li>
                    <div className="recipe">
                      <span className="level">1단계</span>
                      <span className="content">자른다</span>
                      <button type="button" onClick={CommentToggleHandle}>
                        <AiOutlineDown
                          className={commentToggle === true ? "on" : ""}
                          size="20"
                        />
                      </button>
                    </div>
                    {commentToggle && (
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
                        <form action="">
                          <input type="text" placeholder="댓글 작성" />
                          <button>등록</button>
                        </form>
                      </div>
                    )}
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
