import { Play } from "lucide-react";
import { useState } from "react";
import type { GameState } from "./types/quiz";
import QuestionCard from "./components/QuestionCard";
import StartScreen from "./components/StartScreen";
import { QUESTIONS } from "./data/question";
import GameOver from "./components/GameOver";

function App() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const handleStart = () => {
    setGameState("playing");
  };

  const handleAnswer = (index: number): void => {
    setSelectedAnswer(index);

    setTimeout(() => {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);

      if (currentQuestion === QUESTIONS.length - 1) {
        console.log("CurrentQuestion =>", currentQuestion);
        console.log("QuestionLength =>", QUESTIONS.length);
        setGameState("end");
      }
      
    }, 1000);
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow-xl rounded-xl items-center mt-10">
      {gameState === "start" && <StartScreen onStart={handleStart} />}
      {gameState === "playing" && (
        <QuestionCard
          question={QUESTIONS[currentQuestion]}
          onSelectedAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
          currentQuestion={currentQuestion}
        />
      )}
      {gameState === "end" && <GameOver />}
    </div>
  );
}

export default App;
