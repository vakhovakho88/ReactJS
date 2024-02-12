# 1
**Git Reference: React Debugging**

Key Points:
1. Debugging is a crucial skill for React developers.
2. Understanding and handling error messages is essential.
3. Debugging not only includes error messages but also logical errors.
4. Browser developer tools and the browser debugger are useful for debugging.
5. React's Strict Mode can help identify potential issues.
6. React DevTools are essential for debugging React applications.

Example 1 - Error Messages:
- React error messages are crucial for pinpointing issues in your code.
- Example: If you forget to import a component, React might display a message like "ComponentName is not defined," helping you locate the problem.

Example 2 - Logical Errors:
- Logical errors don't always produce error messages but can still impact your app's behavior.
- Example: If a counter in your app increments by 2 instead of 1, this logical error won't trigger an error message but can be identified through debugging.

Example 3 - Browser Developer Tools:
- Using browser developer tools like the Chrome DevTools can help inspect your app's structure and diagnose issues.
- Example: You can inspect the component tree, view state changes, and identify issues in the console.

Example 4 - React Strict Mode:
- React's Strict Mode helps identify potential problems during development.
- Example: It can detect unsafe lifecycle methods and warn you about them, helping you write cleaner and safer code.

Example 5 - React DevTools:
- React DevTools is a browser extension for inspecting and profiling React components.
- Example: With React DevTools, you can examine component hierarchies, see component props and state, and even time performance of your app's rendering.



# 2

**Git Reference: React Error Debugging**

Key Points:
1. React error messages provide valuable information to identify and fix issues.
2. The main error message is often the starting point for debugging.
3. Error messages include a stack trace to pinpoint the source of the problem.
4. Stack traces provide information about the function, line, and column where the error occurred.
5. The example error message identifies an issue with an undefined value and an access problem.
6. By following the stack trace, you can locate the source of the error in your code.
7. In the example, a "results" array is empty due to a negative "duration" value.
8. A guard clause with an "if" check can prevent further execution when necessary.
9. Providing user-friendly error messages improves the user experience.

Example:
- Error Message: "Uncalled type error - Failed to read valueEndOfYear property on an undefined value."
- Stack Trace: Results component function (Line 8) is the source of the error.
- Debugging: The "results" array is empty due to a negative "duration." A guard clause prevents further execution and displays a user-friendly error message instead.


# 3
**Git Reference: Debugging Logical Errors in React**

Key Points:
1. Not all errors in your code produce error messages; logical errors can occur silently.
2. When encountering logical errors, start by thinking logically about which part of your code could be responsible.
3. Use browser developer tools like Chrome DevTools to inspect and debug your code.
4. You can place breakpoints in your code to pause execution at specific points.
5. When debugging, you can hover over variables to view their values at each step.
6. In the example, a logical error occurred when using a string value in mathematical calculations.
7. To fix the error, convert the string value to a number using the `+` operator.

Example:
- Logical Error: Calculations produce unexpected results without displaying error messages.
- Debugging Process: Placing a breakpoint in the code and inspecting variables revealed that the initial investment value was stored as a string. When used in calculations, it led to incorrect results. Adding a `+` before the variable converted it to a number, fixing the issue.

Note: The process involves logical reasoning and the use of developer tools to identify and fix errors that don't generate error messages.


Adding breakpoints in Chrome DevTools is a straightforward process. Follow these simple instructions:

1. **Open DevTools**: Press `F12` or `Ctrl + Shift + I` (Cmd + Option + I on Mac) to open Chrome DevTools. You can also right-click on your web page and select "Inspect."

2. **Navigate to the Source Tab**: In DevTools, click on the "Source" tab. This tab allows you to view and interact with your JavaScript code.

3. **Select the File**: In the left sidebar of the "Source" tab, find and select the JavaScript file you want to debug.

4. **Add a Breakpoint**: In the selected file, locate the line where you want to add a breakpoint. Click on the line number on the left-hand side of the code. A blue marker will appear, indicating the breakpoint.

5. **Run Your Code**: Reload your web page or perform the actions that trigger the JavaScript code you've set a breakpoint in.

6. **Pause at the Breakpoint**: When your code execution reaches the breakpoint, Chrome DevTools will pause execution, and you can inspect variables and step through your code using the controls provided.

7. **Inspect Variables**: While paused at a breakpoint, you can hover over variables to see their current values or use the DevTools console to interact with them.

8. **Resume Execution**: Continue executing your code by clicking the "Play" button or pressing `F8`. Your code will run until the next breakpoint or until completion.

By following these steps, you can effectively use breakpoints in Chrome DevTools to debug your JavaScript code.



# 4
**Git Reference: Using React StrictMode for Error Detection**

Key Points:
1. React's StrictMode is a feature to help catch and fix errors in your application.
2. StrictMode executes component functions twice during development.
3. It can be wrapped around the root component or specific parts of your application.
4. One of its key functions is identifying problems that might not be immediately apparent.
5. In the example, using StrictMode revealed a problem with the Results component causing an array to grow indefinitely.
6. Moving code inside the component function ensured that a new array is created upon each component execution.

Example:
- Using React StrictMode, any issues in your app, such as unintended side effects or data mutations, become immediately apparent. In the example, an array that should be reset with each component execution was growing uncontrollably, causing a table to expand. Moving the code inside the component function resolved the issue.


Certainly! Here's a simplified code example of using React StrictMode to detect and fix errors:

```jsx
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

// Results component
function Results() {
  const resultsArray = []; // This should be recreated on each component execution

  // ... Code that adds elements to resultsArray

  return (
    <div>
      {resultsArray.map((result, index) => (
        <div key={index}>{result}</div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Investment Calculator</h1>
      <Results />
    </div>
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
```

In this code:

- We have a `Results` component that maintains an array (`resultsArray`) to store results. However, the `resultsArray` should be recreated on each component execution to avoid accumulating data.

- By wrapping our `App` component in `StrictMode`, React will execute every component function twice during development.

- As a result, the error of the `resultsArray` growing uncontrollably will be immediately apparent because the `Results` component will start with twice the data.

- To fix the issue, move the `resultsArray` initialization inside the `Results` component, ensuring it's recreated with each component execution.


# 5
**Git Reference: Using React Developer Tools**

Key Points:
1. React Developer Tools is a browser extension to aid React development.
2. Install it by searching for "React devtools" and adding it to your browser.
3. It adds two tabs in your browser's developer tools: "Profiler" and "Components."
4. The "Components" tab displays your application's component tree, allowing you to inspect and edit components.
5. Hovering over a component highlights it in the UI, helping with complex component hierarchies.
6. You can control the appearance of the developer tools through settings.
7. Clicking on a component reveals its accepted props and state values, which can be edited to observe UI changes.

Example:
- React Developer Tools lets you inspect and edit component props and state. For instance, you can change the state value of a component using the extension and immediately see how it affects the UI. This tool is invaluable for component tree visualization and interactive debugging.

