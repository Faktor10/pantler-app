import React from "react";
import styled from "styled-components";
import Ingredient from "./Ingredient";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

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
  border: 2px solid red;
  border-radius: 5px;
  padding: 1em;
  color: #d9480f;
`;

//https://www.codementor.io/christiannwamba/build-a-react-image-gallery-with-cloudinary-xh1cekno3

const GridIngredientDashboard = () => {
  return (
    <IngredientGrid>
      <CloudinaryContext cloudName="pantler">
        <IngredientBox>
          Apples
          <Image publicId="shiny-red-apples_yzd195.jpg" secure="true">
            <Transformation height="100" crop="scale" opacity="50" />
          </Image>
        </IngredientBox>

        <IngredientBox>
          Apples
          <Image publicId="shiny-red-apples_yzd195.jpg" secure="true">
            <Transformation height="100" crop="scale" opacity="50" />
          </Image>
        </IngredientBox>
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
      </CloudinaryContext>
    </IngredientGrid>
  );
};

export default GridIngredientDashboard;
