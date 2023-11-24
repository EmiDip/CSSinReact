import { useState } from "react";
import { CardSass } from "./components/CardSass";
import { CardStyledC } from "./components/CardStyledC";
import { CardEmotion } from "./components/CardEmotion";
import "./App.css";

function App() {
  return (
    <div>
      <CardSass /> <CardStyledC /> <CardEmotion />
    </div>
  );
}

export default App;
