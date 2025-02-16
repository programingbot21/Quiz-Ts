import React, { useEffect, useState } from "react";
import axios from "axios";

interface Quiz {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const Home: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple")
      .then(response => setQuizzes(response.data.results))
      .catch(error => console.error("Error fetching quizzes", error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Quiz Questions</h2>
      {quizzes.map((quiz, index) => (
        <div key={index} className="bg-white p-4 rounded shadow mb-4">
          <p className="font-semibold">{quiz.question}</p>
        </div>
        
      ))}
    </div>
  );
};

export default Home;
