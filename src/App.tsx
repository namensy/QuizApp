import { useState } from "react";
import Home from "./Components/Home";
import QuestionCard from "./Components/QuestionCard";
import GameOver from "./Components/GameOver";
import { GameState } from "./types/quiz";

function App() {
  const [gameState, setGameState] = useState<GameState>("start");

  function handleStart() {
    setGameState("playing");
  }

  return (
    <>
      {gameState === "start" && <Home onStart={() => handleStart} />}
      {gameState === "playing" && <QuestionCard />}
      {gameState === "end" && <GameOver />}
    </>
  );
}

export default App;
