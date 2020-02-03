import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <h1 className="chatName">Let's Chat</h1>
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput"
            type="text"
            onChange={event => setRoom(event.target.value)}
          />
        </div>

        <Link to={`/chat?name=${name}&room=${room}`}>
          <button className="button" type="submit" disabled={!name || !room}>
            Sign In
          </button>
        </Link>
      </div>
      <a
        className="aboutMeLink"
        href="https://www.linkedin.com/in/sourav-prasad-414562151/"
        target="_blank"
      >
        <h1 className="aboutMe">About Sourav</h1>
      </a>
    </div>
  );
};

export default Join;
