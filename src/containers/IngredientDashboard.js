import React, { Component } from "react";
import EditableIngredientList from "../components/EditableIngredientList";
import ToggleableIngredientForm from "./ToggleableIngredientForm";
import { connect } from "react-redux";

class IngredientDashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <EditableIngredientList ingredients={this.props.ingredients} />
          <ToggleableIngredientForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    ingredients: store.ingredients
  };
};
export default connect(mapStateToProps)(IngredientDashboard);
