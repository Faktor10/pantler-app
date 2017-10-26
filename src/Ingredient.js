import React from "react";
import "./css/Ingredient.css";

const Ingredient = props => {
  return (
    <div className="ingredientgrid--ingredient-readonly ">
      <div className="ingredientgrid--ingredient--name">{props.name}</div>
      <img
        className="ingredientgrid--ingredient--image"
        width="150px"
        height="150px"
        src={props.imgUrl}
      />
      <span className="ingredientgrid--ingredient--quantity">
        {props.quantity}
      </span>
      <span className="ingredientgrid--ingredient--measurement">
        {props.measurement}
      </span>
      <span className="ingredientgrid--ingredient--edit">
        <i className="edit icon" />
      </span>
      <span className="ingredientgrid--ingredient--trash">
        <i className="trash icon" />
      </span>
    </div>
  );
};

export default Ingredient;
