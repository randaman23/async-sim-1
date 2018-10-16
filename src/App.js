import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Bins from "./components/Bins";
import Item from "./components/Item";
import AddProduct from "./components/AddProduct";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/bins/:shelf" component={Bins} />
            <Route path="/item/:id" component={Item} />
            <Route path="/add/:shelf" component={AddProduct} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
