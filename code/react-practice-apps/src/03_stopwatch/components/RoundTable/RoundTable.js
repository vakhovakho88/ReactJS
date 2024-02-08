import React from "react";

import "./RoundTable.css";

//import components
import TableMainRow from "../TableMainRow/TableMainRow";
import TableRows from "../TableRows/TableRows";
import CustomButton from "../CustomButton/CustomButton";
const RoundTable = ({tableData, clearRoundTable}) => {
  return (
    <div className="container-round-table">
      <table className="round-table">
        <thead>
          <TableMainRow />
        </thead>
        <tbody>
          <TableRows  tableData={tableData}/>
        </tbody>
      </table>
      <CustomButton className={"clear-table-btn"} value={"Clear the table"} handleCustomAction={clearRoundTable}/>
    </div>
  );
};

export default RoundTable;
