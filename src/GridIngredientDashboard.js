import React from "react";
import Ingredient from "./Ingredient";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import "./css/App.css";

const GridIngredientDashboard = () => {
  return (
    <div className="content--ingredientgrid">
      <div className="ingredientgrid--ingredient-readonly ">
        <div className="ingredientgrid--ingredient--name">Tomato</div>
        <img
          className="ingredientgrid--ingredient--image"
          width="150px"
          height="150px"
          src="https://res.cloudinary.com/pantler/image/upload/c_scale,e_trim:10,h_150,q_auto:eco,r_15,w_150/v1503912607/tomato-bunch-mature-red-48802_lyndbg.png"
        />
        <span className="ingredientgrid--ingredient--quantity">2</span>
        <span className="ingredientgrid--ingredient--measurement">kgs</span>
        <span className="ingredientgrid--ingredient--edit">
          <i className="edit icon" />
        </span>
        <span className="ingredientgrid--ingredient--trash">
          <i className="trash icon" />
        </span>
      </div>
      <div className="ingredientgrid--ingredient-readonly">
        {" "}
        <div className="ingredientgrid--ingredient-readonly clearfix">
          <div className="ingredientgrid--ingredient--name">Apples</div>
          <img
            className="ingredientgrid--ingredient--image"
            width="150px"
            height="150px"
            src="https://res.cloudinary.com/pantler/image/upload/c_scale,e_trim:10,h_150,q_auto:eco,r_15,w_150/v1503912607/shiny-red-apples_yzd195.jpg"
          />
          <span className="ingredientgrid--ingredient--quantity">4</span>
          <span className="ingredientgrid--ingredient--measurement">units</span>
          <span className="ingredientgrid--ingredient--edit">
            <i className="edit icon" />
          </span>
          <span className="ingredientgrid--ingredient--trash">
            <i className="trash icon" />
          </span>
        </div>
      </div>
      <div className="ingredientgrid--ingredient-readonly">
        {" "}
        <div className="ingredientgrid--ingredient-readonly clearfix">
          <div className="ingredientgrid--ingredient--name">
            Ground Coriander
          </div>
          <img
            className="ingredientgrid--ingredient--image"
            width="150px"
            height="150px"
            src="https://res.cloudinary.com/pantler/image/upload/c_scale,e_trim:10,h_150,q_auto:eco,r_15,w_150/v1503254900/44186_bju7x4.jpg"
          />
          <span className="ingredientgrid--ingredient--quantity">20</span>
          <span className="ingredientgrid--ingredient--measurement">g</span>
          <span className="ingredientgrid--ingredient--edit">
            <i className="edit icon" />
          </span>
          <span className="ingredientgrid--ingredient--trash">
            <i className="trash icon" />
          </span>
        </div>
      </div>
      <div className="ingredient">
        {" "}
        <div className="ingredientgrid--ingredient-readonly clearfix">
          <div className="ingredientgrid--ingredient--name">Tomato</div>
          <img
            className="ingredientgrid--ingredient--image"
            width="150px"
            height="150px"
          />
          <span className="ingredientgrid--ingredient--quantity">2</span>
          <span className="ingredientgrid--ingredient--measurement">kgs</span>
          <span className="ingredientgrid--ingredient--edit">
            <i className="edit icon" />
          </span>
          <span className="ingredientgrid--ingredient--trash">
            <i className="trash icon" />
          </span>
        </div>
      </div>
      <div className="ingredient">
        {" "}
        <div className="ingredientgrid--ingredient-readonly clearfix">
          <div className="ingredientgrid--ingredient--name">Tomato</div>
          <img
            className="ingredientgrid--ingredient--image"
            width="150px"
            height="150px"
          />
          <span className="ingredientgrid--ingredient--quantity">2</span>
          <span className="ingredientgrid--ingredient--measurement">kgs</span>
          <span className="ingredientgrid--ingredient--edit">
            <i className="edit icon" />
          </span>
          <span className="ingredientgrid--ingredient--trash">
            <i className="trash icon" />
          </span>
        </div>
      </div>
      <div className="ingredient">
        {" "}
        <div className="ingredientgrid--ingredient-readonly clearfix">
          <div className="ingredientgrid--ingredient--name">Tomato</div>
          <img
            className="ingredientgrid--ingredient--image"
            width="150px"
            height="150px"
          />
          <span className="ingredientgrid--ingredient--quantity">2</span>
          <span className="ingredientgrid--ingredient--measurement">kgs</span>
          <span className="ingredientgrid--ingredient--edit">
            <i className="edit icon" />
          </span>
          <span className="ingredientgrid--ingredient--trash">
            <i className="trash icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default GridIngredientDashboard;
