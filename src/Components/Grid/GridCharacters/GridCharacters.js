import React from "react";
import Character from "../../Character/Character";
import CharacterGhost from "../../CharacterGhost/CharacterGhost";

function GridCharacters(props) {
  const characters = [];

  characters.push(
    <CharacterGhost
      position={props.state.ghost}
      tileSize={props.state.tileSize}
    />
  );

  for (let i = 0; i < props.state.characters.length; i++) {
    characters.push(
      <Character
        key={"character" + i}
        props={props.state.characters[i]}
        highlight={i === props.state.turn ? "true" : "false"}
      />
    );
  }

  return (
    <div className="Grid GridCharacters" style={props.styling}>
      {props.state.editMode ? "" : characters}
    </div>
  );
}

export default GridCharacters;
