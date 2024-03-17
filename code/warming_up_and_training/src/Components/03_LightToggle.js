import React, { useState } from "react";

// LightToggle function component controls the light's on/off status
export default function LightToggle() {
  // useState hook to track the light status (true for on, false for off)
  const [lightOnStatus, setLightOnStatus] = useState(false);

  // Function to toggle the light status
  const toggleStatus = () => {
    setLightOnStatus((actualStatus) => !actualStatus);
  };

  // Styles are defined based on the lightOnStatus state
  // Container styles affect the layout and background color
  const containerStyle = {
    backgroundColor: lightOnStatus ? "white" : "black",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  // Heading styles adjust the color based on the light status for better visibility
  const headingStyle = {
    color: lightOnStatus ? "#00008B" : "#D3D3D3", // Dark blue or light gray
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    transition: "color 0.3s ease",
  };

  // Button styles change to indicate the current action (turn on/off)
  const buttonStyle = {
    backgroundColor: lightOnStatus ? "#00008B" : "#87CEEB", // Dark blue or sky blue
    color: lightOnStatus ? "white" : "black", // Text color for contrast
    padding: "15px 30px",
    border: "none",
    borderRadius: "50px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Light Toggle App</h1>
      <button onClick={toggleStatus} style={buttonStyle}>
        {lightOnStatus ? "Turn The Light Off" : "Turn The Light On"}
      </button>
    </div>
  );
}
