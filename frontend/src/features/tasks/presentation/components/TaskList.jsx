function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return <p>No hay tareas todavía.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} - {task.status}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
