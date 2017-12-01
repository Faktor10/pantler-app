import {
  ADD_RECIPE,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  INGREDIENT_IS_LOADING,
  INGREDIENT_LOADING_ERRORED,
  INGREDIENTS_FETCHED
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

export const ingredientHasErrored = (state = false, action) => {
  switch (action.type) {
    case INGREDIENT_LOADING_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
};

export const ingredientIsLoading = (state = false, action) => {
  switch (action.type) {
    case INGREDIENT_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};

export const ingredientsLoaded = (state = [], action) => {
  switch (action.type) {
    case INGREDIENTS_FETCHED:
      return action.ingredients;
    default:
      return state;
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
