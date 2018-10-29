import React, { Component } from "react";
import "./Item.css";
import axios from "axios";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      name: "",
      price: "",
      img: "",
      showEdit: "show",
      showSave: "hide",
      disabled: true
    };
  }
  componentDidMount = () => {
    axios.get(`/api/item/${this.props.match.params.id}`).then(res =>
      this.setState({
        item: res.data[0],
        name: res.data[0].prod_name,
        price: res.data[0].price,
        img: res.data[0].img
      })
    );
  };
  handleEdit = () => {
    this.setState({
      disabled: false,
      showEdit: "hide",
      showSave: "show"
    });
  };
  handleSave = () => {
    const { name, price } = this.state;
    axios.put(`/api/item/${this.state.item.id}`, { name, price }).then(res => {
      this.setState({
        disabled: true,
        showEdit: "show",
        showSave: "hide",
        name: res.data.prod_name,
        price: res.data.price
      });
    });
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangePrice = e => {
    this.setState({ price: e.target.value });
  };

  handleDelete = () => {
    axios
      .delete(`/api/item/${this.props.match.params.id}`)
      .then(res => this.props.history.push(`/bins/${res.data[0].shelf}`));
  };

  render() {
    console.log(this.state.item);
    return (
      <div className="main_item">
        <div className="item_img">
          <img src={this.state.img} alt="" />
        </div>
        <div className="item_display">
          <h2>Name</h2>
          <input
            type="text"
            disabled={this.state.disabled}
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <h2>Price</h2>
          <input
            type="text"
            disabled={this.state.disabled}
            value={this.state.price}
            onChange={this.handleChangePrice}
          />
          <div className="edit_save_delete">
            {this.state.showEdit === "show" ? (
              <button className="edit_delete_button" onClick={this.handleEdit}>
                Edit
              </button>
            ) : (
              <button
                className={`save_button ${this.state.showSave}`}
                onClick={this.handleSave}
              >
                Save
              </button>
            )}

            <button className="edit_delete_button" onClick={this.handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
