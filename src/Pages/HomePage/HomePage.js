import React from "react";
import "./HomePage.css";
import CenterSquare from "../CenterSquare/CenterSquare";

function HomePage(props) {
  return (
    <CenterSquare>
      <div className="HomePage">
        <h1>Welcome to the TTRPG Battle Map Simulator!</h1>
      </div>
    </CenterSquare>
  );
}

export default HomePage;
