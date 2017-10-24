import { API_SERVER } from "../constants";

export const getIngredients = () => {
  const init = {
    mode: "cors"
  };

  console.log("this is loading");

  fetch(API_SERVER, init)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      //this.setState({ ingredients: data });
    });
};
