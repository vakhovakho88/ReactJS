// Import React and useState hook from the React library
import React, { useState } from 'react';

// Counter component definition
export default function Counter() {
  // Styles object for CSS-in-JS styling approach
  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Use the full height of the viewport
      backgroundColor: '#f0f0f0', // Light grey background
    },
    counter: {
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333', // Dark grey text for better readability
    },
    button: {
      margin: '10px',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none', // Remove the default button border
      backgroundColor: '#007BFF', // Bootstrap primary blue
      color: '#fff', // White text color for contrast
      fontSize: '16px',
      cursor: 'pointer', // Cursor changes to pointer on hover for better UX
    },
  };

  // State hook for counter value, initialized to 0
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const increment = () => setCounter(prevCounter => prevCounter + 1);

  // Function to decrement the counter, ensuring it does not go below 0
  const decrement = () => setCounter(prevCounter => prevCounter > 0 ? prevCounter - 1 : 0);

  // Function to reset the counter to 0
  const reset = () => setCounter(0);

  // Render function returns JSX
  return (
    <div style={style.container}>
      {/* Display the current counter value */}
      <h1 style={style.counter}>{counter}</h1>
      {/* Buttons for incrementing, decrementing, and resetting the counter */}
      {/* Each button has an onClick event handler to update the counter accordingly */}
      <button style={style.button} onClick={increment} aria-label="Increment counter">Increment</button>
      <button style={style.button} onClick={decrement} aria-label="Decrement counter">Decrement</button>
      <button style={style.button} onClick={reset} aria-label="Reset counter">Reset</button>
    </div>
  );
}
