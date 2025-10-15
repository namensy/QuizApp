import { useEffect, useState } from "react";
import Home from "./Components/Home";
import QuestionCard from "./Components/QuestionCard";
import GameOver from "./Components/GameOver";
import type { GameState } from "./types/quiz";
import { QUESTIONS } from "./data/question";
import Timer from "./Components/Timer";

function App() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timerLeft, setTimerLeft] = useState<number>(120);

  useEffect(() => {
    let timer: number;
    if (gameState === "playing" && timerLeft > 0) {
      timer = setInterval(() => {
        setTimerLeft((prev) => prev - 1);
      }, 1000);
    } else if (timerLeft === 0 && gameState === "playing") {
      setGameState("end");
    }

    return () => clearInterval(timer);
  }, [timerLeft, gameState]);

  function handleStart() {
    setGameState("playing");
    setTimerLeft(120);
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
  }

  function handleAnswer(index: number): void {
    setSelectedAnswer(index);
    const isCorrect = index === QUESTIONS[currentQuestion].correct;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

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
            <Timer timerLeft={timerLeft} />
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
        {gameState === "end" && (
          <GameOver onRestart={handleStart} score={score} />
        )}
      </div>
    </div>
  );
}

export default App;
