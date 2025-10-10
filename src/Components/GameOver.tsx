import { Trophy } from "lucide-react";
import React from "react";

interface GameOverProps {
  onRestart: () => void;
}

const GameOver = ({ onRestart }: GameOverProps) => {
  return (
    <div className="p-8 text-center">
      <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Game over</h2>
      <p className="text-lg text-gray-600">Final Score: 2/5</p>
      <button
        type="button"
        onClick={onRestart}
        className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
