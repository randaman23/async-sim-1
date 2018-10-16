import React, { Component } from "react";
import axios from "axios";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: [],
      name: "",
      price: 0
    };
  }
  componentDidMount() {
    axios.get(`/api/getshelf/${this.props.match.params.shelf}`).then(res => {
      this.setState({
        shelf: res.data.map(e => {
          return { shelf: e.shelf, bin: e.bin };
        })
      });
    });
  }
  handleAdd() {
    // let prod = this.state.shelf.map((e,i) => {
    //   return e.shelf[i]
    // })
    axios.post(`/api/bin/${this.props.match.params.shelf}`);
  }
  render() {
    console.log(this.state.shelf);
    return (
      <div>
        <h1>Add</h1>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="price" />
        <input type="text" placeholder="image" />
        <button onClick={this.handleAdd}>+ Add Inventory</button>
      </div>
    );
  }
}
