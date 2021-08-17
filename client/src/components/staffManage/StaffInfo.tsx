import styled from "styled-components";

const StaffInfo = () => {
  return (
    <StaffInfoBlock>
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
        <input type="text" value="8720" onChange={() => console.log("test")} />
      </div>

      <div className="inner-form">
        <label>재직 상태</label>
        <select name="" id="">
          <option value="">재직자</option>
          <option value="">퇴직자</option>
        </select>
      </div>
    </StaffInfoBlock>
  );
};

const StaffInfoBlock = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .inner-form {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    label {
      width: 150px;
      display: block;
    }
    input,
    select {
      border: 1px solid #bcbbbb;
      width: 400px;
      padding: 15px;
      border-radius: 8px;
    }
    button {
      width: 80px;
      height: 40px;
      font-size: 15px;
      margin-left: 20px;
    }
  }
`;

export default StaffInfo;
