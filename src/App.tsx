import { useEffect, useState } from "react";
import Home from "./Components/Home";
import QuestionCard from "./Components/QuestionCard";
import GameOver from "./Components/GameOver";
import type { GameState } from "./types/quiz";
import { QUESTIONS } from "./data/question";

function App() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  function handleStart() {
    setGameState("playing");
  }

  function handleAnswer(index: number): void {
    setSelectedAnswer(index);
    const isCorrect = index === QUESTIONS[currentQuestion].correct;


    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setGameState("end");
      }
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-gray-50 font-semibold py-12 px-5 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {gameState === "start" && <Home onStart={handleStart} />}
        {gameState === "playing" && (
          <div className="p-8">
            <QuestionCard
              question={QUESTIONS[currentQuestion]}
              onAnswerSelect={handleAnswer}
              selectedAnswer={selectedAnswer}
              totalQuestions={QUESTIONS.length}
              currentQuestion={currentQuestion}
            />
            <div className="mt-6 text-center text-gray-600">
              Score: {score}/{QUESTIONS.length}
            </div>
          </div>
        )}
        {gameState === "end" && <GameOver onRestart={handleStart} />}
      </div>
    </div>
  );
}

export default App;
