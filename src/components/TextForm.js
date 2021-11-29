import React, { useState } from "react";

export default function TextForm(props) {
  const handleupClick = () => {
    // console.log("upperCase button clicked" + text);
    let uppertext = text.toUpperCase();
    props.showAlert("Converted To Upper Case", "success");
    setText(uppertext);
  };

  const handleDownClick = () => {
    let lower = text.toLowerCase();
    props.showAlert("Converted To Lower Case", "success");
    setText(lower);
  };

  const handleClear = () => {
    let clear = "";
    props.showAlert("Text Area clear", "danger  ");
    setText(clear);
  };

  const handleonchnge = (event) => {
    // console.log("button clicked");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    props.showAlert("Copied to Clipboard", "success");
    navigator.clipboard.writeText(text.value);
  };

  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Space Removed", "success");
  };

  const [text, setText] = useState("enter text here..");
  return (
    <>
      <div>
        <div
          className="container mb-3"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            // color: props.color === "red" ? "white" : "red",
          }}
        >
          <h4>{props.heading}</h4>
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchnge}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
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

      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h5>Your Text Summary</h5>

        <p>
          {text.split(" ").length - 1} word and {text.length} character
          {/* {text.split(" ").join().length} word and {text.length} character */}
        </p>
        <p> {0.008 * text.split(" ").length}Minute To Read</p>
        {/* <p> {0.008 * text.split(" ").join().length}Minute To Read</p> */}
        <h6>Preview</h6>
        <p>{text.length === 0 ? text : "enter something to preview it..."}</p>
      </div>
    </>
  );
}
