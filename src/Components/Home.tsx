import { Play } from "lucide-react";
import React from "react";

interface StartScreenProps {
  onStart: () => void;
}

const Home = ({ onStart }: StartScreenProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-[50%] rounded-xl shadow-xl mx-auto mt-10 py-8 space-y-6">
      <h1 className="text-4xl font-bold">Coding Quiz Game</h1>
      <p>Test your programming knowledge!</p>
      <div className="bg-blue-600 px-4 py-2 rounded-md shadow-md cursor-pointer">
        <button
          type="button"
          className="inline-flex items-center text-white cursor-pointer "
        >
          <Play className="w-5 h-5 mr-2" />
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
