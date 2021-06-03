import ManualCategory from "components/ManualCategory";
import ManualList from "components/ManualList";
import ManualUpload from "components/ManualUpload";
import React, { useState } from "react";
import "./styles.scss";

const WorkManual = ({ match }: any) => {
  // 카테고리가 선택되지 않았으면 기본값 common 사용
  console.log(match);
  const category = match.params.category || "common";
  console.log(category);
  const [uploadState, setUploadState] = useState(false);

  const ToggleButton = () => {
    setUploadState(!uploadState);
  };

  return (
    <>
      <div id="WorkManual" className="page-layout">
        <div className="tit">
          <h4 className="tit-corp">업무매뉴얼</h4>
          <div className="upload">
            <button onClick={ToggleButton}>추가</button>
          </div>
        </div>
        <div className="cont">
          <ManualCategory />
          <ManualList category={category} />
        </div>
      </div>
      {uploadState && (
        <ManualUpload uploadState={uploadState} ToggleButton={ToggleButton} />
      )}
    </>
  );
};

export default WorkManual;
