import React from "react";
import "./CharacterGhost.css";

function CharacterGhost({ position, tileSize }) {
  return (
    <div
      className="Character"
      key="ghost"
      style={{
        height: tileSize / 2 + "rem",
        width: tileSize / 2 + "rem",
        gridColumnStart: position.x,
        gridRowStart: position.y,
        backgroundColor: "grey",
        fontSize: tileSize / 3 + "rem",
      }}
    ></div>
  );
}

export default CharacterGhost;
