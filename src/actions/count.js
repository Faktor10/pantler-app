export const increment = (amount = 1) => {
  return {
    type: "INCREMENT",
    amount
  };
};

export const decrement = (amount = 1) => {
  return {
    type: "DECREMENT",
    amount
  };
};
