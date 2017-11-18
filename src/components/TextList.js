import React from "react";

const TextList = () => {
  const textList = ["some words", "some more words", "and some more"].map(w => {
    return <li> {w} </li>;
  });
  return (
    <div>
      <ul>{textList}</ul>
    </div>
  );
};

export default TextList;
