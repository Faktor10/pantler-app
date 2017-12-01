import { combineReducers } from "redux";
import {
  ingredientReducer,
  recipeReducer,
  counterReducer,
  ingredientsLoading,
  ingredientLoadingError,
  ingredientsFetched
} from "./reducers";

export const reducers = combineReducers({
  ingredients: ingredientReducer,
  recipes: recipeReducer,
  count: counterReducer,
  isLoading: ingredientsLoading,
  hasErrored: ingredientLoadingError,
  ingredients: ingredientsFetched
});
