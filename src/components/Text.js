import React from "react";
import TextList from "./TextList";

const Text = () => {
  return (
    <div>
      <h1> Some words </h1>
      <form>
        <input type="text" />
        <button>Add words </button>
      </form>
      <TextList />
    </div>
  );
};

export default Text;
