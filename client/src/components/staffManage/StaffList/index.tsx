import "./styles.scss";
import { BsPersonFill } from "react-icons/bs";
import useModal from "hooks/common/useModal";
import BigModal from "components/Modal/BigModal";
import StaffInfo from "components/staffManage/StaffInfo";

const StaffList = () => {
  const { isModal, onModalToggle } = useModal();

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
                      <button onClick={onModalToggle}>정보 보기</button>
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
                      <button onClick={onModalToggle}>정보 보기</button>
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
                      <button onClick={onModalToggle}>정보 보기</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isModal && (
        <BigModal title={"직원정보"} buttonName={"수정완료"} onModalToggle={onModalToggle}>
          <StaffInfo />
        </BigModal>
      )}
    </>
  );
};

export default StaffList;
