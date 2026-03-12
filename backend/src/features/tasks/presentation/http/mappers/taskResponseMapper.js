function taskToResponse(task) {
  return {
    id: task.id,
    title: task.title,
    status: task.status.value,
  };
}

function tasksToResponse(tasks) {
  return tasks.map(taskToResponse);
}

module.exports = {
  taskToResponse,
  tasksToResponse,
};
