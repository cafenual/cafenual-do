import React from "react";
import { Route } from "react-router-dom";
import NoticeDetailPage from "./NoticeDetailPage";
import NoticeEditPage from "./NoticeEditPage";
import NoticeMainPage from "./NoticePage";
import NoticeUploadPage from "./NoticeUploadPage";

const Notice = () => {
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

export default Notice;
