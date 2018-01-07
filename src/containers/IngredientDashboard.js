import React, { Component } from "react";
import IngredientForm from "./IngredientForm";
import IngredientList from "../components/IngredientList";
import { connect } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";
import { fetchIngredients } from "../actions/ingredients";
import { API_SERVER } from "../constants/constants";

class IngredientDashboard extends Component {
  componentDidMount() {
    this.props.fetchIngredients(API_SERVER);
  }

  onEditClick() {}

  render() {
    if (this.props.isLoading) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }
    if (this.props.hasErrored) {
      return (
        <div>
          There appears to be an error loading your data! Please check you are
          connected to the internet and try again.
        </div>
      );
    }
    return (
      <div>
        <div>
          <IngredientList ingredients={this.props.ingredients} />
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
