import React from "react";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  input: {
    marginRight: "10px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "300px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    width: "250px",
    marginTop: "10px",
  },
  toggleableBox: {
    marginTop: "50px",
    width: '200px',
    height: '200px',
    margin: '0 auto',
    backgroundColor: '#1E90FF',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    padding: '20px',
    boxSizing: 'border-box',
  },
};

export default function ToggleableContentBox() {
  return (
    <div style={style.container}>
      <input style={style.input} type="text" placeholder="Enter your text" />
      <button style={style.button}>Toggle Display</button>
      <div style={style.toggleableBox}>hello</div>
    </div>
  );
}
