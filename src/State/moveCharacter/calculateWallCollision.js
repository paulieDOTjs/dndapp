import { tileMapDirectory } from "../../Utils/tileMapDirectory";

function calculateWallCollision(temporaryState, newPosition, e) {
  function keepInGrid(object) {
    if (object.x < 1) {
      object.x = 1;
    }
    if (object.y < 1) {
      object.y = 1;
    }
    if (object.x > temporaryState.numberOfCols) {
      object.x = temporaryState.numberOfCols;
    }
    if (object.y > temporaryState.numberOfRows) {
      object.y = temporaryState.numberOfRows;
    }
    return object;
  }

  if (e.code === "KeyA") {
    //Gets the value of the tile that the character is trying to move to
    try {
      let desiredTileValue = temporaryState.tileMap[newPosition.y - 1].charAt(
        newPosition.x - 2
      );

      //Checks the tileMapDirectory to see if it's a passable tile
      if (tileMapDirectory[desiredTileValue].passable) {
        newPosition.x--;
      }
      keepInGrid(newPosition);
    } catch {
      keepInGrid(newPosition);
    }
  } else if (e.code === "KeyD") {
    try {
      let desiredTileValue = temporaryState.tileMap[newPosition.y - 1].charAt(
        newPosition.x
      );
      if (tileMapDirectory[desiredTileValue].passable) {
        newPosition.x++;
      }
      keepInGrid(newPosition);
    } catch {
      keepInGrid(newPosition);
    }
  } else if (e.code === "KeyS") {
    try {
      let desiredTileValue = temporaryState.tileMap[newPosition.y].charAt(
        newPosition.x - 1
      );
      if (tileMapDirectory[desiredTileValue].passable) {
        newPosition.y++;
      }
      keepInGrid(newPosition);
    } catch {
      keepInGrid(newPosition);
    }
  } else if (e.code === "KeyW") {
    try {
      let desiredTileValue = temporaryState.tileMap[newPosition.y - 2].charAt(
        newPosition.x - 1
      );
      if (tileMapDirectory[desiredTileValue].passable) {
        newPosition.y--;
      }
      keepInGrid(newPosition);
    } catch {
      keepInGrid(newPosition);
    }
  } else if (e.code === "KeyQ") {
    try {
      let desiredTileValue = temporaryState.tileMap[newPosition.y - 2].charAt(
        newPosition.x - 2
      );
      if (tileMapDirectory[desiredTileValue].passable) {
        newPosition.y-- && newPosition.x--;
      }
      keepInGrid(newPosition);
    } catch {
      keepInGrid(newPosition);
    }
  } else if (e.code === "KeyE") {
    try {
      let desiredTileValue = temporaryState.tileMap[newPosition.y - 2].charAt(
        newPosition.x
      );
      if (tileMapDirectory[desiredTileValue].passable) {
        newPosition.y-- && newPosition.x++;
      }
      keepInGrid(newPosition);
    } catch {
      keepInGrid(newPosition);
    }
  } else if (e.code === "KeyZ") {
    try {
      let desiredTileValue = temporaryState.tileMap[newPosition.y].charAt(
        newPosition.x - 2
      );
      if (tileMapDirectory[desiredTileValue].passable) {
        newPosition.y++ && newPosition.x--;
      }
      keepInGrid(newPosition);
    } catch {
      keepInGrid(newPosition);
    }
  } else if (e.code === "KeyX") {
    try {
      let desiredTileValue = temporaryState.tileMap[newPosition.y].charAt(
        newPosition.x
      );
      if (tileMapDirectory[desiredTileValue].passable) {
        newPosition.y++ && newPosition.x++;
      }
      keepInGrid(newPosition);
    } catch {
      keepInGrid(newPosition);
    }
  }
}

export default calculateWallCollision;
