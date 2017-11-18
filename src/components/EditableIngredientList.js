import React, { Component } from "react";
import EditableIngredient from "../containers/EditableIngredient";

const EditableIngredientList = ({ ingredients }) => {
 
    const ingredientList = ingredients.map(ingredient => (
      <EditableIngredient
        key={ingredient._id}
        id={ingredient._id}
        name={ingredient.name}
        quantity={ingredient.quantity}
        measurement={ingredient.measurement}
        onFormSubmit={this.props.onFormSubmit}
        onTrashClick={this.props.onTrashClick}
      />
    ));

    return <div>{ingredientList}</div>;
 
}

export default EditableIngredientList;
