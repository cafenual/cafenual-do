import axios from "axios";
import { reduxStoreState } from "modules";
import { SetComment } from "modules/comment";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import "./styles.scss";

interface MatchParams {
  menuId: string;
}

const Comment = () => {
  const match = useRouteMatch<MatchParams>();
  const menuId = match.params.menuId;
  const dispatch = useDispatch();
  const comment = useSelector((state: reduxStoreState) => state.comment);
  const [comments, setComments] = useState([]);
  const user = useSelector((state: reduxStoreState) => state.user);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SetComment({ content: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let body = {
      content: comment.content,
      writerId: user._id,
      menuId,
    };

    try {
      const response = await axios.post("/api/v1/recipe/comment/create", body);
      console.log(response);
      if (response.data.success) {
        setComments(response.data.comments);
        dispatch(SetComment({ content: "" }));
      }
    } catch (e) {
      alert("댓글 생성에 실패했습니다");
    }
  };

  const deleteComment = async (commentId: string, menuId: string) => {
    try {
      const response = await axios.delete(
        `/api/v1/recipe/comment/delete/${menuId}/${commentId}`
      );
      console.log(response.data);
      if (response.data.success) {
        setComments(response.data.comments);
      }
    } catch (e) {
      alert("댓글 삭제에 실패했습니다");
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/v1/recipe/comment/${menuId}`);
        console.log(response);
        if (response.data.success) {
          setComments(response.data.comments);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [menuId]);

  return (
    <>
      <div className="comment">
        <div className="inner-comment">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              onChange={onChange}
              placeholder="댓글을 작성해주세요"
              value={comment.content}
            />
            <button type="submit">등록</button>
          </form>

          <ul>
            {comments &&
              comments.map((comment: any, index) => (
                <li key={index}>
                  {comment.content}
                  {comment.writer._id === user._id ? (
                    <>
                      <button>수정</button>
                      <button
                        onClick={() => deleteComment(comment._id, comment.menu)}
                      >
                        삭제
                      </button>
                    </>
                  ) : (
                    ""
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Comment;
