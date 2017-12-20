import { Button, Header, Image, Modal } from "semantic-ui-react";
import React, { Component } from "react";
import { addIngredientToDatabase } from "../actions/ingredients";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { measurementOptions } from "../constants/measurement";
import PropTypes from "prop-types";

class IngredientForm extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    measurement: PropTypes.string.isRequired,
    expirydate: PropTypes.instanceOf(Date).isRequired
  };
  static defaultProps = {
    name: "",
    quantity: 1,
    measurement: "unit",
    expirydate: new Date()
  };

  state = {
    fields: {
      name: this.props.name,
      quantity: this.props.quantity,
      measurement: this.props.measurement,
      expirydate: this.props.expirydate
    },

    modalOpen: false
  };

  onInputChange = (evt, data) => {
    const fields = this.state.fields;
    const fieldName = evt.target.name ? evt.target.name : data.name;
    fields[fieldName] = evt.target.value ? evt.target.value : data.value;
    this.setState({ fields });
  };

  onFormCancel = () => this.setState({ modalOpen: false });

  handleOpen = () => this.setState({ modalOpen: true });

  handleSubmit = () => {
    this.props.addIngredientToDatabase(this.state.fields);
  };

  render() {
    const submitText = this.props.id ? "Update" : "Add";

    return (
      <Modal
        trigger={<button onClick={this.handleOpen}> click me </button>}
        open={this.state.modalOpen}
      >
        <Modal.Header>Add an Ingredient</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <div className="ui form">
              <div className="field">
                <input
                  name="name"
                  type="text"
                  placeholder="type an ingredient name"
                  value={this.state.fields.name}
                  onChange={this.onInputChange}
                />
                <input
                  name="quantity"
                  type="number"
                  placeholder="How much have you got"
                  value={this.state.fields.quantity}
                  onChange={this.onInputChange}
                />
                <Dropdown
                  name="measurement"
                  placeholder="Select a Measurement"
                  fluid
                  selection
                  options={measurementOptions}
                  value={this.state.fields.measurement}
                  onChange={this.onInputChange}
                />
                <input
                  name="expirydate"
                  type="date"
                  placeholder="When do I expire"
                  value={this.state.fields.expirydate}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="ui two bottom attached buttons">
                <button
                  className="ui basic blue button"
                  onClick={this.handleSubmit}
                >
                  {submitText}
                </button>
                <Modal.Actions>
                  <button
                    className="ui basic red button"
                    onClick={this.onFormCancel}
                  >
                    Cancel
                  </button>
                </Modal.Actions>
              </div>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    addIngredientToDatabase: ingredient =>
      dispatch(addIngredientToDatabase(ingredient))
  };
};

export default connect(null, mapDispatchtoProps)(IngredientForm);
