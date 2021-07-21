import NoticeForm from "components/Notice/NoticeForm";
import useNoticeForm from "hooks/notice/useNoticeForm";
import React from "react";

const NoticeUpload = () => {
  const { onUpload } = useNoticeForm();

  return (
    <>
      <NoticeForm onSubmit={onUpload} />
    </>
  );
};

export default NoticeUpload;
