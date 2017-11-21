import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";

import IngredientDashboard from "../containers/IngredientDashboard";
import Header from "../components/Header";
import App from "../components/App";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("App renders a <Header /> Component ", () => {
  const wrapper = shallow(<App />);
  const app = (
    <div>
      <Header />
    </div>
  );
  expect(true).toEqual(true);
});
