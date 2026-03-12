const SqliteTaskRepository = require("../../../features/tasks/infrastructure/repositories/SqliteTaskRepository");
const GetTasks = require("../../../features/tasks/application/use-cases/GetTasks");
const TaskController = require("../../../features/tasks/presentation/http/taskController");
const createTaskRoutes = require("../../../features/tasks/presentation/http/taskRoutes");

function registerRoutes(app, dependencies) {
  const { db } = dependencies;

  const taskRepository = new SqliteTaskRepository(db);
  const getTasks = new GetTasks(taskRepository);
  const taskController = new TaskController(getTasks);
  const taskRoutes = createTaskRoutes(taskController);

  app.use("/api/tasks", taskRoutes);
}

module.exports = registerRoutes;
