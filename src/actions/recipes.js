import { ADD_RECIPE } from "../constants/ActionTypes"

export const addRecipe = recipe => {
  return {
    type: ADD_RECIPE,
    recipe
  }
}
