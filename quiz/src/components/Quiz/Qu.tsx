import React, { useEffect, useState } from "react";
import axios from "axios";

interface QuizQuestion {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const Quiz: React.FC = () => {
  const [quizzes, setQuizzes] = useState<QuizQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  // Fetch quiz data from API
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((response) => setQuizzes(response.data.results))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);

  // Handle answer selection
  const handleAnswerClick = (questionIndex: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  // Calculate Score
  const getScore = () => {
    return quizzes.filter((quiz, index) => selectedAnswers[index] === quiz.correct_answer).length;
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Quiz Questions</h2>

      {quizzes.map((quiz, index) => {
        // Shuffle answers (correct + incorrect)
        const answers = [...quiz.incorrect_answers, quiz.correct_answer].sort(() => Math.random() - 0.5);

        return (
          <div key={index} className="bg-white p-4 rounded shadow mb-4">
            <p className="font-semibold">{quiz.question}</p>

            {/* Display Answer Choices */}
            <div className="mt-2">
              {answers.map((answer, ansIndex) => {
                const isSelected = selectedAnswers[index] === answer;
                const isCorrect = answer === quiz.correct_answer;

                return (
                  <button
                    key={ansIndex}
                    className={`block w-full text-left p-2 border rounded mt-2
                      ${showResults && isSelected ? (isCorrect ? "bg-green-400" : "bg-red-400") : "bg-gray-100"}
                      hover:bg-gray-300 transition`}
                    onClick={() => handleAnswerClick(index, answer)}
                    disabled={showResults}
                  >
                    {answer}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Submit & Show Score */}
      {!showResults ? (
        <button
          onClick={() => setShowResults(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-4"
        >
          Submit Quiz
        </button>
      ) : (
        <p className="text-xl font-bold mt-4 text-center">
          Your Score: {getScore()} / {quizzes.length}
        </p>
      )}
    </div>
  );
};

export default Quiz;
