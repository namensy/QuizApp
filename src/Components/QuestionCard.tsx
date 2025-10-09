import React from "react";
import type { Question } from "../types/quiz";
import { CheckIcon } from "lucide-react";

interface QuestionScreenProps {
  question: Question;
  onAnswerSelect: (index: number) => void;
}

const QuestionCard = ({ question, onAnswerSelect }: QuestionScreenProps) => {
  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Question 1 of 5
      </h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="w-full p-4 text-left border rounded-lg"
            onClick={() => onAnswerSelect(index)}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              <CheckIcon />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
