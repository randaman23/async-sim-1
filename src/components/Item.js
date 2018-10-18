import React, { Component } from "react";
import axios from "axios";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      name: "",
      price: "",
      img: "",
      toggleEdit: false
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

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangePrice(e) {
    this.setState({ price: e.target.value });
  }

  handleDelete = () => {
    axios.delete(`/api/item/${this.props.match.params.id}`).then(res =>
      this.setState({
        item: res.data[0],
        name: res.data[0].prod_name,
        price: res.data[0].price,
        img: res.data[0].img
      })
    );
  };
  handleToggle() {
    this.setState({ toggleEdit: true });
  }

  render() {
    console.log(this.state.item);
    return (
      <div>
        <h1>Item</h1>
        <img src={this.state.img} alt="" />
        <h2>Name</h2>
        <input type="text" disabled placeholder={this.state.name} />
        <h2>Price</h2>
        <input type="text" disabled placeholder={this.state.price} />
        {this.state.toggleEdit === false ? (
          <button>Edit</button>
        ) : (
          <button onClick={this.handleToggle}>Save</button>
        )}
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}
