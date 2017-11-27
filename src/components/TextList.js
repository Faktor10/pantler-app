import React from "react";
import { connect } from "react-redux";

const TextList = props => {
  return (
    <div>
      {props.ingredients}
      <div />
      {props.recipes}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ingredients: state.ingredients,
    recipes: state.recipes
  };
};
export default connect(mapStateToProps)(TextList);
