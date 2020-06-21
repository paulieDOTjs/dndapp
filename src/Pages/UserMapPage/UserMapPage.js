import React, { useContext } from "react";
import "./UserMapPage.css";
import MapFinder from "../../Components/MapFinder/MapFinder";
import { AuthContext } from "../../State/auth/auth";
import CenterSquare from "../MainPage/CenterSquare";

function UserMapPage(props) {
  const { user } = useContext(AuthContext);

  return (
    <CenterSquare>
      <div className="UserMapPage">
        {user ? (
          <MapFinder type={"user/" + user.name} />
        ) : (
          <p>You have to be signed in to do this</p>
        )}
      </div>
    </CenterSquare>
  );
}

export default UserMapPage;
