import uuid from "uuid"

export function newIngredient(attrs = {}) {
  const ingredient = {
    name: attrs.name || "Ingredient name",
    quantity: attrs.quantity || 0,
    measurement: attrs.measurement || "Unit",
    _id: uuid.v4()
  }

  return ingredient
}
