import React from "react";
import "./CenterSquare.scss";

function CenterSquare(props) {
  return <div className="CenterSquare">{props.children}</div>;
}

export default CenterSquare;
