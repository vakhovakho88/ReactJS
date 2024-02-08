import React from "react";

import "./TableRows.css";

import CustomButton from "../CustomButton/CustomButton";


const TableRow = ({tableData}) => {
  return (
    <>
     {tableData.map((data, index) => {
       const [startingTimeHours, startingTimeminutes, startingTimeSeconds] = data.startingTime.split(":").map(Number);
       const [endingTimeHours, endingTimeminutes, endingTimeSeconds] = data.endingTime.split(":").map(Number); 

       const diffSeconds = endingTimeHours*3600 + endingTimeminutes*60 + endingTimeSeconds - 
                              (startingTimeHours*3600 + startingTimeminutes*60 + startingTimeSeconds);

        const diffHours = Math.floor(diffSeconds/3600);
        const diffMinutes = Math.floor((diffSeconds%3600)/60);
        const diffSecondsLeft = diffSeconds%60;


        const diffTimeFormatted = `${diffHours.toString().padStart(2,"0")}:${diffMinutes.toString().padStart(2,"0")}:${diffSecondsLeft.toString().padStart(2,"0")}`;

        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.startingTime}</td>
            <td>{data.endingTime}</td>
            <td>{diffTimeFormatted}</td>
            <td><CustomButton className={'delete-button'} value={'X'}/></td>
          </tr>
        );
      })}
     
      </>

  );
};

export default TableRow;
