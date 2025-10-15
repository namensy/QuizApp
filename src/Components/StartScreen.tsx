import { Play } from "lucide-react";
import React from "react";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="w-full p-10 space-y-7 text-center">
      <h2 className="text-4xl font-bold ">Coding Quiz Game</h2>
      <p className="text-gray-800 ">Test your programming knowledge!</p>
      <button
        onClick={onStart}
        type="button"
        className="inline-flex items-center py-4 px-6 bg-blue-600 text-white rounded-lg cursor-pointer font-semibold text-lg"
      >
        <Play className="w-5 h-5 mr-2" />
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
