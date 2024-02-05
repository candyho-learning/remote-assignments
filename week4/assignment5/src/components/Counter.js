import React from "react";

export default function Counter({ count, onClick, index }) {
  return (
    <div className="counter-row">
      <button
        onClick={() => {
          onClick(index);
        }}
      >
        +1
      </button>
      <p>{count}</p>
    </div>
  );
}
