import { reduxStoreState } from "modules";
import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

const AccountInfoForm = () => {
  const user = useSelector((state: reduxStoreState) => state.user);
  return (
    <div id="AccountInfoForm" className="side-layout">
      <div className="middle-cont">
        <div className="inner-cont">
          <h1 className="tit">계정정보 수정</h1>

          <div className="form">
            <div className="info-form">
              <label>이메일</label>
              <input type="email" readOnly value={user.email} />
            </div>
            <div className="info-form">
              <label>현재 비밀번호</label>
              <input type="password" />
            </div>
            <div className="info-form">
              <label>새 비밀번호</label>
              <input type="password" />
            </div>
            <div className="info-form">
              <label>새 비밀번호 확인</label>
              <input type="password" />
            </div>
            <div className="info-form">
              <label>이름</label>
              <input type="text" value={user.name} />
            </div>

            <div className="form-btn">
              <button className="btn-type1">회원 정보 수정</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfoForm;
