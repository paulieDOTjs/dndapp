import React from "react";
import "./MiniTile.css";

import * as Actions from "../../State/Actions";

function MiniTile(props) {
  return (
    <div
      className={props.TileProperties.className + " MiniTile"}
      data-clickable={true}
      data-action={props.editMode ? Actions.SET_OBJECT : Actions.SET_CHARACTER}
      data-row={props.row}
      data-col={props.col}
      style={{ height: `${props.size}px`, width: `${props.size}px` }}
    ></div>
  );
}

export default MiniTile;
