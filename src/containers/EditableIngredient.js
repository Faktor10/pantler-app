import React, { Component } from "react";
import IngredientForm from "../containers/IngredientForm";
import Ingredient from "../components/Ingredient";
import styled from "styled-components";

const DemoIngredientBox = styled.div`
  border-style: solid;
  width: 200px;
  height: 200px;
`;

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
      return <DemoIngredientBox />;
    }
  }
}

export default EditableIngredient;
