import React, { useContext } from "react";
import "./LogoutPage.css";

import { AuthContext } from "../../State/auth/auth";
import CenterSquare from "../CenterSquare/CenterSquare";

function LogoutPage(props) {
  const { user } = useContext(AuthContext);

  return (
    <CenterSquare>
      <div className="LogoutPage">
        {user ? "There was an error, try again" : "You are logged out"}{" "}
      </div>
    </CenterSquare>
  );
}

export default LogoutPage;
