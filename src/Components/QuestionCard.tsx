import type { Question } from "../types/quiz";
import { CheckCircle, XCircle } from "lucide-react";

interface QuestionScreenProps {
  question: Question;
  onAnswerSelect: (index: number) => void;
  selectedAnswer: number | null;
  totalQuestions: number;
  currentQuestion: number;
}

const QuestionCard = ({
  question,
  onAnswerSelect,
  selectedAnswer,
  totalQuestions,
  currentQuestion,
}: QuestionScreenProps) => {
  const getButtonClass = (index: number): string => {
    if (selectedAnswer === null)
      return "bg-white border-gray-300 hover:bg-gray-200 cursor-pointer";
    if (selectedAnswer === index && index !== question.correct)
      return "bg-red-100 border-red-500";
    if (index === question.correct) return `bg-green-100 border-green-500 `;
    return "opacity-50";
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Question {currentQuestion + 1} of {totalQuestions}
      </h2>

      <p className="text-lg text-gray-700 mb-4">{question.question}</p>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            type="button"
            key={index}
            className={`w-full p-4 text-left border rounded-lg ${getButtonClass(
              index
            )} `}
            onClick={() => selectedAnswer === null && onAnswerSelect(index)}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {selectedAnswer !== null && index === question.correct && (
                <CheckCircle className="w-5 h-5 text-green-600" />
              )}
              {selectedAnswer === index && index !== question.correct && (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
