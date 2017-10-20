import React, { Component } from "react";
import IngredientForm from "./IngredientForm";
import Ingredient from "./Ingredient";

class EditableIngredient extends Component {
  state = {
    editFormOpen: false
  };

  handleSubmit = ingredient => {
    this.props.onFormSubmit(ingredient);
    this.closeForm();
  };

  handleEditClick = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <IngredientForm
          id={this.props.id}
          name={this.props.name}
          quantity={this.props.quantity}
          measurement={this.props.measurement}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <Ingredient
          id={this.props.id}
          name={this.props.name}
          quantity={this.props.quantity}
          measurement={this.props.measurement}
          onEditClick={this.handleEditClick}
          onTrashClick={this.props.onTrashClick}
        />
      );
    }
  }
}

export default EditableIngredient;
