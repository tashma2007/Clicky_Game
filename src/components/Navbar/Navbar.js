import React, { Component } from "react";
import "./Navbar.css";


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top header myHeader">
         <ul>
          <li className="itemLeft">Clicky Game!</li>
          <li className="itemCenter">Click an image to begin!</li>
          <li className="itemRight">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}




export default Navbar;