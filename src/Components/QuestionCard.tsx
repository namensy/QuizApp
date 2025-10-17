import type { Question } from "../types/quiz";
import { CheckCircle, XCircle } from "lucide-react";

interface QuestionScreenProps {
  question: Question;
  onSelectedAnswer: (index: number) => void;
  selectedAnswer: number | null;
  currentQuestion: number;
}

const QuestionCard = ({
  question,
  onSelectedAnswer,
  selectedAnswer,
  currentQuestion,
}: QuestionScreenProps) => {
  const getButtonClass = (index: number) => {
    if (selectedAnswer === index && index === question.correct)
      return "bg-green-500";
    if (selectedAnswer === index && selectedAnswer !== question.correct)
      return "bg-red-500";
    if (selectedAnswer === null) return "opacity-100";
    return "opacity-50";
  };

  return (
    <div className="w-full p-6 space-y-6">
      <h2 className="text-2xl font-bold">
        Question {currentQuestion + 1} of 5
      </h2>
      <p className="text-gray-600 font-semibold">{question.question}</p>
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => selectedAnswer === null && onSelectedAnswer(index)}
          type="button"
          className={`w-full text-left p-4 border rounded-md cursor-pointer font-semibold ${getButtonClass(
            index
          )}`}
        >
          <div className="flex items-center justify-between">
            <span>{option}</span>
            {selectedAnswer === index && index === question.correct && (
              <CheckCircle />
            )}
            {selectedAnswer === index && index !== question.correct && (
              <XCircle />
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
