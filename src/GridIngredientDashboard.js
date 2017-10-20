import React from "react";
import styled from "styled-components";
import EditableIngredientList from "./EditableIngredientList";

const IngredientGrid = styled.div`
  display: grid;
  padding: 20px 20px 20px 20px;
  background-color: PaleGreen;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-columns: 100px;
`;
const IngredientBox = styled.div`
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
`;

const GridIngredientDashboard = () => {
  return (
    <IngredientGrid>
      <IngredientBox>Ingredient One</IngredientBox>
      <IngredientBox>Ingredient Two</IngredientBox>
      <IngredientBox>Ingredient Three</IngredientBox>
      <IngredientBox>Ingredient four</IngredientBox>
    </IngredientGrid>
  );
};

export default GridIngredientDashboard;
