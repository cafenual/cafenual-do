import NoticeList from "components/Notice/NoticeList";
import NoticeSearchForm from "components/Notice/NoticeSearchForm";
import React from "react";
import "./styles.scss";

const NoticeMainPage = () => {
  return (
    <>
      <div id="Notice" className="side-layout">
        <div className="middle-cont">
          <NoticeSearchForm />
          <div className="upload-comm">
            <a className="btn-type1" href="/notice/upload">
              글쓰기
            </a>
          </div>
          <NoticeList />
        </div>
      </div>
    </>
  );
};

export default NoticeMainPage;
