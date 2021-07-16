import Aside from "layouts/Aside";
import Header from "layouts/Header";
import { getNoticeDetail } from "lib/api/notice";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import "./styles.scss";

interface MatchParams {
  noticeId: string;
}

const NoticeDetail = () => {
  const match = useRouteMatch<MatchParams>();
  const noticeId = match.params.noticeId;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const notice = await getNoticeDetail(noticeId);
        setTitle(notice.title);
        setContent(notice.content);
        setDate(notice.createdAt);
      } catch (e) {
        alert("공지를 불러오는데 실패했습니다.");
      }
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <Aside />
      <div id="Notice" className="side-layout">
        <div className="cont">
          <div className="content-tit">
            {title}
            <div className="tit-date">{date.slice(0, 10)}</div>
          </div>
          <div
            className="content-cont"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <div className="content-btn">
            <a href={`/notice`} className="btn-list">
              목록
            </a>
            <a href={`/notice/edit/${noticeId}`} className="btn-list">
              수정
            </a>
            <a href="" className="btn-list">
              삭제
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeDetail;
