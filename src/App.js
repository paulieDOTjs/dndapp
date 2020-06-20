import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import GameProvider from "./State/Context";
import LoginPage from "./Pages/LoginPage/LoginPage";
import LogoutPage from "./Pages/LogoutPage/LogoutPage";
import { MainMainPage } from "./Pages/PlayPage/PlayPage";
import HomePage from "./Pages/HomePage/HomePage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import PublicMapPage from "./Pages/PublicMapPage/PublicMapPage";
import UserMapPage from "./Pages/UserMapPage/UserMapPage";

import { Auth } from "./State/auth/auth";

import db from "./firebase/db";

function App(props) {
  db.collection("games").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      console.log(change.doc.data());
    });
  });

  return (
    <div className="App">
      <Auth>
        <GameProvider>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/play" component={MainMainPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/logout" component={LogoutPage} />
              <Route path="/public" component={PublicMapPage} />
              <Route path="/userMaps" component={UserMapPage} />
            </Switch>
          </Router>
        </GameProvider>
      </Auth>
    </div>
  );
}

export default App;
