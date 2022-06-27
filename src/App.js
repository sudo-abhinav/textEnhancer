// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  //

  const [mode, setMode] = useState("light");
  const [color, setcolor] = useState("success");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //TODO bug in this part.....

  function togglebtn() {
    if (color === "success") {
      setcolor("red");
      // setcolor("#EB4D4B");
      document.body.style.backgroundColor = "red";
      showAlert("red mode has been enabled", "danger");
      console.log("not working");
    } else {
      setcolor("success");
      document.body.style.backgroundColor = "white";
      showAlert("white mode has been enabled", "success");
      console.log("working");
    }
  }

  //TODO ........

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled", "success");
      console.log("if part");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      console.log("else part");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutTExt=" About" /> */}
      {/* <Router> */}
      <Navbar
        title="TextChanger"
        // title="anything"
        aboutTExt=" About"
        mode={mode}
        color={color}
        toggleMode={toggleMode}
        togglebtn={togglebtn}
      />
      <Alert alert={alert} />
      {/* <Navbar /> */}
      <div className="container my-3">
        {/* <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route> */}

        {/* <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter The Text To Analyze"
          mode={mode}
          // color={color}
          // togglebtn={togglebtn}
        />
        {/* </Route> */}
        {/* </Switch> */}

        {/* <About /> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
