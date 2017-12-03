import React, { Component } from "react";
import EditableIngredientList from "../components/EditableIngredientList";
import ToggleableIngredientForm from "./ToggleableIngredientForm";
import { connect } from "react-redux";
import { fetchIngredients } from "../actions/ingredients";
import { API_SERVER } from "../constants/constants";

class IngredientDashboard extends Component {
  componentDidMount() {
    this.props.fetchIngredients(API_SERVER);
  }

  render() {
    if (this.props.isLoading) {
      return <div>The data is loading!</div>;
    }
    if (this.props.hasErrored) {
      return <div>There appears to be an error loading your data!</div>;
    }
    return (
      <div>
        <div>
          <EditableIngredientList ingredients={this.props.ingredients} />
	  <ToggleableIngredientForm/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    ingredients: store.ingredients,
    isLoading: store.isLoading,
    hasErrored: store.hasErrored
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchIngredients: url => dispatch(fetchIngredients(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  IngredientDashboard
);
