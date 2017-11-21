import { combineReducers } from "redux";
import { ADD_INGREDIENT } from "../constants";

const ingredientReducer = (ingredients = [], action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return ingredients.concat(action.ingredient);
    default:
      return ingredients;
  }
};

const rootReducer = combineReducers({
  ingredients: ingredientReducer
});

export default rootReducer;
