import React from "react";
import "./Tile.css";

import * as Actions from "../../State/Actions";

function Tile(props) {
  return (
    <div
      className={props.TileProperties.className + " Tile"}
      data-clickable={true}
      data-action={props.editMode ? Actions.SET_OBJECT : Actions.SET_CHARACTER}
      data-row={props.row}
      data-col={props.col}
      style={{
        maxHeight: props.tileSize + "rem",
        maxWidth: props.tileSize + "rem",
        gridColumn: `${props.col}`,
        gridRow: `${props.row}`,
      }}
    ></div>
  );
}

export default Tile;
