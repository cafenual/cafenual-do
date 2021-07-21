import NoticeForm from "components/Notice/NoticeForm";
import React from "react";
import useNoticeForm from "hooks/notice/useNoticeForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SetNoticeData } from "modules/notice";
import useNoticeDetailEffect from "hooks/notice/useNoticeDetailEffect";

const NoticeEdit = () => {
  const { onEdit } = useNoticeForm();
  const dispatch = useDispatch();
  const { title, content, important } = useNoticeDetailEffect();

  useEffect(() => {
    const body = {
      title,
      content,
      important,
    };
    dispatch(SetNoticeData(body));
  }, [title, content, important, dispatch]);

  return (
    <>
      <NoticeForm onSubmit={onEdit} />
    </>
  );
};

export default NoticeEdit;
