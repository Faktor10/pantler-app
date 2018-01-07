import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import IngredientDashboard from "../containers/IngredientDashboard";
import RecipeDashboard from "../containers/RecipeDashboard";
import { Container, Header, List, Segment } from "semantic-ui-react";
import SubHeader from "./SubHeader";
import { Route } from "react-router";
import ModalRoot from "./ModalRoot";
import { injectGlobal } from "styled-components";
import "semantic-ui-css/semantic.css";

injectGlobal`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: sans-serif;
  }
`;

const App = () => {
  return (
    <Container>
      <Header
        as="h1"
        textAlign="center"
        inverted
        color="green"
        style={{ padding: 20 }}
      >
        Pantler
      </Header>
      <SubHeader />
      <Route path="/ingredients" component={IngredientDashboard} />
      <Route path="/recipes" component={RecipeDashboard} />
      <Segment.Group>
        <Segment>
          <Header as="h4" content="About" />
          <List link>
            <List.Item as="a">Sitemap</List.Item>
            <List.Item as="a">How It Works</List.Item>
            <List.Item as="a">Motivation</List.Item>
            <List.Item as="a">Contact</List.Item>
          </List>
        </Segment>
        <Segment textAlign="center">
          Made with{" "}
          <span role="img" aria-label="Heart">
            ❤️
          </span>{" "}
          by Faktor 10
        </Segment>
      </Segment.Group>

      <ModalRoot />
    </Container>
  );
};

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
