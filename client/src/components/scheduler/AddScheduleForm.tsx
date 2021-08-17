import styled from "styled-components";

const AddScheduleForm = () => {
  return (
    <AddScheduleFormBlock>

          <form>
            <label>직원선택</label>
            <select>
              <option>직원을 선택해주세요</option>
              <option value="">이도현</option>
            </select>
            <label>시작날짜</label>

            <label>월요일</label>
            <div className="choose-time">
              <input type="time" id="start_time" />
              ~
              <input type="time" id="end_time" />
            </div>

            <label>화요일</label>
            <div className="choose-time">
              <input type="time" id="start_time" />
              ~
              <input type="time" id="end_time" />
            </div>

            <label>수요일</label>
            <div className="choose-time">
              <input type="time" id="start_time" />
              ~
              <input type="time" id="end_time" />
            </div>

            <label>목요일</label>
            <div className="choose-time">
              <input type="time" id="start_time" />
              ~
              <input type="time" id="end_time" />
            </div>

            <label>금요일</label>
            <div className="choose-time">
              <input type="time" id="start_time" />
              ~
              <input type="time" id="end_time" />
            </div>

            <label>토요일</label>
            <div className="choose-time">
              <input type="time" id="start_time" />
              ~
              <input type="time" id="end_time" />
            </div>

            <label>일요일</label>
            <div className="choose-time">
              <input type="time" id="start_time" />
              ~
              <input type="time" id="end_time" />
            </div>
          </form>
      
    </AddScheduleFormBlock>
  );
};

const AddScheduleFormBlock = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    label {
      margin-bottom: 1rem;
    }
    input,
    select {
      width: 100%;
      padding: 0.75rem;
      margin-bottom: 2rem;
    }

    .radio-group {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 2rem;
      padding: 1rem;

      label {
        flex-shrink: 0;
        margin-bottom: 0;
      }
      input {
        width: 20px;
        margin-bottom: 0;
      }
    }

    .choose-time {
      display: flex;
      align-items: center;
      input {
        margin-bottom: 0;
        border: none;
        border-bottom: 1px solid $border;
      }
      margin-bottom: 2rem;
    }
  }
`;

export default AddScheduleForm;
