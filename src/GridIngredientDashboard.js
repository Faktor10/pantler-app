import React from "react";
import styled from "styled-components";
import Ingredient from "./Ingredient";

const tomato = <Ingredient name="Tomato" quantity="6" measurement="lbs" />;

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
  background-image: url("http://res.cloudinary.com/pantler/image/upload/v1502894798/shiny-red-apples_yzd195.jpg")
  padding: 1em;
  color: #d9480f;
`;

//https://www.codementor.io/christiannwamba/build-a-react-image-gallery-with-cloudinary-xh1cekno3

const GridIngredientDashboard = () => {
  return (
    <IngredientGrid>
      <IngredientBox>{tomato}</IngredientBox>
      <IngredientBox>Ingredient Two</IngredientBox>
      <IngredientBox>Ingredient Three</IngredientBox>
      <IngredientBox>Ingredient four</IngredientBox>
      <IngredientBox>Ingredient four</IngredientBox>
      <IngredientBox>Ingredient four</IngredientBox>
      <IngredientBox>Ingredient four</IngredientBox>
      <IngredientBox>Ingredient four</IngredientBox>
      <IngredientBox>Ingredient four</IngredientBox>
      <IngredientBox>Ingredient four</IngredientBox>
      <IngredientBox>Ingredient four</IngredientBox>
      <IngredientBox>Ingredient four</IngredientBox>
      <IngredientBox>Ingredient four</IngredientBox>
      <IngredientBox>Ingredient four</IngredientBox>
      <IngredientBox>Ingredient four</IngredientBox>
      <IngredientBox>Ingredient four</IngredientBox>
      <img
        src="http://res.cloudinary.com/pantler/image/upload/v1502894798/shiny-red-apples_yzd195.jpg"
        width="400px"
        height="200px"
      />
    </IngredientGrid>
  );
};

export default GridIngredientDashboard;
