import React from "react";
import { connect } from "react-redux";
import { removeIngredientFromDatabase } from "../actions/ingredients";
import styled from "styled-components";

const DemoIngredientBox = styled.div`
  border-style: solid;
  width: 200px;
  height: 200px;
`;

const Ingredient = ({
  id,
  name,
  imgUrl,
  quantity,
  measurement,
  onEditClick,
  onTrashClick,
  removeIngredient
}) => {
  return (
    <div>
      <DemoIngredientBox key={id}>{name}</DemoIngredientBox>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeIngredient: _id => dispatch(removeIngredientFromDatabase(_id))
  };
};

export default connect(null, mapDispatchToProps)(Ingredient);
