import React, { Component } from "react";
import axios from "axios";
import './AddProducts.css'

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: [],
      name: "",
      img: "",
      price: 0,
      bin: 1
    };
    this.handleName = this.handleName.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
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

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handlePrice(e) {
    this.setState({ price: e.target.value });
  }

  handleImg(e) {
    this.setState({ img: e.target.value });
  }

  handleAdd() {
    const { name, price, img, bin } = this.state;
    axios.post(`/api/bin/${this.props.match.params.shelf}`, {
      name,
      price,
      img,
      bin
    });
    // }
  }
  render() {
    console.log(this.state.shelf);
    return (
      <div className="add_prod_main">
        <h1>Add</h1>
        <p>Name</p>
        <input type="text" placeholder="name" onChange={this.handleName} />
        <p>Price</p>
        <input type="text" placeholder="price" onChange={this.handlePrice} />
        <p>Image</p>
        <input type="text" placeholder="image" onChange={this.handleImg} />{" "}
        <br />
        <button onClick={this.handleAdd}>+ Add Inventory</button>
      </div>
    );
  }
}
