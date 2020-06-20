import React, { useContext, useState } from "react";
import "./Character.css";

import { GameContext } from "../../State/Context.js";

//Gets props from context
function Character(props) {
  return (
    <div
      className={
        props.highlight === "true"
          ? "Character HighlightCharacter"
          : "Character"
      }
      style={{
        height: props.tileSize / 2 + "rem",
        width: props.tileSize / 2 + "rem",
        gridColumnStart: props.features.position.x,
        gridRowStart: props.features.position.y,
        backgroundColor: props.features.color,
        fontSize: props.tileSize / 3 + "rem",
      }}
    >
      {props.features.name.slice(0, 1)}
    </div>
  );
}

export default Character;
