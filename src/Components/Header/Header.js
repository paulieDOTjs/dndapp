import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import pages from "../../Utils/pages";

import "./Header.css";

function Header(props) {
  return (
    <div className="Header">
      <div className="row">
        <h1 className="col-6 AppTitle">Battlemap</h1>
        <div className="col-6">
          <ul className="NavList">
            {pages.map((page) => (
              <li key={page.Title + "li"} className="NavLink">
                <Link
                  key={page.Title + "link"}
                  style={{ color: "#540000" }}
                  to={page.url}
                >
                  {page.Title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
