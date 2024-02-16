**Exercise: Counter Application with `useState` Hook**

Build a simple counter application in React that allows users to increment, decrement, and reset a numerical count. This exercise is designed to practice using the `useState` hook for state management within a functional component. Focus on handling user interactions to modify the state of the count accordingly.


# Correction:
Your Counter component is well-constructed and demonstrates a good understanding of the `useState` hook and event handling in React. Here are a few tips and observations to enhance your code and practices:

1. **Decrement Logic Adjustment:**
   Your current decrement function allows the counter to go below 0. While the exercise requirements were not explicit on this, it's a common practice to prevent a counter from going into negative values unless explicitly intended. Consider modifying the decrement function to prevent this:

   ```jsx
   const decrement = () => setCounter(counter > 0 ? counter - 1 : 0);
   ```

2. **Destructuring `useState` from React:**
   Since you're already importing `React`, you've correctly used `React.useState`. However, for cleaner code, you could destructure `useState` from the `React` import at the top of your file. This is more of a style preference and can make your component slightly more readable:

   ```jsx
   import React, { useState } from 'react';
   const [counter, setCounter] = useState(0);
   ```

3. **Inline Styles:**
   Your use of inline styles is clear and well-organized. As your project grows, you might consider using CSS modules or styled-components for styling. These approaches can help manage styles more efficiently, especially in larger applications. For small projects or components, inline styles are perfectly fine.

4. **Button Accessibility:**
   Your buttons are accessible as is, but consider adding an `aria-label` attribute to each button to improve accessibility further. This helps screen readers and other assistive technologies provide more context to users:

   ```jsx
   <button style={style.button} onClick={increment} aria-label="Increment counter">Increment</button>
   ```

5. **Performance Consideration:**
   For this simple case, your approach is fine. However, when updating state based on the previous state, it's a good practice to use the functional update form. This ensures you're working with the most current state value, especially important in cases where state updates may be asynchronous or batched:

   ```jsx
   const increment = () => setCounter(prevCounter => prevCounter + 1);
   ```

Your implementation demonstrates a solid grasp of React fundamentals. These suggestions are meant to refine your approach and consider practices that might be helpful as you work on more complex components or applications. Keep up the great work! 
