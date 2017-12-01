import {
  ADD_INGREDIENT,
  INGREDIENT_IS_LOADING,
  INGREDIENT_LOADING_ERRORED,
  INGREDIENTS_FETCHED
} from "../constants/ActionTypes";

export const addIngredient = ingredient => {
  return {
    type: ADD_INGREDIENT,
    ingredient
  };
};

export const ingredientsLoading = bool => {
  return {
    type: INGREDIENT_IS_LOADING,
    isLoading: bool
  };
};

export const ingredientLoadingError = bool => {
  return {
    type: INGREDIENT_LOADING_ERRORED,
    hasErrored: bool
  };
};
//Through the magic of ES6 property value shorthands, we'll return an object with a property called ingredients whose value will be the array of ingredients
export const ingredientsFetched = ingredients => {
  type: INGREDIENTS_FETCHED, ingredients;
};
