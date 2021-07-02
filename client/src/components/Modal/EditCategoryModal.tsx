import { reduxStoreState } from "modules";
import { EditCategory } from "modules/category";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import "./Modal.scss";

interface IEditCategoryModal {
  ModalToggle: () => void;
  handlefunc: () => void;
}

const EditCategoryModal = ({ ModalToggle, handlefunc }: IEditCategoryModal) => {
  const category = useSelector((state: reduxStoreState) => state.category);
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    dispatch(EditCategory({ _id: category._id, name: value }));
  };

  return (
    <>
      <div id="Modal">
        <div className="modal-alert">
          <div className="modal-wrapper">
            <div className="wrapper-header">알림</div>
            <div className="wrapper-content">
              <div className="centent-message">
                <input type="text" onChange={onChange} value={category.name} />
              </div>
            </div>
            <button
              onClick={ModalToggle}
              type="button"
              className="wrapper-button"
            >
              <AiOutlineClose size="30" />
            </button>
          </div>
          <div className="message-footer">
            <button onClick={handlefunc} className="message-btn">
              수정
            </button>
            <button
              type="button"
              onClick={ModalToggle}
              className="message-btn last"
            >
              취소
            </button>
          </div>
        </div>
        <div className="message-background"></div>
      </div>
    </>
  );
};

export default EditCategoryModal;
