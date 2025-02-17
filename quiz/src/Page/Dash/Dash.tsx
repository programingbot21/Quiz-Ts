import React, { useState } from "react";
import Dash1 from "./Dash1";
// import Logot from "../Logout/Logot";

interface Quiz {
  id: number;
  question: string;
}

const Dashboard: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [newQuestion, setNewQuestion] = useState("");

  const addQuiz = () => {
    if (newQuestion.trim() === "") return;
    setQuizzes([...quizzes, { id: Date.now(), question: newQuestion }]);
    setNewQuestion("");
  };

  const deleteQuiz = (id: number) => {
    setQuizzes(quizzes.filter(quiz => quiz.id !== id));
  };

  return (
    <div className="p-6">
      {/* <Logot/> */}
      <Dash1/>
      {/* <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2> */}
      
      {/* Add Quiz */}
      <div className="mb-4">
        <input 
          type="text"
          placeholder="Enter quiz question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button onClick={addQuiz} className="bg-green-600 text-white px-4 py-2 rounded">
          Add Question
        </button>
      </div>

      {/* List of Questions */}
      {quizzes.map((quiz) => (
        <div key={quiz.id} className="bg-white p-4 rounded shadow mb-2 flex justify-between">
          <p>{quiz.question}</p>
          <button onClick={() => deleteQuiz(quiz.id)} className="bg-red-600 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
