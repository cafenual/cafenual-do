import React from "react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "./styles.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useDispatch } from "react-redux";
import { SetNotice } from "modules/notice";
import useHandleNotice from "hooks/notice/useHandleNotice";

interface NoticeFormProps {
  onSubmit: () => Promise<void>;
}

const NoticeForm = ({ onSubmit }: NoticeFormProps) => {
  const dispatch = useDispatch();

  const { onChange, onChangeCheckBox, title, content, important } =
    useHandleNotice();

  return (
    <div id="NoticeForm" className="side-layout">
      <div className="upload-form">
        <div className="form-title">
          <input
            type="text"
            onChange={onChange}
            name="title"
            value={title}
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className="write-cont">
          <CKEditor
            onReady={(editor: any) => {
              editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                );
            }}
            onChange={(event: any, editor: any) => {
              const data = editor.getData();
              let body = {
                key: "content",
                value: data,
              };
              dispatch(SetNotice(body));
            }}
            editor={DecoupledEditor}
            data={content}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="important"
            checked={important}
            onChange={onChangeCheckBox}
          />
          <span>중요한 공지로 설정하기</span>
        </div>
        <button className="submit btn-type1" type="button" onClick={onSubmit}>
          등록하기
        </button>
      </div>
    </div>
  );
};

export default NoticeForm;
