import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

// Import custom components
import Timer from './components/Timer/Timer';
import TimerButtons from './components/TimerButtons/TimerButtons';
import RoundTable from './components/RoundTable/RoundTable';

const Stopwatch = () => {
  // State to store the elapsed time in seconds
  const [seconds, setSeconds] = useState(0);

  // State to indicate whether the timer is running
  const [timerIsRunning, setTimerIsRunning] = useState(false);

  // State to store rounds information
  const [rounds, setRounds] = useState([]);

  // State to store the last captured time for rounds
  const [capturedTime, setCapturedTime] = useState("00:00:00");

  // Effect to handle the timer functionality
  useEffect(() => {
    let interval = null;
    if (timerIsRunning) {
      // Start an interval to increment the seconds
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }

    // Cleanup interval on component unmount or when timer stops
    return () => clearInterval(interval);
  }, [timerIsRunning]); // Depend only on timerIsRunning

  // Function to start the timer
  const runTimer = () => setTimerIsRunning(true);

  // Function to pause the timer
  const pauseTimer = () => setTimerIsRunning(false);

  // Function to reset the timer
  const resetTimer = () => {
    pauseTimer(); // Pause the timer first
    setSeconds(0); // Reset seconds to 0
    clearRoundTable(); // Clear the rounds
  };

  const clearRoundTable = () => {
    setRounds([]);
  }

  // Function to add a new round
  const addRound = () => {
    const formattedTime = formatTime(seconds);
    if (capturedTime === formattedTime || !timerIsRunning) return;

    const newRound = {
      nr: rounds.length + 1,
      startingTime: capturedTime,
      endingTime: formattedTime
    };

    setRounds(prevRounds => [...prevRounds, newRound]);
    setCapturedTime(formattedTime); // Update captured time for the next round
  };

  // Helper function to format seconds into HH:MM:SS format
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;
  };

  // Format the current time for display
  const formattedTime = formatTime(seconds);

  return (
    <div className='stopwatch'>
      <h1>Stopwatch Component</h1>
      <Timer formattedTime={formattedTime} />
      <TimerButtons
        resetTimer={resetTimer}
        runTimer={runTimer}
        pauseTimer={pauseTimer}
        addRound={addRound}
      />
      <RoundTable tableData={rounds} clearRoundTable={clearRoundTable} />
    </div>
  );
};

export default Stopwatch;
