import React, { Component } from "react";
import { addIngredient, addIngredientToDatabase } from "../actions/ingredients";
import { connect } from "react-redux";
import { API_SERVER } from "../constants/constants";
import uuid from "uuid";

class IngredientForm extends Component {
  state = {
    name: this.props.name || "",
    quantity: this.props.quantity || 1,
    measurement: this.props.measurement || "",
    imgUrl: this.props.imgUrl || ""
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleQuantityChange = e => {
    this.setState({ quantity: e.target.value });
  };

  handleMeasurementChange = e => {
    this.setState({ measurement: e.target.value });
  };

  handleImgageChange = e => {
    this.setState({ imgUrl: e.target.value });
  };

  handleSubmit = () => {
    const ingredient = this.state;
    this.props.dispatch(addIngredientToDatabase(API_SERVER, ingredient));
    this.state = {};
    this.props.onFormClose();
  };

  render() {
    const submitText = this.props.id ? "Update" : "Add";

    return (
      <div className="ui centered card">
        <div className="content">
          <div className="ui form">
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </div>
            <div className="field">
              <label>Quantity</label>
              <input
                type="number"
                value={this.state.quantity}
                onChange={this.handleQuantityChange}
              />
            </div>
            <div className="field">
              <label>Measurement</label>
              <input
                type="text"
                value={this.state.measurement}
                onChange={this.handleMeasurementChange}
              />
              <label>Image</label>
              <input
                type="text"
                value={this.state.imgUrl}
                onChange={this.handleImageChange}
              />
            </div>
            <div className="ui two bottom attached buttons">
              <button
                className="ui basic blue button"
                onClick={this.handleSubmit}
              >
                {submitText}
              </button>
              <button
                className="ui basic red button"
                onClick={this.props.onFormClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(IngredientForm);
