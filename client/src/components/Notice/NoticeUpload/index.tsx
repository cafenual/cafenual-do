import NoticeForm from "components/Notice/NoticeForm";
import useNoticeForm from "hooks/notice/useNoticeForm";
import React from "react";

const NoticeUpload = () => {
  const { upload } = useNoticeForm();
  
  const onSubmit = async () => {
    await upload();
  };

  return (
    <>
      <NoticeForm onSubmit={onSubmit} />
    </>
  );
};

export default NoticeUpload;
