import React from "react";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { connect } from "react-redux";

import Ingredient from "./Ingredient";
import { ingredients } from "../tests/data";
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
