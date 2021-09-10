import React, { useState } from "react";

export default function TextForm(props) {
  const handleupClick = () => {
    // console.log("upperCase button clicked" + text);
    let uppertext = text.toUpperCase();
    setText(uppertext);
  };

  const handleDownClick = () => {
    let lower = text.toLowerCase();
    setText(lower);
  };

  const handleClear = () => {
    let clear = "";
    setText(clear);
  };

  const handleonchnge = (event) => {
    // console.log("button clicked");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("enter text here..");
  return (
    <>
      <div>
        <div className="container mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchnge}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-3" onClick={handleupClick}>
          convert to upperCase
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleDownClick}>
          convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleClear}>
          clear text
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleCopy}>
          copytext
        </button>
      </div>

      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").join().length} word and {text.length} character
        </p>
        <p> {0.008 * text.split(" ").join().length}Minute To Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
