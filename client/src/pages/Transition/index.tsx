import TransitionList from "components/TransitionList";
import Aside from "layouts/Aside";
import Header from "layouts/Header";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

const Transition = () => {
  const [startDate, setStartDate] = useState(new Date());

  const date = {
    year: startDate.getFullYear(),
    month: startDate.getMonth() + 1,
    day: startDate.getDate(),
  };
  return (
    <>
      <Header />
      <Aside />
      <div id="Transition" className="side-layout">
        <div className="content">
          <div className="cont-box">
            <div className="left-cont">
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => {
                  console.log(date);
                  setStartDate(date);
                }}
                inline
              />
            </div>
            <div className="right-cont">
              <TransitionList date={date} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transition;
