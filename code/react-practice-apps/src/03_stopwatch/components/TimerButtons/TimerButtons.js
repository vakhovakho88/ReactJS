import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

import './TimerButtons.css';

const TimerButtons = ({resetTimer, runTimer, pauseTimer, addRound}) => {
  // Add your component logic here

  return (
    // Add your JSX code here
    <div className='timer-buttons'>
      <CustomButton value="Start" className="timer-button" handleCustomAction={runTimer}/>
      <CustomButton value="Round" className="timer-button" handleCustomAction={addRound}/>
      <CustomButton value="Reset" className="timer-button" handleCustomAction = {resetTimer}/>
      <CustomButton value="Pause" className="timer-button" handleCustomAction={pauseTimer}/>
    </div>
  );
};


export default TimerButtons;
