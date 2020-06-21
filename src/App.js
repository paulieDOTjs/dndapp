import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import GameProvider from "./State/Context";

import { Auth } from "./State/auth/auth";
import pages from "./Utils/pages";

function App(props) {
  return (
    <div className="App">
      <Auth>
        <GameProvider>
          <Router>
            <Header />
            <Switch>
              {pages.map((page) => (
                <Route
                  key={page.url}
                  exact
                  path={page.url}
                  component={page.page}
                />
              ))}
            </Switch>
          </Router>
        </GameProvider>
      </Auth>
    </div>
  );
}

export default App;
