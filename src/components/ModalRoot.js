import React from "react";
import { connect } from "react-redux";
import EditIngredientModal from "./EditIngredientModal";
import { EDIT_INGREDIENT } from "../constants/ActionTypes";

const MODAL_COMPONENTS = {
  EDIT_INGREDIENT: EditIngredientModal
};

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

export default connect(state => state.modal)(ModalRoot);
