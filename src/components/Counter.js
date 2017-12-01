import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/count";

const Counter = ({ count, increment, decrement }) => {
  const val = 10;

  return (
    <div>
      <input type="number" />
      <div />
      <button onClick={() => increment(val)}>+</button>
      <div>{count}</div>
      <button onClick={() => decrement(val)}>-</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: amt => dispatch(increment(amt)),
    decrement: amt => dispatch(decrement(amt))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
