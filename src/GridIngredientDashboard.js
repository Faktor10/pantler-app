import React from "react";
import Ingredient from "./Ingredient";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import "./css/App.css";
import { ingredients } from "./tests/data";

const GridIngredientDashboard = () => {
  const Ingredients = ingredients.map(ing => {
    return (
      <Ingredient
        key={ing.id}
        name={ing.name}
        quantity={ing.quantity}
        measurement={ing.measurement}
        imgUrl={ing.imgUrl}
      />
    );
  });
  return <div className="content--ingredientgrid">{Ingredients}</div>;
};

export default GridIngredientDashboard;
