import React, { Component } from "react";
import EditableIngredient from "./EditableIngredient";

class EditableIngredientList extends Component {
  render() {
    const ingredients = this.props.ingredients.map(ingredient => (
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

    return <div id="ingredients">{ingredients}</div>;
  }
}

export default EditableIngredientList;
