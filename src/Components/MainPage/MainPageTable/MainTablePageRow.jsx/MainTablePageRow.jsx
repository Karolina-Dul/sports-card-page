import React from "react";
import "./MainTablePageRow.css";

const MainTablePageRow = ({ name, card, status, id }) => {
  return (
    <div className="page-row">
      <div>{id}</div>
      <div>{name}</div>
      <div>{card}</div>
      <div style={{ color: `${status === "active" ? "green" : "red"}` }}>
        {status}
      </div>
    </div>
  );
};

export default MainTablePageRow;
