import React, { Component } from "react";
import IngredientForm from "./IngredientForm";
import { connect } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";
import { fetchIngredients } from "../actions/ingredients";
import { API_SERVER } from "../constants/constants";

class IngredientDashboard extends Component {
  componentDidMount() {
    this.props.fetchIngredients(API_SERVER);
  }

  render() {
    if (!true) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }
    if (this.props.hasErrored) {
      return <div>There appears to be an error loading your data!</div>;
    }
    return (
      <div>
        <div>
          {/*<IngredientList ingredients={this.props.ingredients} />*/}
          <IngredientForm />
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
