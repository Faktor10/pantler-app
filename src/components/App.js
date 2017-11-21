import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { state } from "../tests/data";
import rootReducer from "../reducers/reducers";

import IngredientDashboard from "../containers/IngredientDashboard";
import IngredientForm from "../containers/IngredientForm";
import GridIngredientDashboard from "./GridIngredientDashboard";
import Text from "./Text";
import Header from "./Header";

import "../css/App.css";

const store = createStore(
  rootReducer,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
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

        <Route exact path="/" component={GridIngredientDashboard} />
        <Route path="/form" component={IngredientDashboard} />
        <Route path="/text" component={Text} />
      </div>
      <div className="whitespace--left">Left</div>
      <div className="whitespace--right">Right</div>
      <div className="footer">Made with ❤️ by Faktor 10</div>
    </div>
  );
};

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
