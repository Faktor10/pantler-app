import React from "react";
import { connect } from "react-redux";

import Ingredient from "./Ingredient";
import "../css/App.css";

const GridIngredientDashboard = props => {
  return (
    <ul>
      {props.ingredients.map(ing => {
        return (
          <Ingredient
            key={ing.id}
            name={ing.name}
            quantity={ing.quantity}
            measurement={ing.measurement}
            imgUrl={ing.imgUrl}
          />
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients
  };
};

export default connect(mapStateToProps)(GridIngredientDashboard);
