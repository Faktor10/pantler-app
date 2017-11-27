import { ADD_INGREDIENT } from "../constants/ActionTypes";

export const addIngredient = ingredient => {
  return {
    type: ADD_INGREDIENT,
    ingredient
  };
};
