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
