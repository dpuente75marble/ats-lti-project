import { useTasks } from "../hooks/useTasks";
import TaskList from "../components/TaskList";

function TasksPage() {
  const { tasks, loading, error } = useTasks();

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>ATS LTI Project</h1>
      <p>Frontend conectado con backend y base de datos.</p>

      <h2>Listado de tareas</h2>

      {loading && <p>Cargando tareas...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <TaskList tasks={tasks} />}
    </div>
  );
}

export default TasksPage;
