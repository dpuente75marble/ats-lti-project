import { Task } from "../../domain/models/task";

export function mapTaskFromApi(taskDto) {
  return new Task({
    id: taskDto.id,
    title: taskDto.title,
    status: taskDto.status,
  });
}

export function mapTasksFromApi(tasksDto) {
  return tasksDto.map(mapTaskFromApi);
}
