import { combineReducers } from "redux";
import {
  ingredientReducer,
  recipeReducer,
  counterReducer,
  ingredientIsLoading,
  ingredientHasErrored,
  modal
} from "./reducers";

export const reducers = combineReducers({
  modal,
  ingredients: ingredientReducer,
  recipes: recipeReducer,
  count: counterReducer,
  isLoading: ingredientIsLoading,
  hasErrored: ingredientHasErrored
});
