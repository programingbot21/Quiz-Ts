import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";


const QuizManagement: React.FC = () => {
  const [quizzes, setQuizzes] = useState([
    { id: 1, title: "JavaScript Basics" },
    { id: 2, title: "React Advanced" },
  ]);

  const [newQuiz, setNewQuiz] = useState("");

  const handleAddQuiz = () => {
    if (newQuiz) {
      setQuizzes([...quizzes, { id: quizzes.length + 1, title: newQuiz }]);
      setNewQuiz("");
    }
  };

  const handleDeleteQuiz = (id: number) => {
    setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 w-full">
        <h2 className="text-2xl font-bold mb-4">Quiz Management</h2>

        <input
          type="text"
          placeholder="Enter Quiz Title"
          value={newQuiz}
          onChange={(e) => setNewQuiz(e.target.value)}
          className="border p-2 rounded w-1/2"
        />
        <button onClick={handleAddQuiz} className="bg-green-600 text-white px-4 py-2 rounded ml-2">
          Add Quiz
        </button>

        <ul className="mt-4">
          {quizzes.map((quiz) => (
            <li key={quiz.id} className="flex justify-between p-2 border-b">
              {quiz.title}
              <button onClick={() => handleDeleteQuiz(quiz.id)} className="bg-red-600 text-white px-3 py-1 rounded">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizManagement;
