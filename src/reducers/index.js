import { combineReducers } from "redux";
import { ingredientReducer, recipeReducer, counterReducer } from "./reducers";

export const reducers = combineReducers({
  ingredients: ingredientReducer,
  recipes: recipeReducer,
  count: counterReducer
});
