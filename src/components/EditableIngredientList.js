import React from "react"
import EditableIngredient from "../containers/EditableIngredient"
import { removeIngredientFromDatabase } from "../actions/ingredients"
import { API_SERVER } from "../constants/constants"
import { connect } from "react-redux"

const EditableIngredientList = ({ ingredients, onTrashClick, dispatch }) => {
  const ingredientList = ingredients.map(ingredient => (
    <EditableIngredient
      key={ingredient._id}
      id={ingredient._id}
      name={ingredient.name}
      quantity={ingredient.quantity}
      measurement={ingredient.measurement}
      onTrashClick={() => {
        dispatch(removeIngredientFromDatabase(API_SERVER, ingredient._id))
      }}
    />
  ))

  return <div>{ingredientList}</div>
}

export default connect()(EditableIngredientList)
