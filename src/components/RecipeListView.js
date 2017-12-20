import React from "react";

const RecipeListView = ({ recipes }) => {
  const recipesToDisplay = recipes.map(recipe => {
    return <Recipe img={recipe.img} title={recipe.title} />;
  });
  return <div />;
};
