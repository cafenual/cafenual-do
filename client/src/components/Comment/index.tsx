import axios from "axios";
import { reduxStoreState } from "modules";
import { SetComment } from "modules/comment";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import "./styles.scss";
import TextareaAutosize from "react-textarea-autosize";
import { MdEdit, MdDelete } from "react-icons/md";

interface MatchParams {
  menuId: string;
}

const Comment = () => {
  const match = useRouteMatch<MatchParams>();
  const menuId = match.params.menuId;
  const dispatch = useDispatch();
  const comment = useSelector((state: reduxStoreState) => state.comment);
  const user = useSelector((state: reduxStoreState) => state.user);
  const [comments, setComments] = useState([]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        if (response.data.success) {
          setComments(response.data.comments);
          console.log(response.data);
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
          <div className="comment-len">댓글 {comments.length}개</div>
          <form onSubmit={onSubmit}>
            <TextareaAutosize
              placeholder="댓글 추가 ..."
              onChange={onChange}
              value={comment.content}
            />

            <button type="submit">등록</button>
          </form>

          <ul className="comment-list">
            {comments &&
              comments.map((comment: any, index) => (
                <li key={index}>
                  <div className="comment-writer">
                    <span>{comment.writer.name}</span>
                  </div>

                  <span>{comment.content}</span>

                  <div className="comment-btn">
                    {comment.writer._id === user._id ? (
                      <>
                        <button className="edit btn">
                          <MdEdit size="20" />
                          <span>수정</span>
                        </button>
                        <button
                          className="delete btn"
                          onClick={() =>
                            deleteComment(comment._id, comment.menu)
                          }
                        >
                          <MdDelete size="20" />
                          <span>삭제</span>
                        </button>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Comment;
