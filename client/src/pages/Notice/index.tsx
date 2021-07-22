import React from "react";
import { Route } from "react-router-dom";
import NoticeDetailPage from "./NoticeDetailPage";
import NoticeEditPage from "./NoticeEditPage";
import NoticeMainPage from "./NoticeMainPage";
import NoticeUploadPage from "./NoticeUploadPage";

const NoticePage = () => {
  return (
    <>
      <div>
        <Route path="/notice" exact component={NoticeMainPage} />
        <Route
          path="/notice/detail/:noticeId"
          exact
          component={NoticeDetailPage}
        />
        <Route path="/notice/upload" exact component={NoticeUploadPage} />
        <Route path="/notice/edit/:noticeId" exact component={NoticeEditPage} />
      </div>
    </>
  );
};

export default NoticePage;
