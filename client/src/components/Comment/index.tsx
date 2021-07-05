import { getComments } from "modules/comment";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import "./styles.scss";

interface MatchParams {
  menuId: string;
}

const Comment = () => {
  const match = useRouteMatch<MatchParams>();
  const menuId = match.params.menuId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments(menuId));
  }, [dispatch, menuId]);

  return (
    <>
      <div className="comment">
        <div className="inner-comment">
          <form>
            <input type="text" placeholder="댓글을 작성해주세요" />
            <button type="submit">등록</button>
          </form>

          <ul>
            <li>댓글1</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Comment;
