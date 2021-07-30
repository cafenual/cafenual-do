import React from "react";
import "./styles.scss";
import { AiOutlineClose } from "react-icons/ai";

const StaffInfoModal = ({ onToggle }: any) => {
  return (
    <div id="StaffInfoModal">
      <div className="modal-alert">
        <div className="modal-top"></div>

        <div className="modal-wrapper">
          <div className="wrapper-header">직원 정보 </div>
          <div className="wrapper-content">
            <div className="inner-form">
              <label>이름</label>
              <input type="text" value="이도현" readOnly />
            </div>

            <div className="inner-form">
              <label>이메일</label>
              <input type="text" value="admin@cafenual.com" readOnly />
            </div>

            <div className="inner-form">
              <label>직책</label>
              <select>
                <option value="">관리자</option>
                <option value="">스태프</option>
              </select>
            </div>

            <div className="inner-form">
              <label>시급</label>
              <input type="text" value="8720" />
            </div>

            <div className="inner-form">
              <label>파트타임</label>
              <select>
                <option value="">풀타임</option>
                <option value="">오픈</option>
                <option value="">미드</option>
                <option value="">마감</option>
              </select>
            </div>

            <div className="inner-form">
              <label>재직 상태</label>
              <select name="" id="">
                <option value="">재직자</option>
                <option value="">퇴직자</option>
              </select>
            </div>
          </div>

          <button type="button" onClick={onToggle} className="wrapper-button">
            <AiOutlineClose size="30" />
          </button>
        </div>
        <div className="message-footer">
          <button className="message-btn">수정하기</button>
          <button type="button" onClick={onToggle} className="message-btn last">
            닫기
          </button>
        </div>
      </div>
      <div className="message-background"></div>
    </div>
  );
};

export default StaffInfoModal;
