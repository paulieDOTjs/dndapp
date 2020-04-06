import calculateMovementRemaining from "./calculateMovementRemaining";
import calculateWallCollision from "./calculateWallCollision";

function moveCharacter(state, e) {
  const temporaryState = { ...state };

  //If it is not edit mode
  if (temporaryState.editMode) {
    return temporaryState;
  }

  //If the character has no remaining move speed they cannot move.
  if (temporaryState.movespeedRemaining < 5) {
    return temporaryState;
  }

  //Pulls in current position from the temporaryState to do some math on
  const newPosition = {
    ...temporaryState.characters[temporaryState.turn].position,
  };

  calculateWallCollision(temporaryState, newPosition, e);

  calculateMovementRemaining(temporaryState, newPosition);

  temporaryState.characters[temporaryState.turn].position = { ...newPosition };

  return temporaryState;
}

export default moveCharacter;
