import React, { Component } from "react";
import RecipeForm from "./RecipeForm";
import { connect } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";
import { fetchRecipes } from "../actions/recipes";
import { API_SERVER } from "../constants/constants";

class RecipeDashboard extends Component {
  componentDidMount() {
    this.props.fetchRecipes(API_SERVER);
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
          <RecipeList recipes={this.props.recipes} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    recipes: store.recipes,
    isLoading: store.isLoading,
    hasErrored: store.hasErrored
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: url => dispatch(fetchRecipes(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDashboard);
