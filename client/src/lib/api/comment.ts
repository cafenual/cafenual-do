import client from "./client";

// 댓글 조회
export const getComments = async (menuId: string) => {
  const response = await client.get(`/recipe/comment/${menuId}`);
  return response.data.comments;
};

// 댓글 수정
export const updateComment = async (
  content: string,
  writerId: string,
  menuId: string,
  commentId: string
) => {
  const body = {
    content,
    writerId,
    menuId,
    commentId,
  };

  const response = await client.patch(`/recipe/comment/update`, body);
  return response.data.comments;
};

// 댓글 삭제
export const deleteComment = async (commentId: string, menuId: string) => {
  const response = await client.delete(
    `/recipe/comment/delete/${menuId}/${commentId}`
  );
  return response.data.comments;
};

// 댓글 생성
export const createComment = async (
  content: string | undefined,
  writerId: string,
  menuId: string
) => {
  const body = {
    content,
    writerId,
    menuId,
  };
  const response = await client.post("/recipe/comment/create", body);
  return response.data.comments;
};
