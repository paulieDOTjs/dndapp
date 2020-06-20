import React from "react";
import "./PlayPage.css";
import GridContainer from "../../Components/Grid/GridContainer/GridContainer";
import SideBar from "../../Components/SideBar/SideBar";

export function MainMainPage() {
  console.log("hi");

  return (
    <>
      <SideBar />
      <PlayPage />
    </>
  );
}

function PlayPage(props) {
  return (
    <div className="PlayPage">
      <GridContainer />
    </div>
  );
}

export default PlayPage;
