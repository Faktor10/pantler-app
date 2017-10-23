import React, { Component } from "react";
import IngredientDashboard from "./IngredientDashboard";
import GridIngredientDashboard from "./GridIngredientDashboard";
import { Route } from "react-router-dom";
import Header from "./Header";
import { getIngredients } from "./helpers/pantler";

//getIngredients()

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Route exact path="/" component={IngredientDashboard} />
          <Route path="/gridview" component={GridIngredientDashboard} />
        </div>
      </div>
    );
  }
}

export default App;
