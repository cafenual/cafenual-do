import React from "react";
import "./styles.css";
import { BsChevronRight, BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";
import { reduxStoreState } from "modules";

const Profile = () => {
  const user = useSelector((state: reduxStoreState) => state.user);

  return (
    <div id="Profile">
      <div className="dashboard-box-tit">
        <span>계정정보</span>
        <a href="">
          <span>더보기</span>
          <BsChevronRight />
        </a>
      </div>

      <div className="profile-box">
        <div className="profile-img">
          <BsPerson size="100" />
        </div>

        <div className="profile-info">
          <div className="profile-info-box">
            <div className="profile-name info">
              <span className="info-option">이름</span>
              <span className="info-des">{user.name}</span>
            </div>
            <div className="profile-age info">
              <span className="info-option">직책</span>
              <span className="info-des">{user.role}</span>
            </div>
            <div className="profile-id info">
              <span className="info-option">이메일</span>
              <span className="info-des">{user.email}</span>
            </div>
            <div className="profile-wage info">
              <span className="info-option">시급</span>
              <span className="info-des">{user.wage} 원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
