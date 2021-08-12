import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import "./styles.scss";

// https://github.com/fullcalendar/fullcalendar-example-projects/blob/master/react-typescript/src/DemoApp.tsx

const Calendar = () => {
  const headerToolbar = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,listWeek",
  };
  return (
    <div id="Calendar">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={headerToolbar}
        events={[
          { title: "이소현", date: "2021-08-12" },
          { title: "신미르", date: "2021-08-12" },
          { title: "event 2", date: "2021-08-13" },
        ]}
        selectable={true}
        select={() => console.log("dd")}
        eventClick={() => console.log("ee")}
      />
    </div>
  );
};

export default Calendar;
