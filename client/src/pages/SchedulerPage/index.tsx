import Calender from "components/Calendar";
import BigModal from "components/Modal/BigModal";
import AddScheduleForm from "components/scheduler/AddScheduleForm";
import useModal from "hooks/common/useModal";
import "./styles.scss";

const SchedulerPage = () => {
  const { isModal, onModalToggle } = useModal();
  return (
    <>
      <div id="SchedulerPage" className="side-layout">
        <div className="schedule-nav">
          <button className="btn-type1" onClick={onModalToggle}>
            스케줄 추가
          </button>
        </div>
        <Calender />
      </div>
      {isModal && (
        <BigModal title={"스케줄 추가"} buttonName={"완료"} onModalToggle={onModalToggle}>
          <AddScheduleForm />
        </BigModal>
      )}
    </>
  );
};

export default SchedulerPage;
