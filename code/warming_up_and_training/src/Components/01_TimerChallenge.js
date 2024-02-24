import React, { useState, useRef } from 'react';

const TimerChallenge = ({ targetTime }) => {
  // State to track whether the timer has started
  const [timerStarted, setTimerStarted] = useState(false);

  // Ref to store the timer ID, allowing us to clear it later
  const timerRef = useRef(null);

  // Handler to start the timer
  const handleStart = () => {
    setTimerStarted(true); // Update state to indicate timer has started

    // Set a timer with setTimeout, storing its ID in the ref
    timerRef.current = setTimeout(() => {
      alert("Time's up!"); // Alert or any other logic when timer expires
      setTimerStarted(false); // Reset timer state
    }, targetTime * 1000); // Convert targetTime from seconds to milliseconds
  };

  // Handler to stop the timer
  const handleStop = () => {
    clearTimeout(timerRef.current); // Clear the timer using the stored ID from the ref
    setTimerStarted(false); // Update state to indicate timer has stopped
    alert('Timer stopped successfully.'); // Alert or any other logic after stopping the timer
  };

  return (
    <div>
      {/* Button text changes based on whether the timer has started */}
      <button onClick={timerStarted ? handleStop : handleStart}>
        {timerStarted ? 'Stop' : 'Start'} Challenge
      </button>
    </div>
  );
};

export default TimerChallenge;