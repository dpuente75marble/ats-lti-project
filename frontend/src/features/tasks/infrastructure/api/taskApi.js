import { mapTasksFromApi } from "../mappers/taskMapper";
import { httpGet } from "../../../../shared/api/httpClient";

export async function fetchTasks() {
  const data = await httpGet("/api/tasks");
  return mapTasksFromApi(data);
}
