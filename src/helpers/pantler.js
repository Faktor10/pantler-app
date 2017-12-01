import { API_SERVER } from "../constants/constants";
import uuid from "uuid";

export const getIngredients = () => {
  const init = {
    mode: "cors"
  };

  console.log("this is loading");

  fetch(API_SERVER, init)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      //this.setState({ ingredients: data });
    });
};

export function newIngredient(attrs = {}) {
  const ingredient = {
    name: attrs.name || "Ingredient name",
    quantity: attrs.quantity || 0,
    measurement: attrs.measurement || "Unit",
    _id: uuid.v4()
  };

  return ingredient;
}

const createIngredient = ingredient => {
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

const updateIngredient = attrs => {
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
