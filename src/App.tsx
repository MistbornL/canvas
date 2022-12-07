import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Canvas } from "./Canvas";

function App() {
  const drawArt = (context: CanvasRenderingContext2D) => {
    context.fillStyle = "cornflowerblue";
    context.fillRect(0, 0, 100, 120);
    context.strokeRect(100, 120, 50, 50);
  };

  const drawExampke = (context: CanvasRenderingContext2D) => {};
  return (
    <div className="App">
      <h1>example</h1>
      <Canvas width={window.innerWidth} height={400} draw={drawArt} />
      <h1>art</h1>
      <Canvas width={window.innerWidth} height={400} draw={drawArt} />
    </div>
  );
}

export default App;
