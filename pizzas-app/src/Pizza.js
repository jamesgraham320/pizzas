import React, { Component } from "react";

class Pizza extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.toppings}</p>
        <p>{this.props.price}</p>
      </div>
    );
  }
}

export default Pizza;
