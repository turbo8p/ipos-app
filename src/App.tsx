import React from "react";
import "./App.css";
import NumpadWithScreen from "./Numpad/NumpadWithScreen";

function App() {
  const total = "25.5";
  return (
    <div className="App">
      <h1> Hello, World! </h1>
      <h2>Total: {total}</h2>
      <NumpadWithScreen exact={total} />
    </div>
  );
}

export default App;
