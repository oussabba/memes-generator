import React from "react";
import trollFace from "../assets/images/troll-face.png";

export function Header() {
  return (
    <header>
      <img src={trollFace} alt="memes generator logo" />
      <h1>Meme generator</h1>
    </header>
  );
}
