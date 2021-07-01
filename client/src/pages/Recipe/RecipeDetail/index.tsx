import Aside from "layouts/Aside";
import Header from "layouts/Header";
import React, { useState } from "react";
import "./styles.scss";
import coffee from "static/coffee.jpg";
import { AiOutlineDown } from "react-icons/ai";

const RecipeDetail = () => {
  const [commentToggle, setCommentToggle] = useState(false);
  // 첨에 레시피 데이터 모델에 checked:false(새로고침하면 또 안보여야하니깐)를 넣어두고,
  // 레시피 데이터를 불러와서 useState에 저장을 한다음에
  // 저 화살표 버튼을 누르면 그 리스트의 id를 받아와서 해당 state의 checked를 프론트에서 map으로 id===id 인 것의 checked를
  // !checked로 바꿔주면 될듯 , 백앤드에서 바꿔줄 필요없는 이유는 새로고침하면 어차피 다시 false로 초기화
  // 되어야 하니깐!! ㅋㅋ ㅎㅎ 지렸다.

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
