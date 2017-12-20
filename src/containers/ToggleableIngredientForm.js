import React, { Component } from "react";
import IngredientForm from "./IngredientForm";
import { Button, Header, Image, Modal } from "semantic-ui-react";

export class ToggleableIngredientForm extends Component {
  state = {
    isOpen: false
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = ingredient => {
    this.props.onFormSubmit(ingredient);
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <IngredientForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <div className="ui basic content center aligned segment">
          <button
            className="ui basic button icon"
            onClick={this.handleFormOpen}
          >
            click me
          </button>
        </div>
      );
    }
  }
}
