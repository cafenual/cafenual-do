import NoticeForm from "components/NoticeForm";
import useNoticeForm from "hooks/useNoticeForm";
import Aside from "layouts/Aside";
import Header from "layouts/Header";
import React from "react";

const NoticeUpload = () => {
  const { upload } = useNoticeForm();
  const onSubmit = async () => {
    await upload();
  };

  return (
    <>
      <Header />
      <Aside />
      <NoticeForm onSubmit={onSubmit} />
    </>
  );
};

export default NoticeUpload;
