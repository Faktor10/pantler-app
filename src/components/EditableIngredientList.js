import React from "react";
import EditableIngredient from "../containers/EditableIngredient";
import { REMOVE_INGREDIENT } from "../constants/ActionTypes";
import { connect } from "react-redux";

const EditableIngredientList = ({ ingredients, onTrashClick, dispatch }) => {
  const ingredientList = ingredients.map(ingredient => (
    <EditableIngredient
      key={ingredient.id}
      id={ingredient.id}
      name={ingredient.name}
      quantity={ingredient.quantity}
      measurement={ingredient.measurement}
      onTrashClick={() =>
        dispatch({ type: REMOVE_INGREDIENT, id: ingredient.id })}
    />
  ));

  return <div>{ingredientList}</div>;
};

export default connect()(EditableIngredientList);
