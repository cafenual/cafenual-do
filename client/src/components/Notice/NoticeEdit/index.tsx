import NoticeForm from "components/Notice/NoticeForm";
import React from "react";
import useHandleNotice from "hooks/notice/useHandleNotice";
import useNoticeEditEffect from "hooks/notice/useNoticeEditEffect";

const NoticeEdit = () => {
  const { onEdit } = useHandleNotice();
  useNoticeEditEffect();

  return <NoticeForm onSubmit={onEdit} />;
};

export default NoticeEdit;
