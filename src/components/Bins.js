import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Bins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: []
    };
  }

  componentDidMount() {
    axios
      .get(`/api/getshelf/${this.props.match.params.shelf}`)
      .then(res => this.setState({ shelf: res.data }));
  }

  render() {
    console.log(this.state);
    let displayBins = this.state.shelf.map(e => {
      return (
        <Link to={`/item/${e.id}`} key={e.id}>
          <div>
            <h2>Bin {e.bin}</h2>
          </div>
        </Link>
      );
    });
    return (
      <div>
        <h1>Bins</h1>
        {displayBins}
        <Link to={`/add/${this.props.match.params.shelf}`}>
          <button>+ Add Inventory</button>
        </Link>
      </div>
    );
  }
}
