import axios from "axios";

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
  const response = await axios.post("/api/v1/notice/create", body);
  return response;
};

// 공지 리스트
export const getNormalNotices = async () => {
  const response = await axios.get("/api/v1/notice/read");
  return response.data.notices;
};

// 공지 상세보기
export const getNoticeDetail = async (noticeId: string) => {
  const response = await axios.get(`/api/v1/notice/read/detail/${noticeId}`);
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
  const response = await axios.patch(`/api/v1/notice/update`, body);
  return response;
};
