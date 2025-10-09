import React from "react";
import type { Question } from "../types/quiz";

interface QuestionScreenProps {
  question: Question;
}

const QuestionCard = ({ question }: QuestionScreenProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Question 1 of 5
      </h2>
    </div>
  );
};

export default QuestionCard;
