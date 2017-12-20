import React from "react";
import { Dropdown } from "semantic-ui-react";
import { measurementOptions } from "../constants/measurement";

const MeasurementDropdown = props => (
  <Dropdown
    placeholder="Select a Measurement"
    fluid
    selection
    options={measurementOptions}
    text={props.value}
    value={props.value}
    onChange={props.onChange}
  />
);

export default MeasurementDropdown;
