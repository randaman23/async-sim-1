import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css'
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="shelves">
          <Link to="/bins/A">
            <h2>Shelf A</h2>
          </Link>
          <Link to="/bins/B">
            <h2>Shelf B</h2>
          </Link>
          <Link to="/bins/C">
            <h2>Shelf C</h2>
          </Link>
          <Link to="/bins/D">
            <h2>Shelf D</h2>
          </Link>
        </div>
      </div>
    );
  }
}
