import React from 'react';
import './CustomButton.css';

const CustomButton = ({ className, value, handleCustomAction }) => {
  return (
    <button className={className} onClick={handleCustomAction}>
      {value}
    </button>
  );
};

export default CustomButton;