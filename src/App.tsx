import { useState } from "react";
import Home from "./Components/Home";
import QuestionCard from "./Components/QuestionCard";
import GameOver from "./Components/GameOver";
import type { GameState } from "./types/quiz";
import { QUESTIONS } from "./data/question";

function App() {
  const [gameState, setGameState] = useState<GameState>("start");

  function handleStart() {
    setGameState("playing");
  }

  return (
    <div className="min-h-screen bg-gray-50 font-semibold py-12 px-5 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {gameState === "start" && <Home onStart={handleStart} />}
        {gameState === "playing" && <QuestionCard question={QUESTIONS[0]} />}
        {gameState === "end" && <GameOver />}
      </div>
    </div>
  );
}

export default App;
