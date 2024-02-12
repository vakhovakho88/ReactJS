import React, { useState, useEffect } from "react";

import styled from "styled-components";

function Clock() {
  const StyledButton = styled.button`
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

  // Use useState to store the current time
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    // Set up a timer to update the current time every second
    const timerID = setInterval(() => tick(), 1000);

    // Specify how to clean up after this effect:
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    // Update the current time
    setTimer((timer) => timer + 1);
  };

  //console.log('timer', timer);

  return (
    <div>
      <StyledButton>Hello</StyledButton>
      <h2>Timer on: {timer}</h2>
    </div>
  );
}

export default Clock;
