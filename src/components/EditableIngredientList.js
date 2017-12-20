import React from "react";
import EditableIngredient from "../containers/EditableIngredient";
import { ToggleableIngredientForm } from "../containers/ToggleableIngredientForm";
import { removeIngredientFromDatabase } from "../actions/ingredients";
import { API_SERVER } from "../constants/constants";
import { connect } from "react-redux";
import styled from "styled-components";

const DemoIngredientBox = styled.div`
  border-style: solid;
  width: 200px;
  height: 200px;
`;

const ReizableGridContainer = styled.div`
  display: grid;
  width: 100%
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, [col] 200px ) ;
  grid-template-rows: repeat(3, [row] auto  );
  background-color: #fff;
  color: #444;
  
`;

const EditableIngredientList = ({ ingredients, onTrashClick, dispatch }) => {
  const ingredientList = ingredients.map(ingredient => (
    <EditableIngredient
      key={ingredient._id}
      id={ingredient._id}
      name={ingredient.name}
      quantity={ingredient.quantity}
      measurement={ingredient.measurement}
      expiryDate={ingredient.expiryDate}
      imgUrl={ingredient.imgUrl}
      onTrashClick={() => {
        dispatch(removeIngredientFromDatabase(API_SERVER, ingredient._id));
      }}
    />
  ));

  return (
    <div>
      <ReizableGridContainer>
        {ingredients.map(() => <DemoIngredientBox />)}
      </ReizableGridContainer>
    </div>
  );
};

export default connect()(EditableIngredientList);
