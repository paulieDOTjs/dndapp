function TileProperties(row, column, tileMap, tileMapDirectory) {
  /*************************************************
   * This is the tile map of the row that this tile
   * is a part of.
   ************************************************/
  const tileMapThisRow = tileMap[row - 1];

  /*************************************************
   * This is the individual character of the tile map
   * that represents this individual tile
   *************************************************/
  const thisRowAndCol = tileMapThisRow.charAt(column - 1);

  return tileMapDirectory[thisRowAndCol];
}

export default TileProperties;
