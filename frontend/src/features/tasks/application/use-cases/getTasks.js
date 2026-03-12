import { fetchTasks } from "../../infrastructure/api/taskApi";

export async function getTasks() {
  return fetchTasks();
}
