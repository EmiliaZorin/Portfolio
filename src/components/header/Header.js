import React, { Component } from "react";
import './style.css';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                Hey! I`m {resumeData.name}.
              </h1>
              <h3 style={{ color: "#000000", fontFamily: "sans-serif" }}>
                {resumeData.generalInfo}
              </h3>
              <hr />
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
