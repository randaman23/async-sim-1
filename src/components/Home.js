import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div>
        <section>
          <Link to="/bins/A">
            <div>Shelf A</div>
          </Link>
          <Link to="/bins/B">
            <div>Shelf B</div>
          </Link>
          <Link to="/bins/C">
            <div>Shelf C</div>
          </Link>
          <Link to="/bins/D">
            <div>Shelf D</div>
          </Link>
        </section>
      </div>
    );
  }
}