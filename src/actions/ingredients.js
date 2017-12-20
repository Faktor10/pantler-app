import {
  ADD_INGREDIENT,
  INGREDIENT_IS_LOADING,
  INGREDIENT_LOADING_ERRORED,
  INGREDIENTS_FETCHED,
  REMOVE_INGREDIENT,
  EDIT_INGREDIENT,
  SHOW_MODAL,
  HIDE_MODAL
} from "../constants/ActionTypes";

import { API_SERVER } from "../constants/constants";

export const showModal = (type, props) => ({
  type: SHOW_MODAL,
  payload: {
    type,
    props
  }
});

export const hideModal = () => ({
  type: HIDE_MODAL
});

export const addIngredient = (ingredient, _id) => {
  return {
    type: ADD_INGREDIENT,
    ingredient,
    _id
  };
};

export const removeIngredient = _id => {
  return {
    type: REMOVE_INGREDIENT,
    _id
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

let header = new Headers({
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
  "Content-Type": "application/json"
});

export const fetchIngredients = () => {
  return dispatch => {
    dispatch(ingredientsLoading(true));
    fetch(API_SERVER, {
      headers: header,
      mode: "cors",
      method: "get"
    })
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

export const addIngredientToDatabase = ingredient => {
  return dispatch => {
    fetch(API_SERVER, {
      headers: header,
      mode: "cors",
      method: "post",
      body: JSON.stringify(ingredient)
    })
      .then(response => response.json())
      .then(_id => {
        dispatch(addIngredient(ingredient, _id));
      });
  };
};

export const removeIngredientFromDatabase = _id => {
  return dispatch => {
    fetch(API_SERVER + _id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      mode: "cors",
      method: "delete"
    }).then(() => dispatch(removeIngredient(_id)));
  };
};

export const editIngredient = ingredient => {
  return {
    type: EDIT_INGREDIENT,
    ingredient
  };
};
