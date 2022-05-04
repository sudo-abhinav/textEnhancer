import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode
        // (props.mode, props.color)
      } bg-${props.mode.color} `}
    >
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/">TextUtlis</a> */}
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              // {/* <a className="nav-link" href="/">About🤔</a> */}
            {/* <Link className="nav-link active" to="/about"> */}
            {/* 🤔 */}
            {/* {props.aboutTExt} */}
            {/* </Link> */}
            {/* </li> */}
          </ul>

          <div
            type="button "
            className={`btn  disabled  btn-${
              props.color === "success" ? "danger" : "success"
            } mx-2`}
            onClick={props.togglebtn}
          >
            {/* <button */}
            {/* // type="button" */}
            {/* onClick={props.togglebtn} */}
            {/* // aria-disabled="true" */}
            {/* // className={`btn btn-success mx-2 disabled`} */}
            {/* > */}
            Enable RedMode
            {/* </button> */}
          </div>

          {/* // TODO Dark mode button  | */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTExt: PropTypes.string,
};
