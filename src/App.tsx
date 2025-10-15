import { Play } from "lucide-react";
import { useState } from "react";
import type { GameState } from "./types/quiz";
import QuestionCard from "./components/QuestionCard";
import StartScreen from "./components/StartScreen";
import { QUESTIONS } from "./data/question";

function App() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleStart = () => {
    setGameState("playing");
  };

  const handleAnswer = (index: number): void => {
    console.log(index);
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow-xl rounded-xl items-center mt-10">
      {gameState === "start" && <StartScreen onStart={handleStart} />}
      {gameState === "playing" && (
        <QuestionCard question={QUESTIONS[0]} onSelectedAnswer={handleAnswer} />
      )}
    </div>
  );
}

export default App;
