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
//Through the magic of ES6 property value shorthands, we'll return an object with a property
//called ingredients whose value will be the array of ingredients

export const ingredientsFetched = ingredients => {
  return {
    type: INGREDIENTS_FETCHED,
    ingredients
  };
};

export const fetchIngredients = url => {
  return dispatch => {
    dispatch(ingredientsLoading(true));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(ingredientsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(ingredients => dispatch(ingredientsFetched(ingredients)))
      .catch(() => dispatch(ingredientLoadingError(true)));
  };
};
