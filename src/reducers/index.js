import { combineReducers } from "redux";
import {
  ingredientReducer,
  recipeReducer,
  counterReducer,
  ingredientIsLoading,
  ingredientHasErrored,
  ingredientsLoaded
} from "./reducers";

export const reducers = combineReducers({
  ingredients: ingredientReducer,
  recipes: recipeReducer,
  count: counterReducer,
  isLoading: ingredientIsLoading,
  hasErrored: ingredientHasErrored,
  ingredients: ingredientsLoaded
});
