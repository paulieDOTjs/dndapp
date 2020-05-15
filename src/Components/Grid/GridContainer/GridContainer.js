import React, { useContext } from "react";
import "../Grid.scss";

import { GameContext } from "../../../State/Context.js";
import Resizer from "../../Resizer/Resizer";
import GridTiles from "../GridTiles/GridTiles";
import GridCharacters from "../GridCharacters/GridCharacters";

function GridContainer(props) {
  const { state } = useContext(GameContext);

  /* ***********************************************************
   * This is styling that is applied to the grid so that it has
   * the correct number of rows and columns based on state. It
   * will also center it on the screen.
   ************************************************************/
  const styling = {
    gridTemplateColumns: `repeat(${state.tileMap[0].length}, ${state.tileSize}rem)`,
    gridTemplateRows: `repeat(${state.tileMap.length}, ${state.tileSize}rem)`,
  };

  const containerStyling = {
    height: `Calc(${state.tileMap.length * state.tileSize}rem + ${
      state.tileMap.length
    }px + ${state.tileMap.length}px )`,
    width: `Calc(${state.tileMap[0].length * state.tileSize}rem + ${
      state.tileMap[0].length
    }px + ${state.tileMap[0].length}px )`,
  };

  console.log(styling);
  return (
    <div
      className="GridContainer"
      style={{
        containerStyling,
      }}
    >
      <GridCharacters styling={styling} state={state} />
      <GridTiles styling={styling} state={state} />
      <Resizer />
    </div>
  );
}

export default GridContainer;
