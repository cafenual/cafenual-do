import NoticeForm from "components/Notice/NoticeForm";
import useHandleNotice from "hooks/notice/useHandleNotice";
import React from "react";

const NoticeUpload = () => {
  const { onUpload } = useHandleNotice();

  return (
    <>
      <NoticeForm onSubmit={onUpload} />
    </>
  );
};

export default NoticeUpload;
