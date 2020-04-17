function calculateMovementRemaining(temporaryState, newPosition) {
  /*******************************************************
  If the the x or y position is different change the move
  speed remaining to be -5. If the x AND y are different
  AND state.diagmove is true then set movement speed to be
  -10 and state.diagmove to be false. If x AND y are
  different BUT state.diagmove is false movement speed
  is -5. This makes it so every other time a diagonal
  movement is made 5 or 10 movement is used.
  *******************************************************/

  if (
    //If there has been any movement
    newPosition.x !==
      temporaryState.characters[temporaryState.turn].position.x ||
    newPosition.y !== temporaryState.characters[temporaryState.turn].position.y
  ) {
    if (
      //If there has been movement on both x and y and diagmove is true
      newPosition.x !==
        temporaryState.characters[temporaryState.turn].position.x &&
      newPosition.y !==
        temporaryState.characters[temporaryState.turn].position.y &&
      temporaryState.diagMove
    ) {
      temporaryState.movespeedRemaining =
        temporaryState.movespeedRemaining - 10;
      //If a diagonal move is attempted and it will take 10, but only 5 is remaining it will stop it.
      if (temporaryState.movespeedRemaining === -5) {
        return temporaryState;
      }
      temporaryState.diagMove = false;
    } else if (
      newPosition.x !==
        temporaryState.characters[temporaryState.turn].position.x &&
      newPosition.y !==
        temporaryState.characters[temporaryState.turn].position.y &&
      !temporaryState.diagMove
    ) {
      temporaryState.movespeedRemaining = temporaryState.movespeedRemaining - 5;
      temporaryState.diagMove = true;
    } else {
      temporaryState.movespeedRemaining = temporaryState.movespeedRemaining - 5;
    }
  }
}

export default calculateMovementRemaining;
