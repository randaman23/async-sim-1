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
  handleChanged() {
    this.setState({
      disabled: !this.state.disabled,
      showEdit: "hide",
      showSave: "show"
    });
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangePrice(e) {
    this.setState({ price: e.target.value });
  }

  handleDelete = () => {
    axios.delete(`/api/item/${this.props.match.params.id}`).then(
      res => console.log("deleted")
      // (`/api/getshelf/${this.props.match.params.shelf}`)
    );
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
          />
          <h2>Price</h2>
          <input
            type="text"
            disabled={this.state.disabled}
            value={this.state.price}
          />
          <div className="edit_save_delete">
            
              <button>Edit</button>
           
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
