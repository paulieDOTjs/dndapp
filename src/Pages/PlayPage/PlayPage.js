import React from "react";
import "./PlayPage.css";
import GridContainer from "../../Components/Grid/GridContainer/GridContainer";
import SideBar from "../../Components/SideBar/SideBar";

function PlayPage(props) {
  return (
    <>
      <SideBar />
      <div className="PlayPage">
        <GridContainer />
      </div>
    </>
  );
}

export default PlayPage;
