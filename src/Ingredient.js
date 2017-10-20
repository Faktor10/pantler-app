import React from "react";
import "./css/Ingredient.css";
import styled from "styled-components";

const IngredientsGrid = styled.div`
  background-color: dark-blue;
  border: 1px solid black;
`;

const Ingredient = props => {
  return (
    <IngredientsGrid>
      <div className="ui centered card">
        <div className="content">
          <div className="header">{props.name}</div>
          <div className="center aligned description">
            <h2>{props.quantity}</h2>
          </div>
          <div className="meta">{props.measurement}</div>
          <div className="extra content">
            <span
              className="right floated edit icon"
              onClick={props.onEditClick}
            >
              <i className="edit icon" />
            </span>
            <span
              className="right floated trash icon"
              onClick={() => props.onTrashClick(props.id)}
            >
              <i className="trash icon" />
            </span>
          </div>
        </div>
      </div>
    </IngredientsGrid>
  );
};

export default Ingredient;
