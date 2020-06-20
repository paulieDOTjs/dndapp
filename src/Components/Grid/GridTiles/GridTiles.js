import React from "react";
import "../Grid.scss";
import Tile from "../../Tile/Tile";
import TileProperties from "./TileProperties";
import { tileMapDirectory } from "../../../Utils/tileMapDirectory";

function GridTiles(props) {
  //An array that will hold all the tiles to be placed on the grid
  const tiles = [];

  //For loop to create the tiles
  //It will run for as many times as rows times columns from props
  for (let i = 0; i < props.tileMap.length * props.tileMap[0].length; i++) {
    //Does math to get the row number this tile is in
    const rowNumber = Math.floor(i / props.tileMap[0].length) + 1;

    //Does math to get the column number this tile is in
    const colNumber =
      i + 1 - Math.floor((rowNumber - 1) * props.tileMap[0].length);

    //Gives an ID based on the row and column number
    const tileID = `Row + ${rowNumber} Col + ${colNumber}`;

    //Creates the tile and pushes it into the tiles array
    tiles.push(
      <Tile
        row={rowNumber}
        col={colNumber}
        id={tileID}
        key={tileID}
        TileProperties={TileProperties(
          rowNumber,
          colNumber,
          props.tileMap,
          tileMapDirectory
        )}
        editMode={props.editMode}
        tileSize={props.tileSize}
      ></Tile>
    );
  }

  return (
    <div
      className="Grid GridTiles"
      style={{
        gridTemplateColumns: props.styling.gridTemplateColumns,
        gridTemplateRows: props.styling.gridTemplateRows,
        height: props.styling.height,
        width: props.styling.width,
      }}
    >
      {tiles}
    </div>
  );
}

export default GridTiles;
