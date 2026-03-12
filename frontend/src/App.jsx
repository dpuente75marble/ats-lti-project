import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/tasks")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener las tareas");
        }
        return response.json();
      })
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>ATS LTI Project</h1>
      <p>Frontend conectado con backend y base de datos.</p>

      <h2>Listado de tareas</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!error && tasks.length === 0 && <p>No hay tareas todavía.</p>}

      {!error && tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} - {task.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
