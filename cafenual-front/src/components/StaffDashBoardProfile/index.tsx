import React from "react";
import "./styles.css";
import { BsChevronRight, BsPerson } from "react-icons/bs";

const Profile = () => {
  return (
    <div id="Profile">
      <div className="dashboard-box-tit">
        <span>계정정보</span>
        <a href="">
          <span>더보기</span>
          <BsChevronRight />
        </a>
      </div>

      <div className="profile-img">
        <BsPerson size="80" />
      </div>

      <div className="profile-info">
        <div className="profile-name info">
          <span className="info-option">이름</span>
          <span className="info-des">이도현</span>
        </div>
        <div className="profile-age info">
          <span className="info-option">나이</span>
          <span className="info-des">24</span>
        </div>
        <div className="profile-id info">
          <span className="info-option">아이디</span>
          <span className="info-des">ksmfou98</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
