import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="shelves">
          <br />
          <Link to="/bins/A">
            <button>Shelf A</button>
          </Link>
          <br />
          <Link to="/bins/B">
            <button>Shelf B</button>
          </Link>
          <br />
          <Link to="/bins/C">
            <button>Shelf C</button>
          </Link>
          <br />
          <Link to="/bins/D">
            <button>Shelf D</button>
          </Link>
        </div>
      </div>
    );
  }
}
