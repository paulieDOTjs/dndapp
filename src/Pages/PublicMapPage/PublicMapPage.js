import React from "react";
import "./PublicMapPage.css";
import MapFinder from "../../Components/MapFinder/MapFinder";
import CenterSquare from "../MainPage/CenterSquare";

function PublicMapPage(props) {
  return (
    <CenterSquare>
      <div className="PublicMapPage">
        <MapFinder type={"public"} />
      </div>
    </CenterSquare>
  );
}

export default PublicMapPage;
