import React, { Component } from "react";
import './Header.css'
import logo from './images/logo.png'
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <img src={logo} alt=""/>
        </Link>
        <div>
          <h1>SHELFIE</h1>
        </div>
      </div>
    );
  }
}
