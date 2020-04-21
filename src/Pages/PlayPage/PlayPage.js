import React from "react";
import "./PlayPage.css";
import Grid from "../../Components/Grid/Grid";
import SideBar from "../../Components/SideBar/SideBar";

function PlayPage(props) {
  return (
    <div className="PlayPage">
      <SideBar />
      <div className="KeepGridInScreen">
        <Grid />
      </div>
    </div>
  );
}

export default PlayPage;
