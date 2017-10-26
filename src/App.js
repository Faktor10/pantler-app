import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import IngredientDashboard from "./IngredientDashboard";
import GridIngredientDashboard from "./GridIngredientDashboard";
import Header from "./Header";

import "./css/App.css";

const reducer = (state, action) => state;

const state = [];

const store = createStore(reducer, state);

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
        <div className="footer">Made with ❤️ by Faktor 10</div>
      </div>
    );
  }
}

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
