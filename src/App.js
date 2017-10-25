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
        <div className="header">Pantler</div>
        <div className="content">
          <div className="content--subheader"> Sub header </div>
          <div className="content--ingredientgrid">
            <div className="ingredient">1</div>
            <div className="ingredient">2</div>
            <div className="ingredient">3</div>
            <div className="ingredient">4</div>
            <div className="ingredient">5</div>
            <div className="ingredient">6</div>
          </div>
        </div>
        <div className="whitespace--left">Left</div>
        <div className="whitespace--right">Right</div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
