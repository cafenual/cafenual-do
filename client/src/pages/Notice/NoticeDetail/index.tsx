import axios from "axios";
import Aside from "layouts/Aside";
import Header from "layouts/Header";
import React, { useEffect, useState } from "react";
import "./styles.scss";

const NoticeDetail = ({ match }: any) => {
  const noticeId = Number(match.params.id);
  const [noticeInfo, setNoticeInfo] = useState({
    title: "",
    body: "",
  });

  const { title, body } = noticeInfo;
  const noticeLength = Number(localStorage.getItem("noticeLength")); // 게시물 길이
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${noticeId}`)
      .then((response) => {
        console.log(response.data);
        setNoticeInfo({
          ...noticeInfo,
          title: response.data.title,
          body: response.data.body,
        });
      });
  }, []);
  return (
    <>
      <Header />
      <Aside />
      <div id="Notice" className="side-layout">
        <div className="cont">
          <div className="content-tit">
            {title}
            <div className="tit-date">2021-05-19</div>
          </div>
          <div className="content-cont">{body}</div>
          <div className="content-btn">
            {noticeId > 1 ? (
              <a href={`/notice/${noticeId - 1}`} className="btn-move">
                이전
              </a>
            ) : (
              ""
            )}

            {noticeId < noticeLength ? (
              <a href={`/notice/${noticeId + 1}`} className="btn-move">
                다음
              </a>
            ) : (
              ""
            )}

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
