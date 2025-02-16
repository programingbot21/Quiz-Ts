import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api";

export default function QuizForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await axios.post(`${API_URL}/quizzes`, { title, description });
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Create Quiz</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
