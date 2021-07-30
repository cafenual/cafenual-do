import React from "react";
import "./styles.scss";
import { BsPersonFill } from "react-icons/bs";

const StaffList = () => {
  return (
    <>
      <div id="StaffList">
        <div className="inner-stafflist">
          <div className="title">직원</div>
          <div className="staff">
            <li className="list">
              <div className="box-left">
                <div className="profile-ico">
                  <BsPersonFill />
                </div>
                <p className="name">이도현</p>
              </div>
              <div className="box-right">
                <div className="box-top">
                  <div className="box-info">
                    <div className="info-tit">직책</div>
                    <div className="info-cont">관리자</div>
                  </div>

                  <div className="box-info">
                    <div className="info-tit">파트타임</div>
                    <div className="info-cont">오픈</div>
                  </div>

                  <div className="box-info">
                    <div className="info-tit">재직상태</div>
                    <div className="info-cont">재직자</div>
                  </div>
                </div>
                <div className="box-bottom">
                  <div className="inner-box">
                    <button>정보 보기</button>
                  </div>
                </div>
              </div>
            </li>

            <li className="list">
              <div className="box-left">
                <div className="profile-ico">
                  <BsPersonFill />
                </div>
                <p className="name">이도현</p>
              </div>
              <div className="box-right">
                <div className="box-top">
                  <div className="box-info">
                    <div className="info-tit">직책</div>
                    <div className="info-cont">관리자</div>
                  </div>

                  <div className="box-info">
                    <div className="info-tit">파트타임</div>
                    <div className="info-cont">오픈</div>
                  </div>

                  <div className="box-info">
                    <div className="info-tit">재직상태</div>
                    <div className="info-cont">재직자</div>
                  </div>
                </div>
                <div className="box-bottom">
                  <div className="inner-box">
                    <button>정보 보기</button>
                  </div>
                </div>
              </div>
            </li>

            <li className="list">
              <div className="box-left">
                <div className="profile-ico">
                  <BsPersonFill />
                </div>
                <p className="name">이도현</p>
              </div>
              <div className="box-right">
                <div className="box-top">
                  <div className="box-info">
                    <div className="info-tit">직책</div>
                    <div className="info-cont">관리자</div>
                  </div>

                  <div className="box-info">
                    <div className="info-tit">파트타임</div>
                    <div className="info-cont">오픈</div>
                  </div>

                  <div className="box-info">
                    <div className="info-tit">재직상태</div>
                    <div className="info-cont">재직자</div>
                  </div>
                </div>
                <div className="box-bottom">
                  <div className="inner-box">
                    <button>정보 보기</button>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffList;
