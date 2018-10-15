import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div>
        <section>
          <Link to="/bins/a">
            <div>Shelf A</div>
          </Link>
          <Link to="/bins/b">
            <div>Shelf B</div>
          </Link>
          <Link to="/bins/c">
            <div>Shelf C</div>
          </Link>
          <Link to="/bins/d">
            <div>Shelf D</div>
          </Link>
        </section>
      </div>
    );
  }
}
