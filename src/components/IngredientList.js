import React from "react";
import Ingredient from "./Ingredient";
import styled from "styled-components";

const ReizableGridContainer = styled.div`
  display: grid;
  width: 100%
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, [col] 200px ) ;
  grid-template-rows: repeat(3, [row] auto  );
  background-color: #fff;
  color: #444;
  
`;

export const IngredientList = ({ ingredients }) => {
  const ingredientsToDisplay = ingredients.map(ingredient => {
    return <Ingredient key={ingredient._id} {...ingredient} />;
  });
  return (
    <div>
      <ReizableGridContainer>{ingredientsToDisplay}</ReizableGridContainer>
    </div>
  );
};
