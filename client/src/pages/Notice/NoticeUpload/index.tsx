import NoticeForm from "components/NoticeForm";
import useNoticeForm from "hooks/notice/useNoticeForm";
import Aside from "components/Aside";
import Header from "components/Header";
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
