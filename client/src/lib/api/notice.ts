import client from "./client";

// 공지 작성
export const createNotice = async (
  title: string,
  content: string,
  important: boolean
) => {
  const body = {
    title,
    content,
    important,
  };
  const response = await client.post("/notice/create", body);
  return response;
};

// 공지 리스트
export const getNormalNotices = async () => {
  const response = await client.get("/notice/read");
  return response.data.notices;
};

// 공지 상세보기
export const getNoticeDetail = async (noticeId: string) => {
  const response = await client.get(`/notice/read/detail/${noticeId}`);
  return response.data.notice;
};

// 공지 수정
export const updateNotice = async (
  noticeId: string,
  title: string,
  content: string,
  important: boolean
) => {
  const body = {
    noticeId,
    title,
    content,
    important,
  };
  const response = await client.patch(`/notice/update`, body);
  return response;
};
