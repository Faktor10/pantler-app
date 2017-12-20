import {
  ADD_RECIPE,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  INGREDIENT_IS_LOADING,
  INGREDIENT_LOADING_ERRORED,
  INGREDIENTS_FETCHED,
  SHOW_MODAL,
  HIDE_MODAL
} from "../constants/ActionTypes";

export const ingredientReducer = (ingredients = [], action) => {
  console.log(ingredients);
  switch (action.type) {
    case ADD_INGREDIENT:
      const newIngredient = { ...action.ingredient, ...action._id };
      console.log("it si " + JSON.stringify(newIngredient));
      return ingredients.concat(newIngredient);
    case REMOVE_INGREDIENT:
      return ingredients.filter(ingredient => {
        return ingredient._id !== action._id;
      });
    case INGREDIENTS_FETCHED:
      return action.ingredients;
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

const initialState = {
  modalType: null,
  modalProps: {}
};

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};
