import React from "react";
import "./GameLobby.scss";
import CenterSquare from "../CenterSquare/CenterSquare";
import findGame from "../../firebase/findGame";

function GameLobby(props) {
  return (
    <CenterSquare>
      <div className="GameLobby">
        <h1>Game Lobby</h1>
      </div>
    </CenterSquare>
  );
}

export default GameLobby;
