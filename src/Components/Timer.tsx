import { TimerIcon } from "lucide-react";
import React from "react";

interface TimerProps {
  timerLeft: number;
}

const Timer = ({ timerLeft }: TimerProps) => {
  return (
    <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-gray-700 mb-8">
      <TimerIcon className="w-6 h-6" />
      <span>{timerLeft}s</span>
    </div>
  );
};

export default Timer;
