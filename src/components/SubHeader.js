import React from "react";
import { Link } from "react-router";

const SubHeader = () => {
  return (
    <div>
      <Button>
        <Link to="/ingredients">Ingredients</Link>
      </Button>
      <Button>
        <Link to="/recipes"> Recipes </Link>
      </Button>
    </div>
  );
};

export default SubHeader;
