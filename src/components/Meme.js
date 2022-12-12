import { React, useState } from "react";
import memesData from "../memesData";

export function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imageflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: memesArray[randomNumber].url,
      };
    });
  }
  return (
    <div className="container">
      <div>
        <input
          type="text"
          name="top-text"
          id="top-text"
          placeholder="Top text"
        />
        <input
          type="text"
          name="bottom-text"
          id="bottom-text"
          placeholder="Bottom text"
        />
        <button onClick={getMemeImage}>Get a new meme image &#128510;</button>
      </div>
      <img className="meme-image" src={meme.randomImage} alt="meme" />
    </div>
  );
}
