import { Trophy } from "lucide-react";
import React from "react";

const GameOver = () => {
  return (
    <div className="w-full p-10 space-y-7 text-center">
      <h2 className="text-4xl font-bold "></h2>
      <div className="w-full">
        <Trophy className="w-6 h-6 text-center" />
        <span>Game Over</span>
      </div>
    </div>
  );
};

export default GameOver;
