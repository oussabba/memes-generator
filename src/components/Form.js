import React from "react";

export function Form() {
  return (
    <div className="container">
      <form>
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
        <button>Get a new meme image &#128510;</button>
      </form>
    </div>
  );
}
