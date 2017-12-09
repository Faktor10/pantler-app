import React from "react";
import EditableIngredient from "../containers/EditableIngredient";
import {
  removeIngredient,
  removeIngredientFromDatabase
} from "../actions/ingredients";
import { API_SERVER } from "../constants/constants";
import { connect } from "react-redux";

const EditableIngredientList = ({ ingredients, onTrashClick, dispatch }) => {
  const ingredientList = ingredients.map(ingredient => (
    <EditableIngredient
      key={ingredient.uniqueId}
      id={ingredient.uniqueId}
      name={ingredient.name}
      quantity={ingredient.quantity}
      measurement={ingredient.measurement}
      onTrashClick={() => {
        dispatch(removeIngredient(ingredient._id));
        removeIngredientFromDatabase(API_SERVER, ingredient);
      }}
    />
  ));

  return <div>{ingredientList}</div>;
};

export default connect()(EditableIngredientList);
