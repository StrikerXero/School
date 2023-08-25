import React from "react";

const Counter = ({ count, onDecrement, onIncrement, pressCount, onInputChanged, onInputChangeClick }) => {
  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
        <br />
        <div className="incrementCounter">
          <p>Times the increment/decrement buttons have been clicked: {pressCount}</p>
          <br />
          <div className="inputChange">
          <input type="number" onChange={(event) => onInputChanged(event.target.value)} />
            <span>
            <button onClick={onInputChangeClick}>Change Count Number</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
