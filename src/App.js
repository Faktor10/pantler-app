import React, { Component } from "react";
import IngredientDashboard from "./IngredientDashboard";
import GridIngredientDashboard from "./GridIngredientDashboard";
import { Route } from "react-router-dom";
import Header from "./Header";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Pantler</h1>
        </div>
        <div className="content">
          <div className="content--subheader">
            {" "}
            Ingredients
            <span className="content--subheader--searchbar">
              <input type="text" />
            </span>
          </div>
          <GridIngredientDashboard />
        </div>
        <div className="whitespace--left">Left</div>
        <div className="whitespace--right">Right</div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
