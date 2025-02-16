import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5000/api";

export default function Dashboard() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/quizzes`).then((res) => setQuizzes(res.data));
  }, []);

  return (
    <div>
      <h1>Quizzes</h1>
      <Link to="/quiz/new">Create Quiz</Link>
      {quizzes.map((quiz: any) => (
        <div key={quiz.id}>
          <h3>{quiz.title}</h3>
          <p>{quiz.description}</p>
          <Link to={`/quiz/edit/${quiz.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
}
