import { mapTasksFromApi } from "../mappers/taskMapper";

const TASKS_API_URL = "http://localhost:3001/api/tasks";

export async function fetchTasks() {
  const response = await fetch(TASKS_API_URL);

  if (!response.ok) {
    throw new Error("Error al obtener las tareas");
  }

  const data = await response.json();
  return mapTasksFromApi(data);
}
