import React, { useState } from "react";

// Define styles outside the component to avoid re-creation on each render
const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  borderRadius: "30px",
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
  padding: "20px",
  margin: "auto",
};

const inputStyle = {
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
  width: "300px",
};

// Component name should be descriptive
export default function AuthForm() {
  // Hooks for managing username and password state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handlers for input changes
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log(`Username: ${username}, Password: ${password}`);
    // Clear form fields after submission
    setUsername("");
    setPassword("");
  };

  // Render the form with styles and handlers applied
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        placeholder="Username"
        style={inputStyle}
        onChange={handleUsernameChange}
        value={username}
      />
      <input
        type="password"
        placeholder="Password"
        style={inputStyle}
        onChange={handlePasswordChange}
        value={password}
      />
      <input type="submit" value="OK" style={{ ...inputStyle, cursor: 'pointer' }} />
    </form>
  );
}
