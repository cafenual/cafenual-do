import { reduxStoreState } from "modules";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import "./styles.scss";
import TextareaAutosize from "react-textarea-autosize";
import { MdEdit, MdDelete } from "react-icons/md";
import {
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from "lib/api/comment";
import { useCallback } from "react";

interface MatchParams {
  menuId: string;
}

const Comment = () => {
  const match = useRouteMatch<MatchParams>();
  const menuId = match.params.menuId;
  const user = useSelector((state: reduxStoreState) => state.user);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  }, []);

  // 댓글 추가
  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const comments = await createComment(comment, user._id, menuId);
        setComments(comments);
        setComment("");
      } catch (e) {
        alert("댓글 생성에 실패했습니다");
      }
    },
    [comment, user._id, menuId]
  );

  // 댓글 삭제
  const onDeleteComment = async (commentId: string, menuId: string) => {
    try {
      const comments = await deleteComment(commentId, menuId);
      setComments(comments);
    } catch (e) {
      alert("댓글 삭제에 실패했습니다");
    }
  };

  const [updateCommentId, setUpdateCommentId] = useState("");
  const [updateCommentInput, setUpdateCommentInput] = useState("");
  // 댓글 수정 활성화
  const activeUpdateComment = useCallback(
    (commentId: string, content: string) => {
      setUpdateCommentInput(content);
      setUpdateCommentId(commentId);
    },
    []
  );

  // 댓글 수정 input
  const updateCommentOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUpdateCommentInput(e.target.value);
    },
    []
  );

  // 댓글 수정 취소
  const updateCancel = useCallback(() => {
    setUpdateCommentId("");
  }, []);

  // 댓글 수정
  const onUpdateComment = useCallback(
    async (commentId: string, menuId: string) => {
      try {
        const comments = await updateComment(
          updateCommentInput,
          user._id,
          menuId,
          commentId
        );
        setUpdateCommentId("");
        setComments(comments);
      } catch (e) {
        alert("댓글 수정에 실패했습니다.");
      }
    },
    [updateCommentInput, user._id]
  );

  useEffect(() => {
    const getData = async () => {
      const comments = await getComments(menuId);
      setComments(comments);
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
              value={comment}
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

                  {updateCommentId === comment._id ? (
                    <div className="comment-edit">
                      <input
                        type="text"
                        className="comment-edit"
                        onChange={updateCommentOnChange}
                        value={updateCommentInput}
                      />
                      <button
                        className="save btn"
                        type="button"
                        onClick={() =>
                          onUpdateComment(comment._id, comment.menu)
                        }
                      >
                        저장
                      </button>
                      <button
                        className="cancel btn"
                        onClick={updateCancel}
                        type="button"
                      >
                        취소
                      </button>
                    </div>
                  ) : (
                    <span>{comment.content}</span>
                  )}

                  <div className="comment-btn">
                    {comment.writer._id === user._id && // 현재 로그인한 계정이랑 댓글 작성자랑 같고
                    updateCommentId !== comment._id ? ( // 현재 수정중인 댓글이 아닐경우 버튼을 보여준다 // 만약 수정중이면 버튼을 보여줄 필요가 없기떄문에
                      <>
                        <button
                          onClick={() =>
                            activeUpdateComment(comment._id, comment.content)
                          }
                          className="edit btn"
                        >
                          <MdEdit size="20" />
                          <span>수정</span>
                        </button>
                        <button
                          className="delete btn"
                          onClick={() =>
                            onDeleteComment(comment._id, comment.menu)
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
