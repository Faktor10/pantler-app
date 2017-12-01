import {
  ADD_RECIPE,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT
} from "../constants/ActionTypes";

export const ingredientReducer = (ingredients = [], action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return ingredients.concat(action.ingredient);
    case REMOVE_INGREDIENT:
      return ingredients.filter(ingredient => {
        return ingredient.id !== action.id;
      });
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
