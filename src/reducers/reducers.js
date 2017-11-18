import { combineReducers } from "redux";

const ingredientReducer = (ingredients = [], action) => {
  if (action.type === "ADD_INGREDIENT") {
    return ingredients.concat(action.ingredient);
  }
};
