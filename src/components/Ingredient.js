import React from "react"
import "../css/Ingredient.css"

const Ingredient = ({
  name,
  imgUrl,
  quantity,
  measurement,
  onEditClick,
  onTrashClick
}) => {
  return (
    <div className="ingredientgrid--ingredient-readonly ">
      <div>
        <span className="ingredientgrid--ingredient--quantity">{quantity}</span>
        <span className="ingredientgrid--ingredient--measurement">
          {measurement}
        </span>
        <span className="ingredientgrid--ingredient--name">{name}</span>
      </div>
      <img
        className="ingredientgrid--ingredient--image"
        width="50px"
        height="50px"
        alt={name}
        src={imgUrl}
      />

      <span className="ingredientgrid--ingredient--edit" onClick={onEditClick}>
        <i className="edit icon" />
      </span>
      <span
        className="ingredientgrid--ingredient--trash"
        onClick={onTrashClick}
      >
        <i className="trash icon" />
      </span>
    </div>
  )
}

export default Ingredient
