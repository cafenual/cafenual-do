import React from "react";
import "./styles.scss";

const WorkListItem = ({ work }: any) => {
  return (
    <>
      <div id="WorkListItem">
        {work.map((w: any, index: number) => (
          <div className="item" key={index}>
            {w}
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkListItem;
