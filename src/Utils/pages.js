import LoginPage from "../Pages/LoginPage/LoginPage";
import PlayPage from "../Pages/PlayPage/PlayPage";
import HomePage from "../Pages/HomePage/HomePage";
import GameLobby from "../Pages/GameLobby/GameLobby";

const pages = [
  {
    Title: "Home",
    url: "/",
    page: HomePage,
  },
  {
    Title: "Game Lobby",
    url: "/games",
    page: GameLobby,
  },
  {
    Title: "Create",
    url: "/create",
    page: PlayPage,
  },
  {
    Title: "Account",
    url: "/account",
    page: LoginPage,
  },
];

export default pages;
