import React, { Component } from "react";
import Pizza from "./Pizza";
import PizzaCreateForm from "./PizzaCreateForm";

class PizzaList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzas: [],
      pizzaComponents: []
    };

    this.getPizzas();
  }

  getPizzas = () => {
    fetch("http://localhost:3000/pizzas")
      .then(res => res.json())
      .then(json =>
        this.setState({
          pizzas: json.pizzas,
          pizzaComponents: this.formatPizzas(json.pizzas)
        })
      );
  };

  formatPizzas = (pizzas, i) => {
    return pizzas.map(pizza => {
      return (
        <Pizza
          key={i}
          name={pizza.name}
          toppings={pizza.toppings}
          price={pizza.price}
        />
      );
    });
  };

  createPizza = event => {
    event.preventDefault();
    const pizzaName = event.target.name.value;
    const pizzaToppings = event.target.toppings.value;
    const pizzaPrice = event.target.price.value;

    event.target.name.value = "";
    event.target.toppings.value = "";
    event.target.price.value = "";

    fetch("http://localhost:3000/pizzas", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        name: pizzaName,
        toppings: pizzaToppings,
        price: pizzaPrice
      })
    })
      .then(res => res.json())
      .then(json => {
        this.setState(prevState => {
          return { pizzas: [...prevState.pizzas, json] };
        }, this.getPizzas);
      });
  };

  render() {
    return (
      <div>
        <PizzaCreateForm createPizza={this.createPizza} />
        {this.state.pizzaComponents}
      </div>
    );
  }
}

export default PizzaList;
