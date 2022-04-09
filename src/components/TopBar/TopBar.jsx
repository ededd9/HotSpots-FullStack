import React from "react";
import "./TopBar.css";
function TopBar() {
  return (
    <>
      <div className="navbar">
        <ul className="topList">
          <div className="topLeft">
            <li>HotSpots</li>
          </div>
          <div className="topRight">
            <li>Login</li>
            <li>Register</li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default TopBar;
