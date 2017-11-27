import { ADD_INGREDIENT } from "../constants/ActionTypes";
import { ADD_RECIPE } from "../constants/ActionTypes";

export const ingredientReducer = (ingredients = [], action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return ingredients.concat(action.ingredient);
    default:
      return ingredients;
  }
};

export const recipeReducer = (recipes = [], action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return recipes.concat(action.recipe);
    default:
      return recipes;
  }
};

export const counterReducer = (count = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return count + action.amount;
    case "DECREMENT":
      return count - action.amount;
    default:
      return count;
  }
};
