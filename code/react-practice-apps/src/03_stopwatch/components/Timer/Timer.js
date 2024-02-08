import React from "react";

import "./Timer.css";

const Timer = ({formattedTime}) => {
  
 
 
  return (
    <div className="timer">
      <time>{formattedTime}</time>
    </div>
  );
};

export default Timer;
