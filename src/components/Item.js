import React, { Component } from "react";
import axios from "axios";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      name: "",
      price: "",
      img: ""
    };
  }
  componentDidMount() {
    axios.get(`/api/item/${this.props.match.params.id}`).then(res =>
      this.setState({
        item: res.data[0],
        name: res.data[0].prod_name,
        price: res.data[0].price,
        img: res.data[0].img
      })
    );
  }

  handleName(val){
    this.setState({name: val})
  }

  render() {
    console.log(this.state.item);
    return (
      <div>
        <h1>Item</h1>
        <img src={this.state.img} alt="" />
        <h2>Name</h2>
        <input type="text" placeholder={this.state.name}/>
        <h2>Price</h2>
        <input type="text" placeholder={this.state.price} />
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
}
