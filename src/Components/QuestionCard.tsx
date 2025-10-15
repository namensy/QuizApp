import React from "react";
import type { Question } from "../types/quiz";
import { CheckIcon } from "lucide-react";
import { QUESTIONS } from "../data/question";

interface QuestionScreenProps {
  question: Question;
  onSelectedAnswer: (index: number) => void;
  selectedAnswer: number;
}

const QuestionCard = ({
  question,
  onSelectedAnswer,
  selectedAnswer,
}: QuestionScreenProps) => {
  return (
    <div className="w-full p-6 space-y-6">
      <h2 className="text-2xl font-bold">Question 1 of 5</h2>
      <p className="text-gray-600 font-semibold">{question.question}</p>
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelectedAnswer(index)}
          type="button"
          className={`w-full text-left p-4 border rounded-md cursor-pointer font-semibold ${getButtonClass()}`}
        >
          <div className="flex items-center justify-between">
            <span>{option}</span>
            <CheckIcon />
          </div>
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
