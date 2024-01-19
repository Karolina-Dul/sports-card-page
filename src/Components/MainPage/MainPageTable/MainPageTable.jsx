import React from "react";
import "./MainPageTable.css";
import { WORKERS } from "../../../Storage/helpers";
import MainTablePageRow from "./MainTablePageRow.jsx/MainTablePageRow";

const MainPageTable = () => {
  return (
    <div className="main-page-table">
      <div className="table-headers">
        <div>L.p.</div>
        <div>Imię i nazwisko</div>
        <div>Typ karty</div>
        <div>Status karty </div>
      </div>
      {WORKERS.map((person) => (
        <>
          <MainTablePageRow
            id={person.id}
            name={person.name}
            card={person.card}
            status={person.cardStatus}
          />
        </>
      ))}
    </div>
  );
  // <div className="main-page-table">{WORKERS[0].cardNumber}</div>;
};

export default MainPageTable;
