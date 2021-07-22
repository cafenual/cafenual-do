import { getNormalNotices } from "lib/api/notice";
import { paginate } from "lib/Paginate";
import { useEffect, useState } from "react";

export default function useNoticeListEffect() {
  const [getNotices, setGetNotices] = useState([]);
  const [noticeInfo, setNoticeInfo] = useState({
    pageSize: 10, // 한 페이지에 보여줄 공지사항 게시물 수
    currentPage: 1, // 현재 활성화 된 페이지 위치
  });

  const { pageSize, currentPage } = noticeInfo;

  // utils 함수에 있는 paginate로 화면에 보여줘야할 컨텐츠 개수의 배열을 가져옴
  const pagedNotices = paginate(getNotices, currentPage, pageSize);

  const pageCount = Math.ceil(getNotices.length / pageSize); // 몇 페이지가 필요한지 계산
  const handlePageChange = (page: number): void => {
    if (page >= pageCount) {
      page = pageCount;
    }
    if (page <= 1) {
      page = 1;
    }
    setNoticeInfo({
      ...noticeInfo,
      currentPage: page,
    });
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const notices = await getNormalNotices();
        setGetNotices(notices);
      } catch (e) {
        alert("공지사항을 불러오지 못했습니다ss.");
      }
    };
    getData();
  }, []);

  return {
    pagedNotices,
    currentPage,
    handlePageChange,
    pageCount,
  };
}
