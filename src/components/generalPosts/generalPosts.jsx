import React from "react";
import "./generalPosts.css";
function generalPosts() {
  return (
    <div className="generalPost-container">
      <div className="userInfo">
        <img
          className="user-profile-pic"
          src="https://i.pinimg.com/564x/5a/01/bd/5a01bdb181c3d5afe44f7bb5e4b83d00.jpg"
        ></img>
        <div className="userId">UserID</div>
      </div>
      <div className="post-desc">Desc of post</div>
      <div className="categories">
        <ul>
          <li>Recreational</li>
          <li>Fun</li>
          <li>Eat</li>
        </ul>
      </div>
    </div>
  );
}

export default generalPosts;
