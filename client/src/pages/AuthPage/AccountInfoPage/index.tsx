import AccountInfoForm from "components/AccountInfoForm";
import React from "react";
import "./styles.scss"

const AccountInfoPage = () => {
  return (
    <div id="AccountInfoForm" className="side-layout">
      <div className="middle-cont">
        <div className="inner-cont">
          <h1 className="tit">계정정보 수정</h1>
          <AccountInfoForm />
        </div>
      </div>
    </div>
  );
};

export default AccountInfoPage;
