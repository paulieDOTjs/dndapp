import React from "react";
import Character from "../../Character/Character";
import CharacterGhost from "../../CharacterGhost/CharacterGhost";

function GridCharacters(props) {
  const characters = [];

  characters.push(
    <CharacterGhost
      key="ghost"
      position={props.ghost}
      tileSize={props.tileSize}
    />
  );

  props.characters.forEach((character, i) => {
    characters.push(
      <Character
        tileSize={props.tileSize}
        key={character.id}
        features={character}
        highlight={i === props.turn ? "true" : "false"}
      />
    );
  });

  return (
    <div className="Grid GridCharacters" style={props.styling}>
      {props.editMode ? "" : characters}
    </div>
  );
}

export default GridCharacters;
