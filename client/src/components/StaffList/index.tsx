import React from "react";
import "./styles.scss";
import { BsPersonFill } from "react-icons/bs";
import StaffInfoModal from "components/Modal/StaffInfoModal";
import { useState } from "react";

const StaffList = () => {
  const [isModal, setIsModal] = useState(false);

  const onToggle = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <div id="StaffList">
        <div className="inner-stafflist">
          <div className="title">직원</div>
          <div className="staff">
            <ul>
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
                      <div className="info-tit">시급</div>
                      <div className="info-cont">870</div>
                    </div>

                    <div className="box-info">
                      <div className="info-tit">재직상태</div>
                      <div className="info-cont">재직자</div>
                    </div>
                  </div>
                  <div className="box-bottom">
                    <div className="inner-box">
                      <button onClick={onToggle}>정보 보기</button>
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
                      <div className="info-tit">시급</div>
                      <div className="info-cont">870</div>
                    </div>

                    <div className="box-info">
                      <div className="info-tit">재직상태</div>
                      <div className="info-cont">재직자</div>
                    </div>
                  </div>
                  <div className="box-bottom">
                    <div className="inner-box">
                      <button onClick={onToggle}>정보 보기</button>
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
                      <div className="info-tit">시급</div>
                      <div className="info-cont">870</div>
                    </div>

                    <div className="box-info">
                      <div className="info-tit">재직상태</div>
                      <div className="info-cont">재직자</div>
                    </div>
                  </div>
                  <div className="box-bottom">
                    <div className="inner-box">
                      <button onClick={onToggle}>정보 보기</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isModal && <StaffInfoModal onToggle={onToggle} />}
    </>
  );
};

export default StaffList;
