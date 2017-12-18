import React, { Component } from "react";

class PizzaCreateForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.createPizza}>
        <label>Make a pizza!</label>
        <input type="text" placeholder="Pizza Name" name="name" />
        <input type="text" placeholder="Toppings" name="toppings" />
        <input type="text" placeholder="Price" name="price" />
        <input type="submit" />
      </form>
    );
  }
}

export default PizzaCreateForm;
