import React, { Component } from "react";
import { newIngredient } from "../helpers";
import { API_SERVER } from "../constants";
import EditableIngredientList from "../components/EditableIngredientList";
import ToggleableIngredientForm from "./ToggleableIngredientForm";

class IngredientDashboard extends Component {
  state = {
    ingredients: []
  };

  componentDidMount() {
    const init = {
      mode: "cors"
    };

    fetch(API_SERVER, init)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ ingredients: data });
      });
  }

  handleCreateFormSubmit = ingredient => {
    this.createIngredient(ingredient);
  };

  createIngredient = ingredient => {
    const i = newIngredient(ingredient);
    this.setState({ ingredients: this.state.ingredients.concat(i) });
    fetch(API_SERVER, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      mode: "cors",
      method: "post",
      body: JSON.stringify(i)
    })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(res) {
        console.log(res);
      });
  };

  handleEditFormSubmit = attrs => {
    this.updateIngredient(attrs);
  };

  updateIngredient = attrs => {
    this.setState({
      ingredients: this.state.ingredients.map(ingredient => {
        if (ingredient._id === attrs.id) {
          fetch(`${API_SERVER}${attrs.id}`, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            mode: "cors",
            method: "put",
            body: JSON.stringify(attrs)
          })
            .then(function(res) {
              console.log(res);
            })
            .catch(function(res) {
              console.log(res);
            });
          return Object.assign({}, ingredient, {
            name: attrs.name,
            quantity: attrs.quantity,
            measurement: attrs.measurement
          });
        } else {
          return ingredient;
        }
      })
    });
  };

  handleTrashClick = ingredientId => {
    this.deleteIngredient(ingredientId);
    fetch(`${API_SERVER}${ingredientId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      mode: "cors",
      method: "delete"
    })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(res) {
        console.log(res);
      });
  };

  deleteIngredient = ingredientId => {
    const newIngredients = this.state.ingredients.filter(
      i => i._id !== ingredientId
    );
    this.setState({
      ingredients: newIngredients
    });
  };

  render() {
    return (
      <div>
        <div>
          <EditableIngredientList
            ingredients={this.state.ingredients}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
          />
          <ToggleableIngredientForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}

export default IngredientDashboard;
