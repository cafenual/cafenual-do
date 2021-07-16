import NoticeForm from "components/NoticeForm";
import Aside from "layouts/Aside";
import Header from "layouts/Header";
import React from "react";
import useNoticeForm from "hooks/useNoticeForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SetNoticeData } from "modules/notice";
import useNoticeDetailEffect from "hooks/useNoticeDetailEffect";

const NoticeEdit = () => {
  const { edit } = useNoticeForm();
  const dispatch = useDispatch();
  const { title, content, important, noticeId } = useNoticeDetailEffect();

  const onSubmit = async () => {
    await edit(noticeId);
  };

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
      <Header />
      <Aside />
      <NoticeForm onSubmit={onSubmit} />
    </>
  );
};

export default NoticeEdit;
