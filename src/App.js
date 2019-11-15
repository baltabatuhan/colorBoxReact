import React, { useState } from "react";

import "./App.css";

function App() {
  const [boxColor, setBoxColor] = useState("red-box");
  const changeColor = color =>
    setBoxColor(
      color === "red"
        ? "red-box"
        : color === "green"
        ? "green-box"
        : color === "blue"
        ? "blue"
        : null
    );

  return (
    <div className="App">
      <div className={boxColor}>
        <button onClick={() => changeColor("red")}>Red Box!</button>
        <button onClick={() => changeColor("green")}>Green Box!</button>
        <button onClick={() => changeColor("blue")}>Blue Box!</button>
      </div>
    </div>
  );
}

export default App;
