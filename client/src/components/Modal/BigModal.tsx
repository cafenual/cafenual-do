import { palette } from "lib/styles/color";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

interface BigModalProps {
  title: string;
  buttonName: string;
  onModalToggle: () => void;
  children: React.ReactNode;
}

const BigModal = ({
  title,
  onModalToggle,
  children,
  buttonName,
}: BigModalProps) => {
  return (
    <BigModalBlock>
      <div className="modal-alert">
        <div className="modal-top"></div>

        <div className="modal-wrapper">
          <div className="wrapper-header">{title} </div>
          {children}
          <button
            type="button"
            onClick={onModalToggle}
            className="wrapper-button"
          >
            <AiOutlineClose size="30" />
          </button>
        </div>
        <div className="message-footer">
          <button className="message-btn">{buttonName}</button>
          <button
            type="button"
            onClick={onModalToggle}
            className="message-btn last"
          >
            닫기
          </button>
        </div>
      </div>
      <div className="message-background"></div>
    </BigModalBlock>
  );
};

const BigModalBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  .modal-alert {
    position: absolute;
    z-index: 9999;
    background-color: #fff;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 800px;
    height: 720px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    .modal-top {
      width: 100%;
      height: 10px;
      background: ${palette.mainColor};
      border-radius: 10px 10px 0 0;
    }
    .modal-wrapper {
      position: relative;
      margin: 25px;
      height: 100%;
      overflow: scroll;
      .wrapper-header {
        font-size: 14px;
        font-weight: 700;
        letter-spacing: -0.025em;
        color: ${palette.mainColor};
        padding-bottom: 20px;
        border-bottom: 1px solid #b2b2b2;
        margin-bottom: 25px;
      }

      .wrapper-button {
        position: absolute;
        right: 0;
        top: -7px;
        color: #999;
      }
    }

    .message-footer {
      text-align: center;
      background-color: #f5f5f5;
      padding: 30px 0;
      .message-btn {
        font-size: 13px;
        width: 150px;
        height: 45px;
        line-height: 45px;
        display: inline-block;
        border: 1px solid ${palette.mainColor};
        text-align: center;
        background-color: ${palette.mainColor};
        color: #fff;
        margin-right: 10px;
      }
      .last {
        background-color: #fff;
        color: ${palette.mainColor};
      }
    }
  }
  .message-background {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.5;
  }
`;

export default BigModal;
