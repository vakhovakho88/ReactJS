import React, { useState, useEffect } from 'react';
import './PomodoroTimer.css'; // Ensure you have a Timer.css file with appropriate styles

const PomodoroTimer = () => {
    const [timerIsRunning, setTimerIsRunning] = useState(false);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(10);
    

    const startStopTimer = () => {
        setTimerIsRunning(!timerIsRunning);
        alert(timerIsRunning ? 'Timer stopped successfully.' : 'Timer started successfully.');
    };
    const formatMinutesOrSeconds = (minutes) => {
        return minutes < 10 ? `0${minutes}` : minutes;
    };  


    const resetTimer = ()=>{
        setMinutes(55);
        setSeconds(20);
        setTimerIsRunning(false);
    }
    
  return (
    <div className="pomodoro-timer">
      <h1>Pomodoro Timer</h1>
        <div className="timer">{formatMinutesOrSeconds(minutes)}:{formatMinutesOrSeconds(seconds)}</div>
        <div className="control-buttons">
            <button className="button-start-stop" onClick={startStopTimer}>Start/Stop</button>
            <button className="button-reset" onClick={resetTimer}>Reset</button>
        </div>
    </div>
  );
};

export default PomodoroTimer;
