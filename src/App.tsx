import React from "react";
import "./App.css";
import Calculator from  './Calculator/Calculator';

function App () {
  return(
    <div className="App">
      <h1> Hello, World! </h1>
      <Calculator exact={'25.5'} />
    </div>
  );
}

export default App;