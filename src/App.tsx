import React from "react";
import "./App.css";
import Calculator from  './Calculator/Calculator';

function App () {
  const total = '25.5';
  return(
    <div className="App">
      <h1> Hello, World! </h1>
      <h2>Total: {total}</h2>
      <Calculator exact={total} />
    </div>
  );
}

export default App;