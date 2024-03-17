## Definition
### "Username & Password" input form:

- Create two text input fields for username and password.
- Utilize `useState` for managing the inputs' state.
- Implement form submission handling, logging the input values to the console.
- Practice basic event handling in React.

This exercise is great for reinforcing key concepts such as state management and form handling in React applications.


**Detailed Takeaways from the AuthForm Component:**

- **useState Hook**: Manages local component state. `useState("")` initializes state for username and password, allowing for real-time updates within the form inputs.
  
  ```javascript
  const [userName, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  ```

- **Controlled Components**: The inputs for username and password are controlled by React state. Their values are tied to the component's state, making the form more manageable.

  ```javascript
  <input type="text" value={userName} onChange={onUsernameChange} />
  ```

- **Form Submission Handling**: Uses `event.preventDefault()` to stop the default form submission behavior, allowing for custom validation or submission logic.

  ```javascript
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`Username= ${userName} and the Password= ${pwd}`);
    // Reset form fields
    setUsername("");
    setPwd("");
  };
  ```

- **Inline Styling**: Demonstrates applying CSS directly in the component, showcasing a basic approach to styling individual elements within React.

  ```javascript
  <form style={formStyle}>...</form>
  ```

- **Resetting State**: Clears input fields after form submission, enhancing user experience by preparing the form for the next input immediately.

  ```javascript
  setUsername("");
  setPwd("");
  ```

These points highlight essential React concepts such as state management, event handling, and controlled components, illustrating how they work together in a form scenario.