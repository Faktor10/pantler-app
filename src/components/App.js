import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import IngredientDashboard from "../containers/IngredientDashboard";
import IngredientForm from "../containers/IngredientForm";
import GridIngredientDashboard from "./GridIngredientDashboard";
import Counter from "./Counter";
import Header from "./Header";

import "../css/App.css";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Pantler</h1>
      </div>
      <div className="content">
        {/*}
        <Route exact path="/" component={GridIngredientDashboard} />
        <Route path="/form" component={IngredientDashboard} />
        <Route path="/text" component={Text} />*/}
        <Counter />
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
